'use client';

import { useState } from 'react';
import Button from '@/components/Button';
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
    maxLength: 15,
  },
];

export default function ContactForm({ onSuccess, source = 'contact_section' }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'mobile' && !/^[0-9+\-\s]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const fieldErrors = validateContactForm({ ...formData, [name]: value });

    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || null }));
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

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
        {fields.map(({ name, type, placeholder, maxLength }) => (
          <div key={name} className={styles.fieldGroup}>
            <input
              className={[
                styles.input,
                errors[name] ? styles.inputError : '',
              ]
                .filter(Boolean)
                .join(' ')}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={maxLength}
            />

            {errors[name] && (
              <span className={styles.fieldError}>{errors[name]}</span>
            )}
          </div>
        ))}

        <div className={styles.fieldGroup}>
          <textarea
            className={[
              styles.input,
              styles.textarea,
              errors.message ? styles.inputError : '',
            ]
              .filter(Boolean)
              .join(' ')}
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
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
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}
      </Button>

      {status === 'success' && (
        <p className={styles.successMsg}>Thank you! We&apos;ll be in touch soon.</p>
      )}

      {status === 'error' && (
        <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
