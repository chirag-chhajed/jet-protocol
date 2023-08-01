import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { toast } from "sonner";

const Header = () => {
    const router = useRouter();
    const supabase = createPagesBrowserClient();
    const handleLogout = async () => {
        
        const { error } = await supabase.auth.signOut();
        if (error) {
            toast.error("Failed to logout")
        } else {
            toast("Successfully logged out")
            router.push("/")          
        }
    }
  return (
    <header className="flex justify-between items-center bg-[#141414] py-4 px-4 md:px-8 lg:px-10">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#f0f0f0] font-playFair italic">
        MovieMania
      </h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
