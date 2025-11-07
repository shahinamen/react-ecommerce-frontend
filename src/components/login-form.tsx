import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Handle successful login here
      console.log("Login successful:", data);

      // You might want to store the token in localStorage
      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.log("Login error:", error);
      // Handle error (you might want to show an error message to the user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={cn(
        "flex w-full max-w-sm flex-col gap-6 bg-white p-6 rounded-2xl sm:max-w-md md:max-w-lg",
        className
      )}
      {...props}
      onSubmit={handleSubmit}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1 text-center">
        <img
          src="https://dev.camosack.com/assets/images/logo.png"
          alt=""
          className="w-32 h-auto"
        />
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      {/* Fields */}
      <FieldGroup className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="text-sm underline-offset-4 hover:underline text-blue-600"
            >
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>

        <FieldSeparator>Or continue with</FieldSeparator>

        <Button
          variant="outline"
          type="button"
          className="w-full flex items-center justify-center gap-2"
        >
          Login with GitHub
        </Button>
      </FieldGroup>
    </form>
  );
}
