import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const isInWishlist = (id) => wishlist.some((i) => i.id === id);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
  };

  const removeFromWishlist = (id) =>
    setWishlist((prev) => prev.filter((i) => i.id !== id));

  return (
    <WishlistContext.Provider
      value={{ wishlist, isInWishlist, toggleWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);