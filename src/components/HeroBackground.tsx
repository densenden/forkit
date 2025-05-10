import React from 'react';

interface HeroBackgroundProps {
  imageSrc: string;
  children: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  position?: 'left' | 'center' | 'right';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageSrc,
  children,
  overlay = true,
  overlayOpacity = 'medium',
  position = 'left'
}) => {
  // Determine the opacity level for the overlay
  const getOverlayClass = () => {
    if (!overlay) return '';
    
    switch (overlayOpacity) {
      case 'light': return 'bg-black/30 dark:bg-black/40';
      case 'medium': return 'bg-black/50 dark:bg-black/60';
      case 'dark': return 'bg-black/70 dark:bg-black/80';
      default: return 'bg-black/50 dark:bg-black/60';
    }
  };

  // Determine content position class
  const getPositionClass = () => {
    switch (position) {
      case 'left': return 'justify-start text-left';
      case 'center': return 'justify-center text-center';
      case 'right': return 'justify-end text-right';
      default: return 'justify-start text-left';
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div className={`absolute inset-0 z-10 ${getOverlayClass()}`} />
      )}

      {/* Content container */}
      <div className={`relative z-20 flex items-center min-h-screen w-full ${getPositionClass()}`}>
        <div className="container mx-auto px-6 py-24">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroBackground; 