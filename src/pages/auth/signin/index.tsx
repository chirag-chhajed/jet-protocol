import AuthForm from "@/components/AuthForm";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { toast } from "sonner";

const SignIn = () => {
  const supabase = createPagesBrowserClient();
  const router = useRouter();

  type SignInProps = {
    email: string;
    password: string;
  };

  // assing the type to the function

  const handleSignIn = async ({ email, password }: SignInProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully Logged In");
      router.push("/movies");
    }
  };

  return <AuthForm typeOf="Sign In" onSubmit={handleSignIn} />;
};

export default SignIn;
