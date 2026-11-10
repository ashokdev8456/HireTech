import { motion } from 'framer-motion';
import {
  UserPlus,
  Compass,
  GraduationCap,
  MessageSquare,
  Building,
  CheckCircle2
} from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      title: 'Register With HireTech',
      desc: 'Submit your profile and share your educational details, technical skills, and career goals.',
      icon: UserPlus,
      color: 'from-blue-600 to-blue-700',
    },
    {
      number: '02',
      title: 'Choose Your Career Path',
      desc: 'Select your preferred track: Work Support, MNC IT/Non-IT, or Non-MNC career opportunities.',
      icon: Compass,
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      number: '03',
      title: 'Complete Professional Training',
      desc: 'Attend live interactive sessions, hands-on tasks, and real-time coding or domain practice.',
      icon: GraduationCap,
      color: 'from-sky-600 to-blue-700',
    },
    {
      number: '04',
      title: 'Prepare for Interviews',
      desc: 'Get your resume redesigned for ATS, participate in mock drills, and sharpen HR communications.',
      icon: MessageSquare,
      color: 'from-purple-600 to-indigo-700',
    },
    {
      number: '05',
      title: 'Attend Recruitment Drives',
      desc: 'Gain direct access to curated recruitment drives organized with our trusted hiring partners.',
      icon: Building,
      color: 'from-emerald-600 to-teal-700',
    },
    {
      number: '06',
      title: 'Get Placement Assistance',
      desc: 'Receive end-to-end guidance during offer release, salary negotiations, and company onboarding.',
      icon: CheckCircle2,
      color: 'from-blue-700 to-indigo-800',
    },
  ];

  return (
    <section className="py-4 sm:py-5 lg:py-6 bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
            Simple 6-Step Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2.5">
            How Our Services Work
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our streamlined process guides you from candidate onboarding to landing your desired corporate role.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg and above) */}
        <div className="hidden lg:block relative mb-6">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-9 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-400 rounded-full" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Step node icon button */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md shadow-blue-200/50 mb-4 border-4 border-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-300`}>
                    <IconComp size={24} />
                  </div>

                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                    Step {step.number}
                  </span>

                  <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-snug px-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed px-1">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (Visible below lg) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-blue-400 space-y-5">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.number}
                className="relative pl-6 sm:pl-8"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[19px] sm:-left-[21px] top-1 w-9 h-9 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md border-2 border-white`}>
                  <IconComp size={16} />
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Step {step.number}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">HireTech Pathway</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
