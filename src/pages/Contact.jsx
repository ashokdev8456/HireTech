import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ServiceEnquiry from '../components/ServiceEnquiry';
import MapSection from '../components/MapSection';
import WhatsAppCTA from '../components/WhatsAppCTA';
import CTASection from '../components/CTASection';
import useSEO from '../hooks/useSEO';

const getInitialService = (search) => {
  const params = new URLSearchParams(search);
  const serviceParam = params.get('service');
  if (serviceParam) {
    if (serviceParam.toLowerCase().includes('work')) return 'Work Support';
    if (serviceParam.toLowerCase().includes('mnc') && !serviceParam.toLowerCase().includes('non')) return 'MNC Training & Placements';
    if (serviceParam.toLowerCase().includes('non-mnc')) return 'Non-MNC Training & Placements';
  }
  return '';
};

const Contact = () => {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with HireTech for technical work support, career training inquiries, and placement support.',
    canonicalPath: '/contact',
  });

  const location = useLocation();
  const [selectedService, setSelectedService] = useState(() => getInitialService(location.search));

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="w-full">
      {/* 1. Contact Page Hero Section with Direct WhatsApp Form */}
      <ContactHero selectedService={selectedService} />

      {/* 2. Contact Information Cards */}
      <ContactInfo />

      {/* 3. Service Enquiry Selection Section */}
      <ServiceEnquiry onSelectService={handleSelectService} />

      {/* 4. Google Maps Section */}
      <MapSection />

      {/* 5. WhatsApp Quick Assistance Section */}
      <WhatsAppCTA />

      {/* 6. Final Call To Action Section */}
      <CTASection
        title="Your Future Starts With a Conversation"
        subtitle="Take the first step towards your professional career. Contact HireTech and discover the right opportunities for you."
        primaryLabel="Explore Our Services"
        primaryPath="/services"
        secondaryLabel="About HireTech"
        secondaryPath="/about"
      />
    </div>
  );
};

export default Contact;
