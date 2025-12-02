import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../constants';

export const ProductListPage = () => {
  const { products } = useShop();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get('category');

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category === categoryFilter) 
    : products;

  const currentCategoryName = categoryFilter 
    ? CATEGORIES.find(c => c.id === categoryFilter)?.name 
    : 'Tüm Koleksiyon';

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">{currentCategoryName}</h1>
            <div className="w-20 h-1 bg-brand-green"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
           <div className="text-center py-20">
             <p className="text-gray-500 font-light">Bu kategoride şu an ürün bulunmuyor.</p>
           </div>
        )}
      </div>
    </div>
  );
};