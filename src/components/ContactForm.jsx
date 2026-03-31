'use client';

import { useState } from 'react';
import { validateContactForm, hasErrors } from '@/utils/validators';
import Button from '@/components/Button';
import styles from '@/styles/ContactForm.module.css';

const initialForm = { fullName: '', email: '', mobile: '', message: '' };

/**
 * ContactForm — Reusable form used in Modal AND ContactSection
 * Props:
 *  - onSuccess {fn} optional callback after successful submit
 */
export default function ContactForm({ onSuccess, source = 'contact_section' }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile' && !/^[0-9+\-\s]*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateContactForm({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    const formErrors = validateContactForm(formData);
    if (hasErrors(formErrors)) { setErrors(formErrors); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData(initialForm);
        setErrors({});
        onSuccess?.();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fields = [
    { name: 'fullName', type: 'text',  placeholder: 'Full name' },
    { name: 'email',    type: 'email', placeholder: 'E-mail address' },
    { name: 'mobile',   type: 'tel',   placeholder: 'Mobile number', maxLength: 15 },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      {fields.map(({ name, type, placeholder, maxLength }) => (
        <div key={name} className={styles.fieldGroup}>
          <input
            className={`${styles.input} ${errors[name] ? styles.inputError : ''}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={maxLength}
          />
          {errors[name] && <span className={styles.fieldError}>{errors[name]}</span>}
        </div>
      ))}

      {/* Message textarea */}
      <div className={styles.fieldGroup}>
        <textarea
          className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
        />
        {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
      </div>

      <Button
        type="submit"
        variant="solid"
        size="md"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}
      </Button>

      {status === 'success' && (
        <p className={styles.successMsg}>✓ Thank you! We'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
      )}

    </form>
  );
}