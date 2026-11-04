const HERO_IMAGE = "/images/orelha.jpeg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 text-white"
      style={{
        background:
          "radial-gradient(ellipse 60% 55% at 50% 50%, #000000 0%, #000000 35%, #1a0508 70%, #3a0a10 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-16 text-center">
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Giving a voice to those who cannot speak.
        </h1>

        <div className="my-10 w-full max-w-sm sm:max-w-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Orelha, the community dog who inspired SOS Orelha"
            width={960}
            height={968}
            className="mx-auto aspect-square w-full rounded-2xl object-cover shadow-[0_0_120px_20px_rgba(0,0,0,0.9)]"
          />
        </div>

        <p className="max-w-xl text-lg text-white/75">
          Orelha&apos;s story united people across the world. Help us turn that
          outrage into action for every animal.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#donate"
            className="rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Donate now
          </a>
          <a
            href="#mission"
            className="rounded-full border border-white/40 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Our mission
          </a>
        </div>
      </div>
    </section>
  );
}