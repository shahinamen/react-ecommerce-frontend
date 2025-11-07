import GuestFooter from "@/components/GuestFooter";
import GuestHeader from "@/components/GuestHeader";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <GuestHeader />
      <main className="max-w-6xl mx-auto p-4">{children}</main>
      <GuestFooter />
    </div>
  );
}
