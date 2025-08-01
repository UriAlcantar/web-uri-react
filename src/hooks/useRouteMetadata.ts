import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMetadata } from '../routes/routes';

export const useRouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[location.pathname as keyof typeof routeMetadata];
    
    if (metadata) {
      // Update page title
      document.title = metadata.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);
    } else {
      // Default title for unknown routes
      document.title = 'Mi Aplicación React';
    }
  }, [location.pathname]);
}; 