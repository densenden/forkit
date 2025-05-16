/**
 * Theme utilities for handling theme changes and favicon updates
 */

/**
 * Updates the favicon based on the current theme
 * @param isDarkMode - Whether dark mode is active
 */
export const updateFavicon = (isDarkMode: boolean): void => {
  // Get all favicon links
  const faviconLinks = Array.from(document.querySelectorAll('link[rel*="icon"]'));
  
  // Remove existing favicons
  faviconLinks.forEach(link => {
    if (link.getAttribute('href')?.includes('favicon')) {
      link.remove();
    }
  });

  // Create new favicon links
  const svgFavicon = document.createElement('link');
  svgFavicon.rel = 'icon';
  svgFavicon.href = '/favicon.svg';
  svgFavicon.type = 'image/svg+xml';
  document.head.appendChild(svgFavicon);

  // Add theme-specific favicon as alternate
  const themeSpecificFavicon = document.createElement('link');
  themeSpecificFavicon.rel = 'alternate icon';
  themeSpecificFavicon.href = isDarkMode 
    ? '/images/favicon/favicon-dark.svg'
    : '/images/favicon/favicon-light.svg';
  themeSpecificFavicon.type = 'image/svg+xml';
  document.head.appendChild(themeSpecificFavicon);

  // Add fallback favicon
  const fallbackFavicon = document.createElement('link');
  fallbackFavicon.rel = 'icon';
  fallbackFavicon.href = '/favicon.ico';
  fallbackFavicon.sizes = 'any';
  document.head.appendChild(fallbackFavicon);

  // Update theme-color meta tag
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', isDarkMode ? '#092533' : '#2D6E7E');
  }
};

/**
 * Sets the theme based on user preference or system setting
 * @returns The current theme ('dark' or 'light')
 */
export const initializeTheme = (): 'dark' | 'light' => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    updateFavicon(true);
    return 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    updateFavicon(false);
    return 'light';
  }
};

/**
 * Toggle between light and dark themes
 * @returns The new theme ('dark' or 'light')
 */
export const toggleTheme = (): 'dark' | 'light' => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  if (isDarkMode) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateFavicon(false);
    return 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateFavicon(true);
    return 'dark';
  }
};

/**
 * Listen for system theme changes and update accordingly if no user preference is set
 */
export const setupThemeListener = (): void => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  mediaQuery.addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        updateFavicon(true);
      } else {
        document.documentElement.classList.remove('dark');
        updateFavicon(false);
      }
    }
  });
}; 