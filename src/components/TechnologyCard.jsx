import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnologyCard = ({
  name,
  icon,
  description,
  color = 'bg-blue-100 text-blue-700',
  delay = 0,
  showButton = false,
  buttonText = 'Get Support',
  to = '/contact',
}) => {
  // Rich mode (has description or showButton)
  if (description || showButton) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay }}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80 transition-all duration-300 flex flex-col h-full justify-between"
      >
        <div>
          {/* Top icon and tag */}
          <div className="flex items-center justify-between mb-3.5">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${color}`}>
              {icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 group-hover:bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-100 transition-colors">
              Support
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 group-hover:shadow-md group-hover:shadow-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <span>{buttonText}</span>
          <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
        </Link>
      </motion.div>
    );
  }

  // Basic mode
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-200 cursor-default"
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 ${color}`}>
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center group-hover:text-blue-700 transition-colors">{name}</span>
    </motion.div>
  );
};

export default TechnologyCard;
