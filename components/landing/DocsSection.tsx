import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";

export function DocsSection() {
  return (
    <section id="docs" className="py-14 md:py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-wide text-white/55">
              Documentation
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Документация (каркас)
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              Заготовка под будущий раздел документации/гайдов. Сейчас — блоки и
              отступы.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <Surface className="lg:col-span-7 p-6">
              <div className="text-sm font-medium text-white/85">
                Quick start
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-4 w-4/5 rounded-md bg-white/[0.05]" />
                <div className="h-4 w-full rounded-md bg-white/[0.05]" />
                <div className="h-4 w-11/12 rounded-md bg-white/[0.05]" />
                <div className="h-4 w-2/3 rounded-md bg-white/[0.05]" />
              </div>
              <div className="mt-6 h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
            </Surface>

            <Surface className="lg:col-span-5 p-6">
              <div className="text-sm font-medium text-white/85">Навигация</div>
              <div className="mt-4 grid gap-2 text-sm">
                {["Начало работы", "Руководства", "Фичи", "FAQ"].map((label) => (
                  <Link
                    key={label}
                    href="/#docs"
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-white/75 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </Surface>
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


