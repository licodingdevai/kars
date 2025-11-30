import React from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductListPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        
        {/* Category Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-4">Tüm Doğal Lezzetler</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Kars'ın bereketli topraklarından geleneksel yöntemlerle üretilen tüm ürünlerimize buradan ulaşabilirsiniz.
          </p>
        </div>

        {/* Categories Nav */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-6 py-2 bg-brand-black text-white rounded-full text-sm font-medium">Tümü</button>
          {CATEGORIES.map(cat => (
            <button key={cat.id} className="px-6 py-2 bg-white text-stone-600 border border-stone-200 hover:border-brand-brown hover:text-brand-brown rounded-full text-sm font-medium transition">
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicating products to fill the grid for demo purposes */}
          {PRODUCTS.map(product => (
            <ProductCard key={`${product.id}-dup`} product={{...product, id: `${product.id}-dup`, name: `${product.name} (Küçük Boy)`}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;