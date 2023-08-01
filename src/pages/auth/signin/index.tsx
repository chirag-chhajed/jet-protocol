import AuthForm from "@/components/AuthForm";
import { createPagesBrowserClient, createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx);
  const { data: session } = await supabase.auth.getUser();
  if (session) {
    return {
      redirect: {
        destination: "/movies",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

