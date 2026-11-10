import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="map-section" className="py-4 sm:py-5 lg:py-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-2">
            Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Find Us
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Connect with the HireTech team in Hyderabad, Telangana, India.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg shadow-blue-50/50 bg-slate-100">
          {/* Top Address Overlay Bar */}
          <div className="bg-white/95 backdrop-blur-md px-5 py-3 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900">HireTech Career Platform</div>
                <div className="text-[11px] text-gray-500">Hyderabad, Telangana, India</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Hyderabad,Telangana,India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors"
            >
              <Navigation size={13} /> Open in Google Maps
            </a>
          </div>

          {/* Embedded Google Maps */}
          <div className="w-full h-72 sm:h-80 md:h-96">
            <iframe
              title="HireTech Hyderabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169822557!2d78.24323209804826!3d17.412299801456257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
