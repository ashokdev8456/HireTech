import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, features, color, delay = 0, path = '/services' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200/80 transition-all duration-300 overflow-hidden flex flex-col h-full justify-between"
    >
      <div>
        {/* Top Accent Strip */}
        <div className={`h-1.5 group-hover:h-2 w-full ${color} transition-all duration-300`} />

        <div className="p-6 sm:p-7">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
            style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{description}</p>

          {/* Features */}
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-600 shrink-0 mt-1.5 transition-colors" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <Link
          to={path}
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <span>Learn More</span>
          <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
