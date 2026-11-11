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
    badge: "India's Trusted Placement Platform",
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
      { label: 'Placed Candidates', value: '500+' },
      { label: 'Hiring Partners', value: '100+' },
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
      { label: 'Support Uptime', value: '24/7' },
      { label: 'Tech Frameworks', value: '15+' },
      { label: 'Resolution Rate', value: '100%' },
    ],
  },
  {
    id: 'non-mnc-placements',
    type: 'corporate',
    image: '/carousel/corporate-careers.jpg',
    imageAlt: 'Corporate team collaborating in non-IT business operations',
    badge: 'Fast-Track Entry for Freshers',
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
      { label: 'Avg Placement Time', value: '30-60D' },
      { label: 'Active Recruiters', value: '50+' },
      { label: 'Freshers Placed', value: '1000+' },
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
      { label: 'Live Capstones', value: '20+' },
      { label: 'Mentor Experience', value: '10+ Yrs' },
      { label: 'Demo Class', value: '100% Free' },
    ],
  },
];

/* -------------------------------------------------------------
   UNIQUE RIGHT-SIDE CARD COMPONENTS (Mobile & Desktop Optimized)
------------------------------------------------------------- */

// 1. MNC Placement & Recruiter Board
const MncPlacementsCard = () => (
  <div className="bg-slate-950/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl shadow-black/80 border border-blue-400/30 w-full">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30 shrink-0">
          <Building2 size={18} className="sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-sm sm:text-base font-bold text-white leading-tight">MNC Placement Board</div>
          <div className="text-[11px] sm:text-xs font-semibold text-sky-300">Tier-1 Corporate Hiring</div>
        </div>
      </div>
      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] sm:text-[11px] font-bold rounded-full">
        Active Drive
      </span>
    </div>

    {/* Recent Placement Highlight */}
    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-blue-400/25 mb-3">
      <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300 mb-0.5">
        <span className="font-semibold text-sky-200">Featured Offer Package</span>
        <span className="text-emerald-400 font-bold text-[10px] sm:text-xs">Verified Hire</span>
      </div>
      <div className="text-xl sm:text-2xl font-black text-white tracking-tight">₹6.5 - 18.5 LPA</div>
      <div className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">Software Engineer & Full Stack Analyst Roles</div>
    </div>

    {/* Top Recruiter Pills */}
    <div className="mb-3">
      <div className="text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
        Direct Recruiting Partners
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[11px] sm:text-xs">
        {['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS', 'Accenture'].map((company) => (
          <div
            key={company}
            className="py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 text-slate-100 font-semibold truncate"
          >
            {company}
          </div>
        ))}
      </div>
    </div>

    {/* Checklist */}
    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200 mb-3.5">
      <div className="flex items-center gap-1.5 truncate">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="truncate">98% ATS Resumes</span>
      </div>
      <div className="flex items-center gap-1.5 truncate">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="truncate">1-on-1 Mock Screens</span>
      </div>
      <div className="flex items-center gap-1.5 truncate">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="truncate">Direct Walk-ins</span>
      </div>
      <div className="flex items-center gap-1.5 truncate">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span className="truncate">Salary Guidance</span>
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/services#mnc-placements"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-900/40"
    >
      <span>Explore MNC Placement Tracks</span>
      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
    </Link>
  </div>
);

// 2. Live Technical Work Support Code/Terminal Console
const WorkSupportCard = () => (
  <div className="bg-slate-950/75 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl shadow-black/80 border border-emerald-400/30 w-full">
    {/* Terminal Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-300 ml-1.5 truncate max-w-[140px] sm:max-w-none">
          hiretech-debug.tsx
        </span>
      </div>
      <span className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] sm:text-[11px] font-bold rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        Mentor Live
      </span>
    </div>

    {/* Code snippet mock */}
    <div className="p-3 rounded-xl sm:rounded-2xl bg-slate-900/90 font-mono text-[10px] sm:text-xs text-slate-300 border border-white/10 mb-3 leading-relaxed overflow-x-auto">
      <div className="text-slate-500">// 1-on-1 live sprint blocker resolved</div>
      <div className="text-sky-300">
        <span className="text-purple-400">const</span> sprintFix = <span className="text-amber-300">await</span> mentor.resolveIssue({`{`}
      </div>
      <div className="pl-3 sm:pl-4 text-emerald-300">stack: <span className="text-orange-300">'React / Node / Java'</span>,</div>
      <div className="pl-3 sm:pl-4 text-emerald-300">status: <span className="text-cyan-300">'RESOLVED'</span>,</div>
      <div className="pl-3 sm:pl-4 text-emerald-300">duration: <span className="text-cyan-300">'25 mins'</span></div>
      <div className="text-sky-300">{`}`});</div>
    </div>

    {/* Live Ticket Resolution Stats */}
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center mb-3">
      <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm sm:text-base font-bold text-emerald-400">&lt; 30m</div>
        <div className="text-[9px] sm:text-[10px] text-slate-300">Resolution</div>
      </div>
      <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm sm:text-base font-bold text-sky-400">1-on-1</div>
        <div className="text-[9px] sm:text-[10px] text-slate-300">Live Call</div>
      </div>
      <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm sm:text-base font-bold text-indigo-400">100%</div>
        <div className="text-[9px] sm:text-[10px] text-slate-300">Private</div>
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/services#work-support"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-emerald-950/50"
    >
      <span>Request Live Work Support</span>
      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
    </Link>
  </div>
);

// 3. Non-MNC & Corporate Career Openings Portal
const CorporateCareersCard = () => (
  <div className="bg-slate-950/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl shadow-black/80 border border-purple-400/30 w-full">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30 shrink-0">
          <Briefcase size={18} className="sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-sm sm:text-base font-bold text-white leading-tight">Corporate Career Hub</div>
          <div className="text-[11px] sm:text-xs font-semibold text-purple-300">Immediate Joining Roles</div>
        </div>
      </div>
      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-purple-500/20 text-purple-300 border border-purple-400/30 text-[10px] sm:text-[11px] font-bold rounded-full">
        Direct Walk-ins
      </span>
    </div>

    {/* Job Openings Stack */}
    <div className="space-y-2 mb-3">
      {[
        { role: 'Data Management & MIS', count: '18 Slots', time: 'Immediate', badge: 'bg-blue-500/20 text-blue-300' },
        { role: 'Customer Success & Ops', count: '24 Slots', time: 'Day/Night', badge: 'bg-emerald-500/20 text-emerald-300' },
        { role: 'Back Office Support', count: '12 Slots', time: 'Fast-Track', badge: 'bg-purple-500/20 text-purple-300' },
      ].map((job) => (
        <div
          key={job.role}
          className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
        >
          <div className="truncate mr-2">
            <div className="text-xs sm:text-xs font-bold text-white truncate">{job.role}</div>
            <div className="text-[10px] text-slate-300">{job.count} • {job.time}</div>
          </div>
          <span className={`px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold border border-white/10 shrink-0 ${job.badge}`}>
            Walk-in
          </span>
        </div>
      ))}
    </div>

    {/* Fast 30-Day Timeline */}
    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-purple-950/40 border border-purple-400/20 mb-3 flex items-center justify-between text-center text-xs">
      <div>
        <div className="text-purple-300 font-bold text-[11px] sm:text-xs">Day 1-15</div>
        <div className="text-[9px] sm:text-[10px] text-slate-400">Drills & Prep</div>
      </div>
      <ArrowRight size={12} className="text-purple-400 shrink-0" />
      <div>
        <div className="text-purple-300 font-bold text-[11px] sm:text-xs">Day 20</div>
        <div className="text-[9px] sm:text-[10px] text-slate-400">Drive Slot</div>
      </div>
      <ArrowRight size={12} className="text-purple-400 shrink-0" />
      <div>
        <div className="text-emerald-400 font-bold text-[11px] sm:text-xs">Day 30</div>
        <div className="text-[9px] sm:text-[10px] text-slate-400">Offer Letter</div>
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/services#non-mnc-placements"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-950/50"
    >
      <span>View Non-MNC Openings</span>
      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
    </Link>
  </div>
);

// 4. Modern Tech Stacks & Academy Matrix
const TechStackCard = () => (
  <div className="bg-slate-950/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl shadow-black/80 border border-amber-400/30 w-full">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-amber-500/30 shrink-0">
          <Code2 size={18} className="sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-sm sm:text-base font-bold text-white leading-tight">Full Stack Academy</div>
          <div className="text-[11px] sm:text-xs font-semibold text-amber-300">2025 Industry Stacks</div>
        </div>
      </div>
      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[10px] sm:text-[11px] font-bold rounded-full">
        Hands-on Labs
      </span>
    </div>

    {/* Interactive 2x2 Tech Stacks Grid */}
    <div className="grid grid-cols-2 gap-2 mb-3">
      {[
        { name: 'React 19 & Next', tag: 'Frontend Mastery', icon: '⚛️', color: 'from-blue-500/20 to-cyan-500/20' },
        { name: 'Python & FastAPI', tag: 'Data & Cloud APIs', icon: '🐍', color: 'from-green-500/20 to-emerald-500/20' },
        { name: 'Java & Spring Boot', tag: 'Enterprise Microservices', icon: '☕', color: 'from-orange-500/20 to-red-500/20' },
        { name: 'Node.js & SQL', tag: 'Full Stack Arch', icon: '🗄️', color: 'from-purple-500/20 to-indigo-500/20' },
      ].map((stack) => (
        <div
          key={stack.name}
          className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${stack.color} border border-white/15`}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-sm sm:text-base">{stack.icon}</span>
            <div className="text-[11px] sm:text-xs font-bold text-white truncate">{stack.name}</div>
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-300 truncate">{stack.tag}</div>
        </div>
      ))}
    </div>

    {/* Real Capstone Project Showcase */}
    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-950/40 border border-amber-400/20 mb-3">
      <div className="flex items-center justify-between text-[11px] sm:text-xs text-amber-200 font-semibold mb-0.5">
        <span>Portfolio Capstone Build</span>
        <span className="text-emerald-400 font-bold text-[10px] sm:text-xs">20+ Projects</span>
      </div>
      <div className="text-[10px] sm:text-xs text-slate-200">
        Build production e-commerce, real-time chat, and auth microservices.
      </div>
    </div>

    {/* CTA */}
    <Link
      to="/technologies"
      className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-amber-950/50"
    >
      <span>Explore All Tech Curriculums</span>
      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
    </Link>
  </div>
);

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 25 : -25,
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
    x: direction < 0 ? 25 : -25,
    opacity: 0,
    transition: {
      duration: 0.2,
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
      className="relative pt-20 sm:pt-22 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-slate-900 text-white border-b border-slate-700/60"
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

        {/* 2. Responsive Gradient Overlay: Rich on mobile for clarity, elegant on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/90 lg:bg-gradient-to-r lg:from-slate-950/88 lg:via-slate-950/45 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foreground Carousel Slide Content */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center"
            >
              {/* Left Column Content */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                {/* Pill Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border backdrop-blur-md shadow-md text-xs sm:text-sm font-semibold mb-2.5 sm:mb-3.5 w-fit ${activeSlide.badgeColor}`}
                >
                  <BadgeIcon size={13} className="animate-pulse shrink-0" aria-hidden="true" />
                  <span className="truncate">{activeSlide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.16] mb-2.5 sm:mb-3.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  {activeSlide.titlePrefix}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200 drop-shadow-md">
                    {activeSlide.titleHighlight}
                  </span>{' '}
                  {activeSlide.titleSuffix}
                </h1>

                {/* Description */}
                <p className="text-slate-100 text-xs sm:text-base lg:text-lg leading-relaxed mb-3.5 sm:mb-5 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] font-medium">
                  {activeSlide.description}
                </p>

                {/* Mobile-Only Box: Displays right after the description text on mobile screens */}
                <div className="block lg:hidden my-3.5 w-full">
                  {activeSlide.type === 'mnc' && <MncPlacementsCard />}
                  {activeSlide.type === 'support' && <WorkSupportCard />}
                  {activeSlide.type === 'corporate' && <CorporateCareersCard />}
                  {activeSlide.type === 'tech' && <TechStackCard />}
                </div>

                {/* Core Pillars / Highlights */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
                  {activeSlide.highlights.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border backdrop-blur-md shadow-md text-[11px] sm:text-xs font-semibold cursor-default ${color}`}
                    >
                      <Icon size={13} aria-hidden="true" className="shrink-0" />
                      <span className="drop-shadow-sm">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
                  <Link
                    to={activeSlide.primaryCta.path}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-blue-900/50 hover:shadow-2xl hover:shadow-blue-500/40 transition-all text-center"
                  >
                    <span>{activeSlide.primaryCta.label}</span>
                    <ArrowRight size={15} aria-hidden="true" className="shrink-0" />
                  </Link>
                  <Link
                    to={activeSlide.secondaryCta.path}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-white/40 hover:border-white text-white hover:text-white font-semibold text-xs sm:text-sm rounded-xl bg-slate-950/40 hover:bg-slate-900/60 backdrop-blur-md shadow-lg transition-all text-center"
                  >
                    <span>{activeSlide.secondaryCta.label}</span>
                  </Link>
                </div>

                {/* Stats Bar (3 items per slide) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/55 backdrop-blur-md border border-white/15 shadow-xl w-full max-w-xl text-center">
                  {activeSlide.stats.map((stat) => (
                    <div key={stat.label} className="px-1">
                      <div className="text-lg sm:text-2xl lg:text-3xl font-black text-sky-300 drop-shadow-md leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-semibold text-slate-200 drop-shadow-sm mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Social Proof Badges on Mobile */}
                <div className="flex lg:hidden items-center justify-between mt-3 px-1">
                  <div className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-slate-950/70 backdrop-blur-md rounded-full border border-white/20 shadow-md text-[10px] font-semibold text-white cursor-default">
                    <span className="text-amber-400">★</span> 4.9/5 Student Rating
                  </div>
                  <div className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-slate-950/70 backdrop-blur-md rounded-full border border-white/20 shadow-md text-[10px] font-semibold text-white cursor-default">
                    <Star size={12} className="text-sky-300 fill-sky-300 shrink-0" aria-hidden="true" />{' '}
                    100+ Hiring Partners
                  </div>
                </div>
              </div>

              {/* Desktop-Only Right Column: Renders side-by-side on desktop */}
              <div className="hidden lg:flex lg:col-span-5 justify-center w-full mt-2 lg:mt-0">
                <div className="relative mx-auto max-w-md w-full">
                  {activeSlide.type === 'mnc' && <MncPlacementsCard />}
                  {activeSlide.type === 'support' && <WorkSupportCard />}
                  {activeSlide.type === 'corporate' && <CorporateCareersCard />}
                  {activeSlide.type === 'tech' && <TechStackCard />}

                  {/* Floating Badges */}
                  <div className="flex items-center justify-between mt-2.5 sm:mt-3 px-1 sm:px-2">
                    <div className="inline-flex items-center gap-1.5 py-1 px-2.5 sm:px-3 bg-slate-950/70 backdrop-blur-md rounded-full border border-white/20 shadow-md text-[10px] sm:text-[11px] font-semibold text-white cursor-default">
                      <span className="text-amber-400">★</span> 4.9/5 Student Rating
                    </div>
                    <div className="inline-flex items-center gap-1.5 py-1 px-2.5 sm:px-3 bg-slate-950/70 backdrop-blur-md rounded-full border border-white/20 shadow-md text-[10px] sm:text-[11px] font-semibold text-white cursor-default">
                      <Star size={12} className="text-sky-300 fill-sky-300 shrink-0" aria-hidden="true" />{' '}
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
