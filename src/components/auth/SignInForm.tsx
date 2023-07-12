"use client";

import React from "react";
import { signIn } from "next-auth/react";

import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import { toast } from "react-hot-toast";

export default function SignInForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      isLoading={isLoading}
      type="button"
      className="max-w-sm mx-auto w-full"
      onClick={loginWithGoogle}
    >
      {!isLoading && <Icons.Google className="w-6 h-6 mr-4" />}
      Log in with Google
    </Button>
  );
}
