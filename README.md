# Inkwell

An independent community publishing platform (Medium-like concept, original
branding and code). Built incrementally — see "Project status" below.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Supabase (Postgres, Auth, Storage)
- Deployed on Vercel

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a Supabase project at https://supabase.com, then copy your
   project URL and anon key.

3. Copy the env template and fill it in:

   ```bash
   cp .env.example .env.local
   ```

   - `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from
     Supabase Project Settings → API. Safe to expose to the browser.
   - `SUPABASE_SERVICE_ROLE_KEY` — same page, "service_role" secret. Do
     **not** prefix with `NEXT_PUBLIC_`. Not used yet in Phase 1, but the
     env slot is reserved so it's never added carelessly later.

4. Run the dev server:

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the same environment variables from `.env.local` in the Vercel
   project's Settings → Environment Variables (Production + Preview).
4. Deploy.

## Project status

**Phase 1 — Foundation: done.** Project scaffold, Tailwind design system,
Supabase client helpers (browser + server), root layout, header, footer,
and a homepage shell.

Not built yet (by design — see the phased plan): auth, database schema/
migrations, articles, editor, dashboard, comments, notifications, search.
Nav links to those routes will 404 until their phase lands.

See the chat thread for the full phase-by-phase plan and database schema.
