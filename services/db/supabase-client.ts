import { createClient } from "@supabase/supabase-js";
import type { Database } from "types/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type TypeSupabaseClient = SupabaseClient<Database>;
