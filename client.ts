import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@types/database";

/**
 * Client-side Supabase instance. Only ever holds the public anon key,
 * which is safe to ship to the browser — Row Level Security policies
 * (added in Phase 3's migrations) are what actually gate access to data,
 * not this key. Never import SUPABASE_SERVICE_ROLE_KEY here.
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
