import { AppPathnames } from "@/config/app-config";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {
  href: AppPathnames;
}

export interface SidebarNavItem extends NavItemWithChildren {}
