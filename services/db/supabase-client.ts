import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "types/supabase";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type TypeSupabaseClient = SupabaseClient<Database>;
