export interface WishlistItem {
    id: string;
    name: string;
    imageUrl: string;
  }
  
  export interface WishlistContextType {
    wishlist: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (id: string) => void;
  }
  