import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { NAV_LINKS, SITE_METADATA } from '../utils/constants';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const services = [
    { name: 'Work Support', path: '/services#work-support' },
    { name: 'MNC Training & Placements', path: '/services#mnc-placements' },
    { name: 'Non-MNC Placements', path: '/services#non-mnc-placements' },
    { name: 'Resume Building', path: '/services#mnc-placements' },
    { name: 'Interview Preparation', path: '/services#mnc-placements' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-block mb-4 p-2 sm:p-2.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="HireTech Home"
            >
              <img
                src="/logo-clean.png"
                alt="HireTech - Training & Placements"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
              Empowering careers through expert training, placement assistance, and technical work support across India.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 group-hover:bg-blue-400 transition-colors" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 group-hover:bg-blue-400 transition-colors" aria-hidden="true" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {SITE_METADATA.location}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919999999999"
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                >
                  {SITE_METADATA.phonePlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_METADATA.emailPlaceholder}`}
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                >
                  {SITE_METADATA.emailPlaceholder}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} HireTech. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:underline">Help & Support</Link>
            <span className="text-gray-700" aria-hidden="true">•</span>
            <Link to="/about" className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:underline">Career Advisors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
