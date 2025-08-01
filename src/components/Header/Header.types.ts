export interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
  navigationItems?: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
} 