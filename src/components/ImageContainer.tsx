import React from 'react';

type AspectRatio = '3:2' | '4:3' | '16:9' | '1:1';

interface ImageContainerProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  className?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  aspectRatio = '3:2',
  className = '',
  overlay = false,
  children
}) => {
  // Calculate padding based on aspect ratio
  const getPaddingTop = (): string => {
    switch (aspectRatio) {
      case '3:2': return '66.67%'; // (2/3) * 100%
      case '4:3': return '75%';    // (3/4) * 100%
      case '16:9': return '56.25%'; // (9/16) * 100%
      case '1:1': return '100%';
      default: return '66.67%';    // Default to 3:2
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ paddingTop: getPaddingTop() }}
    >
      {/* Actual image or placeholder */}
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center">
          <span className="text-white text-sm opacity-80">{alt || 'Image'}</span>
        </div>
      )}
      
      {/* Optional overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-dark/40 dark:bg-dark/60"></div>
      )}
      
      {/* Children content (for text over image, etc) */}
      {children && (
        <div className="absolute inset-0 z-10 flex flex-col">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageContainer; 