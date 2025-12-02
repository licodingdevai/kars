export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  image: string;
  imageAlt: string; // Critical for SEO
  category: string;
  description: string;
  shortDescription: string;
  reviews: Review[];
  stock: number;
}

export interface Review {
  id: string;
  user: string;
  avatar: string; // Picsum url
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  date: string;
  status: 'pending' | 'shipped' | 'delivered';
}

export interface AnalyticsEvent {
  event: string;
  [key: string]: any;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}