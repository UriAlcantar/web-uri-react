import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import { useRouteMetadata } from '../../hooks/useRouteMetadata';
import { useLanguage } from '../../contexts/LanguageContext';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Use route metadata hook for SEO
  useRouteMetadata();

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        title="Uri Alcantar" 
        onMenuClick={handleMenuClick}
        currentPath={location.pathname}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 