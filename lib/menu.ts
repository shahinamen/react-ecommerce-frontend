import {
  Home,
  Info,
  ShoppingBag,
  Phone,
} from "lucide-react";

export interface SubMenuItem {
  name: string;
  href?: string;
  children?: SubMenuItem[];
}

export interface MenuItem {
  name: string;
  href?: string;
  icon: React.ElementType;
  submenu?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
  {
    name: "Shop",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
  },
];
