'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { useOverlay } from '@/context/OverlayContext';
import { classNames } from '@/utils/classNames';
import { hasErrors, validateContactForm } from '@/utils/validators';
import styles from '@/styles/ContactForm.module.css';

const initialForm = {
  fullName: '',
  email: '',
  mobile: '',
  message: '',
};

const fields = [
  { name: 'fullName', type: 'text', placeholder: 'Full name' },
  { name: 'email', type: 'email', placeholder: 'E-mail address' },
  {
    name: 'mobile',
    type: 'tel',
    placeholder: 'Mobile number',
    maxLength: 10,
    inputMode: 'numeric',
    pattern: '[0-9]*',
  },
];

const submitDelayMs = 4000;

const getOverlayConfig = (result) =>
  result.status === 'duplicate'
    ? {
        heading: "You're already in our system",
        message:
          result.message ||
          'We already have your enquiry. Our team will get back to you shortly.',
      }
    : {
        heading: 'Thank you',
        message:
          "We've received your enquiry. Our team will contact you shortly.",
      };

export default function ContactForm({ onSuccess, source = 'contact_section' }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const { showOverlay } = useOverlay();
  const isSubmitting = status === 'loading';

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateField = (name, value) => {
    const fieldErrors = validateContactForm({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || null }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'mobile' && !/^[0-9]*$/.test(value)) return;
    updateField(name, value);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');

    const formErrors = validateContactForm(formData);
    if (hasErrors(formErrors)) {
      setErrors(formErrors);
      return;
    }

    setStatus('loading');

    try {
      const [response] = await Promise.all([
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, source }),
        }),
        new Promise((resolve) => setTimeout(resolve, submitDelayMs)),
      ]);

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus('error');
        return;
      }

      showOverlay(getOverlayConfig(result));
      setStatus('success');
      setFormData(initialForm);
      setErrors({});
      onSuccess?.();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldsStack}>
        {fields.map(({ name, type, placeholder, maxLength, inputMode, pattern }) => (
          <div key={name} className={styles.fieldGroup}>
            <input
              className={classNames(
                styles.input,
                errors[name] && styles.inputError
              )}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={maxLength}
              inputMode={inputMode}
              pattern={pattern}
              disabled={isSubmitting}
            />

            {errors[name] && (
              <span className={styles.fieldError}>{errors[name]}</span>
            )}
          </div>
        ))}

        <div className={styles.fieldGroup}>
          <textarea
            className={classNames(
              styles.input,
              styles.textarea,
              errors.message && styles.inputError
            )}
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            disabled={isSubmitting}
          />

          {errors.message && (
            <span className={styles.fieldError}>{errors.message}</span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="solid"
        size="md"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className={styles.loadingContent}>
            <span className={styles.spinner} aria-hidden="true" />
            SUBMITTING...
          </span>
        ) : (
          'SUBMIT'
        )}
      </Button>

      {status === 'error' && (
        <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
