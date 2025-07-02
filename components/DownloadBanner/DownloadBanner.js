import React, { useState, useEffect, useRef } from 'react';

const DownloadBanner = () => {
  const [isVisible, setIsVisible] = useState(true); // Start visible
  const hideTimer = useRef(null);

  useEffect(() => {
    // Set initial hide timer (3 seconds)
    hideTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const handleScroll = () => {
      // Clear any pending hide timer
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
      
      // Show the banner if it's hidden
      if (!isVisible) {
        setIsVisible(true);
      }
      
      // Set new hide timer (3 seconds after last scroll)
      hideTimer.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); // Only re-run when isVisible changes

  const bannerStyle = {
    position: 'fixed',
    top: isVisible ? '7vh' : '-7vh',
    left: 0,
    width: '100%',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    transition: 'top 0.5s ease-in-out',
    zIndex: 900,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
  };

  const buttonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={bannerStyle}>
      <span>Download Our App</span>
      <a 
        href="https://subsplash.com/livingoakschurchalvintx/app" 
        target="_blank" 
        rel="noopener noreferrer"
        style={buttonStyle}
      >
        Download Now
      </a>
    </div>
  );
};

export default DownloadBanner;