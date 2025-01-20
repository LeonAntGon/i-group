// Navbar.types.ts
export interface MenuItem {
    text: string;
    href: string;
}

export interface NavbarProps {
  menuItems: MenuItem[];
  onLinkClick: () => void;
  // otras propiedades si las hay
}