import { Button } from "@/components/ui/button";
import { Camera, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllSettings } from "../lib/settings";

interface Settings {
  company_name?: string;
}

export default function Header() {
  const [settings, setSettings] = useState<Settings>({});
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    (async () => {
      const allSettings = await getAllSettings();
      setSettings(allSettings);
    })();
  }, []);

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-3">
          <Camera className="mr-1" />
          {settings.company_name || "Company Name"}
        </h1>

        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <a href="/about" className="hover:text-primary">
            About
          </a>
          <a href="/services" className="hover:text-primary">
            Services
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </nav>

        <Button variant="default" className="hidden md:block">
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <a href="/about" className="hover:text-primary">
              About
            </a>
            <a href="/services" className="hover:text-primary">
              Services
            </a>
            <a href="/contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
