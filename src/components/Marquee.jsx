export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-emerald-400 py-4">
      <div className="animate-marquee flex w-max items-center gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-6 text-sm font-semibold text-black"
          >
            Let’s Work Together!
            <span className="text-lg">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
