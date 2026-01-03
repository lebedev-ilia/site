import Link, { type LinkProps } from "next/link";
import { cn } from "@/components/ui/cn";

const outerBase =
  "tf-gradient-border inline-flex rounded-full shadow-[0_0_0_1px_rgba(139,92,246,0.10)] transition";

const innerBase =
  "inline-flex w-full min-h-9 min-w-[90px] items-center justify-center gap-2 rounded-full px-7 py-3 text-[15px] font-medium leading-none text-gray-100 bg-transparent";

const innerHover =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-0";

export function GradientBorderButton({
  className,
  innerClassName,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { innerClassName?: string }) {
  return (
    <span className={cn(outerBase, className)}>
      <button className={cn(innerBase, innerHover, innerClassName)} {...props} />
    </span>
  );
}

export function GradientBorderLink({
  className,
  innerClassName,
  children,
  ...props
}: LinkProps & {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={cn(outerBase, className)} {...props}>
      <span className={cn(innerBase, innerHover, innerClassName)}>{children}</span>
    </Link>
  );
}


