export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isBestSeller: boolean;
  isNewArrival: boolean;
  description: string;
  material: string;
  gemstone?: string;
  sku: string;
  // Premium e-commerce fields
  originalPrice?: number;
  discountBadge?: string;
  stockStatus?: 'In Stock' | 'Out of Stock' | 'Low Stock';
  dateAdded?: string; // ISO Date string for newest sorting
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  productBought: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  tag: string;
  productIds: string[];
}
