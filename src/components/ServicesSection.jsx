export default function ServicesSection() {
  return (
    <section className="w-full bg-black py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-semibold tracking-widest text-white/60">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-semibold text-white md:text-6xl">
            We provide these{" "}
            <span className="text-sky-400">Creative Services</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="mb-28 grid grid-cols-1 gap-x-16 md:grid-cols-2">
          <div className="divide-y divide-white/10">
            <ServiceItem title="Social Media Marketing & Management" active />
            <ServiceItem title="Design" />
            <ServiceItem title="Brand Design" />
          </div>

          <div className="divide-y divide-white/10">
            <ServiceItem title="Content Creation" />
            <ServiceItem title="Creative Web Design" />
            <ServiceItem title="AI-Powered Animation" />
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl bg-[#E3EEFF] py-28 text-center">
          <h3 className="text-6xl font-extrabold leading-tight text-[#F03A5F] md:text-7xl">
            we don’t <br /> create ads
          </h3>
          <p className="mt-6 text-xl text-[#F03A5F]/80">
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
    <div className="flex items-center justify-between py-7">
      <span className="text-base font-medium text-white/80">
        {title}
      </span>

      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition ${
          active
            ? "border-sky-400 bg-sky-400 text-black"
            : "border-white/20 text-white/60 hover:border-sky-400 hover:bg-sky-400 hover:text-black"
        }`}
      >
        ↗
      </span>
    </div>
  );
}
