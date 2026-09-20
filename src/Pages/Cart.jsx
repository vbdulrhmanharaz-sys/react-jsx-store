import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiTrash } from "react-icons/hi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-350 mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-orange-500">🏠 Home</Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">Shopping Cart</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">Shopping Cart</h1>
        <div className="w-12 h-1 bg-orange-500 rounded mb-8" />

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl p-16 text-center border border-gray-100">
            <div className="text-7xl mb-4">🛒</div>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">
              Your shopping cart is empty!
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Looks like you haven't added anything yet.
            </p>
            <Link
              to="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-white rounded-xl px-6 py-3 border border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-colors p-4 md:p-6"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl border border-gray-100"
                        />
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      <div>
                        <span className="text-orange-500 text-xs font-semibold uppercase">
                          {item.category}
                        </span>
                        <h3 className="text-sm font-semibold text-slate-800 mt-0.5 line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="flex gap-1 mt-1">
                          {item.colors?.slice(0, 3).map((c, i) => (
                            <span
                              key={i}
                              className="w-3 h-3 rounded-full border border-gray-200"
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 text-center">
                      <span className="text-sm font-bold text-slate-800">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <p className="text-xs text-gray-400 line-through">
                          ${item.oldPrice.toFixed(2)}
                        </p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-2 flex items-center justify-center">
                      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white transition-colors"
                        >
                          <AiOutlineMinus size={12} />
                        </button>
                        <span className="w-10 text-center text-sm font-semibold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white transition-colors"
                        >
                          <AiOutlinePlus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-4 md:col-span-2 text-center">
                      <span className="text-sm font-bold text-orange-500">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center justify-center mx-auto mt-1 text-red-400 hover:text-red-600 transition-colors"
                      >
                        <HiTrash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:underline mt-2"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h3>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
                    <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? "text-green-500" : "text-slate-800"}`}>
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Tax (10%)</span>
                    <span className="font-semibold text-slate-800">
                      ${(subtotal * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="my-4 bg-orange-50 border border-orange-200 rounded-xl p-3 text-xs text-orange-600 font-medium">
                    🚚 Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                  </div>
                )}

                {shipping === 0 && (
                  <div className="my-4 bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-600 font-medium">
                    🎉 You qualify for free shipping!
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-slate-800 text-base">
                    <span>Total</span>
                    <span className="text-orange-500">
                      ${(total + subtotal * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-sm">
                  Proceed to Checkout →
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <span>🔒</span>
                  <span>Secure SSL Encrypted Payment</span>
                </div>

                <div className="mt-4 flex justify-center gap-2 text-2xl">
                  {["💳", "🏦", "📱"].map((p, i) => (
                    <span key={i}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}