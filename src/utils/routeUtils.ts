import { navigationItems } from '../routes/routes';

// Type for navigation items
export interface NavigationItem {
  path: string;
  label: string;
  exact: boolean;
}

// Check if a route is active
export const isRouteActive = (currentPath: string, routePath: string, exact: boolean = false): boolean => {
  if (exact) {
    return currentPath === routePath;
  }
  return currentPath.startsWith(routePath);
};

// Get navigation items
export const getNavigationItems = (): NavigationItem[] => {
  return navigationItems;
};

// Get current route info
export const getCurrentRouteInfo = (pathname: string) => {
  const navItem = navigationItems.find(item => 
    isRouteActive(pathname, item.path, item.exact)
  );
  
  return navItem || null;
};

// Validate route path
export const isValidRoute = (path: string): boolean => {
  return navigationItems.some(item => item.path === path);
};

// Generate breadcrumbs
export const generateBreadcrumbs = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ path: '/', label: 'Inicio' }];
  
  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    const navItem = navigationItems.find(item => item.path === currentPath);
    if (navItem) {
      breadcrumbs.push({ path: currentPath, label: navItem.label });
    }
  });
  
  return breadcrumbs;
}; 