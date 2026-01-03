import Link from "next/link";
import { Menu } from "lucide-react";

import { GradientBorderLink } from "@/components/ui/GradientBorder";

const navItems: Array<{ label: string; href: string }> = [
  { label: "Главная", href: "/#top" },
  { label: "Документация", href: "/#docs" },
  { label: "Контакты", href: "/#contacts" },
  { label: "О нас", href: "/#about" },
  { label: "Цены", href: "/#pricing" },
  { label: "Поддержка", href: "/#support" },
];

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/25">
      <div
        className="tf-page-padding w-full"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "4rem",
          width: "100%",
          paddingInline: "clamp(16px, 3vw, 40px)",
          fontSize: "15px",
        }}
      >
        <Link
          href="/#top"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
        >
          <span className="tf-logo-shimmer relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
            <span className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/20" />
            <span className="relative z-10 text-xs font-semibold tracking-wide text-gray-100">
              TF
            </span>
            <span className="absolute -right-1 -top-1 z-10 h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 opacity-80" />
          </span>

          <div className="flex h-9 items-center">
            <div className="text-[17px] font-semibold leading-none text-gray-100 sm:text-[18px]">
              TrendFlow
            </div>
          </div>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-6 text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-1 py-1 text-[15px] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="flex items-center justify-end gap-3"
          style={{ marginLeft: "auto" }}
        >
          <button
            type="button"
            aria-label="Открыть меню"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
          >
            <Menu className="h-5 w-5" />
          </button>

          <GradientBorderLink href="/login" innerClassName="text-[15px]">
            Войти
          </GradientBorderLink>
        </div>
      </div>
    </header>
  );
}


