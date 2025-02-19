"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard" />
    </div>
  );
}
