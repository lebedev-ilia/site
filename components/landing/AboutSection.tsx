import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";

export function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-wide text-white/55">
              Company
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              О нас (каркас)
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              Секция для серьёзного позиционирования продукта: миссия, принципы,
              доверие. Сейчас — только структура.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <Surface className="lg:col-span-7 p-6">
              <div className="text-sm font-medium text-white/85">Mission</div>
              <div className="mt-5 space-y-3">
                <div className="h-4 w-5/6 rounded-md bg-white/[0.05]" />
                <div className="h-4 w-full rounded-md bg-white/[0.05]" />
                <div className="h-4 w-4/5 rounded-md bg-white/[0.05]" />
                <div className="h-4 w-2/3 rounded-md bg-white/[0.05]" />
              </div>
            </Surface>

            <div className="lg:col-span-5 grid gap-4 lg:gap-6">
              <Surface className="p-6">
                <div className="text-sm font-medium text-white/85">Trust</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl border border-white/10 bg-white/[0.03]" />
                  <div className="h-16 rounded-xl border border-white/10 bg-white/[0.03]" />
                  <div className="h-16 rounded-xl border border-white/10 bg-white/[0.03]" />
                </div>
              </Surface>

              <Surface className="p-6">
                <div className="text-sm font-medium text-white/85">Contacts</div>
                <div className="mt-4 h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              </Surface>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


