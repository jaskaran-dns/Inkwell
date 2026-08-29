import Link from "next/link";

const columns = [
  {
    title: "Read",
    links: [
      { href: "/discover", label: "Discover" },
      { href: "/topics", label: "Topics" },
      { href: "/search", label: "Search" },
    ],
  },
  {
    title: "Write",
    links: [
      { href: "/write", label: "Start writing" },
      { href: "/dashboard", label: "Dashboard" },
    ],
  },
  {
    title: "Inkwell",
    links: [
      { href: "/about", label: "About" },
      { href: "/auth/signup", label: "Get started" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="stamp font-display text-xs">I</span>
              <span className="font-display text-lg text-ink">Inkwell</span>
            </div>
            <p className="mt-3 max-w-[22ch] text-sm text-ink-soft">
              An independent place to write and be read.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow mb-3">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Inkwell. All rights reserved.</span>
          <span>Built for writers, not algorithms.</span>
        </div>
      </div>
    </footer>
  );
}
