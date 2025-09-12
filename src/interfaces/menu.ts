export interface MenuItem {
  title: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
  disabled?: boolean;
  badge?: string | number;
  badgeColor?: string;
  permissions?: string[];
}

export interface TabbarItem {
  name: string;
  label: string;
  icon: string;
  path?: string;
}
