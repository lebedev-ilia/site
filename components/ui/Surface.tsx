import { cn } from "@/components/ui/cn";

type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "panel" | "panelStrong";
};

export function Surface({ variant = "panel", className, ...props }: SurfaceProps) {
  const base =
    "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]";

  const strong =
    "rounded-2xl border border-white/14 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]";

  return (
    <div
      className={cn(variant === "panelStrong" ? strong : base, className)}
      {...props}
    />
  );
}


