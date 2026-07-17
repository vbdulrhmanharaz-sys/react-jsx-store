import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-350 mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-6">Save items you love by tapping the heart icon.</p>
        <Link
          to="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-350 mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        My Wishlist ({wishlist.length})
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlist.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}