import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "产品服务" },
  { href: "/process", label: "交付流程" },
  { href: "/guarantee", label: "服务保障" },
  { href: "/cases", label: "客户案例" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系咨询" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
            海
          </span>
          <span className="text-sm font-semibold tracking-wide text-ink sm:text-base">
            {site.shortName}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary px-4 py-2 text-sm">
          免费评估需求
        </Link>
      </div>
    </header>
  );
}
