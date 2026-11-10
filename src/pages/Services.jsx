import { Link } from 'react-router-dom';
import ServicesHero from '../components/ServicesHero';
import TechnologyCard from '../components/TechnologyCard';
import JobCategoryCard from '../components/JobCategoryCard';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import useSEO from '../hooks/useSEO';
import {
  Code2,
  Building2,
  Headphones,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

const Services = () => {
  useSEO({
    title: 'Work Support & Placement Services',
    description: 'Technical work support in React, Node, Python, and Java, alongside MNC and Non-MNC job placement tracks.',
    canonicalPath: '/services',
  });

  // Technology cards for Service 1: Work Support
  const technologies = [
    {
      name: 'React.js',
      icon: '⚛️',
      color: 'bg-blue-100 text-blue-700',
      description: 'Support for modern frontend development, hook state management, and React applications.',
    },
    {
      name: 'Python',
      icon: '🐍',
      color: 'bg-green-100 text-green-700',
      description: 'Assistance with Python programming, scripting, automation, and development concepts.',
    },
    {
      name: 'Java',
      icon: '☕',
      color: 'bg-orange-100 text-orange-700',
      description: 'Support for Java programming, OOP architecture, and enterprise application development.',
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      color: 'bg-amber-100 text-amber-700',
      description: 'Core JavaScript programming, async patterns, DOM manipulation, and interactive web features.',
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: 'bg-emerald-100 text-emerald-700',
      description: 'Backend development, REST API design, Express workflows, and server-side support.',
    },
    {
      name: 'HTML & CSS',
      icon: '🌐',
      color: 'bg-rose-100 text-rose-700',
      description: 'Web markup, responsive styling, Flexbox/Grid systems, and modern UI layouts.',
    },
    {
      name: 'SQL',
      icon: '🗄️',
      color: 'bg-cyan-100 text-cyan-700',
      description: 'Relational database concepts, schema design, complex query support, and performance tuning.',
    },
    {
      name: 'Full Stack Development',
      icon: '🚀',
      color: 'bg-indigo-100 text-indigo-700',
      description: 'Comprehensive frontend, backend, authentication, and database integration support.',
    },
  ];

  // MNC IT Jobs
  const itJobRoles = [
    {
      title: 'Software Developer',
      icon: '💻',
      badge: 'IT Role',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'End-to-end software engineering across modern languages and enterprise frameworks.',
    },
    {
      title: 'Frontend Developer',
      icon: '🖥️',
      badge: 'IT Role',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'Building high-performance UI with React, JavaScript, modern CSS, and responsive designs.',
    },
    {
      title: 'Backend Developer',
      icon: '⚙️',
      badge: 'IT Role',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Server architecture, API endpoints, microservices, and database management.',
    },
    {
      title: 'Full Stack Developer',
      icon: '🚀',
      badge: 'IT Role',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Mastery of both client and server layers with end-to-end deployment skills.',
    },
    {
      title: 'Java Developer',
      icon: '☕',
      badge: 'IT Role',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Enterprise Java, Spring Boot, microservices architecture, and cloud deployment.',
    },
    {
      title: 'Python Developer',
      icon: '🐍',
      badge: 'IT Role',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Python backends, Django/FastAPI frameworks, data pipelines, and automation tools.',
    },
    {
      title: 'Software Testing Engineer',
      icon: '🧪',
      badge: 'IT Role',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      description: 'Manual and automated testing, test suites, bug tracking, and QA methodologies.',
    },
  ];

  // MNC Non-IT Jobs
  const nonItJobRoles = [
    {
      title: 'HR Executive',
      icon: '👥',
      badge: 'Non-IT',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Talent acquisition, onboarding coordination, payroll operations, and employee engagement.',
    },
    {
      title: 'Business Development Executive',
      icon: '📈',
      badge: 'Non-IT',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Lead generation, client negotiations, corporate sales, and market expansion.',
    },
    {
      title: 'Operations Executive',
      icon: '🏢',
      badge: 'Non-IT',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Process optimization, supply coordination, reporting, and daily operational excellence.',
    },
    {
      title: 'Customer Support Executive',
      icon: '🎧',
      badge: 'Non-IT',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      description: 'Resolving client queries, escalation management, and ensuring customer satisfaction.',
    },
    {
      title: 'Process Associate',
      icon: '📋',
      badge: 'Non-IT',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Handling back-office corporate processes, client documentation, and SLAs.',
    },
  ];

  // MNC Services List
  const mncServicesIncluded = [
    'Professional training programs',
    'Technical skill development',
    'Resume preparation',
    'Interview preparation',
    'Mock interviews',
    'Recruitment drives',
    'Job notifications',
    'Placement assistance',
  ];

  // Non-MNC Jobs
  const nonMncJobRoles = [
    {
      title: 'Data Entry Executive',
      icon: '⌨️',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Accurate and fast data processing, spreadsheets, and database entry tasks.',
    },
    {
      title: 'Telecalling Executive',
      icon: '📞',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Inbound & outbound communication, client calling, and telephone coordination.',
    },
    {
      title: 'Email Support Executive',
      icon: '📧',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Professional email drafting, ticket resolution, and customer communications.',
    },
    {
      title: 'Chat Support Executive',
      icon: '💬',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      description: 'Real-time live chat assistance, CRM management, and query resolution.',
    },
    {
      title: 'Back Office Executive',
      icon: '🗂️',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Document verification, file records, database updates, and admin reporting.',
    },
    {
      title: 'Customer Support Executive',
      icon: '🎧',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'Customer helpdesk operations, relationship management, and dispute handling.',
    },
    {
      title: 'Office Administrator',
      icon: '🏢',
      badge: 'Immediate Hiring',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Office supply handling, day-to-day operations, scheduling, and office records.',
    },
  ];

  // Non-MNC Services List
  const nonMncServicesIncluded = [
    'Basic job-oriented training',
    'Communication skills development',
    'English communication training',
    'Resume building',
    'Interview preparation',
    'Job assistance',
    'Placement support',
  ];

  return (
    <div className="w-full">
      {/* 1. Services Hero Introduction */}
      <ServicesHero />

      {/* 2. Service 1: Work Support */}
      <section id="work-support" className="py-4 sm:py-5 lg:py-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Code2 size={15} /> Service 01
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                Work Support
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Get professional technical support across different programming languages and technologies. HireTech helps candidates and professionals improve their technical knowledge and work-related skills.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-200 hover:-translate-y-0.5 transition-all whitespace-nowrap self-start md:self-auto"
            >
              Get Work Support <ArrowRight size={16} />
            </Link>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                description={tech.description}
                showButton={true}
                buttonText="Get Support"
                to="/contact"
                delay={index * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service 2: MNC Training & Placements */}
      <section id="mnc-placements" className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Building2 size={15} /> Service 02
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                MNC Training & Placements
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Prepare yourself for multinational company opportunities with HireTech's structured training, interview preparation, recruitment drives, and placement assistance.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-200 hover:-translate-y-0.5 transition-all whitespace-nowrap self-start md:self-auto"
            >
              Explore MNC Opportunities <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category A: IT Job Opportunities */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                IT
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">IT Job Opportunities</h3>
                <p className="text-xs text-gray-500">Core software engineering and development tracks</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {itJobRoles.map((job, idx) => (
                <JobCategoryCard key={job.title} {...job} delay={idx * 0.03} />
              ))}
            </div>
          </div>

          {/* Category B: Non-IT Job Opportunities */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                NIT
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Non-IT Job Opportunities</h3>
                <p className="text-xs text-gray-500">Corporate, operations, customer relations, and business tracks</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {nonItJobRoles.map((job, idx) => (
                <JobCategoryCard key={job.title} {...job} delay={idx * 0.03} />
              ))}
            </div>
          </div>

          {/* MNC Services Included Feature Strip */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">MNC Services Include</h4>
                <p className="text-xs text-gray-500">Everything provided throughout your MNC training journey</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {mncServicesIncluded.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/70 border border-gray-100">
                  <CheckCircle size={15} className="text-indigo-600 shrink-0" />
                  <span className="text-xs font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service 3: Non-MNC Training & Placements */}
      <section id="non-mnc-placements" className="py-4 sm:py-5 lg:py-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Headphones size={15} /> Service 03
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                Non-MNC Training & Placements
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Start your career with exciting Non-IT job opportunities. HireTech provides job-oriented training and placement assistance to help candidates enter the professional workforce.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm rounded-xl shadow-md shadow-cyan-200 hover:-translate-y-0.5 transition-all whitespace-nowrap self-start md:self-auto"
            >
              Find Non-MNC Jobs <ArrowRight size={16} />
            </Link>
          </div>

          {/* Non-MNC Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {nonMncJobRoles.map((job, idx) => (
              <JobCategoryCard key={job.title} {...job} delay={idx * 0.03} />
            ))}
          </div>

          {/* Non-MNC Services Included Feature Strip */}
          <div className="bg-gradient-to-br from-cyan-50/60 via-blue-50/40 to-white rounded-3xl p-6 sm:p-7 border border-cyan-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center">
                <Layers size={18} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Non-MNC Services Include</h4>
                <p className="text-xs text-gray-500">Comprehensive support for freshers and entry-level career transitions</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nonMncServicesIncluded.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-cyan-100/70 shadow-sm">
                  <CheckCircle size={15} className="text-cyan-600 shrink-0" />
                  <span className="text-xs font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How Our Services Work (Process Timeline) */}
      <ProcessTimeline />

      {/* 6. Why Choose HireTech? */}
      <WhyChooseUs />

      {/* 7. Final Call To Action Section */}
      <CTASection
        title="Ready to Take the Next Step in Your Career?"
        subtitle="Whether you're looking for technical support, MNC opportunities, or Non-MNC jobs, HireTech is here to help you move forward."
        primaryLabel="Contact Us"
        primaryPath="/contact"
        secondaryLabel="About HireTech"
        secondaryPath="/about"
      />
    </div>
  );
};

export default Services;
