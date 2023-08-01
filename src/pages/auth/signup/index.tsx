import AuthForm from "@/components/AuthForm";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";

const SignUp = () => {
  const supbabase = createPagesBrowserClient();
  const router = useRouter()
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  type SignUpProps = {
    email: string;
    password: string;
  };

  const handleSignUp = async ({email,password}:SignUpProps) => {
    if (!EMAIL_REGEX.test(email)){
      toast.error("Invalid Email");
      return;
    } 
    if (!PASSWORD_REGEX.test(password)){
      toast.error(
        "Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter."
      );
      return;
    } 
    const { data, error } = await supbabase.auth.signUp({ email, password });
    if (error) {
      toast.error(error.message);
    } else {
      toast("Check you email for confirmation")
      toast.success("Successfully Signed Up");
      router.push("/movies");
    }
  }
  return (
    <AuthForm
      typeOf="Sign Up"
      onSubmit={handleSignUp}
    />
  );
};

export default SignUp;
