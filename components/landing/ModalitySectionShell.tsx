"use client";

import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/components/ui/cn";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";

type Pill = { key: string; label: string };

type ModalitySectionShellProps = {
  id: string;
  title: string;
  subtitle: string;
  pills: Pill[];
  layout?: "left" | "right";
};

export function ModalitySectionShell({
  id,
  title,
  subtitle,
  pills,
  layout = "left",
}: ModalitySectionShellProps) {
  const [active, setActive] = useState<string>(pills[0]?.key ?? "default");

  const activeLabel = useMemo(
    () => pills.find((p) => p.key === active)?.label ?? "",
    [active, pills]
  );

  const columns =
    layout === "left"
      ? "lg:grid-cols-12"
      : "lg:grid-cols-12 lg:[&>*:first-child]:order-3 lg:[&>*:nth-child(2)]:order-2 lg:[&>*:nth-child(3)]:order-1";

  return (
    <section id={id} className="py-14 md:py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-wide text-white/55">
              Algorithms
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
              {subtitle}
            </p>

            <div className="mt-3 hidden items-center justify-center gap-2 text-xs text-white/50 lg:flex">
              Active: <span className="text-white/75">{activeLabel}</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className={cn("grid gap-4 lg:gap-6", columns)}>
            <Surface className="lg:col-span-6 overflow-hidden p-5">
              <div className="text-sm font-medium text-white/85">
                Preview / Visualization
              </div>
              <div className="mt-1 text-xs text-white/55">
                Плейсхолдер под видео/анимацию/канвас (каркас).
              </div>
              <div className="mt-5 grid gap-3">
                <div className="h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
                <div className="h-36 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
                <div className="h-10 rounded-xl border border-dashed border-white/14 bg-white/[0.02]" />
              </div>
            </Surface>

            <Surface className="lg:col-span-3 p-5">
              <div className="text-sm font-medium text-white/85">Controls</div>
              <div className="mt-1 text-xs text-white/55">
                Кнопки выбора типа анализа (state).
              </div>

              <div className="mt-4 grid gap-2">
                {pills.map((pill) => {
                  const isActive = pill.key === active;
                  return (
                    <button
                      key={pill.key}
                      type="button"
                      onClick={() => setActive(pill.key)}
                      className={cn(
                        "inline-flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70",
                        isActive
                          ? "border-white/18 bg-white/[0.06] text-white"
                          : "border-white/10 bg-white/[0.02] text-white/75 hover:bg-white/[0.04] hover:text-white"
                      )}
                    >
                      <span>{pill.label}</span>
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          isActive
                            ? "bg-gradient-to-r from-violet-500 to-blue-500"
                            : "bg-white/25"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </Surface>

            <Surface className="lg:col-span-3 p-5">
              <div className="text-sm font-medium text-white/85">
                Description
              </div>
              <div className="mt-1 text-xs text-white/55">
                Текст будет меняться от выбора (каркас).
              </div>

              <div className="mt-5 space-y-3">
                <div className="h-4 w-3/4 rounded-md bg-white/[0.05]" />
                <div className="h-4 w-full rounded-md bg-white/[0.05]" />
                <div className="h-4 w-5/6 rounded-md bg-white/[0.05]" />
                <div className="h-4 w-2/3 rounded-md bg-white/[0.05]" />
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-white/60">
                Selected:{" "}
                <span className="text-white/80">{activeLabel || active}</span>
              </div>
            </Surface>
          </div>
        </div>
      </Container>

      <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


