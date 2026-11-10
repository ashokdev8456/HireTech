import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SITE_METADATA } from '../utils/constants';

const ContactInfo = () => {
  const cards = [
    {
      title: 'Email Us',
      value: SITE_METADATA.emailPlaceholder,
      subtext: 'Online support & student queries',
      icon: Mail,
      href: `mailto:${SITE_METADATA.emailPlaceholder}`,
      color: 'bg-blue-50 text-blue-600',
      actionText: 'Send Email',
    },
    {
      title: 'Call Us',
      value: SITE_METADATA.phonePlaceholder,
      subtext: 'Direct telephonic consultation',
      icon: Phone,
      href: 'tel:+919347557729',
      color: 'bg-indigo-50 text-indigo-600',
      actionText: 'Call Now',
    },
    {
      title: 'Visit Us',
      value: SITE_METADATA.location,
      subtext: 'Headquarters & Training Campus',
      icon: MapPin,
      href: '#map-section',
      color: 'bg-cyan-50 text-cyan-600',
      actionText: 'View on Map',
    },
    {
      title: 'Working Hours',
      value: SITE_METADATA.workingHours,
      subtext: 'Sunday: Closed for maintenance',
      icon: Clock,
      href: '#contact-form',
      color: 'bg-emerald-50 text-emerald-600',
      actionText: 'Book a Slot',
    },
  ];

  return (
    <section className="py-4 sm:py-5 lg:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                    <IconComp size={22} aria-hidden="true" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1 block">
                    {card.title}
                  </span>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1 leading-snug">
                    {card.value}
                  </h3>

                  <p className="text-xs text-gray-500 mb-4">
                    {card.subtext}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={card.href}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    <span>{card.actionText}</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
