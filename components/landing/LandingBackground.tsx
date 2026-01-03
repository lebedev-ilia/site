export function LandingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(139,92,246,0.22),transparent_55%),radial-gradient(800px_circle_at_80%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(1000px_circle_at_50%_90%,rgba(139,92,246,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.82))]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}


