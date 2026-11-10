import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TechnologyCard from '../components/TechnologyCard';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import useSEO from '../hooks/useSEO';
import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Zap, ShieldCheck, Clock } from 'lucide-react';

const technologies = [
  {
    name: 'React.js',
    icon: '⚛️',
    color: 'bg-blue-100 text-blue-700',
    description: 'Modern frontend engineering, state hooks, and component architecture.',
  },
  {
    name: 'Python',
    icon: '🐍',
    color: 'bg-green-100 text-green-700',
    description: 'Backend web apps, automation scripting, and data engineering.',
  },
  {
    name: 'Java',
    icon: '☕',
    color: 'bg-orange-100 text-orange-700',
    description: 'Enterprise systems, Spring Boot microservices, and OOP fundamentals.',
  },
  {
    name: 'JavaScript',
    icon: '🟨',
    color: 'bg-yellow-100 text-yellow-700',
    description: 'Modern ES6+ syntax, asynchronous programming, and DOM manipulation.',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    color: 'bg-emerald-100 text-emerald-700',
    description: 'Server-side API architecture, Express middleware, and database drivers.',
  },
  {
    name: 'HTML & CSS',
    icon: '🌐',
    color: 'bg-red-100 text-red-700',
    description: 'Responsive web design, Flexbox/Grid layouts, and modern UI components.',
  },
  {
    name: 'SQL',
    icon: '🗄️',
    color: 'bg-cyan-100 text-cyan-700',
    description: 'Relational data modeling, advanced queries, indexes, and procedures.',
  },
  {
    name: 'Full Stack',
    icon: '🚀',
    color: 'bg-indigo-100 text-indigo-700',
    description: 'End-to-end web applications connecting UI, backend APIs, and databases.',
  },
];

const services = [
  {
    icon: '💻',
    title: 'Work Support',
    description: 'Get expert technical assistance across multiple technologies. Our senior professionals support your live projects in real-time.',
    features: ['React.js, Node.js & JavaScript', 'Python, Java & Database SQL', 'Code reviews & live bug fixing', 'Full Stack project architecture'],
    color: 'bg-blue-600',
    path: '/services#work-support',
  },
  {
    icon: '🏢',
    title: 'MNC Training & Placements',
    description: 'Comprehensive curriculum for IT and Non-IT roles with dedicated interview coaching and direct placement drives in top MNCs.',
    features: ['Frontend, Backend & Full Stack', 'Java, Python & QA Testing roles', 'HR, Operations & BD careers', 'ATS Resumes & Mock Interviews'],
    color: 'bg-indigo-600',
    path: '/services#mnc-placements',
  },
  {
    icon: '📋',
    title: 'Non-MNC Placements',
    description: 'Fast-track training and placement assistance for high-demand administrative, customer care, and data handling positions.',
    features: ['Data Entry & Back Office roles', 'Customer Support & Chat Support', 'Workplace communication drills', 'Direct company interview slots'],
    color: 'bg-cyan-600',
    path: '/services#non-mnc-placements',
  },
];

const whyUs = [
  { icon: Award, title: '95% Success Rate', desc: 'Industry-leading placement success rate with 500+ professionals placed.' },
  { icon: Users, title: 'Expert Trainers', desc: 'Learn directly from industry veterans with 10+ years of corporate experience.' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'Structured learning paths designed for rapid compensation and role growth.' },
  { icon: Zap, title: 'Fast Placement', desc: 'Candidates typically secure placement interviews within 60 days of training.' },
  { icon: ShieldCheck, title: '1-on-1 Guidance', desc: 'Personalized mentoring to identify your strengths and eliminate skill gaps.' },
  { icon: Clock, title: 'Flexible Batches', desc: 'Weekday and weekend options suited for both freshers and working professionals.' },
];

const Home = () => {
  useSEO({
    title: 'Career Training & Placement Solutions',
    description: 'Launch your dream career with HireTech. Technical work support, MNC interview drives, and Non-MNC immediate placement opportunities.',
    canonicalPath: '/',
  });

  return (
    <div className="w-full">
      <HeroSection />

      {/* Services Section */}
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
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From real-time technical work support to campus placement drives, HireTech guides every stage of your career advancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.08} />
            ))}
          </div>

          <div className="text-center mt-3.5 sm:mt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-bold text-sm rounded-xl transition-all"
            >
              Explore Complete Services Breakdown <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-5"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
              Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Technologies We Support & Train
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Master the in-demand tools and frameworks sought after by recruiters and engineering leads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {technologies.map((tech, i) => (
              <TechnologyCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                description={tech.description}
                showButton={true}
                buttonText="Get Support"
                to="/services#work-support"
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-4 sm:py-5 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
                Why HireTech
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2.5 leading-tight">
                Your Trusted Partner for{' '}
                <span className="text-gradient">Career Success</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                We combine structured skill training, one-on-one mentorship, and strong recruitment networks to help freshers and experienced professionals break into top companies.
              </p>

              <ul className="space-y-2 mb-5">
                {[
                  'Industry-aligned syllabus updated for 2026 hiring trends',
                  'One-on-one code reviews and technical resume restructuring',
                  'Live enterprise projects simulating corporate agile sprints',
                  'Direct interview referrals and post-placement support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-200 transition-all"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Right: Feature Cards Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group p-3.5 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between cursor-default"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Process Steps */}
      <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-5"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
              Simple Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Your Path to Success
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our 4-step pathway takes you from candidate registration to signing your offer letter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Register With Us', desc: 'Share your background, experience level, and preferred IT or Non-IT career focus.', icon: '📝' },
              { step: '02', title: 'Get Trained', desc: 'Attend interactive sessions covering practical tasks, technical stacks, or corporate communication.', icon: '📚' },
              { step: '03', title: 'Prepare & Practice', desc: 'Fine-tune your resume for ATS screening and undergo simulated mock interviews.', icon: '🎯' },
              { step: '04', title: 'Get Placed', desc: 'Interview directly with corporate recruitment partners and land your desired job role.', icon: '🏆' },
            ].map(({ step, title, desc, icon }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center cursor-default"
              >
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl mb-4 shadow-md shadow-blue-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <span>{icon}</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-[10px] font-black text-blue-700 shadow-sm">
                    {step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1.5">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection
        title="Ready to Launch Your Career?"
        subtitle="Join 2000+ students who have transformed their careers with HireTech's expert training and placement services."
        primaryLabel="Enroll Now"
        primaryPath="/contact"
        secondaryLabel="Explore Services"
        secondaryPath="/services"
      />
    </div>
  );
};

export default Home;
