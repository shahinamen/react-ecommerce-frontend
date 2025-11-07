import { useEffect, useState } from "react";
import { getAllSettings } from "../lib/settings";
interface Settings {
  company_name?: string;
  email?: string;
  phone?: string;
  address_line_one?: string;
  address_line_two?: string;
  city?: string;
  country?: string;
  [key: string]: string | undefined; // allow extra keys
}

export default function Footer() {
  const [settings, setSettings] = useState<Settings>({});
  useEffect(() => {
    (async () => {
      const allSettings = await getAllSettings();
      setSettings(allSettings);
    })();
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            {settings.company_name || "No Name"}
          </h2>
          <p className="text-sm leading-relaxed">
            We are committed to delivering quality and excellence with every
            project. Our focus is on innovation, sustainability, and customer
            satisfaction.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h2>
          <ul className="text-sm space-y-1">
            <li>Email: {settings.email}</li>
            <li>Phone: {settings.phone}</li>
            <li>
              Address: {settings.address_line_one}, {settings.address_line_two},{" "}
              {settings.city}, {settings.country}
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get updates directly in your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l bg-gray-800 text-gray-100 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-r text-white hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
