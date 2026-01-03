import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { GradientBorderLink } from "@/components/ui/GradientBorder";

export function HeroSection() {
  return (
    <section className="relative pt-14 md:pt-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
            MVP skeleton • layout-first
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Прогноз популярности видео на основе AI
          </h1>

          <p className="border mx-auto mt-4 max-w-2xl text-pretty text-base text-center text-white/70 sm:text-lg">
            Каркас главной страницы: блоки, сетка, отступы и визуальная
            иерархия. Контент и интерактивность дополним на следующем этапе.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <GradientBorderLink href="/#demo" innerClassName="px-5 py-2.5">
              <Play className="h-4 w-4" />
              Демо
            </GradientBorderLink>

            <Link
              href="/#how"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
            >
              Подробнее <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


