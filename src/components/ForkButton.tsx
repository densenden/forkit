import React, { useState } from 'react';
import Button from './Button';

interface ForkButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const ForkButton: React.FC<ForkButtonProps> = ({
  onClick,
  text = 'Fork',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (disabled || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
    
    if (onClick) onClick();
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={disabled}
      className={`relative overflow-hidden group ${className}`}
      aria-label="Fork this project"
    >
      <div className="flex items-center justify-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-5 h-5 transition-transform ${isAnimating ? 'animate-fork' : 'group-hover:rotate-12'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 6h12M8 12h12M8 18h12M3 6l1-1 1 1M3 12l1-1 1 1M3 18l1-1 1 1" 
          />
        </svg>
        <span>{text}</span>
      </div>
      
      {isAnimating && (
        <div className="absolute inset-0 bg-current opacity-20 animate-ripple rounded-sm" />
      )}
    </Button>
  );
};

export default ForkButton; 