export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl font-extrabold">
            SOS <span className="text-brand">Orelha</span> ORG
          </p>
          <p className="mt-1 text-sm text-white/60">
            Giving a Voice to Those Who Cannot Speak.
          </p>
        </div>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} SOS Orelha ORG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
