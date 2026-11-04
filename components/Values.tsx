const values = [
  { icon: "🐾", title: "Animal Protection & Welfare", text: "Every animal deserves safety, care and a life free from cruelty." },
  { icon: "⚖️", title: "Justice & Legal Advocacy", text: "We push for stronger laws and for those who harm animals to be held accountable." },
  { icon: "📚", title: "Education & Awareness", text: "We teach compassion and responsible guardianship in schools and communities." },
  { icon: "🤝", title: "Community Engagement", text: "Change starts locally. We bring neighbors, volunteers and rescuers together." },
  { icon: "🏠", title: "Rescue, Rehabilitation & Adoption", text: "We help animals recover and find loving, permanent homes." },
  { icon: "🌎", title: "National & International Mobilization", text: "A growing network of advocates across Brazil and around the world." },
  { icon: "🔍", title: "Transparency & Accountability", text: "You can see how every donation is used and which animals it helps." },
  { icon: "❤️", title: "Compassion in Action", text: "We turn grief and outrage into concrete help for animals in need." },
];

export default function Values() {
  return (
    <section id="values" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
          Our Values
        </h2>
        <div className="mt-3 h-1 w-16 bg-brand" />

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="border-t-2 border-black pt-5">
              <span className="text-2xl" aria-hidden="true">{v.icon}</span>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight text-black">
                {v.title}
              </h3>
              <p className="mt-2 text-neutral-600">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
