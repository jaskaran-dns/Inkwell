/**
 * This file is a stand-in for the real generated types.
 *
 * Once the Phase 3 migrations are applied to your Supabase project, replace
 * this file by running:
 *
 *   npx supabase gen types typescript --project-id <your-project-id> > types/database.ts
 *
 * Until then, `Database` is left unconstrained so the Supabase clients in
 * lib/supabase/ compile, without inventing fake table shapes that don't
 * exist yet.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Database = supabase;
