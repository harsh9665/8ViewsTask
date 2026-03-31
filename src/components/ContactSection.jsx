'use client';

import { useState } from 'react';
import styles from '@/styles/ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', mobile: '', message: '' });
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

            <input
              className={styles.input}
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className={styles.input}
              type="tel"
              name="mobile"
              placeholder="Mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />

            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>
                Thank you! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}