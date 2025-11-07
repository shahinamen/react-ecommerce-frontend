export default function GuestFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t py-6 z-50">
      <div className="max-w-6xl mx-auto px-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Your Company
      </div>
    </footer>
  );
}
