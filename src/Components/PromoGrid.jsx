export default function PromoGrid() {
  return (
    <section className="my-10">
      <div className="max-w-350 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Big Card */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-55 flex items-end"
            style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)" }}>
            <div className="relative z-10 p-8 text-white">
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
                Limited Offer
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-3">
                Up to 40% Off<br />on Laptops
              </h3>
              <p className="text-gray-300 text-sm mb-5">
                Premium laptops from top brands at unbeatable prices
              </p>
              <a
                href="#"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                Shop Now
              </a>
            </div>
            <div className="absolute right-0 top-0 h-full w-[45%] opacity-30"
              style={{ background: "radial-gradient(circle at 70% 50%, #3b82f6, transparent)" }} />
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl opacity-20">💻</span>
          </div>

          {/* Two small cards */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden min-h-25 flex items-center p-6"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)" }}>
              <div className="text-white z-10">
                <span className="text-purple-200 text-xs font-semibold uppercase tracking-widest">
                  New Arrivals
                </span>
                <h4 className="text-xl font-bold mt-1">Latest Wearables</h4>
                <a href="#" className="text-purple-200 text-sm mt-2 inline-block hover:text-white">
                  Explore →
                </a>
              </div>
              <span className="absolute right-6 text-5xl opacity-30">⌚</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-25 flex items-center p-6"
              style={{ background: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)" }}>
              <div className="text-white z-10">
                <span className="text-teal-200 text-xs font-semibold uppercase tracking-widest">
                  Hot Deals
                </span>
                <h4 className="text-xl font-bold mt-1">Audio & Headphones</h4>
                <a href="#" className="text-teal-200 text-sm mt-2 inline-block hover:text-white">
                  Shop Now →
                </a>
              </div>
              <span className="absolute right-6 text-5xl opacity-30">🎧</span>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
          {[
            { icon: "🚚", title: "Free Shipping", sub: "On orders over $50" },
            { icon: "↩️", title: "Easy Returns", sub: "30-day return policy" },
            { icon: "🔒", title: "Secure Payment", sub: "100% protected" },
            { icon: "🎁", title: "Gift Wrapping", sub: "Available on request" },
            { icon: "💬", title: "24/7 Support", sub: "Always here to help" },
          ].map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-orange-300 transition-colors"
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{f.title}</p>
                <p className="text-xs text-gray-400">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}