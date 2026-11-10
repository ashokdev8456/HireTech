import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Users, CheckCircle2, Star, Building2, Code2 } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { label: 'Placements Delivered', value: '500+' },
    { label: 'Hiring Partners', value: '100+' },
    { label: 'Students Trained', value: '2000+' },
    { label: 'Placement Rate', value: '95%' },
  ];

  const highlights = [
    { icon: Briefcase, label: 'Technical Work Support', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { icon: GraduationCap, label: 'MNC Training & Placements', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    { icon: Users, label: 'Non-MNC Opportunities', color: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
  ];

  return (
    <section className="relative pt-20 sm:pt-22 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 border-b border-gray-100">
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              India's Trusted Career & Placement Platform
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.16] mb-3 sm:mb-4">
              Launch Your{' '}
              <span className="text-gradient">Dream Career</span>{' '}
              with HireTech
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 max-w-xl">
              From hands-on technical work support in React, Java, and Python to guaranteed MNC interview drives and non-IT placements — we equip candidates with the skills and direct industry connections to succeed.
            </p>

            {/* Core Pillars */}
            <div className="flex flex-wrap gap-2.5 mb-4 sm:mb-5">
              {highlights.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03, y: -1 }}
                  transition={{ duration: 0.15 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition-shadow hover:shadow-sm ${color} cursor-default`}
                >
                  <Icon size={14} aria-hidden="true" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-5 sm:mb-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Explore All Services <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-700 font-semibold text-sm rounded-xl bg-white hover:bg-blue-50/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Book Free Consultation
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-gray-200/80">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-700 leading-tight">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column Visual / Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative mx-auto max-w-md w-full">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-blue-100/70 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-sm shadow-blue-300">
                      H
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-900 leading-tight">HireTech Career Hub</div>
                      <div className="text-xs font-medium text-blue-600">Training & Job Support</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full">
                    Active Hiring
                  </span>
                </div>

                {/* Progress Tracks */}
                <div className="space-y-2.5 mb-4">
                  {[
                    { name: 'MNC Placements Track', icon: Building2, pct: 95, status: 'Top Recruiters' },
                    { name: 'Work Support (Full Stack)', icon: Code2, pct: 92, status: 'Live Mentors' },
                    { name: 'Non-MNC Career Tracks', icon: Users, pct: 88, status: 'Quick Placement' },
                  ].map((track) => {
                    const IconComp = track.icon;
                    return (
                      <motion.div
                        key={track.name}
                        whileHover={{ scale: 1.015, x: 2 }}
                        transition={{ duration: 0.15 }}
                        className="py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-200/80 transition-all cursor-default"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <IconComp size={14} className="text-blue-600" aria-hidden="true" />
                            <span className="text-xs font-bold text-gray-800">{track.name}</span>
                          </div>
                          <span className="text-[11px] font-semibold text-blue-600">{track.status}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${track.pct}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>1-on-1 Mentorship</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Mock Technical Screens</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>ATS Resume Builder</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Recruitment Drives</span>
                  </div>
                </div>

                {/* Quick Link */}
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>Explore Course Tracks & Services</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              {/* Floating badges within container margins */}
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="animate-float inline-flex items-center gap-1.5 py-1 px-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-[11px] font-semibold text-gray-700 cursor-default">
                  <span className="text-amber-500">★</span> 4.9/5 Student Rating
                </div>
                <div className="animate-float-delayed inline-flex items-center gap-1.5 py-1 px-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-[11px] font-semibold text-gray-700 cursor-default">
                  <Star size={12} className="text-blue-600 fill-blue-600" aria-hidden="true" /> 100+ Hiring Partners
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
