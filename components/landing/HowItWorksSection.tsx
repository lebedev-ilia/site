import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";

const steps = [
  { title: "Шаг 1", hint: "Загрузите видео / вставьте ссылку" },
  { title: "Шаг 2", hint: "Выберите конфигурацию анализа" },
  { title: "Шаг 3", hint: "Получите прогноз и рекомендации" },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="py-14 md:py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-wide text-white/55">
              How it works
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Как это работает (каркас)
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              Пошаговый блок для будущей страницы “How it works”. Сейчас важна
              сетка и визуальная иерархия.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {steps.map((step, idx) => (
              <Surface key={step.title} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    {step.title}
                  </div>
                  <div className="text-xs text-white/45">0{idx + 1}</div>
                </div>
                <div className="mt-2 text-sm text-white/65">{step.hint}</div>
                <div className="mt-6 h-20 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              </Surface>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


