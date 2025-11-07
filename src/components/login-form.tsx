import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({ className, ...props }) {
  return (
    <form
      className={cn(
        "flex w-full max-w-sm flex-col gap-6 bg-white p-6 rounded-2xl sm:max-w-md md:max-w-lg",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1 text-center">
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
          <Input id="password" type="password" required className="w-full" />
        </Field>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <FieldSeparator>Or continue with</FieldSeparator>

        <Button
          variant="outline"
          type="button"
          className="w-full flex items-center justify-center gap-2"
        >
          Login with GitHub
        </Button>

        <FieldDescription className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="#" className="underline underline-offset-4 text-blue-600">
            Sign up
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
