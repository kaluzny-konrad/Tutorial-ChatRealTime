"use client";

import React from "react";
import { signIn } from "next-auth/react";

import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import { useToast } from "@/hooks/use-toast";

export default function SignInForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      //   await signIn("google");
      throw new Error("This is a test error.");
    } catch (error) {
      toast({
        title: "There was a problem.",
        description:
          "There was a problem logging in with Google. Please try again later.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  }

  return (
    <Button
      isLoading={isLoading}
      type="button"
      className="max-w-sm mx-auto w-full"
      onClick={loginWithGoogle}
    >
      <Icons.Google className="w-6 h-6 mr-4" />
      Log in with Google
    </Button>
  );
}
