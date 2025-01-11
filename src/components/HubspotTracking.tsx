import { useEffect } from 'react';

const HubspotTracking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js.hs-scripts.com/48483794.js';
    
    // Only add the script if it doesn't already exist
    if (!document.getElementById('hs-script-loader')) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup not needed as we want the script to persist across pages
    };
  }, []);

  return null;
};

export default HubspotTracking;