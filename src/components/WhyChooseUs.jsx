import { motion } from 'framer-motion';
import {
  GraduationCap,
  TrendingUp,
  Users,
  Code2,
  Target,
  Sparkles
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Career-Focused Training',
      desc: 'Our curricula are specifically tailored around high-demand enterprise roles to make you job-ready in weeks.',
      icon: GraduationCap,
      bgColor: 'bg-blue-50 text-blue-600',
      borderHover: 'hover:border-blue-200',
    },
    {
      title: 'Industry-Oriented Skills',
      desc: 'Learn the exact tech stacks, frameworks, and tools currently sought by leading MNC and Indian corporations.',
      icon: TrendingUp,
      bgColor: 'bg-indigo-50 text-indigo-600',
      borderHover: 'hover:border-indigo-200',
    },
    {
      title: 'Experienced Guidance',
      desc: 'Learn directly under senior developers and recruiters who provide 1-on-1 mentorship and career advice.',
      icon: Users,
      bgColor: 'bg-sky-50 text-sky-600',
      borderHover: 'hover:border-sky-200',
    },
    {
      title: 'Technical Support',
      desc: 'Get fast, real-time code reviews, ticket debugging, and architectural guidance whenever you encounter blockers.',
      icon: Code2,
      bgColor: 'bg-emerald-50 text-emerald-600',
      borderHover: 'hover:border-emerald-200',
    },
    {
      title: 'Interview Preparation',
      desc: 'Sharpen your technical, behavioral, and HR interview answers with simulated mock drills and feedback.',
      icon: Target,
      bgColor: 'bg-amber-50 text-amber-600',
      borderHover: 'hover:border-amber-200',
    },
    {
      title: 'Placement Assistance',
      desc: 'Direct access to scheduled hiring drives, resume ATS forwarding, and proactive candidate placement assistance.',
      icon: Sparkles,
      bgColor: 'bg-purple-50 text-purple-600',
      borderHover: 'hover:border-purple-200',
    },
  ];

  return (
    <section className="py-4 sm:py-5 lg:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2.5">
            Why Choose HireTech?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We bridge the gap between education and real-world employment through comprehensive support and placement expertise.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className={`group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg ${feature.borderHover} transition-all duration-300 flex flex-col justify-between cursor-default`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200`}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
