import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
  CheckCircle2,
  Star,
  Building2,
  Code2,
  Zap,
  ShieldCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Headphones,
  Database,
  Award,
} from 'lucide-react';

const slides = [
  {
    id: 'mnc-placements',
    badge: "India's Trusted Career & Placement Platform",
    badgeIcon: Sparkles,
    badgeColor: 'bg-blue-100 border-blue-200/80 text-blue-700',
    titlePrefix: 'Launch Your',
    titleHighlight: 'Dream Career',
    titleSuffix: 'with Top MNCs',
    description:
      'From in-depth IT & Non-IT training to ATS resume building, mock interviews, and guaranteed placement drives with top multinational tech giants.',
    highlights: [
      { icon: Building2, label: 'MNC Placement Drives', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      { icon: GraduationCap, label: 'ATS Resumes & Mock Screens', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { icon: Award, label: '95% Placement Record', color: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
    ],
    primaryCta: { label: 'Explore MNC Placements', path: '/services#mnc-placements' },
    secondaryCta: { label: 'Book Free Consultation', path: '/contact' },
    stats: [
      { label: 'Placements Delivered', value: '500+' },
      { label: 'Hiring Partners', value: '100+' },
      { label: 'Students Trained', value: '2000+' },
      { label: 'Placement Rate', value: '95%' },
    ],
    card: {
      tag: 'Active Hiring',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'HireTech Career Hub',
      subtitle: 'MNC Training & Placement Wing',
      tracks: [
        { name: 'MNC Placements Track', icon: Building2, pct: 95, status: 'Top Recruiters' },
        { name: 'Full Stack Engineering', icon: Code2, pct: 92, status: 'Live Mentors' },
        { name: 'Mock Technical Screens', icon: Users, pct: 88, status: 'Interview Ready' },
      ],
      features: [
        '1-on-1 Mentorship',
        'Mock Technical Screens',
        'ATS Resume Builder',
        'Direct Company Drives',
      ],
      buttonLabel: 'Explore Placement Programs',
      buttonPath: '/services#mnc-placements',
      ratingText: '4.9/5 Student Rating',
      partnerText: '100+ Hiring Partners',
    },
  },
  {
    id: 'work-support',
    badge: 'Live On-Demand Technical Assistance',
    badgeIcon: Headphones,
    badgeColor: 'bg-emerald-100 border-emerald-200/80 text-emerald-800',
    titlePrefix: 'Real-Time',
    titleHighlight: 'Job & Project',
    titleSuffix: 'Work Support',
    description:
      'Stuck on complex production bugs or unfamiliar frameworks? Our senior engineers assist you 1-on-1 in real-time across React, Java, Python, Node, and cloud pipelines.',
    highlights: [
      { icon: Code2, label: 'React, Node, Java & Python', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { icon: Zap, label: 'Live Screen Debugging', color: 'bg-amber-50 text-amber-800 border-amber-200' },
      { icon: ShieldCheck, label: '100% Confidential Support', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    ],
    primaryCta: { label: 'Get Instant Work Support', path: '/services#work-support' },
    secondaryCta: { label: 'Chat on WhatsApp', path: '/contact' },
    stats: [
      { label: 'Availability', value: '24/7' },
      { label: 'Tech Stacks', value: '15+' },
      { label: 'Task Resolution', value: '100%' },
      { label: 'Response Time', value: '< 30 Min' },
    ],
    card: {
      tag: 'Live Engineers Online',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Live Work Support Console',
      subtitle: 'Senior Engineer Mentoring',
      tracks: [
        { name: 'Frontend (React, Next.js)', icon: Code2, pct: 98, status: 'Active Support' },
        { name: 'Backend (Java, Spring, Python)', icon: Database, pct: 94, status: 'Architecture' },
        { name: 'Database & Production APIs', icon: Zap, pct: 90, status: 'Bug Resolution' },
      ],
      features: [
        'Live Code Debugging',
        'Daily Standup Preparation',
        'Sprint Deadline Coverage',
        'Confidential 1-on-1 Calls',
      ],
      buttonLabel: 'Request Work Support Now',
      buttonPath: '/services#work-support',
      ratingText: '100% Confidential',
      partnerText: '15+ Tech Frameworks',
    },
  },
  {
    id: 'non-mnc-placements',
    badge: 'Fast-Track Entry for Freshers & Graduates',
    badgeIcon: Briefcase,
    badgeColor: 'bg-indigo-100 border-indigo-200/80 text-indigo-700',
    titlePrefix: 'High-Growth',
    titleHighlight: 'Non-IT & Corporate',
    titleSuffix: 'Opportunities',
    description:
      'Fast-track placement assistance for high-demand administrative, customer care, data handling, and operational roles with dedicated workplace communication drills.',
    highlights: [
      { icon: Users, label: 'Data Entry & Back Office', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { icon: Clock, label: 'Placements in 30-60 Days', color: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
      { icon: CheckCircle2, label: 'Immediate Joining Roles', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ],
    primaryCta: { label: 'Explore Non-MNC Roles', path: '/services#non-mnc-placements' },
    secondaryCta: { label: 'Apply in 2 Minutes', path: '/contact' },
    stats: [
      { label: 'Avg. Placement Time', value: '30-60D' },
      { label: 'Corporate Recruiters', value: '50+' },
      { label: 'Candidates Placed', value: '1000+' },
      { label: 'Joining Type', value: 'Immediate' },
    ],
    card: {
      tag: 'Direct Walk-ins Open',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'Corporate Placement Wing',
      subtitle: 'Fast-Track Career Openings',
      tracks: [
        { name: 'Data Management & MIS', icon: Database, pct: 96, status: 'High Demand' },
        { name: 'Customer Care & Chat Roles', icon: Headphones, pct: 92, status: 'Direct Hiring' },
        { name: 'Corporate Communication', icon: Users, pct: 90, status: 'Interview Drills' },
      ],
      features: [
        'Communication Workshops',
        'Direct Company Walk-in Slots',
        'Immediate Joining Batches',
        'Flexible Shift Options',
      ],
      buttonLabel: 'View Non-MNC Openings',
      buttonPath: '/services#non-mnc-placements',
      ratingText: '50+ Verified Partners',
      partnerText: 'Quick 30-Day Onboarding',
    },
  },
  {
    id: 'technologies',
    badge: 'Hands-On Industry Curriculum',
    badgeIcon: Code2,
    badgeColor: 'bg-amber-100 border-amber-200/80 text-amber-800',
    titlePrefix: 'Master',
    titleHighlight: 'Modern Tech Stacks',
    titleSuffix: '& Real Projects',
    description:
      'Learn React.js, Python, Java, Node.js, and SQL with hands-on capstone builds, scalable microservices architectures, and industry code reviews.',
    highlights: [
      { icon: Code2, label: 'React, JavaScript & Frontend', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      { icon: Database, label: 'Python, Java & SQL Databases', color: 'bg-orange-50 text-orange-700 border-orange-200' },
      { icon: Sparkles, label: 'Portfolio-Grade Capstones', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    ],
    primaryCta: { label: 'Explore Technologies', path: '/technologies' },
    secondaryCta: { label: 'Get Free Course Syllabus', path: '/contact' },
    stats: [
      { label: 'Tech Modules', value: '8+' },
      { label: 'Real Projects', value: '20+' },
      { label: 'Trainer Experience', value: '10+ Yrs' },
      { label: 'Demo Class', value: '100% Free' },
    ],
    card: {
      tag: 'Hands-on Labs',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Full Stack Academy',
      subtitle: 'Project-First Engineering',
      tracks: [
        { name: 'Frontend Architecture', icon: Code2, pct: 96, status: 'React & Tailwind' },
        { name: 'Backend API Engineering', icon: Database, pct: 94, status: 'Java & Python' },
        { name: 'System Design & SQL', icon: Zap, pct: 91, status: 'Cloud & Database' },
      ],
      features: [
        'Real-world Capstones',
        'GitHub Portfolio Reviews',
        'Weekly Live Coding Labs',
        'Industry Certification',
      ],
      buttonLabel: 'Explore All Tech Stacks',
      buttonPath: '/technologies',
      ratingText: '100% Practical Labs',
      partnerText: 'Lifetime Alumni Access',
    },
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const HeroSection = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef(null);

  const activeSlide = slides[currentSlide];

  const paginate = useCallback(
    (newDirection) => {
      setSlide(([curr]) => {
        let nextIndex = curr + newDirection;
        if (nextIndex < 0) nextIndex = slides.length - 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        return [nextIndex, newDirection];
      });
    },
    []
  );

  const goToSlide = (index) => {
    setSlide(([curr]) => [index, index > curr ? 1 : -1]);
  };

  // Autoplay effect
  useEffect(() => {
    if (isPaused) return;

    autoplayTimerRef.current = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, paginate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      className="relative pt-16 sm:pt-20 lg:pt-22 pb-6 sm:pb-8 lg:pb-10 overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 border-b border-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Offerings Carousel"
    >
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Progress & Navigation Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`group relative h-2 sm:h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  idx === currentSlide
                    ? 'w-8 sm:w-10 bg-blue-600 shadow-sm shadow-blue-300'
                    : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.titleHighlight}`}
                aria-current={idx === currentSlide ? 'true' : 'false'}
              >
                {/* Active animated progress bar inside pill */}
                {idx === currentSlide && !isPaused && (
                  <motion.span
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute inset-0 rounded-full bg-blue-700/40"
                  />
                )}
              </button>
            ))}
            <span className="text-[11px] font-semibold text-gray-400 ml-2 hidden sm:inline-block">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => paginate(-1)}
              className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Next slide"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Dynamic Carousel Slide View */}
        <div className="relative min-h-[540px] sm:min-h-[480px] lg:min-h-[440px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center"
            >
              {/* Left Column Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Pill Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-3 sm:mb-4 w-fit ${activeSlide.badgeColor}`}
                >
                  <BadgeIcon size={14} className="animate-pulse" aria-hidden="true" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.16] mb-3 sm:mb-4">
                  {activeSlide.titlePrefix}{' '}
                  <span className="text-gradient">{activeSlide.titleHighlight}</span>{' '}
                  {activeSlide.titleSuffix}
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 max-w-xl">
                  {activeSlide.description}
                </p>

                {/* Core Pillars / Highlights */}
                <div className="flex flex-wrap gap-2.5 mb-4 sm:mb-5">
                  {activeSlide.highlights.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition-shadow hover:shadow-sm ${color} cursor-default`}
                    >
                      <Icon size={14} aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mb-4 sm:mb-5">
                  <Link
                    to={activeSlide.primaryCta.path}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {activeSlide.primaryCta.label} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    to={activeSlide.secondaryCta.path}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-700 font-semibold text-sm rounded-xl bg-white hover:bg-blue-50/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {activeSlide.secondaryCta.label}
                  </Link>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200/80">
                  {activeSlide.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-700 leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-gray-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Visual / Interactive Card */}
              <div className="lg:col-span-5 flex justify-center w-full">
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
                          <div className="text-base font-bold text-gray-900 leading-tight">
                            {activeSlide.card.title}
                          </div>
                          <div className="text-xs font-medium text-blue-600">
                            {activeSlide.card.subtitle}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 border text-xs font-bold rounded-full ${activeSlide.card.tagColor}`}
                      >
                        {activeSlide.card.tag}
                      </span>
                    </div>

                    {/* Progress Tracks */}
                    <div className="space-y-2.5 mb-4">
                      {activeSlide.card.tracks.map((track) => {
                        const IconComp = track.icon;
                        return (
                          <div
                            key={track.name}
                            className="py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-200/80 transition-all cursor-default"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <IconComp size={14} className="text-blue-600" aria-hidden="true" />
                                <span className="text-xs font-bold text-gray-800">{track.name}</span>
                              </div>
                              <span className="text-[11px] font-semibold text-blue-600">
                                {track.status}
                              </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${track.pct}%` }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Key Points */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
                      {activeSlide.card.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" aria-hidden="true" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Link */}
                    <Link
                      to={activeSlide.card.buttonPath}
                      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <span>{activeSlide.card.buttonLabel}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Floating badges within container margins */}
                  <div className="flex items-center justify-between mt-3 px-2">
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-[11px] font-semibold text-gray-700 cursor-default">
                      <span className="text-amber-500">★</span> {activeSlide.card.ratingText}
                    </div>
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-[11px] font-semibold text-gray-700 cursor-default">
                      <Star size={12} className="text-blue-600 fill-blue-600" aria-hidden="true" />{' '}
                      {activeSlide.card.partnerText}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
