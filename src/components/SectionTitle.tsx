import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  hideUnderline?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  hideUnderline = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-lexend font-semibold text-3xl md:text-4xl text-slate-900 dark:text-white mb-4 ${centered ? 'text-center' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mt-2">
          {subtitle}
        </p>
      )}
      {!hideUnderline && (
        <div className={`h-1 w-16 bg-primary dark:bg-primary-400 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
      )}
    </div>
  );
};

export default SectionTitle; 