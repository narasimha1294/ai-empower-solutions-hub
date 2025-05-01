
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);

    // Clean up on unmount
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
