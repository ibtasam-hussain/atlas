export default function ServicesSection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-white/60">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            We provide these{" "}
            <span className="text-sky-400">Creative Services</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="mb-24 grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {/* Left column */}
          <div className="divide-y divide-white/10">
            <ServiceItem title="Social Media Marketing & Management" active />
            <ServiceItem title="Design" />
            <ServiceItem title="Brand Design" />
          </div>

          {/* Right column */}
          <div className="divide-y divide-white/10">
            <ServiceItem title="Content Creation" />
            <ServiceItem title="Creative Web Design" />
            <ServiceItem title="AI-Powered Animation" />
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl bg-[#E3EEFF] py-20 text-center">
          <h3 className="text-5xl font-extrabold leading-tight text-[#F03A5F] md:text-6xl">
            we don’t <br /> create ads
          </h3>
          <p className="mt-4 text-lg text-[#F03A5F]/80">
            *we create brands
          </p>
        </div>
      </div>
    </section>
  );
}

/* Service row component */
function ServiceItem({ title, active }) {
  return (
    <div className="flex items-center justify-between py-6">
      <span className="text-sm font-medium text-white/80">
        {title}
      </span>

      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition ${
          active
            ? "border-sky-400 bg-sky-400 text-black"
            : "border-white/20 text-white/60 hover:border-white/40"
        }`}
      >
        ↗
      </span>
    </div>
  );
}
