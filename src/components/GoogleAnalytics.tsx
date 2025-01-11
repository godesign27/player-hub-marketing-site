import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Add gtag script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-2WSP9QSF4P';
    
    // Add configuration script
    const configScript = document.createElement('script');
    configScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2WSP9QSF4P');
    `;
    
    // Only add scripts if they don't already exist
    if (!document.querySelector('script[src*="googletagmanager.com/gtag"]')) {
      document.head.appendChild(gtagScript);
      document.head.appendChild(configScript);
    }

    return () => {
      // Cleanup not needed as we want the script to persist
    };
  }, []);

  return null;
};

export default GoogleAnalytics;