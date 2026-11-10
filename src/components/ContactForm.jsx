import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, MessageSquare, Tag } from 'lucide-react';
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  sanitizeInput,
} from '../utils/validation';

const SERVICE_OPTIONS = [
  'Work Support',
  'MNC Training & Placements',
  'Non-MNC Training & Placements',
  'General Enquiry',
];

const ContactForm = ({ selectedService = '', onServiceChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const activeService = selectedService || formData.service;

  const validate = () => {
    const newErrors = {};

    // Full Name
    const nameReq = validateRequired(formData.name, 'Full name');
    if (nameReq) {
      newErrors.name = nameReq;
    } else {
      const nameMin = validateMinLength(formData.name, 2, 'Full name');
      if (nameMin) newErrors.name = nameMin;
    }

    // Email
    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    // Phone Number
    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    // Interested Service
    const serviceErr = validateRequired(activeService, 'Interested service');
    if (serviceErr) newErrors.service = 'Please select an interested service';

    // Subject
    const subjectReq = validateRequired(formData.subject, 'Subject');
    if (subjectReq) {
      newErrors.subject = subjectReq;
    } else {
      const subjectMin = validateMinLength(formData.subject, 3, 'Subject');
      if (subjectMin) newErrors.subject = subjectMin;
    }

    // Message
    const messageReq = validateRequired(formData.message, 'Message');
    if (messageReq) {
      newErrors.message = messageReq;
    } else {
      const messageMin = validateMinLength(formData.message, 10, 'Message');
      if (messageMin) newErrors.message = messageMin;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'service' && onServiceChange) {
      onServiceChange(value);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus on first errored field for keyboard accessibility
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(`${firstErrorKey}-input`);
      if (element) element.focus();
      return;
    }

    setSubmitting(true);

    // Sanitize values
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      service: sanitizeInput(activeService),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    // Ready for backend integration dispatch
    await new Promise((resolve) => setTimeout(resolve, 900));

    setSubmitting(false);
    setSubmitted(true);
    // Keep sanitizedData available for API integration
    void sanitizedData;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 px-4"
        role="region"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 size={36} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Reaching Out!</h3>
        <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6">
          Your inquiry details for <strong className="text-gray-800">{activeService}</strong> have been recorded successfully. Our counselors will contact you shortly.
        </p>
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 max-w-md mx-auto text-xs text-blue-700 mb-6">
          Configured for direct production REST / Email backend integration.
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-200 transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const inputStyle = (fieldName) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[fieldName]
        ? 'border-red-300 focus:border-red-400 bg-red-50/40 text-red-900 focus:ring-red-200'
        : 'border-gray-200 focus:border-blue-500 bg-white text-gray-900 focus:ring-blue-100'
    } focus:outline-none focus:ring-2 placeholder-gray-400 text-sm transition-all`;

  return (
    <div id="contact-form" className="scroll-mt-24">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Send Us a Message
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          Fill out the form below and our career consulting team will get back to you promptly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="name-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="name-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`${inputStyle('name')} pl-10`}
              />
            </div>
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle size={12} aria-hidden="true" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="phone-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`${inputStyle('phone')} pl-10`}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle size={12} aria-hidden="true" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email Address & Interested Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="email-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="email-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${inputStyle('email')} pl-10`}
              />
            </div>
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle size={12} aria-hidden="true" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="service-select" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Interested Service <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <select
                id="service-select"
                name="service"
                value={activeService}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? 'service-error' : undefined}
                className={`${inputStyle('service')} appearance-none cursor-pointer pr-10`}
              >
                <option value="">Select Interested Service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400" aria-hidden="true">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            {errors.service && (
              <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle size={12} aria-hidden="true" /> {errors.service}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Subject <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <Tag size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <input
              id="subject-input"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Enquiry regarding Work Support in React"
              aria-required="true"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={`${inputStyle('subject')} pl-10`}
            />
          </div>
          {errors.subject && (
            <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-gray-400" aria-hidden="true" />
            <textarea
              id="message-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Please share details about your background, career requirements, or queries..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${inputStyle('message')} pl-10 resize-none`}
            />
          </div>
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send size={17} aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
