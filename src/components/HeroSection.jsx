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
  Sparkles,
  Headphones,
  Database,
  Award,
} from 'lucide-react';

const slides = [
  {
    id: 'mnc-placements',
    type: 'mnc',
    image: '/carousel/mnc-placements.jpg',
    imageAlt: 'HireTech students and engineers cracking MNC placements',
    badge: "India's Trusted Career & Placement Platform",
    badgeIcon: Sparkles,
    badgeColor: 'bg-blue-600/30 border-blue-400/50 text-blue-200',
    titlePrefix: 'Launch Your',
    titleHighlight: 'Dream Career',
    titleSuffix: 'with Top MNCs',
    description:
      'From in-depth IT & Non-IT training to ATS resume building, mock interviews, and guaranteed placement drives with top multinational tech giants.',
    highlights: [
      { icon: Building2, label: 'MNC Placement Drives', color: 'bg-slate-950/40 text-blue-200 border-white/20' },
      { icon: GraduationCap, label: 'ATS Resumes & Mock Screens', color: 'bg-slate-950/40 text-indigo-200 border-white/20' },
      { icon: Award, label: '95% Placement Record', color: 'bg-slate-950/40 text-emerald-200 border-white/20' },
    ],
    primaryCta: { label: 'Explore MNC Placements', path: '/services#mnc-placements' },
    secondaryCta: { label: 'Book Free Consultation', path: '/contact' },
    stats: [
      { label: 'Placements Delivered', value: '500+' },
      { label: 'Hiring Partners', value: '100+' },
      { label: 'Students Trained', value: '2000+' },
      { label: 'Placement Rate', value: '95%' },
    ],
  },
  {
    id: 'work-support',
    type: 'support',
    image: '/carousel/work-support.jpg',
    imageAlt: 'Senior software architect providing live project work support',
    badge: 'Live On-Demand Technical Assistance',
    badgeIcon: Headphones,
    badgeColor: 'bg-emerald-600/30 border-emerald-400/50 text-emerald-200',
    titlePrefix: 'Real-Time',
    titleHighlight: 'Job & Project',
    titleSuffix: 'Work Support',
    description:
      'Stuck on complex production bugs or unfamiliar frameworks? Our senior engineers assist you 1-on-1 in real-time across React, Java, Python, Node, and cloud pipelines.',
    highlights: [
      { icon: Code2, label: 'React, Node, Java & Python', color: 'bg-slate-950/40 text-emerald-200 border-white/20' },
      { icon: Zap, label: 'Live Screen Debugging', color: 'bg-slate-950/40 text-amber-200 border-white/20' },
      { icon: ShieldCheck, label: '100% Confidential Support', color: 'bg-slate-950/40 text-blue-200 border-white/20' },
    ],
    primaryCta: { label: 'Get Instant Work Support', path: '/services#work-support' },
    secondaryCta: { label: 'Chat on WhatsApp', path: '/contact' },
    stats: [
      { label: 'Availability', value: '24/7' },
      { label: 'Tech Stacks', value: '15+' },
      { label: 'Task Resolution', value: '100%' },
      { label: 'Response Time', value: '< 30 Min' },
    ],
  },
  {
    id: 'non-mnc-placements',
    type: 'corporate',
    image: '/carousel/corporate-careers.jpg',
    imageAlt: 'Corporate team collaborating in non-IT business operations',
    badge: 'Fast-Track Entry for Freshers & Graduates',
    badgeIcon: Briefcase,
    badgeColor: 'bg-purple-600/30 border-purple-400/50 text-purple-200',
    titlePrefix: 'High-Growth',
    titleHighlight: 'Non-IT & Corporate',
    titleSuffix: 'Opportunities',
    description:
      'Fast-track placement assistance for high-demand administrative, customer care, data handling, and operational roles with dedicated workplace communication drills.',
    highlights: [
      { icon: Users, label: 'Data Entry & Back Office', color: 'bg-slate-950/40 text-purple-200 border-white/20' },
      { icon: Clock, label: 'Placements in 30-60 Days', color: 'bg-slate-950/40 text-cyan-200 border-white/20' },
      { icon: CheckCircle2, label: 'Immediate Joining Roles', color: 'bg-slate-950/40 text-emerald-200 border-white/20' },
    ],
    primaryCta: { label: 'Explore Non-MNC Roles', path: '/services#non-mnc-placements' },
    secondaryCta: { label: 'Apply in 2 Minutes', path: '/contact' },
    stats: [
      { label: 'Avg. Placement Time', value: '30-60D' },
      { label: 'Corporate Recruiters', value: '50+' },
      { label: 'Candidates Placed', value: '1000+' },
      { label: 'Joining Type', value: 'Immediate' },
    ],
  },
  {
    id: 'technologies',
    type: 'tech',
    image: '/carousel/tech-stack.jpg',
    imageAlt: 'Modern developer workstation with code editor and tech stacks',
    badge: 'Hands-On Industry Curriculum',
    badgeIcon: Code2,
    badgeColor: 'bg-amber-600/30 border-amber-400/50 text-amber-200',
    titlePrefix: 'Master',
    titleHighlight: 'Modern Tech Stacks',
    titleSuffix: '& Real Projects',
    description:
      'Learn React.js, Python, Java, Node.js, and SQL with hands-on capstone builds, scalable microservices architectures, and industry code reviews.',
    highlights: [
      { icon: Code2, label: 'React, JavaScript & Frontend', color: 'bg-slate-950/40 text-sky-200 border-white/20' },
      { icon: Database, label: 'Python, Java & SQL Databases', color: 'bg-slate-950/40 text-orange-200 border-white/20' },
      { icon: Sparkles, label: 'Portfolio-Grade Capstones', color: 'bg-slate-950/40 text-indigo-200 border-white/20' },
    ],
    primaryCta: { label: 'Explore Technologies', path: '/technologies' },
    secondaryCta: { label: 'Get Free Course Syllabus', path: '/contact' },
    stats: [
      { label: 'Tech Modules', value: '8+' },
      { label: 'Real Projects', value: '20+' },
      { label: 'Trainer Experience', value: '10+ Yrs' },
      { label: 'Demo Class', value: '100% Free' },
    ],
  },
];

/* -------------------------------------------------------------
   UNIQUE RIGHT-SIDE CARD COMPONENTS FOR EACH SLIDE
------------------------------------------------------------- */

// 1. MNC Placement & Recruiter Board
const MncPlacementsCard = () => (
  <div className="bg-slate-950/60 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/70 border border-blue-400/30">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3.5">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
          <Building2 size={20} />
        </div>
        <div>
          <div className="text-base font-bold text-white leading-tight">MNC Placement Board</div>
          <div className="text-xs font-semibold text-sky-300">Tier-1 Corporate Hiring</div>
        </div>
      </div>
      <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold rounded-full backdrop-blur-md">
        Active Drive
      </span>
    </div>

    {/* Recent Placement Highlight */}
    <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-blue-400/25 mb-3.5">
      <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
        <span className="font-semibold text-sky-200">Featured Offer Package</span>
        <span className="text-emerald-400 font-bold">Verified Hire</span>
      </div>
      <div className="text-2xl font-black text-white tracking-tight">₹6.5 - 18.5 LPA</div>
      <div className="text-[11px] text-slate-300 mt-0.5">Software Engineer & Full Stack Analyst Roles</div>
    </div>

    {/* Top Recruiter Pills */}
    <div className="mb-3.5">
      <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
        Direct Recruiting Partners
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS', 'Accenture'].map((company) => (
          <div
            key={company}
            className="py-1.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-100 font-semibold transition-all"
          >
            {company}
          </div>
        ))}
      </div>
    </div>

    {/* Checklist */}
    <div className="grid grid-cols-2 gap-2 text-xs text-slate-200 mb-4">
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="text-[11px]">98% ATS Resumes</span>
      </div>
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="text-[11px]">1-on-1 Mock Rounds</span>
      </div>
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="text-[11px]">Direct Walk-in Slots</span>
      </div>
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="text-[11px]">Salary Negotiation</span>
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/services#mnc-placements"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xl shadow-blue-900/50"
    >
      <span>Explore MNC Placement Tracks</span>
      <ArrowRight size={15} />
    </Link>
  </div>
);

// 2. Live Technical Work Support Code/Terminal Console
const WorkSupportCard = () => (
  <div className="bg-slate-950/75 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/80 border border-emerald-400/30">
    {/* Terminal Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3.5">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-xs font-mono font-bold text-slate-300 ml-2">hiretech-live-debug.tsx</span>
      </div>
      <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold rounded-full">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        Live Mentor Connected
      </span>
    </div>

    {/* Code snippet mock */}
    <div className="p-3.5 rounded-2xl bg-slate-900/90 font-mono text-[11px] sm:text-xs text-slate-300 border border-white/10 mb-3.5 leading-relaxed">
      <div className="text-slate-500">// 1-on-1 sprint issue solved live</div>
      <div className="text-sky-300">
        <span className="text-purple-400">const</span> sprintFix = <span className="text-amber-300">await</span> mentor.resolveIssue({`{`}
      </div>
      <div className="pl-4 text-emerald-300">stack: <span className="text-orange-300">'React / Node / Java'</span>,</div>
      <div className="pl-4 text-emerald-300">status: <span className="text-cyan-300">'PRODUCTION_RESOLVED'</span>,</div>
      <div className="pl-4 text-emerald-300">duration: <span className="text-cyan-300">'25 mins'</span></div>
      <div className="text-sky-300">{`}`});</div>
    </div>

    {/* Live Ticket Resolution Stats */}
    <div className="grid grid-cols-3 gap-2 text-center mb-3.5">
      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="text-base font-bold text-emerald-400">&lt; 30m</div>
        <div className="text-[10px] text-slate-300">Avg Resolution</div>
      </div>
      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="text-base font-bold text-sky-400">1-on-1</div>
        <div className="text-[10px] text-slate-300">Private Screen</div>
      </div>
      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="text-base font-bold text-indigo-400">100%</div>
        <div className="text-[10px] text-slate-300">Confidential</div>
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/services#work-support"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xl shadow-emerald-950/50"
    >
      <span>Request Live Work Support</span>
      <ArrowRight size={15} />
    </Link>
  </div>
);

// 3. Non-MNC & Corporate Career Openings Portal
const CorporateCareersCard = () => (
  <div className="bg-slate-950/65 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/80 border border-purple-400/30">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3.5">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
          <Briefcase size={20} />
        </div>
        <div>
          <div className="text-base font-bold text-white leading-tight">Corporate Career Hub</div>
          <div className="text-xs font-semibold text-purple-300">Immediate Joining Roles</div>
        </div>
      </div>
      <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 border border-purple-400/30 text-[11px] font-bold rounded-full">
        Direct Walk-ins
      </span>
    </div>

    {/* Job Openings Stack */}
    <div className="space-y-2.5 mb-3.5">
      {[
        { role: 'Data Management & MIS', count: '18 Openings', time: 'Immediate', badge: 'bg-blue-500/20 text-blue-300' },
        { role: 'Customer Success & Chat Ops', count: '24 Openings', time: 'Day/Night', badge: 'bg-emerald-500/20 text-emerald-300' },
        { role: 'Back Office Executive Support', count: '12 Openings', time: 'Fast-Track', badge: 'bg-purple-500/20 text-purple-300' },
      ].map((job) => (
        <div
          key={job.role}
          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all"
        >
          <div>
            <div className="text-xs font-bold text-white">{job.role}</div>
            <div className="text-[10px] text-slate-300 mt-0.5">{job.count} • {job.time}</div>
          </div>
          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border border-white/10 ${job.badge}`}>
            Walk-in Open
          </span>
        </div>
      ))}
    </div>

    {/* Fast 30-Day Timeline */}
    <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-400/20 mb-3.5 flex items-center justify-between text-center text-xs">
      <div>
        <div className="text-purple-300 font-bold">Day 1-15</div>
        <div className="text-[10px] text-slate-400">Drills & Prep</div>
      </div>
      <ArrowRight size={14} className="text-purple-400" />
      <div>
        <div className="text-purple-300 font-bold">Day 20</div>
        <div className="text-[10px] text-slate-400">Interview Drive</div>
      </div>
      <ArrowRight size={14} className="text-purple-400" />
      <div>
        <div className="text-emerald-400 font-bold">Day 30</div>
        <div className="text-[10px] text-slate-400">Offer Letter</div>
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/services#non-mnc-placements"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xl shadow-purple-950/50"
    >
      <span>View Non-MNC Job Openings</span>
      <ArrowRight size={15} />
    </Link>
  </div>
);

// 4. Modern Tech Stacks & Academy Matrix
const TechStackCard = () => (
  <div className="bg-slate-950/65 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/80 border border-amber-400/30">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3.5">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-amber-500/30">
          <Code2 size={20} />
        </div>
        <div>
          <div className="text-base font-bold text-white leading-tight">Full Stack Academy</div>
          <div className="text-xs font-semibold text-amber-300">2025 Industry Tech Stacks</div>
        </div>
      </div>
      <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold rounded-full">
        Hands-on Labs
      </span>
    </div>

    {/* Interactive 2x2 Tech Stacks Grid */}
    <div className="grid grid-cols-2 gap-2.5 mb-3.5">
      {[
        { name: 'React.js & Next.js', tag: 'Frontend Engineering', icon: '⚛️', color: 'from-blue-500/20 to-cyan-500/20' },
        { name: 'Python & FastAPI', tag: 'Backend & Data APIs', icon: '🐍', color: 'from-green-500/20 to-emerald-500/20' },
        { name: 'Java & Spring Boot', tag: 'Enterprise Microservices', icon: '☕', color: 'from-orange-500/20 to-red-500/20' },
        { name: 'Node.js & SQL', tag: 'Full Stack Architecture', icon: '🗄️', color: 'from-purple-500/20 to-indigo-500/20' },
      ].map((stack) => (
        <div
          key={stack.name}
          className={`p-2.5 rounded-xl bg-gradient-to-br ${stack.color} border border-white/15 hover:border-white/30 transition-all`}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-base">{stack.icon}</span>
            <div className="text-xs font-bold text-white truncate">{stack.name}</div>
          </div>
          <div className="text-[10px] text-slate-300">{stack.tag}</div>
        </div>
      ))}
    </div>

    {/* Real Capstone Project Showcase */}
    <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-400/20 mb-3.5">
      <div className="flex items-center justify-between text-xs text-amber-200 font-semibold mb-1">
        <span>Portfolio Capstone Build</span>
        <span className="text-emerald-400 font-bold">20+ Projects</span>
      </div>
      <div className="text-xs text-slate-200">
        Build production e-commerce, real-time chat, and auth-secured microservices.
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/technologies"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xl shadow-amber-950/50"
    >
      <span>Explore All Tech Curriculums</span>
      <ArrowRight size={15} />
    </Link>
  </div>
);

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

  // Autoplay every 2.5 seconds automatically
  useEffect(() => {
    autoplayTimerRef.current = setInterval(() => {
      paginate(1);
    }, 2500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [paginate]);

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
      className="relative pt-18 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-slate-900 text-white border-b border-slate-700/60"
      aria-label="Featured Offerings Carousel"
    >
      {/* 1. Full-Bleed Background Cover Images with Smooth Crossfade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
        </AnimatePresence>

        {/* 2. Transparent / Light Cinematic Gradient: Images remain clearly visible! */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 lg:from-slate-950/88 lg:via-slate-950/45 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-md text-xs sm:text-sm font-semibold mb-3 sm:mb-4 w-fit ${activeSlide.badgeColor}`}
                >
                  <BadgeIcon size={14} className="animate-pulse" aria-hidden="true" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.16] mb-3 sm:mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  {activeSlide.titlePrefix}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200 drop-shadow-md">
                    {activeSlide.titleHighlight}
                  </span>{' '}
                  {activeSlide.titleSuffix}
                </h1>

                {/* Description */}
                <p className="text-slate-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] font-medium">
                  {activeSlide.description}
                </p>

                {/* Core Pillars / Highlights */}
                <div className="flex flex-wrap gap-2.5 mb-5 sm:mb-6">
                  {activeSlide.highlights.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-md text-xs sm:text-sm font-semibold transition-all hover:bg-slate-900/60 cursor-default ${color}`}
                    >
                      <Icon size={14} aria-hidden="true" />
                      <span className="drop-shadow-sm">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mb-5 sm:mb-6">
                  <Link
                    to={activeSlide.primaryCta.path}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-900/50 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {activeSlide.primaryCta.label} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    to={activeSlide.secondaryCta.path}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:border-white text-white hover:text-white font-semibold text-sm rounded-xl bg-slate-950/40 hover:bg-slate-900/60 backdrop-blur-md shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {activeSlide.secondaryCta.label}
                  </Link>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3.5 rounded-2xl bg-slate-950/45 backdrop-blur-md border border-white/15 shadow-xl max-w-xl">
                  {activeSlide.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-sky-300 drop-shadow-md leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-200 drop-shadow-sm mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: EACH SLIDE HAS A COMPLETELY UNIQUE INTERACTIVE CARD */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="relative mx-auto max-w-md w-full">
                  {activeSlide.type === 'mnc' && <MncPlacementsCard />}
                  {activeSlide.type === 'support' && <WorkSupportCard />}
                  {activeSlide.type === 'corporate' && <CorporateCareersCard />}
                  {activeSlide.type === 'tech' && <TechStackCard />}

                  {/* Floating Badges */}
                  <div className="flex items-center justify-between mt-3 px-2">
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-950/60 backdrop-blur-md rounded-full border border-white/20 shadow-md text-[11px] font-semibold text-white cursor-default">
                      <span className="text-amber-400">★</span> 4.9/5 Student Rating
                    </div>
                    <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-950/60 backdrop-blur-md rounded-full border border-white/20 shadow-md text-[11px] font-semibold text-white cursor-default">
                      <Star size={12} className="text-sky-300 fill-sky-300" aria-hidden="true" />{' '}
                      100+ Hiring Partners
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
