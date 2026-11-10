import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCategoryCard = ({
  title,
  icon,
  badge = 'Hiring',
  badgeColor = 'bg-blue-50 text-blue-700 border-blue-200',
  description,
  to = '/contact',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {icon}
          </div>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
            {badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1.5 leading-snug">
          {title}
        </h3>

        {description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            {description}
          </p>
        )}
      </div>

      <div className="pt-3 border-t border-gray-100 mt-2">
        <Link
          to={to}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>Apply Assistance</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
};

export default JobCategoryCard;
