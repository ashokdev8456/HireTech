import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Info, Check } from 'lucide-react';

// WhatsApp Configuration with company verified number
const WHATSAPP_CONFIG = {
  phoneNumber: '919347557729', // HireTech verified WhatsApp line
  isEnabled: true,
  defaultMessage: 'Hello HireTech! I would like to enquire about your training programs, technical work support, and placement opportunities.',
};

const WhatsAppCTA = () => {
  const [showNotice, setShowNotice] = useState(false);

  const handleClick = (e) => {
    if (!WHATSAPP_CONFIG.isEnabled || !WHATSAPP_CONFIG.phoneNumber) {
      e.preventDefault();
      setShowNotice(true);
    }
  };

  const whatsappUrl = WHATSAPP_CONFIG.isEnabled && WHATSAPP_CONFIG.phoneNumber
    ? `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`
    : '#';

  return (
    <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 text-white shadow-xl shadow-emerald-900/10">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-2 backdrop-blur-sm">
                <MessageCircle size={13} /> Instant Messaging
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1.5">
                Need Quick Assistance?
              </h2>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-xl leading-relaxed">
                Connect with our team for quick enquiries about training, technical support, and placement opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                onClick={handleClick}
                target={WHATSAPP_CONFIG.isEnabled ? '_blank' : '_self'}
                rel={WHATSAPP_CONFIG.isEnabled ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Graceful Placeholder Notification when WhatsApp number is not yet linked */}
          {showNotice && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-xs text-white flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-2">
                <Info size={16} className="text-emerald-200 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">WhatsApp channel is currently in placeholder mode.</strong>
                  <p className="text-emerald-100 text-[11px] mt-0.5">
                    Our verified company WhatsApp number will be activated soon. In the meantime, please use our contact form above or reach us directly at info@hiretech.com.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowNotice(false)}
                className="text-white hover:text-emerald-200 text-xs font-bold px-2 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Check size={13} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
