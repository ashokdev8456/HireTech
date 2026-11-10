import { motion } from 'framer-motion';
import { Code2, Building2, Headphones, ArrowRight } from 'lucide-react';

const ServiceEnquiry = ({ onSelectService }) => {
  const enquiryOptions = [
    {
      serviceKey: 'Work Support',
      title: 'Work Support',
      description: 'Need technical assistance with React.js, Python, Java, or other technologies?',
      buttonText: 'Enquire Now',
      icon: Code2,
      color: 'from-blue-600 to-indigo-600',
      badge: 'Technical Support',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      serviceKey: 'MNC Training & Placements',
      title: 'MNC Training & Placements',
      description: 'Looking for IT or Non-IT job opportunities in multinational companies?',
      buttonText: 'Explore MNC Opportunities',
      icon: Building2,
      color: 'from-indigo-600 to-purple-600',
      badge: 'Corporate Careers',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      serviceKey: 'Non-MNC Training & Placements',
      title: 'Non-MNC Training & Placements',
      description: 'Interested in Data Entry, Telecalling, Email Support, or Chat Support jobs?',
      buttonText: 'Find Job Opportunities',
      icon: Headphones,
      color: 'from-cyan-600 to-blue-700',
      badge: 'Entry-Level Jobs',
      badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    },
  ];

  const handleCardClick = (serviceKey) => {
    if (onSelectService) {
      onSelectService(serviceKey);
    }
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2.5">
            Quick Enquiries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2.5">
            How Can We Help You?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Choose your area of interest below to pre-select our contact form and receive specialized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enquiryOptions.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.serviceKey}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md shadow-blue-200/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <IconComp size={24} aria-hidden="true" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCardClick(item.serviceKey)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceEnquiry;
