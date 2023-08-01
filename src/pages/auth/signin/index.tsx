import AuthForm from "@/components/AuthForm";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { toast } from "sonner";

const SignIn = () => {
  const supabase = createPagesBrowserClient();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const router = useRouter()

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  // console.log(email, password);
  type SignInProps = {
    email: string;
    password: string;
  }

  // assing the type to the function

  const handleSignIn = async ({email,password}:SignInProps) => {
   
    if (!EMAIL_REGEX.test(email)) return toast.error("Invalid Email");
    const {data,error} = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(error.message);
    }else{
      toast.success("Successfully Logged In");
      router.push("/movies");
    }

  };

  return (
    <AuthForm
      typeOf="Sign In"
      onSubmit={handleSignIn}
    />
  );
};

export default SignIn;
