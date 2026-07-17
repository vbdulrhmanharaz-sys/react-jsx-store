import { brands } from "../data/products";

export default function Brands() {
  return (
    <section className="my-10">
      <div className="max-w-350 mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Top Brands We Carry
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((b) => (
            <a
              key={b.id}
              href="#"
              className="px-8 py-4 bg-white border border-gray-100 rounded-xl text-slate-700 font-bold text-sm hover:border-orange-400 hover:text-orange-500 hover:shadow-md transition-all duration-200"
            >
              {b.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}