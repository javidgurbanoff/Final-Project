"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios, { AxiosError } from "axios";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  fetchWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/wishlist");
      setWishlist(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error fetching wishlist:", error.response?.data);
      } else {
        console.error("Unexpected error fetching wishlist:", error);
      }
    }
  };

  const addToWishlist = async (product: Product) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/wishlist",
        { product }
      );
      setWishlist(response.data.wishlist);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(
          "Error adding product to wishlist:",
          error.response?.data
        );
        alert(error.response?.data?.message || "Something went wrong");
      } else {
        console.error("Unexpected error adding product to wishlist:", error);
        alert("Something went wrong");
      }
    }
  };

  const removeFromWishlist = async (productId: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/wishlist/${productId}`
      );
      setWishlist(response.data.wishlist);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(
          "Error removing product from wishlist:",
          error.response?.data
        );
      } else {
        console.error(
          "Unexpected error removing product from wishlist:",
          error
        );
      }
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, fetchWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
