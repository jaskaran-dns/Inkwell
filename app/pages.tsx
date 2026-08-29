import Link from "next/link";
//nothing just to commit
export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">A place to write, not perform</p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Words worth
            <br />
            <span className="italic text-oxblood">slowing down</span> for.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Inkwell is an independent publishing platform: a calm, distraction-free
            place to write, and a discovery feed built around ideas worth reading
            — not the algorithm.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link href="/auth/signup" className="btn-primary">
              Start writing
            </Link>
            <Link href="/discover" className="btn-secondary">
              Discover articles
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow mb-3">Foundation phase</p>
          <h2 className="font-display text-2xl text-ink">
            Featured, Trending, and Latest are next
          </h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            This build is intentionally starting with the design system, layout
            shell, and Supabase wiring — no articles exist in the database yet,
            so this page won&apos;t fabricate any. Once the schema lands in Phase 3,
            these sections will render real published articles, ranked by the
            trending algorithm described in the project plan.
          </p>
        </div>
      </section>
    </div>
  );
}
