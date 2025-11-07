export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
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
          <ul className="text-sm space-y-2">
            <li>Email: info@mywebsite.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main Street, NY</li>
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
