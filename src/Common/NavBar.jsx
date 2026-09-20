import {
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import imge from "../assets/imaged/logo-alt-2x.webp";
import { FaCodeCompare } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuthStore } from "../zustand/authStore";
import { categories, brands } from "../data/products";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cart, totalItems } = useCart();
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const { user, logout } = useAuthStore();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : "/products");
  };

  return (
    <header className="bg-[#1f2d3d] text-white top-0 left-0 w-full">
      {/* Top Bar */}
      <div className="border-b border-gray-700 sticky top-0 right-0">
        <div className="max-w-350 mx-auto flex justify-between items-center px-3 py-4 text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <MdOutlinePhone /> 1.800.555.8989
            </span>
            <span>Contact</span>
            <span>FAQ</span>
            <span>Order Info</span>
          </div>
          <div className="flex gap-6">
            <span>English</span>
            <span>USD</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-full flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={imge} alt="logo" />
          </NavLink>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex flex-1 mx-12 max-w-4xl">
          <select className="bg-[#e8b26c] text-black px-4 rounded-l-md outline-none">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-3 py-2 bg-white text-black outline-none"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" aria-label="Search products" className="bg-[#e8b26c] px-5 rounded-r-md">
            <FaSearch className="text-black" />
          </button>
        </form>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Account with Hover Dropdown */}
          <div className="relative group">
            <button className="flex flex-col items-center hover:text-amber-300 transition-colors">
              <IoPersonOutline size={25} />
              <span className="text-xs">
                {user ? user.user_metadata?.full_name?.split(" ")[0] || "Account" : "Account"}
              </span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

              {user ? (
                /* Logged In */
                <>
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-slate-800">
                      {user.user_metadata?.full_name || "User"}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <Link
                    to="/account"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <span>My Account</span>
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <span>My Orders</span>
                  </Link>
                  <Link
                    to="/wishlist"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <span>Wishlist</span>
                  </Link>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                /* Not Logged In */
                <>
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-slate-800">Welcome!</p>
                    <p className="text-xs text-gray-400">Sign in to your account</p>
                  </div>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <span>Sign In</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <span>Create Account</span>
                  </Link>
                  <hr className="my-1 border-gray-100" />
                  <Link
                    to="/orders"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    <span> Track Order</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          <NavLink to="wishlist" className="flex flex-col items-center hover:text-amber-300">
            <CiHeart size={25} />
            <span className="text-xs">Wishlist</span>
          </NavLink>

          <NavLink to="compare" className="flex flex-col items-center hover:text-amber-300">
            <FaCodeCompare size={25} />
            <span className="text-xs">Compare</span>
          </NavLink>

          {/* Cart */}
          <Link to="/cart" className="flex items-center gap-3 hover:text-amber-300">
            <div className="flex flex-col items-center text-xs">
              <span>{totalItems} item(s)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="relative">
              <button className="bg-[#F0B877] p-3 rounded-md hover:bg-amber-300">
                <FaShoppingCart className="text-black text-lg" />
              </button>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="max-w-full flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-6 flex-wrap">

          {/* All Departments — Mega Menu */}
          <div className="relative group">
            <button className="bg-[#e8b26c] text-black px-6 py-2.5 rounded-md font-medium flex items-center gap-2">
              ☰ All Departments
            </button>

            {/* Mega Menu Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-[680px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="grid grid-cols-2 gap-6 p-6">

                {/* Top Categories */}
                <div>
                  <h3 className="text-orange-500 text-xs font-bold uppercase tracking-wide mb-3">
                    Top Categories
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {categories.slice(0, 6).map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/category/${cat.name}`}
                          className="flex items-center gap-2 text-sm text-slate-700 hover:text-orange-500 transition-colors"
                        >
                          <span>{cat.icon}</span> {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="inline-block mt-3 text-orange-500 text-xs font-semibold hover:underline"
                  >
                    View More →
                  </Link>
                </div>

                {/* Top Brands */}
                <div>
                  <h3 className="text-orange-500 text-xs font-bold uppercase tracking-wide mb-3">
                    Top Brands
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {brands.slice(0, 6).map((brand) => (
                      <li key={brand.id}>
                        <Link
                          to="/products"
                          className="text-sm text-slate-700 hover:text-orange-500 transition-colors"
                        >
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="inline-block mt-3 text-orange-500 text-xs font-semibold hover:underline"
                  >
                    View More →
                  </Link>
                </div>
              </div>

              {/* Footer strip inside mega menu */}
              <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 rounded-b-xl">
                <Link
                  to="/products"
                  className="text-sm font-semibold text-slate-800 hover:text-orange-500 transition-colors"
                >
                  Browse All Products →
                </Link>
              </div>
            </div>
          </div>

          <Link to="/products" className="hover:text-[#e8b26c] text-sm font-medium">All Products</Link>
          <Link to="/category/Phones" className="hover:text-[#e8b26c] text-sm">Phones</Link>
          <Link to="/category/Laptops" className="hover:text-[#e8b26c] text-sm">Laptops</Link>
          <Link to="/category/Audio" className="hover:text-[#e8b26c] text-sm">Audio</Link>
          <Link to="/category/Gaming" className="hover:text-[#e8b26c] text-sm">Gaming</Link>
          <Link to="/category/Cameras" className="hover:text-[#e8b26c] text-sm">Cameras</Link>
          <Link to="/category/Wearables" className="hover:text-[#e8b26c] text-sm">Wearables</Link>
          <a href="#" className="text-[#e8b26c] font-semibold text-sm">SALE</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm hover:text-[#e8b26c]">About Us</a>
          <a href="#" className="text-sm hover:text-[#e8b26c]">Blog</a>
          <button className="bg-[#e8b26c] text-black px-5 py-2.5 rounded-md text-sm">Contact</button>
        </div>
      </nav>
    </header>
  );
}
