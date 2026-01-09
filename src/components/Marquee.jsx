export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-emerald-400 py-3">
      <div className="flex w-max animate-marquee items-center gap-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-2xl font-semibold text-black"
          >
            Let’s Work Together!
            <span className="text-3xl">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
