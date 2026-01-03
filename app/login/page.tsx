import Link from "next/link";

import { LandingBackground } from "@/components/landing/LandingBackground";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";
import { GradientBorderButton } from "@/components/ui/GradientBorder";

export default function LoginPage() {
  return (
    <div className="relative min-h-dvh">
      <LandingBackground />
      <LandingHeader />

      <main className="relative py-14 md:py-20">
        <Container className="grid place-items-center">
          <Surface className="w-full max-w-md p-6 sm:p-7">
            <div className="text-sm font-semibold text-white">Войти</div>
            <div className="mt-1 text-sm text-white/60">
              Каркас страницы входа (как в спецификации — отдельный `/login`).
            </div>

            <div className="mt-6 grid gap-3">
              <div className="h-11 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              <div className="h-11 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
            </div>

            <div className="mt-5">
              <GradientBorderButton type="button" innerClassName="w-full py-2.5">
                Продолжить
              </GradientBorderButton>
            </div>

            <div className="mt-5 text-sm text-white/60">
              Нет аккаунта?{" "}
              <Link
                href="/register"
                className="text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                Регистрация
              </Link>
            </div>
          </Surface>
        </Container>
      </main>
    </div>
  );
}


