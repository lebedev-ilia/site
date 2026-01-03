import { cn } from "@/components/ui/cn";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-200px px-4 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
      {...props}
    />
  );
}


