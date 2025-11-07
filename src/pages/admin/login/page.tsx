import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6">
          <LoginForm className="loginForm" />
        </div>

        {/* Right Side - Image (hidden on small screens) */}
        <div className="hidden md:flex flex-1 items-center justify-center relative">
          <img
            src="https://images.pexels.com/photos/19566214/pexels-photo-19566214.jpeg"
            alt="Login Illustration"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}
