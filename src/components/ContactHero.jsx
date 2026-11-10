import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  MessageCircle,
  User,
  Briefcase,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { validateEmail, validatePhone, validateRequired, validateMinLength } from '../utils/validation';

const WHATSAPP_NUMBER = '919347557729';

const SERVICE_OPTIONS = [
  'Work Support (React, Java, Python, SQL)',
  'MNC Training & Placements (IT & Non-IT)',
  'Non-MNC Placements (Support, Admin, Data Entry)',
  'General Career Consultation',
];

const getInitialServiceOption = (service) => {
  if (service) {
    const match = SERVICE_OPTIONS.find((s) =>
      s.toLowerCase().includes(service.toLowerCase())
    );
    if (match) return match;
  }
  return 'Work Support (React, Java, Python, SQL)';
};

const ContactHero = ({ selectedService }) => {
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    service: getInitialServiceOption(selectedService),
    message: '',
  }));

  const [prevSelectedService, setPrevSelectedService] = useState(selectedService);
  if (selectedService !== prevSelectedService) {
    setPrevSelectedService(selectedService);
    const match = SERVICE_OPTIONS.find((s) =>
      s.toLowerCase().includes((selectedService || '').toLowerCase())
    );
    if (match) {
      setFormData((prev) => ({ ...prev, service: match }));
    }
  }

  const [errors, setErrors] = useState({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  const validate = () => {
    const newErrors = {};

    const nameReq = validateRequired(formData.name, 'Full name');
    if (nameReq) {
      newErrors.name = nameReq;
    } else {
      const nameMin = validateMinLength(formData.name, 2, 'Full name');
      if (nameMin) newErrors.name = nameMin;
    }

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsRedirecting(true);

    // Format clean professional WhatsApp message
    const whatsappText = [
      '👋 *New Enquiry from HireTech Website*',
      '━━━━━━━━━━━━━━━━━━━━',
      `👤 *Full Name:* ${formData.name.trim()}`,
      `📱 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      `📧 *Email:* ${formData.email.trim()}`,
      `💼 *Interested Track:* ${formData.service}`,
      formData.message.trim() ? `📝 *Requirements:* ${formData.message.trim()}` : '📝 *Requirements:* Seeking consultation & course details.',
      '━━━━━━━━━━━━━━━━━━━━',
      '📍 *Destination:* HireTech Support Desk (+91 9347557729)',
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

    // Open WhatsApp in new tab / app
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Work Support (React, Java, Python, SQL)',
        message: '',
      });
    }, 600);
  };

  return (
    <section
      id="contact-form"
      className="relative pt-20 sm:pt-22 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-gradient-to-b from-blue-50/70 via-indigo-50/20 to-white border-b border-gray-100 min-h-[calc(100vh-64px)] flex flex-col justify-center"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-8 right-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Context & Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 text-left flex flex-col justify-center"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-3.5 shadow-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct WhatsApp & Career Advisory Desk</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 tracking-tight leading-[1.16] mb-2 sm:mb-2.5">
              Get in Touch With <span className="text-gradient">HireTech</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-bold text-blue-700 mb-2.5 sm:mb-3 leading-snug">
              Let's Build & Accelerate Your Career Together!
            </p>

            {/* Description */}
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-5 max-w-xl">
              Have questions about our training programs, live technical work support, or placement drives? Connect with our senior engineering mentors and career advisors directly on WhatsApp for real-time guidance.
            </p>

            {/* Direct Contact Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 sm:mb-5">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/919347557729"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-500 font-medium leading-none mb-1">WhatsApp Direct</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors truncate">
                      +91 9347557729
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  Chat Instantly →
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@hiretech.com"
                className="p-3 sm:p-3.5 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-500 font-medium leading-none mb-1">Official Email</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors truncate">
                      info@hiretech.com
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-blue-600 font-semibold flex items-center gap-1">
                  Write Email →
                </span>
              </a>

              {/* Location */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-indigo-100 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-500 font-medium leading-none mb-1">Campus Location</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                      Hyderabad, India
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-indigo-600 font-semibold">
                  Telangana Campus
                </span>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-2.5 text-xs text-gray-700">
              {[
                { title: '1-on-1 Work Support', desc: 'React, Java, Python & SQL live project guidance', icon: Zap },
                { title: 'MNC Placement Drives', desc: 'Direct corporate interview slots with hiring partners', icon: Briefcase },
                { title: 'Free ATS Resume Review', desc: 'Keyword optimization and simulated mock interviews', icon: ShieldCheck },
                { title: 'Fast WhatsApp Response', desc: 'Senior advisors reply typically in < 15 minutes', icon: Clock },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/90 border border-gray-100 shadow-xs">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent size={13} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-gray-900 block leading-tight text-xs sm:text-sm truncate">{item.title}</span>
                      <span className="text-[11px] text-gray-500 leading-snug line-clamp-1">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Direct WhatsApp Contact Us Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 w-full flex flex-col justify-center"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-6.5 shadow-xl shadow-blue-900/5 border border-gray-100 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-200">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">Send Us a Message</h2>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Active Desk
                </span>
              </div>

              {/* Feedback Alert during redirect */}
              <AnimatePresence>
                {isRedirecting && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-2.5 mb-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-semibold text-emerald-800"
                  >
                    <Sparkles size={14} className="text-emerald-600 animate-spin" />
                    <span>Launching WhatsApp (+91 9347557729)...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                {/* Row 1: Full Name & Phone Number side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="hero-name" className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        id="hero-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-8.5 pr-3 py-2 text-xs sm:text-sm rounded-xl border bg-gray-50/50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-300 focus:ring-red-400 bg-red-50/30'
                            : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="hero-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
                      <input
                        type="tel"
                        id="hero-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9347557729"
                        className={`w-full pl-8.5 pr-3 py-2 text-xs sm:text-sm rounded-xl border bg-gray-50/50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-400 bg-red-50/30'
                            : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email Address */}
                <div>
                  <label htmlFor="hero-email" className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full pl-8.5 pr-3 py-2 text-xs sm:text-sm rounded-xl border bg-gray-50/50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-400 bg-red-50/30'
                          : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Row 3: Interested Service */}
                <div>
                  <label htmlFor="hero-service" className="block text-xs font-semibold text-gray-700 mb-1">
                    Interested Service
                  </label>
                  <div className="relative">
                    <Briefcase size={14} className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
                    <select
                      id="hero-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-8.5 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-100 text-gray-800"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Message / Requirements */}
                <div>
                  <label htmlFor="hero-message" className="block text-xs font-semibold text-gray-700 mb-1">
                    Message / Learning Goals <span className="text-gray-400 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="hero-message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your learning goals or work support needs..."
                    className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-100 text-gray-800 resize-none"
                  />
                </div>

                {/* WhatsApp Submit Action Button */}
                <button
                  type="submit"
                  disabled={isRedirecting}
                  className="w-full py-2.5 sm:py-3 px-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 mt-1"
                >
                  <MessageCircle size={16} />
                  <span>Send Message via WhatsApp</span>
                  <Send size={13} className="ml-0.5" />
                </button>
              </form>

              {/* Secure & Privacy Note */}
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-emerald-600" /> Mon – Sat: 9:00 AM – 6:00 PM
                </span>
                <span className="font-semibold text-emerald-700">Official Line: 9347557729</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
