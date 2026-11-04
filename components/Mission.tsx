export default function Mission() {
  return (
    <section id="mission" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
          Our Mission
        </h2>
        <div className="mt-3 h-1 w-16 bg-brand" />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <p className="font-display text-2xl font-bold leading-snug text-black sm:text-3xl lg:col-span-2">
            To give a voice to animals who cannot speak for themselves.
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-700 lg:col-span-3">
            <p>
              Through rescue, advocacy, education, community mobilization, and
              the pursuit of justice, SOS Orelha ORG works to combat animal
              cruelty, strengthen animal protection laws, support rescuers and
              shelters, and promote responsible guardianship.
            </p>
            <p>
              Inspired by the legacy of Orelha, a community dog whose story
              united people across Brazil and around the world, we strive to
              transform outrage into action, ensuring that no animal is
              forgotten, abandoned, or left without protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
