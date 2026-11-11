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
    image: '/carousel/mnc-placements.jpg',
    imageAlt: 'HireTech students and engineers cracking MNC placements',
    badge: "India's Trusted Career & Placement Platform",
    badgeIcon: Sparkles,
    badgeColor: 'bg-blue-500/20 border-blue-400/40 text-blue-300',
    titlePrefix: 'Launch Your',
    titleHighlight: 'Dream Career',
    titleSuffix: 'with Top MNCs',
    description:
      'From in-depth IT & Non-IT training to ATS resume building, mock interviews, and guaranteed placement drives with top multinational tech giants.',
    highlights: [
      { icon: Building2, label: 'MNC Placement Drives', color: 'bg-white/10 text-blue-200 border-white/15' },
      { icon: GraduationCap, label: 'ATS Resumes & Mock Screens', color: 'bg-white/10 text-indigo-200 border-white/15' },
      { icon: Award, label: '95% Placement Record', color: 'bg-white/10 text-emerald-200 border-white/15' },
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
      tagColor: 'bg-emerald-500/25 text-emerald-300 border-emerald-400/30',
      title: 'HireTech Career Hub',
      subtitle: 'MNC Training & Placement Wing',
      tracks: [
        { name: 'Top Tier MNC Drives', icon: Building2, pct: 95, status: 'Direct Hiring' },
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
    image: '/carousel/work-support.jpg',
    imageAlt: 'Senior software architect providing live project work support',
    badge: 'Live On-Demand Technical Assistance',
    badgeIcon: Headphones,
    badgeColor: 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300',
    titlePrefix: 'Real-Time',
    titleHighlight: 'Job & Project',
    titleSuffix: 'Work Support',
    description:
      'Stuck on complex production bugs or unfamiliar frameworks? Our senior engineers assist you 1-on-1 in real-time across React, Java, Python, Node, and cloud pipelines.',
    highlights: [
      { icon: Code2, label: 'React, Node, Java & Python', color: 'bg-white/10 text-emerald-200 border-white/15' },
      { icon: Zap, label: 'Live Screen Debugging', color: 'bg-white/10 text-amber-200 border-white/15' },
      { icon: ShieldCheck, label: '100% Confidential Support', color: 'bg-white/10 text-blue-200 border-white/15' },
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
      tagColor: 'bg-cyan-500/25 text-cyan-300 border-cyan-400/30',
      title: 'Live Support Console',
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
    image: '/carousel/corporate-careers.jpg',
    imageAlt: 'Corporate team collaborating in non-IT business operations',
    badge: 'Fast-Track Entry for Freshers & Graduates',
    badgeIcon: Briefcase,
    badgeColor: 'bg-purple-500/20 border-purple-400/40 text-purple-300',
    titlePrefix: 'High-Growth',
    titleHighlight: 'Non-IT & Corporate',
    titleSuffix: 'Opportunities',
    description:
      'Fast-track placement assistance for high-demand administrative, customer care, data handling, and operational roles with dedicated workplace communication drills.',
    highlights: [
      { icon: Users, label: 'Data Entry & Back Office', color: 'bg-white/10 text-purple-200 border-white/15' },
      { icon: Clock, label: 'Placements in 30-60 Days', color: 'bg-white/10 text-cyan-200 border-white/15' },
      { icon: CheckCircle2, label: 'Immediate Joining Roles', color: 'bg-white/10 text-emerald-200 border-white/15' },
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
      tagColor: 'bg-purple-500/25 text-purple-300 border-purple-400/30',
      title: 'Corporate Placement Wing',
      subtitle: 'Fast-Track Career Openings',
      tracks: [
        { name: 'Data Management & MIS', icon: Database, pct: 96, status: 'High Demand' },
        { name: 'Customer Care & Operations', icon: Headphones, pct: 92, status: 'Direct Hiring' },
        { name: 'Corporate Communication', icon: Users, pct: 90, status: 'Interview Drills' },
      ],
      features: [
        'Communication Workshops',
        'Direct Walk-in Slots',
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
    image: '/carousel/tech-stack.jpg',
    imageAlt: 'Modern developer workstation with code editor and tech stacks',
    badge: 'Hands-On Industry Curriculum',
    badgeIcon: Code2,
    badgeColor: 'bg-amber-500/20 border-amber-400/40 text-amber-300',
    titlePrefix: 'Master',
    titleHighlight: 'Modern Tech Stacks',
    titleSuffix: '& Real Projects',
    description:
      'Learn React.js, Python, Java, Node.js, and SQL with hands-on capstone builds, scalable microservices architectures, and industry code reviews.',
    highlights: [
      { icon: Code2, label: 'React, JavaScript & Frontend', color: 'bg-white/10 text-sky-200 border-white/15' },
      { icon: Database, label: 'Python, Java & SQL Databases', color: 'bg-white/10 text-orange-200 border-white/15' },
      { icon: Sparkles, label: 'Portfolio-Grade Capstones', color: 'bg-white/10 text-indigo-200 border-white/15' },
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
      tagColor: 'bg-blue-500/25 text-blue-300 border-blue-400/30',
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

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 30 : -30,
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

  // Autoplay
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
      className="relative pt-18 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-slate-950 text-white border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Offerings Carousel"
    >
      {/* 1. Full-Bleed Background Cover Images with Smooth Crossfade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* 2. Dark Cinematic Overlay Gradients for Maximum Legibility */}
        {/* Horizontal gradient: dark on left, semi-transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70 lg:from-slate-950/95 lg:via-slate-950/85 lg:to-slate-950/60" />
        {/* Top subtle fade from navbar & bottom subtle fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Controls: Indicators & Navigation Arrows */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`group relative h-2.5 sm:h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-10 sm:w-12 bg-blue-500 shadow-md shadow-blue-500/50'
                    : 'w-2.5 sm:w-3 bg-white/30 hover:bg-white/50'
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
                    className="absolute inset-0 rounded-full bg-white/40"
                  />
                )}
              </button>
            ))}
            <span className="text-xs font-semibold text-slate-300 ml-2 hidden sm:inline-block">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Foreground Carousel Slide Content */}
        <div className="relative min-h-[520px] sm:min-h-[460px] lg:min-h-[420px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center"
            >
              {/* Left Column Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Pill Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md text-xs sm:text-sm font-semibold mb-3 sm:mb-4 w-fit ${activeSlide.badgeColor}`}
                >
                  <BadgeIcon size={14} className="animate-pulse" aria-hidden="true" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.16] mb-3 sm:mb-4 drop-shadow-md">
                  {activeSlide.titlePrefix}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                    {activeSlide.titleHighlight}
                  </span>{' '}
                  {activeSlide.titleSuffix}
                </h1>

                {/* Description */}
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 max-w-xl drop-shadow-sm font-normal">
                  {activeSlide.description}
                </p>

                {/* Core Pillars / Highlights */}
                <div className="flex flex-wrap gap-2.5 mb-5 sm:mb-6">
                  {activeSlide.highlights.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-md text-xs sm:text-sm font-semibold transition-all hover:bg-white/15 cursor-default ${color}`}
                    >
                      <Icon size={14} aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mb-5 sm:mb-6">
                  <Link
                    to={activeSlide.primaryCta.path}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {activeSlide.primaryCta.label} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    to={activeSlide.secondaryCta.path}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white text-white hover:text-white font-semibold text-sm rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {activeSlide.secondaryCta.label}
                  </Link>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/15">
                  {activeSlide.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-sky-400 leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-slate-300 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Frosted Glassmorphism Card */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="relative mx-auto max-w-md w-full">
                  {/* Glassmorphic Panel */}
                  <div className="bg-slate-900/75 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/60 border border-white/15">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/30">
                          H
                        </div>
                        <div>
                          <div className="text-base font-bold text-white leading-tight">
                            {activeSlide.card.title}
                          </div>
                          <div className="text-xs font-medium text-sky-400">
                            {activeSlide.card.subtitle}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 border text-xs font-bold rounded-full backdrop-blur-md ${activeSlide.card.tagColor}`}
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
                            className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-default"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <IconComp size={14} className="text-sky-400" aria-hidden="true" />
                                <span className="text-xs font-bold text-slate-100">{track.name}</span>
                              </div>
                              <span className="text-[11px] font-semibold text-sky-300">
                                {track.status}
                              </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${track.pct}%` }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-4">
                      {activeSlide.card.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0" aria-hidden="true" />
                          <span className="text-[11px] sm:text-xs font-medium text-slate-200">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link
                      to={activeSlide.card.buttonPath}
                      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <span>{activeSlide.card.buttonLabel}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Floating Badges */}
                  <div className="flex items-center justify-between mt-3 px-2">
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/15 shadow-sm text-[11px] font-semibold text-slate-200 cursor-default">
                      <span className="text-amber-400">★</span> {activeSlide.card.ratingText}
                    </div>
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/15 shadow-sm text-[11px] font-semibold text-slate-200 cursor-default">
                      <Star size={12} className="text-sky-400 fill-sky-400" aria-hidden="true" />{' '}
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
