export interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  isPrimary: boolean;
  sortOrder: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: string;
  discountPrice: string | null;
  stock: number;
  sku: string | null;
  isActive: boolean;
  sortOrder: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  isActive: boolean;
}

export interface ProductDescription {
  icon: string;
  text: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  discountPrice?: string | null;
  shortDescription: string;
  fullDescription?: string | null;
  description: ProductDescription[];
  stock: number;
  sku?: string | null;
  isActive: boolean;
  isFeatured: boolean;
  viewCount: number;
  soldCount: number;
  categoryId: string;
  category: ProductCategory;
  images: ProductImage[];
  variants: ProductVariant[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
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