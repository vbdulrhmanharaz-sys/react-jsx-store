import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      className="my-10 py-16 rounded-2xl mx-4"
      style={{ background: "linear-gradient(135deg, #1f2937 0%, #1e3a5f 100%)" }}
    >
      <div className="max-w-150 mx-auto px-4 text-center">
        <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
          Stay Updated
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-3">
          Get Exclusive Deals
        </h2>
        <p className="text-gray-300 text-sm mb-8">
          Subscribe to our newsletter and be the first to know about new arrivals, sales, and exclusive offers.
        </p>

        {done ? (
          <div className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold inline-block">
            ✅ You're subscribed! Welcome aboard.
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
            className="flex gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl outline-none text-sm text-slate-800"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}