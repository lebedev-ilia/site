import Link from "next/link";

import { Container } from "@/components/ui/Container";

const product = [
  { label: "Как это работает", href: "/#how" },
  { label: "Документация", href: "/#docs" },
  { label: "API", href: "/#api" },
];

const company = [
  { label: "О нас", href: "/#about" },
  { label: "Контакты", href: "/#contacts" },
];

const legal = [
  { label: "Политика конфиденциальности", href: "/#privacy" },
  { label: "Условия использования", href: "/#terms" },
];

function FooterLinks({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <div className="text-sm font-semibold text-white/85">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-white/60">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LandingFooter() {
  return (
    <footer
      id="contacts"
      className="relative border-t border-white/10 bg-black/25"
    >
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                <span className="text-xs font-semibold tracking-wide text-white">
                  TF
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">TrendFlow</div>
                <div className="text-xs text-white/55">AI analytics</div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm text-white/60">
              Серьёзная платформа для анализа и прогнозирования успеха видео.
              Сейчас — каркас, дальше добавим контент и функции.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterLinks title="Продукт" items={product} />
            <FooterLinks title="Компания" items={company} />
            <FooterLinks title="Правовая информация" items={legal} />
          </div>

          <div id="support" className="md:col-span-2">
            <div className="text-sm font-semibold text-white/85">Контакты</div>
            <div className="mt-3 text-sm text-white/60">
              <div>support@trendflow.ru</div>
              <div className="mt-2 h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2024 TrendFlow. Все права защищены.</div>
          <div className="flex items-center gap-4">
            <Link href="/#privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/#terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


