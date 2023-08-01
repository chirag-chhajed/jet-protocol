import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { toast } from "sonner";

const Header = () => {
  const router = useRouter();
  const supabase = createPagesBrowserClient();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Failed to logout");
    } else {
      toast("Successfully logged out");
      router.push("/");
    }
  };

  return (
    <header className="flex justify-between items-center bg-[#141414] py-4 px-4 md:px-5">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#f0f0f0] font-sans">
        MovieMania
      </h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-transparent border border-white rounded-md hover:bg-red-600 hover:text-white hover:border-transparent focus:outline-none"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
