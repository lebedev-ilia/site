import Link from "next/link";

import { LandingBackground } from "@/components/landing/LandingBackground";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";
import { GradientBorderButton } from "@/components/ui/GradientBorder";

export default function RegisterPage() {
  return (
    <div className="relative min-h-dvh">
      <LandingBackground />
      <LandingHeader />

      <main className="relative py-14 md:py-20">
        <Container className="grid place-items-center">
          <Surface className="w-full max-w-md p-6 sm:p-7">
            <div className="text-sm font-semibold text-white">Регистрация</div>
            <div className="mt-1 text-sm text-white/60">
              Каркас страницы регистрации (`/register`).
            </div>

            <div className="mt-6 grid gap-3">
              <div className="h-11 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              <div className="h-11 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              <div className="h-11 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              <div className="h-10 rounded-xl border border-white/10 bg-white/[0.03]" />
            </div>

            <div className="mt-5">
              <GradientBorderButton type="button" innerClassName="w-full py-2.5">
                Создать аккаунт
              </GradientBorderButton>
            </div>

            <div className="mt-5 text-sm text-white/60">
              Уже есть аккаунт?{" "}
              <Link
                href="/login"
                className="text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                Войти
              </Link>
            </div>
          </Surface>
        </Container>
      </main>
    </div>
  );
}


