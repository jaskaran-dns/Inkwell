import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";

/**
 * Server-side Supabase instance for use in Server Components, Route
 * Handlers, and Server Actions. Reads/writes the auth session via cookies.
 * Still uses the anon key — permission enforcement lives in Postgres RLS,
 * not in this client. The service-role key (full DB access, bypasses RLS)
 * is intentionally NOT wired up here; it's reserved for trusted, narrowly-
 * scoped server-only jobs added later (e.g. admin tooling) and must never
 * be reachable from a client component or exposed via NEXT_PUBLIC_.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // Called from a Server Component with no request context to
            // write to — safe to ignore as long as middleware also
            // refreshes the session (added in Phase 2).
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch {
            // See note above.
          }
        },
      },
    }
  );
}
