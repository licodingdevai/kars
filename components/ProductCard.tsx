import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useShop();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const price = parseFloat(product.price);
  const discountPrice = product.discountPrice ? parseFloat(product.discountPrice) : null;
  const discount = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  // Get primary image or first image or placeholder
  const primaryImage = product.images?.find(img => img.isPrimary)?.url
    || product.images?.[0]?.url
    || product.category?.image
    || '/assets/images/category-tumu.png';

  return (
    <Link to={`/product/${product.slug}`} className="group block h-full">
      <div className="relative h-full flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/10 hover:-translate-y-1">

        {/* Image Area - Square Aspect Ratio */}
        <div className="relative aspect-square bg-[#f8f8f8] overflow-hidden">
          <img
            src={primaryImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Badges - Green */}
          {discountPrice && (
            <div className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-sm z-20">
              %{discount} İndirim
            </div>
          )}

          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex flex-col gap-1 mb-3">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-brand-green transition-colors">{product.category?.name}</span>
             <h3 className="font-display font-bold text-base text-brand-black leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
               {product.name}
             </h3>
          </div>

          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
             <div className="flex flex-col">
                {discountPrice && (
                   <span className="text-[10px] text-gray-400 line-through mb-0.5">
                       {price.toFixed(0)} TL
                   </span>
                )}
                <span className="font-display font-bold text-lg text-brand-green">
                  {discountPrice ? discountPrice.toFixed(0) : price.toFixed(0)} TL
                </span>
             </div>

             <button
                onClick={handleAddToCart}
                className="bg-brand-green text-white hover:bg-brand-darkGreen transition-colors px-4 py-2 rounded-md flex items-center gap-2 shadow-sm font-display font-bold text-[10px] uppercase tracking-wider"
             >
                <ShoppingBag className="w-3 h-3" />
                <span>Sepete Ekle</span>
             </button>
          </div>
        </div>

      </div>
    </Link>
  );
};