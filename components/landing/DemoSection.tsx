import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";

export function DemoSection() {
  return (
    <section id="demo" className="py-14 md:py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-wide text-white/55">
              Demo
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Пример результата (плейсхолдер)
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              Здесь позже откроется пример готового отчёта/страницы результата.
              Сейчас — только каркас, чтобы зафиксировать размеры и композицию.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <Surface className="lg:col-span-7 p-6">
              <div className="text-sm font-medium text-white/85">
                Report preview
              </div>
              <div className="mt-4 grid gap-3">
                <div className="h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
                <div className="h-44 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
                <div className="h-28 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              </div>
            </Surface>

            <Surface className="lg:col-span-5 p-6">
              <div className="text-sm font-medium text-white/85">Highlights</div>
              <div className="mt-1 text-xs text-white/55">
                Ключевые карточки/метрики (каркас).
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
                <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
                <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
                <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
              </div>

              <div className="mt-6 h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
            </Surface>
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


