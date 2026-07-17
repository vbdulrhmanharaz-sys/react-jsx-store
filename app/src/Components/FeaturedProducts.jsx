import { useState } from "react";
import { allProducts, getByCategory } from "../data/products";
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom"


const tabs = ["All", "Phones", "Laptops", "Audio", "Tablets", "Wearables", "Cameras", "Gaming", "TVs", "Smart Home", "Accessories"];


export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? allProducts.slice(0, 8) : getByCategory(activeTab).slice(0, 8);

  return (
    <section className="my-10">
      <div className="max-w-350 mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Curated For You
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Featured Products</h2>
          </div>
          <Link to="/products" className="text-orange-500 text-sm font-medium hover:underline">
            View All →
          </Link>
        </div>

    
        <div className="flex gap-2 flex-wrap mb-6 border-b border-gray-200 pb-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab()}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === t
                  ? "bg-orange-500 text-white"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}