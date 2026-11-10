/**
 * Centralized site constants and metadata
 */

export const SITE_METADATA = {
  name: 'HireTech',
  tagline: "India's Trusted Career & Placement Platform",
  description:
    'HireTech provides technical work support, MNC & Non-MNC job-oriented training, and direct placement drives across React, Python, Java, and modern enterprise domains.',
  siteUrl: 'https://hiretech.com',
  location: 'Hyderabad, Telangana, India',
  phonePlaceholder: '+91 9347557729',
  emailPlaceholder: 'info@hiretech.com',
  workingHours: 'Monday – Saturday 9:00 AM – 6:00 PM',
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICE_CATEGORIES = [
  {
    id: 'work-support',
    title: 'Work Support',
    shortDesc: 'Live project bug fixing, code reviews, and architecture support across 8+ stacks.',
    link: '/services#work-support',
  },
  {
    id: 'mnc-placements',
    title: 'MNC Training & Placements',
    shortDesc: 'Structured IT & Non-IT career coaching, mock rounds, and recruitment drives.',
    link: '/services#mnc-placements',
  },
  {
    id: 'non-mnc-placements',
    title: 'Non-MNC Placements',
    shortDesc: 'Entry-level careers in data processing, customer support, and corporate operations.',
    link: '/services#non-mnc-placements',
  },
];
