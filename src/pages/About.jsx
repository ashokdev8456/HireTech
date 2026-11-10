import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Code2,
  Building2,
  Headphones,
  GraduationCap,
  Users,
  Cpu,
  FileText,
  Video,
  Sparkles,
  ClipboardCheck,
  Search,
  BookOpen,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Star,
  Award
} from 'lucide-react';

const ABOUT_HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    title: 'Technical Work Support & Live Mentorship',
    subtitle: 'Hands-on task assistance in React, Java, Python & SQL',
    tag: 'Live Mentors',
    tagColor: 'bg-blue-600',
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    title: 'MNC Training & Mock Interview Drives',
    subtitle: 'Simulated technical screening rounds with recruitment panels',
    tag: 'Top Recruiters',
    tagColor: 'bg-indigo-600',
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    title: 'Career Advancement & Placements',
    subtitle: '500+ candidates successfully placed in top tier corporations',
    tag: '95% Success Rate',
    tagColor: 'bg-emerald-600',
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    title: 'Collaborative Learning & Growth',
    subtitle: 'Empowering freshers and experienced professionals alike',
    tag: 'Dedicated Support',
    tagColor: 'bg-cyan-600',
  },
];

const About = () => {
  useSEO({
    title: 'About Us',
    description: 'Learn about HireTech - our mission, vision, and comprehensive IT and Non-IT career development programs across India.',
    canonicalPath: '/about',
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_HERO_SLIDES.length);
    }, 2000); // Transitions simultaneously every 2 seconds
    return () => clearInterval(timer);
  }, []);

  // Why Choose HireTech - 8 icon-based feature cards
  const whyChooseUs = [
    {
      title: 'Industry-Oriented Training',
      desc: 'Curriculum designed directly aligned with current market expectations and industry hiring trends.',
      icon: GraduationCap,
      bgColor: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Experienced Trainers',
      desc: 'Learn directly from industry professionals with real-world enterprise development and hiring experience.',
      icon: Users,
      bgColor: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Technical Skill Development',
      desc: 'Hands-on practical training covering frontend, backend, databases, and full stack workflows.',
      icon: Cpu,
      bgColor: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'Resume Building',
      desc: 'Professional resume crafting and LinkedIn optimization to ensure your profile catches recruiter attention.',
      icon: FileText,
      bgColor: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Interview Preparation',
      desc: 'Comprehensive guidance on technical concepts, system design, HR rounds, and behavioral questions.',
      icon: Target,
      bgColor: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Mock Interviews',
      desc: '1-on-1 simulated interviews with personalized feedback to boost confidence and address weak areas.',
      icon: Video,
      bgColor: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Recruitment Drive Opportunities',
      desc: 'Direct access to exclusive on-campus and virtual hiring drives organized with our corporate partners.',
      icon: Building2,
      bgColor: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Placement Assistance',
      desc: 'Dedicated career support and continuous interview scheduling until you land your dream job offer.',
      icon: Sparkles,
      bgColor: 'bg-blue-50 text-blue-700',
    },
  ];

  // 6-step Career Development Process
  const steps = [
    {
      number: '01',
      title: 'Candidate Registration',
      desc: 'Register with HireTech and share your educational background, career goals, and preferred domain.',
      icon: ClipboardCheck,
    },
    {
      number: '02',
      title: 'Skill Assessment',
      desc: 'Undergo a structured assessment to analyze your baseline skills, strengths, and improvement areas.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Professional Training',
      desc: 'Participate in intensive, practical training sessions guided by seasoned industry mentors.',
      icon: BookOpen,
    },
    {
      number: '04',
      title: 'Interview Preparation',
      desc: 'Master resume optimization, mock technical screens, and HR communication strategies.',
      icon: Target,
    },
    {
      number: '05',
      title: 'Job Opportunities',
      desc: 'Get matched with verified job openings across our extensive network of hiring companies.',
      icon: Briefcase,
    },
    {
      number: '06',
      title: 'Placement Assistance',
      desc: 'Receive end-to-end support during rounds, salary negotiation, and final onboarding.',
      icon: CheckCircle2,
    },
  ];

  // Services detailed under "What We Do"
  const services = [
    {
      id: 'work-support',
      title: 'Work Support',
      tag: 'On-Job Technical Assistance',
      icon: Code2,
      color: 'from-blue-600 to-indigo-600',
      tagColor: 'bg-blue-100 text-blue-700',
      description:
        'Technical assistance and real-time support across React.js, Python, Java, JavaScript, Node.js, SQL, and other modern technologies to help you deliver enterprise tasks confidently.',
      features: [
        'Real-time task assistance for complex tickets',
        'Debugging, code reviews, and architecture guidance',
        'Coverage across Frontend, Backend & Database stacks',
        'Dedicated senior developer mentoring',
      ],
      techPills: ['React.js', 'Python', 'Java', 'JavaScript', 'Node.js', 'SQL', 'Full Stack'],
      linkText: 'Explore Work Support',
      linkUrl: '/services#work-support',
    },
    {
      id: 'mnc-placements',
      title: 'MNC Training & Placements',
      tag: 'Top Tier Opportunities',
      icon: Building2,
      color: 'from-indigo-600 to-purple-600',
      tagColor: 'bg-indigo-100 text-indigo-700',
      description:
        'Rigorous IT and Non-IT job training, comprehensive interview preparation, campus recruitment drives, and dedicated placement assistance for leading multinational corporations.',
      features: [
        'Software Developer, QA, Full Stack & Cloud roles',
        'HR, Operations, BD & Process Associate tracks',
        'Resume rebuilding according to MNC ATS standards',
        'Guaranteed interview opportunities with hiring partners',
      ],
      techPills: ['IT Roles', 'Non-IT Roles', 'Mock Interviews', 'ATS Resumes', 'Placement Drives'],
      linkText: 'Explore MNC Placements',
      linkUrl: '/services#mnc-placements',
    },
    {
      id: 'non-mnc-placements',
      title: 'Non-MNC Training & Placements',
      tag: 'Quick Career Entry',
      icon: Headphones,
      color: 'from-cyan-600 to-blue-700',
      tagColor: 'bg-cyan-100 text-cyan-700',
      description:
        'Job-oriented training and placement assistance for Data Entry, Telecalling, Email Support, Chat Support, Back Office, and Customer Support roles across established businesses.',
      features: [
        'Professional workplace communication development',
        'Email etiquette and omnichannel chat simulation',
        'Data accuracy, typing speed, and office tools training',
        'Fast-track placement drives for freshers & graduates',
      ],
      techPills: ['Data Entry', 'Telecalling', 'Email Support', 'Chat Support', 'Back Office', 'Customer Care'],
      linkText: 'Explore Non-MNC Placements',
      linkUrl: '/services#non-mnc-placements',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero / About HireTech Section */}
      <section className="relative pt-20 sm:pt-20 lg:pt-22 pb-6 sm:pb-8 lg:pb-10 overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 border-b border-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-3.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                About HireTech — India's Premier Career Partner
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 tracking-tight leading-[1.16] mb-2.5 sm:mb-3">
                About <span className="text-gradient">HireTech</span>
              </h1>

              {/* Subtitle */}
              <p className="text-blue-700 font-semibold text-sm sm:text-base mb-3 sm:mb-3.5 leading-snug">
                Empowering Careers Through Skills, Live Mentorship & Verified Placements
              </p>

              {/* Description Paragraph */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 max-w-xl">
                <strong className="text-gray-900 font-semibold">HireTech</strong> empowers candidates and working professionals with live technical work support, career training, ATS resume restructuring, and verified placements. We bridge the gap between academic education and corporate employment to launch high-growth careers across IT and Non-IT sectors.
              </p>

              {/* 4 Feature Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4.5 sm:mb-5">
                {[
                  { icon: Code2, title: '1-on-1 Work Support', desc: 'Real-time task assistance in React, Java, Python & SQL', color: 'text-blue-600 bg-blue-50 border-blue-100' },
                  { icon: Building2, title: 'MNC Placement Drives', desc: 'Direct corporate interview slots with top tier recruiters', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
                  { icon: FileText, title: 'ATS Resumes & Mock Drills', desc: 'Professional resume building & simulated interview screens', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
                  { icon: Award, title: '95% Placement Record', desc: 'Over 500+ successful alumni placed nationwide', color: 'text-amber-600 bg-amber-50 border-amber-100' },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 + idx * 0.04 }}
                      whileHover={{ scale: 1.02, x: 2 }}
                      className="p-2.5 sm:p-3 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all flex items-start gap-2.5 cursor-default"
                    >
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${item.color} border flex items-center justify-center shrink-0 mt-0.5 shadow-xs`}>
                        <IconComp size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">{item.title}</h4>
                        <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Explore Our Services <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-700 font-semibold text-sm rounded-xl bg-white hover:bg-blue-50/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Right: Dynamic 2-Second Rotating Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="lg:col-span-5 w-full flex flex-col justify-center"
            >
              <div className="relative mx-auto max-w-lg w-full">
                {/* Main Showcase Container */}
                <div className="relative h-[340px] sm:h-[370px] lg:h-[390px] xl:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-100 bg-slate-900">
                  {/* Rotating Image with Crossfade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={ABOUT_HERO_SLIDES[currentSlide].url}
                        alt={ABOUT_HERO_SLIDES[currentSlide].title}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                      />
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-black/20" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Top Header Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-gray-900 text-[11px] font-bold shadow-md">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      HireTech Life & Impact
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Active Mentorship
                    </div>
                  </div>

                  {/* Bottom Content Caption Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-950/80 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 text-white shadow-xl"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white ${ABOUT_HERO_SLIDES[currentSlide].tagColor}`}>
                            {ABOUT_HERO_SLIDES[currentSlide].tag}
                          </span>
                          <span className="text-[11px] text-gray-300 font-medium">
                            0{currentSlide + 1} / 0{ABOUT_HERO_SLIDES.length}
                          </span>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1 mb-0.5">
                          {ABOUT_HERO_SLIDES[currentSlide].title}
                        </h3>
                        <p className="text-[11px] text-gray-300 line-clamp-1 leading-relaxed">
                          {ABOUT_HERO_SLIDES[currentSlide].subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* 2-Second Progress Bar Indicator */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-2.5">
                      <motion.div
                        key={currentSlide}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'linear' }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>

                    {/* Interactive Slide Selector Dots */}
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      {ABOUT_HERO_SLIDES.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setCurrentSlide(dotIdx)}
                          aria-label={`Jump to slide ${dotIdx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentSlide === dotIdx ? 'w-5 bg-blue-500' : 'w-1.5 bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Exterior Social Proof Badges */}
                <div className="flex items-center justify-between mt-3 px-1.5">
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

      {/* 2. Mission & Vision Section with Interactive 3D Hover Flip Cards */}
      <section className="py-4 sm:py-5 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-5"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our Purpose & Strategic Horizons
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our core operational commitments and long-term milestones driving candidate career success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* 1. Mission 3D Flip Card */}
            <div className="group perspective-1000 h-[395px] sm:h-[410px] w-full cursor-pointer">
              <div className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out group-hover:rotate-y-180">
                {/* Front Face */}
                <div className="backface-hidden absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-blue-50/90 via-white to-blue-50/40 border border-blue-100 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
                        <Target size={22} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-full">
                        Core Purpose
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                      Our Mission
                    </h3>

                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed mb-3.5 italic">
                      "To empower job seekers through quality training, practical skill development, career guidance, and placement assistance."
                    </p>

                    {/* Front Key Commitments */}
                    <div className="space-y-2 pt-2 border-t border-blue-100/70">
                      {[
                        '1-on-1 Real-Time Technical Work Support in React, Python, Java & SQL',
                        'ATS Resume Optimization matching modern recruiter algorithms',
                        'Curated Placement Drives with 100+ vetted corporate hiring partners',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle size={15} /> Skill Development & Placement Focus
                    </span>
                  </div>
                </div>

                {/* Back Face (Flipped) */}
                <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border border-blue-400/40 shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-400/30">
                        <Target size={18} />
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-400/30">
                        EXECUTION PLAN
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-1">
                      Our Execution Blueprint
                    </h3>
                    <p className="text-[11px] text-blue-200 mb-3 leading-relaxed">
                      How we turn our mission into daily outcomes for every candidate:
                    </p>

                    <div className="space-y-2">
                      {[
                        { title: 'Enterprise-Ready Curriculum', desc: 'Syllabus continually refreshed with production-level stacks & coding standards.' },
                        { title: 'On-Job Work Support', desc: 'Direct senior developer intervention for resolving live blockers & architecture.' },
                        { title: 'Simulated Technical Screens', desc: 'Realistic whiteboard rounds and HR drills to eliminate interview anxiety.' },
                        { title: 'Guaranteed Referral Pipelines', desc: 'Direct candidate profile forwarding to recruiters seeking immediate hires.' },
                      ].map((step, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="text-xs font-bold text-blue-400 leading-tight mb-0.5">{step.title}</div>
                          <div className="text-[10px] sm:text-[11px] text-gray-300 leading-snug">{step.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Sparkles size={13} className="text-amber-400" /> 95% Verified Placement Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Vision 3D Flip Card */}
            <div className="group perspective-1000 h-[395px] sm:h-[410px] w-full cursor-pointer">
              <div className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out group-hover:rotate-y-180">
                {/* Front Face */}
                <div className="backface-hidden absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/40 border border-indigo-100 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
                        <Eye size={22} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100/70 px-2.5 py-1 rounded-full">
                        Future Ambition
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                      Our Vision
                    </h3>

                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed mb-3.5 italic">
                      "To become a trusted career development and recruitment partner, helping individuals achieve their professional goals and organizations find skilled talent."
                    </p>

                    {/* Front Key Commitments */}
                    <div className="space-y-2 pt-2 border-t border-indigo-100/70">
                      {[
                        'India’s Foremost IT & Non-IT Talent Bridge connecting candidates to enterprises',
                        'Empowering freshers and experienced professionals with rapid role elevation',
                        'Democratizing access to high-paying jobs across corporate multinational companies',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 size={14} className="text-indigo-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle size={15} /> Long-Term Career & Hiring Growth
                    </span>
                  </div>
                </div>

                {/* Back Face (Flipped) */}
                <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white border border-indigo-400/40 shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-400/30">
                        <Eye size={18} />
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-400/30">
                        2028 STRATEGY
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-1">
                      Our Strategic Horizons
                    </h3>
                    <p className="text-[11px] text-indigo-200 mb-3 leading-relaxed">
                      Milestones steering HireTech into India's premier talent institution:
                    </p>

                    <div className="space-y-2">
                      {[
                        { title: '10,000+ Careers Transformed', desc: 'Targeting 10,000+ verified campus and lateral placements by 2028.' },
                        { title: 'Fortune 500 MNC Alliances', desc: 'Deepening hiring drive partnerships across premier global tech powerhouses.' },
                        { title: 'Cloud Collaboration Sandboxes', desc: 'Next-gen cloud environments simulating agile corporate sprints.' },
                        { title: 'Universal Employment Access', desc: 'Expanding non-metro recruitment outreach for equal career opportunities.' },
                      ].map((step, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="text-xs font-bold text-indigo-400 leading-tight mb-0.5">{step.title}</div>
                          <div className="text-[10px] sm:text-[11px] text-gray-300 leading-snug">{step.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-indigo-300">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Award size={13} className="text-amber-400" /> 100+ Enterprise Hiring Network
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do - Three Visually Attractive Service Sections */}
      <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Comprehensive Career & Technical Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We provide three major services tailored to elevate every stage of your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md shadow-blue-200/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <IconComponent size={24} />
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${service.tagColor}`}>
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle size={15} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-gray-100 mb-5">
                      {service.techPills.map((pill) => (
                        <span
                          key={pill}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] font-medium rounded-lg"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.linkUrl}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-blue-600 text-blue-700 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 border border-gray-100 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <span>{service.linkText}</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Choose HireTech? Section */}
      <section className="py-4 sm:py-5 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
              Key Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Why Choose HireTech?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We empower our candidates with end-to-end guidance, practical skill development, and unmatched placement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-default"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Career Development Process Section */}
      <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
              Step-by-Step Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our Career Development Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A proven 6-step roadmap engineered to transition candidates from registration into thriving corporate careers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <StepIcon size={22} />
                      </div>
                      <span className="text-xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                      Step {step.number}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1.5">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section className="py-5 sm:py-6 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-200 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm border border-white/15">
            <Sparkles size={15} /> Take the Next Step
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
            Your Career Journey Starts With HireTech
          </h2>

          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Take the next step towards your dream career. Learn new skills, prepare for opportunities, and grow with HireTech.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm rounded-xl shadow-lg transition-all"
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 hover:border-white text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
