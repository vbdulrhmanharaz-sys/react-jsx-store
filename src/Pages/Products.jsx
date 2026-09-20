import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { allProducts } from "../data/products";
import ProductCard from "../Components/ProductCard";

const ITEMS_PER_PAGE = 20;

const allCategories = ["All", "Phones", "Laptops", "Tablets", "Audio", "Wearables", "Cameras", "Gaming", "TVs", "Smart Home", "Accessories"];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);
  const search = searchParams.get("search") || "";

  let filtered = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sortBy === "new") filtered = [...filtered].filter(p => p.badge === "New");

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategory = (cat) => { setActiveCategory(cat); setPage(1); };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-350 mx-auto px-4">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800">All Products</h1>
          <p className="text-gray-400 mt-1">{filtered.length} products found</p>
        </div>

        <div className="flex gap-6">

          {/* Sidebar */}
          <aside className="w-56 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sticky top-24">
              <h3 className="font-bold text-slate-800 mb-3">Categories</h3>
              <ul className="flex flex-col gap-1">
                {allCategories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? "bg-orange-500 text-white"
                          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                      }`}
                    >
                      {cat}
                      <span className="float-right text-xs opacity-60">
                        {cat === "All" ? allProducts.length : allProducts.filter(p => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4 bg-white rounded-xl border border-gray-100 px-4 py-3">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => {
                  const value = e.target.value;
                  setSearchParams(currentParams => {
                    const nextParams = new URLSearchParams(currentParams);
                    if (value.trim()) nextParams.set("search", value);
                    else nextParams.delete("search");
                    return nextParams;
                  });
                  setPage(1);
                }}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-orange-400 w-56"
              />
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
                  <option value="new">New Arrivals</option>
                </select>
                <span className="text-sm text-gray-400">
                  Page {page} of {totalPages}
                </span>
              </div>
            </div>

            {/* Grid */}
            {paginated.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <div className="text-5xl mb-3">🔍</div>
                <p>No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginated.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}

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
      </div>
    </div>
  );
}