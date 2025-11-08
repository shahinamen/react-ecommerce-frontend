"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ShoppingCart, User } from "lucide-react";
import { menuItems, SubMenuItem } from "@/lib/menu";
import { getAllSettings } from "@/lib/settings";

interface Settings {
  company_name?: string;
  email?: string;
  phone?: string;
  address_line_one?: string;
  city?: string;
  country?: string;
}

/* -------------------------------------------------
   Mock cart count – replace with real store/context
   ------------------------------------------------- */
const useCartCount = () => {
  const [count] = useState(3);
  return count;
};

/* -------------------------------------------------
   Header component
   ------------------------------------------------- */
export default function Header() {
  const [settings, setSettings] = useState<Settings>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<string[]>([]);
  const cartCount = useCartCount();

  useEffect(() => {
    (async () => {
      const allSettings = await getAllSettings();
      setSettings(allSettings);
    })();
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  /* -------------------------------------------------
     Desktop Dropdown – recursive, all levels on hover
     ------------------------------------------------- */
  const Dropdown = ({
    items,
    depth = 1,
  }: {
    items: SubMenuItem[];
    depth?: number;
  }) => (
    <div
      className={`
        absolute left-0 top-full mt-2 bg-gray-800 rounded-xl shadow-xl py-3 
        border border-gray-700 hidden group-hover:block z-50
        ${depth > 1 ? "left-full top-0 mt-0 ml-1" : "min-w-[200px]"}
        transition-all duration-200 ease-out
      `}
    >
      {items.map((sub) => (
        <div key={sub.name} className="relative group">
          <Link
            href={sub.href || "#"}
            className="
              flex items-center justify-between px-5 py-2.5 text-sm 
              hover:bg-gray-700/80 transition-colors duration-150
            "
          >
            <span>{sub.name}</span>
            {sub.children && <ChevronDown size={14} className="ml-2" />}
          </Link>

          {/* Recursive child dropdown */}
          {sub.children && <Dropdown items={sub.children} depth={depth + 1} />}
        </div>
      ))}
    </div>
  );

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* ---------- LOGO LEFT ---------- */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg" />
          <h1 className="text-xl font-bold tracking-tight">
            {settings.company_name || "MyStore"}
          </h1>
        </Link>

        {/* ---------- MENU CENTER (desktop) ---------- */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href || "#"}
                className="
                  flex items-center gap-1.5 text-sm font-medium
                  hover:text-blue-400 transition-colors duration-200
                "
              >
                <item.icon size={18} />
                {item.name}
                {item.submenu && <ChevronDown size={16} className="ml-1" />}
              </Link>

              {/* Show submenu on hover */}
              {item.submenu && <Dropdown items={item.submenu} />}
            </div>
          ))}
        </nav>

        {/* ---------- CART + USER RIGHT ---------- */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative hidden lg:flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition"
          >
            <ShoppingCart size={20} />
            <span className="hidden xl:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          <Link
            href="/login"
            className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition"
          >
            <User size={20} />
            <span className="hidden xl:inline">Account</span>
          </Link>
        </div>

        {/* ---------- MOBILE TOGGLE ---------- */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/cart" className="relative">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/login">
            <User size={22} />
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-5 py-4 space-y-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div
                  className="flex justify-between items-center py-2.5 cursor-pointer"
                  onClick={() =>
                    item.submenu ? toggleMobileDropdown(item.name) : undefined
                  }
                >
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>

                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileDropdowns.includes(item.name) ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile sub‑menu */}
                {item.submenu && mobileDropdowns.includes(item.name) && (
                  <MobileDropdown
                    items={item.submenu}
                    level={1}
                    toggle={toggleMobileDropdown}
                    openItems={mobileDropdowns}
                  />
                )}
              </div>
            ))}

            {/* Mobile auth links */}
            <div className="border-t border-gray-700 pt-3 mt-3 space-y-2">
              <Link
                href="/cart"
                className="flex items-center gap-2 py-2 text-sm font-medium"
              >
                <ShoppingCart size={18} />
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>

              <Link
                href="/login"
                className="flex items-center gap-2 py-2 text-sm font-medium"
              >
                <User size={18} />
                Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------
   Mobile recursive dropdown
   ------------------------------------------------- */
function MobileDropdown({
  items,
  level,
  toggle,
  openItems,
}: {
  items: SubMenuItem[];
  level: number;
  toggle: (name: string) => void;
  openItems: string[];
}) {
  const paddingLeft = `${(level + 1) * 1}rem`;

  return (
    <div className="space-y-1" style={{ paddingLeft }}>
      {items.map((sub) => (
        <div key={sub.name}>
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => sub.children && toggle(sub.name)}
          >
            <Link
              href={sub.href || "#"}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {sub.name}
            </Link>

            {sub.children && (
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  openItems.includes(sub.name) ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {sub.children && openItems.includes(sub.name) && (
            <MobileDropdown
              items={sub.children}
              level={level + 1}
              toggle={toggle}
              openItems={openItems}
            />
          )}
        </div>
      ))}
    </div>
  );
}
