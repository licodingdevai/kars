import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, AnalyticsEvent } from '../types';
import { API_ENDPOINTS } from '../config/api';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  orders: Order[];
  addOrder: (order: Order) => void;
  addProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  loading: boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.products}?page=1&limit=50`);
      const data = await response.json();
      setProducts(data.products.filter((p: Product) => p.isActive));
    } catch (error) {
      console.error('Ürünler yüklenirken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  // Push event to Data Layer helper
  const pushToDataLayer = (event: AnalyticsEvent) => {
    if (window.dataLayer) {
      window.dataLayer.push(event);
      console.log('DataLayer Push:', event);
    }
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });

    // GA4 Add to Cart Event
    const priceNum = parseFloat(product.price);
    pushToDataLayer({
      event: 'add_to_cart',
      ecommerce: {
        currency: 'TRY',
        value: priceNum * quantity,
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: priceNum,
          quantity: quantity
        }]
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    
    // GA4 Remove from Cart Event (Simplified)
    pushToDataLayer({
      event: 'remove_from_cart',
      ecommerce: {
        items: [{ item_id: productId }]
      }
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  return (
    <ShopContext.Provider value={{
      products,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      orders,
      addOrder,
      addProduct,
      deleteProduct,
      loading
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within ShopProvider');
  return context;
};