import { lazy, Suspense } from "react";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastProvider } from "./context/ToastContext";
import LayOut from "./LayOut";

const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const Products = lazy(() => import("./Pages/Products"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage"));
const Wishlist = lazy(() => import("./Pages/Wishlist"));
const Login = lazy(() => import("./Pages/Login"));
const RegisterModal = lazy(() => import("./Components/RegisterModal"));
const Checkout = lazy(() => import("./Pages/Checkout"));

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Page not found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
    </div>
  );
}

function withSuspense(Component) {
  return (
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  );
}

export default function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: withSuspense(Home) },
        { path: "cart", element: withSuspense(Cart) },
        { path: "products", element: withSuspense(Products) },
        { path: "category/:categoryName", element: withSuspense(CategoryPage) },
        { path: "wishlist", element: withSuspense(Wishlist) },
        { path: "checkout", element: withSuspense(Checkout) },
      ],
    },
    {  path: "/login", element: withSuspense(Login) },
    { path: "/register", element: withSuspense(RegisterModal) },
    { path: "*", element: <NotFound /> },
  ],
  {
    basename: "/react-jsx-store",
  }

);

  return (
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <RouterProvider router={routing} />
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
