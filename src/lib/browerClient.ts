import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database";

const supabaseClient = createPagesBrowserClient<Database>();

export default supabaseClient
