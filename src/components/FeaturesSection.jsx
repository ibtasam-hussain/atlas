export default function FeaturesSection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-xs font-semibold tracking-widest text-white/60">
            KEY FEATURES
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Start Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ai Powered
            </span>{" "}
            <br />
            Creative Evolution
          </h1>

          <p className="mb-4 max-w-lg text-sm leading-relaxed text-white/70">
            Atlas Creative Co. builds intelligent design systems powered by
            AI—engineered to scale brands faster, smarter, and more consistently
            than traditional creative workflows.
          </p>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/70">
            We merge human creativity with advanced automation to deliver elite
            visual systems and high-performing content at unprecedented speed.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            Learn more
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="rounded-2xl bg-[#19A8FF] p-6 text-black">
            <h3 className="mb-2 text-lg font-semibold">
              AI-Powered Design Systems
            </h3>
            <p className="text-sm leading-relaxed">
              We create adaptive design frameworks that automatically generate
              on-brand visuals across platforms. Every asset stays consistent,
              recognizable, and scalable—without creative bottlenecks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-[#00C389] p-6 text-black">
            <h3 className="mb-2 text-lg font-semibold">
              Automated Content Production
            </h3>
            <p className="text-sm leading-relaxed">
              From social posts to motion graphics, our AI-driven pipelines
              produce high-volume content optimized for engagement, reach, and
              conversion.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-[#FFD43B] p-6 text-black">
            <h3 className="mb-2 text-lg font-semibold">
              Smart Brand Consistency
            </h3>
            <p className="text-sm leading-relaxed">
              AI ensures your brand’s visual language, typography, color
              systems, and motion rules remain cohesive across every touchpoint.
            </p>
          </div>

          {/* Card 4 (dimmed like screenshot) */}
          <div className="rounded-2xl bg-[#0F2F1E] p-6 text-white/40">
            <h3 className="mb-2 text-lg font-semibold">
              Performance-Driven Creative
            </h3>
            <p className="text-sm leading-relaxed">
              Design decisions powered by data, continuously optimized to
              maximize impact and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
