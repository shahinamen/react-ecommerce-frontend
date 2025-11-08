import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
