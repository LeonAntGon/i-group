// navbar.types.ts
export interface NavbarProps {
  menuItems: {
    text: string;
    href: string;
  }[];
  onLinkClick: () => void;
}