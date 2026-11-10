import { useEffect } from 'react';
import { SITE_METADATA } from '../utils/constants';

/**
 * Custom hook to update document title, description, and canonical URL
 * Fulfills Rule 9 (SEO Rules) and Rule 4 (React Hook Rules).
 */
export const useSEO = ({
  title,
  description = SITE_METADATA.description,
  canonicalPath = '',
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title
      ? `${title} | ${SITE_METADATA.name}`
      : `${SITE_METADATA.name} | ${SITE_METADATA.tagline}`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 3. Update Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // 4. Update Canonical Link
    if (canonicalPath) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = `${SITE_METADATA.siteUrl}${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);
};

export default useSEO;
