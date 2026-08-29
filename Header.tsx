import Link from "next/link";

// NOTE: this is a server component rendering a logged-out shell for now.
// Auth-aware rendering (avatar, notifications badge, "Write" gated to
// signed-in users) is wired up in Phase 2 once Supabase Auth lands —
// see the "Next phase" notes in chat.

const primaryNav = [
  { href: "/discover", label: "Discover" },
  { href: "/topics", label: "Topics" },
];

export function Header() {
  return (
    <header className="masthead-rule bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="stamp font-display text-sm">I</span>
            <span className="font-display text-xl tracking-tight text-ink">
              Inkwell
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className="hidden rounded-sm p-2 text-ink-soft transition-colors hover:text-ink sm:inline-flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </Link>
          <Link href="/auth/login" className="text-sm text-ink-soft transition-colors hover:text-ink">
            Sign in
          </Link>
          <Link href="/auth/signup" className="btn-primary">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
