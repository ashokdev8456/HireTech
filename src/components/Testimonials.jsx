import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonialData = [
  {
    name: 'Priya Sharma',
    role: 'Frontend Developer at Infosys',
    avatar: 'PS',
    avatarColor: 'from-pink-500 to-rose-600',
    rating: 5,
    text: "HireTech's training program was a game-changer for me. The React.js course was excellent, and their placement team helped me land a job at Infosys within 2 months of completing the training!",
  },
  {
    name: 'Rahul Kumar',
    role: 'Java Developer at Wipro',
    avatar: 'RK',
    avatarColor: 'from-blue-500 to-indigo-600',
    rating: 5,
    text: "The mock interview sessions and resume building support at HireTech were top-notch. I had 3 job offers within a month. Their guidance on Java development really helped me crack technical rounds.",
  },
  {
    name: 'Ananya Reddy',
    role: 'HR Executive at TCS',
    avatar: 'AR',
    avatarColor: 'from-purple-500 to-violet-600',
    rating: 5,
    text: "I was looking for a Non-IT job and HireTech's placement team was incredibly supportive. They trained me for interview skills and communication, and I got placed as an HR Executive at TCS!",
  },
  {
    name: 'Suresh Patel',
    role: 'Full Stack Developer at HCL',
    avatar: 'SP',
    avatarColor: 'from-green-500 to-emerald-600',
    rating: 5,
    text: "The Full Stack development course and work support from HireTech gave me the confidence to crack technical interviews. The trainers are industry experts who know exactly what companies look for.",
  },
];

const TestimonialCard = ({ name, role, avatar, avatarColor, rating, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay }}
    whileHover={{ y: -6 }}
    className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 p-6 flex flex-col h-full justify-between cursor-default"
  >
    <div>
      {/* Top Quote + Rating */}
      <div className="flex items-center justify-between mb-3">
        <Quote size={24} className="text-blue-100 fill-blue-100 group-hover:text-blue-200 group-hover:scale-110 transition-all duration-300" />
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">"{text}"</p>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
        {avatar}
      </div>
      <div>
        <div className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">{name}</div>
        <div className="text-[11px] text-gray-500">{role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-4 sm:py-5 lg:py-6 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Thousands of professionals have transformed their careers with HireTech. Here is what they have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonialData.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
