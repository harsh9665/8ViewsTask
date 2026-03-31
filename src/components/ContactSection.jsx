'use client';

import { useState } from 'react';
import { validateContactForm, hasErrors } from '@/utils/validators';
import styles from '@/styles/ContactSection.module.css';

const initialForm = { fullName: '', email: '', mobile: '', message: '' };

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState(''); // 'loading' | 'success' | 'error' | ''

  // Clear error on change + block non-numeric on mobile field
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile' && !/^[0-9+\-\s]*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // Validate single field on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateContactForm({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    // Validate all fields before submitting
    const formErrors = validateContactForm(formData);
    if (hasErrors(formErrors)) {
      setErrors(formErrors);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData(initialForm);
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        {/* Left — Heading */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Let's Build Your Dream Space Together!
          </h2>
        </div>

        {/* Right — Form */}
        <div className={styles.rightCol}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* Full Name */}
            <div className={styles.fieldGroup}>
              <input
                className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && <span className={styles.fieldError}>{errors.fullName}</span>}
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
              <input
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                type="email"
                name="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
            </div>

            {/* Mobile */}
            <div className={styles.fieldGroup}>
              <input
                className={`${styles.input} ${errors.mobile ? styles.inputError : ''}`}
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={15}
              />
              {errors.mobile && <span className={styles.fieldError}>{errors.mobile}</span>}
            </div>

            {/* Message */}
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

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>✓ Thank you! We'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}