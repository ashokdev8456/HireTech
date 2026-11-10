import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import useScrollToTop from '../hooks/useScrollToTop';

const Layout = ({ children }) => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-white text-gray-900 antialiased relative">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow w-full overflow-x-hidden focus:outline-none">
        {children}
      </main>
      <Footer />
      {/* Floating Bottom WhatsApp Action Icon */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
