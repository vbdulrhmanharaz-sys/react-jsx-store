import { Link } from "react-router-dom";
import { categories } from "../data/products";

export default function Categories() {
  return (
    <section className="my-8">
      <div className="max-w-350 mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Shop by Category</h2>
          <a href="#" className="text-orange-500 text-sm font-medium hover:underline">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.name}`}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-400 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl">{cat.image}</span>
              <span className="text-xs font-semibold text-slate-700 text-center group-hover:text-orange-500">
                {cat.name}
              </span>
              <span className="text-xs text-gray-400">{cat.count}+</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}