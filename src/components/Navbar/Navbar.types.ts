// Navbar.types.ts
export interface MenuItem {
    text: string;
    href: string;
}

export interface LinksNavBarProps {
  menuItems: MenuItem[];
  onLinkClick: () => void;
}