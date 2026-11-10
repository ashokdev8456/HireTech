import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = ({
  title = "Ready to transform your career?",
  subtitle = "Join thousands of professionals who have already started their journey with HireTech.",
  primaryLabel = "Get Started",
  primaryPath = "/contact",
  secondaryLabel = "Learn More",
  secondaryPath = "/about",
}) => {
  return (
    <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-800/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              to={primaryPath}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 shadow-xl hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {primaryLabel} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to={secondaryPath}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
