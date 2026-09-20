import { getBestSellers } from "../data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {

const bestSellers = getBestSellers();
  return (
    <section className="my-10 bg-gray-50 py-10">
      <div className="max-w-350 mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Top Picks
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Best Sellers</h2>
          </div>
          <a href="#" className="text-orange-500 text-sm font-medium hover:underline">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}