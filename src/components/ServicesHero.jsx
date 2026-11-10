import { ArrowDown, Code2, Building2, Headphones } from 'lucide-react';

const ServicesHero = () => {
  const quickLinks = [
    {
      title: 'Work Support',
      href: '#work-support',
      icon: Code2,
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400',
      badge: 'Technical Assistance',
    },
    {
      title: 'MNC Training & Placements',
      href: '#mnc-placements',
      icon: Building2,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400',
      badge: 'IT & Non-IT Jobs',
    },
    {
      title: 'Non-MNC Placements',
      href: '#non-mnc-placements',
      icon: Headphones,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-400',
      badge: 'Entry-Level Careers',
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-20 sm:pt-22 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 border-b border-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Comprehensive Career Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-bold text-gray-800 mb-3 leading-snug">
            Empowering Careers Through Technology, Training & Placement Opportunities.
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            At HireTech, we provide technical work support, professional training, and placement assistance to help candidates achieve their career goals. Explore our services and discover the right opportunities for your future.
          </p>

          {/* Quick Jump Anchor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto">
            {quickLinks.map((item) => {
              const IconComp = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex flex-col items-center p-3.5 rounded-2xl border bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group ${item.color}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                    <IconComp size={18} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-0.5">
                    {item.badge}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                    {item.title}
                    <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
