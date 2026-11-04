"use client";

import { useState } from "react";

type Currency = "USD" | "BRL";

const amounts: Record<Currency, number[]> = {
  USD: [10, 25, 50, 100],
  BRL: [50, 100, 250, 500],
};
const symbol: Record<Currency, string> = { USD: "$", BRL: "R$" };

export default function Donate() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [amount, setAmount] = useState<number>(amounts.USD[1]);

  function changeCurrency(c: Currency) {
    setCurrency(c);
    setAmount(amounts[c][1]);
  }

  return (
    <section id="donate" className="bg-brand py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Donate
        </h2>
        <div className="mt-3 h-1 w-16 bg-white" />

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              Your gift gives an animal a voice, a rescue, a second chance.
            </p>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Every donation supports rescue, medical care, legal advocacy and
              education. Donors will soon be able to follow exactly where their
              contribution went.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-black sm:p-8">
            <div
              role="group"
              aria-label="Currency"
              className="inline-flex rounded-full border border-black/15 p-1"
            >
              {(["USD", "BRL"] as Currency[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => changeCurrency(c)}
                  aria-pressed={currency === c}
                  className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-colors ${
                    currency === c ? "bg-black text-white" : "text-black/70"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts[currency].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAmount(a)}
                  aria-pressed={amount === a}
                  className={`rounded-xl border-2 py-3 font-display text-lg font-bold transition-colors ${
                    amount === a
                      ? "border-brand bg-brand text-white"
                      : "border-black/15 hover:border-black"
                  }`}
                >
                  {symbol[currency]}
                  {a}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-black py-4 font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Donate {symbol[currency]}
              {amount}
            </button>
            <p className="mt-3 text-center text-sm text-neutral-500">
              Payment (Pix and card) coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
