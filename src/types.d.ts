// Component declarations
declare module './components/Navbar' {
  import React from 'react';
  interface NavbarProps {
    currentLang: string;
    routes: Array<{
      path: string;
      name: string;
      element: React.ReactNode;
    }>;
  }
  const Navbar: React.FC<NavbarProps>;
  export default Navbar;
}

declare module './components/Footer' {
  import React from 'react';
  const Footer: React.FC;
  export default Footer;
}

declare module './components/LanguageSwitcher' {
  import React from 'react';
  interface LanguageSwitcherProps {
    currentLang: string;
    setCurrentLang: (lang: string) => void;
  }
  const LanguageSwitcher: React.FC<LanguageSwitcherProps>;
  export default LanguageSwitcher;
}

declare module './components/SectionTitle' {
  import React from 'react';
  interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
  }
  const SectionTitle: React.FC<SectionTitleProps>;
  export default SectionTitle;
}

declare module './components/Button' {
  import React from 'react';
  type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'dark';
  interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    href?: string;
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }
  const Button: React.FC<ButtonProps>;
  export default Button;
}

// Page declarations
declare module './pages/HomePage' {
  import React from 'react';
  const HomePage: React.FC;
  export default HomePage;
}

declare module './pages/ManifestPage' {
  import React from 'react';
  const ManifestPage: React.FC;
  export default ManifestPage;
}

declare module './pages/VotingPage' {
  import React from 'react';
  const VotingPage: React.FC;
  export default VotingPage;
}

declare module './pages/TargetGroupsPage' {
  import React from 'react';
  const TargetGroupsPage: React.FC;
  export default TargetGroupsPage;
}

declare module './pages/SolutionsPage' {
  import React from 'react';
  const SolutionsPage: React.FC;
  export default SolutionsPage;
}

declare module './pages/PartnerPage' {
  import React from 'react';
  const PartnerPage: React.FC;
  export default PartnerPage;
}

declare module './pages/StoryPage' {
  import React from 'react';
  const StoryPage: React.FC;
  export default StoryPage;
}

declare module './pages/IdeasPage' {
  import React from 'react';
  const IdeasPage: React.FC;
  export default IdeasPage;
}

declare module './pages/WaitlistPage' {
  import React from 'react';
  const WaitlistPage: React.FC;
  export default WaitlistPage;
}

declare module './pages/BlogPage' {
  import React from 'react';
  const BlogPage: React.FC;
  export default BlogPage;
}

declare module './pages/AboutPage' {
  import React from 'react';
  const AboutPage: React.FC;
  export default AboutPage;
}

declare module './pages/ContactPage' {
  import React from 'react';
  const ContactPage: React.FC;
  export default ContactPage;
} 