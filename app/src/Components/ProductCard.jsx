import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const wished = isInWishlist(product.id);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const badgeColor = {
    New: "bg-green-500",
    Hot: "bg-red-500",
    Sale: "bg-orange-500",
    Bestseller: "bg-purple-500",
  }[product.badge] || "bg-gray-500";

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    showToast(`${product.name} added to cart`);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    showToast(
      wished ? `${product.name} removed from wishlist` : `${product.name} added to wishlist`
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 group hover:shadow-lg hover:border-orange-300 transition-all duration-300">

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <span className={`${badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded`}>
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="bg-slate-800 text-white text-xs font-bold px-2 py-0.5 rounded">
              -{discount}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-200">
          <button
            onClick={handleToggleWishlist}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors"
          >
            {wished ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
            <BsEye />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
            <MdOutlineCompareArrows />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ${
              added
                ? "bg-green-500 text-white"
                : "bg-slate-800 hover:bg-orange-500 text-white"
            }`}
          >
            <HiShoppingCart className="text-base" />
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="text-orange-500 text-xs font-semibold uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-slate-800 mt-1 mb-2 line-clamp-2 hover:text-orange-500 cursor-pointer">
          {product.name}
        </h3>

        {/* Colors */}
        <div className="flex gap-1.5 mb-2">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-3.5 h-3.5 rounded-full border border-gray-300 cursor-pointer hover:scale-125 transition-transform"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex text-orange-400 text-xs">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </div>
          <span className="text-xs text-gray-400">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-slate-800">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}