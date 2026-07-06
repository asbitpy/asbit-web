const TECH = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Supabase",
  "n8n",
  "Bancard",
  "Ueno Bank",
  "Google Search Console",
  "TypeScript",
  "Node.js",
];

export default function TrustBar() {
  const loopItems = [...TECH, ...TECH];

  return (
    <section className="border-y border-white/10 bg-navy py-8">
      <p className="mx-auto max-w-[720px] px-5 text-center text-[14px] text-white/55 md:text-[15px]">
        La misma tecnología que usan las empresas grandes, aplicada a negocios
        paraguayos reales.
      </p>

      <div className="group relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent" />

        <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loopItems.map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-[15px] font-medium tracking-wide text-white/40 md:text-[17px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
