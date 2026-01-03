import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";

const plans = [
  { name: "Base", hint: "For getting started" },
  { name: "Pro", hint: "For teams and growth" },
  { name: "Personal", hint: "For creators" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-wide text-white/55">
              Pricing
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Тарифы (каркас)
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              3 тарифа с “неплоской” подачей: слои, лёгкая диагональ и hover —
              без яркой заливки, только акценты и бордеры.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {plans.map((plan, idx) => (
              <Surface
                key={plan.name}
                className={[
                  "relative overflow-hidden p-6 transition",
                  "hover:border-white/18 hover:bg-white/[0.05]",
                  idx === 1 ? "lg:-translate-y-3" : "",
                  idx === 2 ? "lg:translate-y-2" : "",
                ].join(" ")}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-violet-500/12 to-blue-500/10 blur-2xl" />

                <div className="relative">
                  <div className="text-sm font-semibold text-white">
                    {plan.name}
                  </div>
                  <div className="mt-1 text-xs text-white/55">{plan.hint}</div>

                  <div className="mt-6 space-y-3">
                    <div className="h-4 w-4/5 rounded-md bg-white/[0.05]" />
                    <div className="h-4 w-11/12 rounded-md bg-white/[0.05]" />
                    <div className="h-4 w-3/4 rounded-md bg-white/[0.05]" />
                  </div>

                  <div className="mt-7 h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
                </div>
              </Surface>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


