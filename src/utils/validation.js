/**
 * Client-side input validation and sanitization utilities
 * Designed for production safety and accessibility compliance.
 */

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email address is required';
  }
  // RFC 5322 compatible regex check
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address (e.g. name@example.com)';
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return 'Phone number is required';
  }
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^[+]?[0-9]{10,15}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return 'Please enter a valid phone number (at least 10 digits)';
  }
  return null;
};

export const validateRequired = (value, fieldLabel = 'This field') => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldLabel} is required`;
  }
  return null;
};

export const validateMinLength = (value, minLength, fieldLabel = 'This field') => {
  if (!value || value.trim().length < minLength) {
    return `${fieldLabel} must be at least ${minLength} characters`;
  }
  return null;
};

/**
 * Strips script tags and dangerous HTML characters to avoid XSS injections
 */
export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // remove HTML tag brackets
    .trim();
};
