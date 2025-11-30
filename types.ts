export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  alt: string; // Critical for SEO
  description: string;
  shortDescription: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

// Extend window for Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}