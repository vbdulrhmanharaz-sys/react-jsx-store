import { useState } from "react";
import { useParams } from "react-router-dom";
import { getByCategory } from "../data/products";
import ProductCard from "../Components/ProductCard";

const ITEMS_PER_PAGE = 20;

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");

  let products = getByCategory(categoryName);

  if (sortBy === "price-asc") products = [...products].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") products = [...products].sort((a, b) => b.price - a.price);
  if (sortBy === "rating") products = [...products].sort((a, b) => b.rating - a.rating);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginated = products.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const categoryIcons = {
    Phones: "📱", Laptops: "💻", Tablets: "📟", Audio: "🎧",
    Wearables: "⌚", Cameras: "📷", Gaming: "🎮", TVs: "📺",
    "Smart Home": "🏠", Accessories: "🔌",
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-8 text-white flex items-center gap-4">
          <span className="text-6xl">{categoryIcons[categoryName] || "🛒"}</span>
          <div>
            <h1 className="text-3xl font-bold">{categoryName}</h1>
            <p className="text-gray-300 mt-1">{products.length} products available</p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4 bg-white rounded-xl border border-gray-100 px-4 py-3">
          <span className="text-sm text-gray-500">
            Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, products.length)} of {products.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => { setSortBy(e.target.value); setPage(1); }}
              className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-orange-400"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {paginated.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-40 hover:border-orange-400 hover:text-orange-500 transition-colors"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(n => n === 1 || n === totalPages || Math.abs(n - page) <= 2)
              .reduce((acc, n, i, arr) => {
                if (i > 0 && n - arr[i - 1] > 1) acc.push("...");
                acc.push(n);
                return acc;
              }, [])
              .map((n, i) =>
                n === "..." ? (
                  <span key={i} className="px-2 text-gray-400">...</span>
                ) : (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                      page === n
                        ? "bg-orange-500 text-white"
                        : "border border-gray-200 hover:border-orange-400 hover:text-orange-500"
                    }`}
                  >
                    {n}
                  </button>
                )
              )}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-40 hover:border-orange-400 hover:text-orange-500 transition-colors"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}