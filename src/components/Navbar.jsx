import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Code2, Building2, Headphones, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES_DROPDOWN = [
  {
    title: 'Work Support',
    subtitle: 'Technical assistance in React, Java, Python & SQL',
    badge: 'Live Mentors',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Code2,
    iconColor: 'bg-blue-500 text-white',
    hash: '#work-support',
  },
  {
    title: 'MNC Training & Placements',
    subtitle: 'Structured IT & Non-IT training with campus drives',
    badge: 'Top Recruiters',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: Building2,
    iconColor: 'bg-indigo-600 text-white',
    hash: '#mnc-placements',
  },
  {
    title: 'Non-MNC Placements',
    subtitle: 'Fast-track jobs in data entry, operations & customer support',
    badge: 'Immediate Hiring',
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    icon: Headphones,
    iconColor: 'bg-cyan-600 text-white',
    hash: '#non-mnc-placements',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Desktop hover handlers with smooth grace period
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  // Service item click handler: handles both same-page scrolling and cross-page navigation
  const handleServiceClick = (e, hash) => {
    e.preventDefault();
    setIsServicesOpen(false);
    setIsOpen(false);
    setIsMobileServicesOpen(false);

    if (location.pathname === '/services') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `/services${hash}`);
      }
    } else {
      navigate(`/services${hash}`);
    }
  };

  const isServicesActive = location.pathname === '/services';

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled
          ? 'shadow-md shadow-gray-200/60 border-b border-gray-200'
          : 'border-b border-gray-200/70 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              setIsServicesOpen(false);
            }}
            className="flex items-center group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="HireTech Home"
          >
            <img
              src="/logo-clean.png"
              alt="HireTech - Training & Placements"
              className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-103 drop-shadow-2xs"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2" role="menubar">
            {/* Home */}
            <NavLink
              to="/"
              role="menuitem"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'text-blue-700 bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* About Us */}
            <NavLink
              to="/about"
              role="menuitem"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'text-blue-700 bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Services Dropdown Item */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/services"
                id="services-menu-button"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                role="menuitem"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isServicesActive
                    ? 'text-blue-700 bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-blue-700' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                />
              </NavLink>

              {/* Desktop Hover Mega-Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    role="menu"
                    aria-labelledby="services-menu-button"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-84 lg:w-96 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/70 border border-gray-100 p-2.5 ring-1 ring-black/5 overflow-hidden">
                      {/* Services List */}
                      <div className="space-y-1">
                        {SERVICES_DROPDOWN.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={`/services${item.hash}`}
                              onClick={(e) => handleServiceClick(e, item.hash)}
                              role="menuitem"
                              className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-gray-100 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                            >
                              <div
                                className={`w-10 h-10 rounded-xl ${item.iconColor} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                              >
                                <IconComp size={18} aria-hidden="true" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                  <span className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                  </span>
                                  <span
                                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                                  >
                                    {item.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 leading-snug">
                                  {item.subtitle}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Dropdown Footer CTA */}
                      <div className="mt-2 pt-2 border-t border-gray-100 px-2 flex items-center justify-between text-xs">
                        <Link
                          to="/services"
                          onClick={() => setIsServicesOpen(false)}
                          className="w-full inline-flex items-center justify-between py-1.5 px-2 text-blue-700 font-semibold hover:bg-blue-50/70 rounded-lg transition-colors group"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us */}
            <NavLink
              to="/contact"
              role="menuitem"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'text-blue-700 bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-blue-300 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isServicesActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180 text-blue-700' : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Sub-services list */}
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-3 pr-1 py-1 space-y-1"
                    >
                      {SERVICES_DROPDOWN.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <a
                            key={item.title}
                            href={`/services${item.hash}`}
                            onClick={(e) => handleServiceClick(e, item.hash)}
                            className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50/70 transition-colors"
                          >
                            <div className={`w-7 h-7 rounded-lg ${item.iconColor} flex items-center justify-center shrink-0`}>
                              <IconComp size={14} />
                            </div>
                            <span className="truncate">{item.title}</span>
                          </a>
                        );
                      })}
                      <Link
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="block text-xs font-bold text-blue-600 hover:underline px-2 pt-1"
                      >
                        All Services Page →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`
                }
              >
                Contact Us
              </NavLink>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl text-center shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
