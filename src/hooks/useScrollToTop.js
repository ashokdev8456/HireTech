import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to ensure every page route starts at the top,
 * or scrolls smoothly to anchor targets if a hash is present.
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
};

export default useScrollToTop;
