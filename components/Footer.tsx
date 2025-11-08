import Link from "next/link";

export default function Footer() {
  return (
    <header className="fixed bottom-0 bg-gray-900 text-white py-4 px-8 flex justify-between items-center w-full">
      <h1 className="text-xl font-bold">MyWebsite</h1>
      <nav className="space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>
    </header>
  );
}
