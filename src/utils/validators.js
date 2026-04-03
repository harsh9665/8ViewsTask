// ─────────────────────────────────────────
//  Reusable field validators
//  Returns null if valid, error string if invalid
// ─────────────────────────────────────────

export const validators = {
  fullName: (value) => {
    if (!value || value.trim() === '') return 'Full name is required';
    if (value.trim().length < 2) return 'Name must be at least 2 characters';
    if (value.trim().length > 100) return 'Name must be under 100 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name can only contain letters';
    return null;
  },

  email: (value) => {
    if (!value || value.trim() === '') return 'Email address is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
    return null;
  },

  mobile: (value) => {
    if (!value || value.trim() === '') return 'Mobile number is required';
    const digits = value.replace(/[\s\-\+]/g, '');
    if (!/^[0-9]{10}$/.test(digits)) return 'Enter a valid 10-digit mobile number';
    return null;
  },

  message: (value) => {
    if (!value || value.trim() === '') return 'Message is required';
    if (value && value.length > 1000) return 'Message must be under 1000 characters';
    return null;
  },
};

export function validateContactForm(formData) {
  const errors = {};
  const nameError    = validators.fullName(formData.fullName);
  const emailError   = validators.email(formData.email);
  const mobileError  = validators.mobile(formData.mobile);
  const messageError = validators.message(formData.message);
  if (nameError)    errors.fullName = nameError;
  if (emailError)   errors.email    = emailError;
  if (mobileError)  errors.mobile   = mobileError;
  if (messageError) errors.message  = messageError;
  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
