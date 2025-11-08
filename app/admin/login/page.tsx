import { LoginForm } from "@/components/login-form";
import Image from "next/image";
export default function AdminAuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6">
          <LoginForm className="loginForm" />
        </div>

        {/* Right Side - Image (hidden on small screens) */}
        <div className="hidden md:flex flex-1 items-center justify-center relative">
          <Image
            src="/images/login-page-background.jpeg"
            alt="Login Illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}
