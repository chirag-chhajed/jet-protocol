import AuthForm from "@/components/AuthForm";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";

const SignUp = () => {
  const supbabase = createPagesBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSignUp = async () => {
    const { data, error } = await supbabase.auth.signUp({ email, password });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully Signed Up");
      router.push("/movies");
    }
  }
  return (
    <AuthForm
      typeOf="Sign Up"
      onSubmit={() => toast.success("hello world")}
    />
  );
};

export default SignUp;
