import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img 
          src={product.image} 
          alt={product.alt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        {product.oldPrice && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            %{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)} İNDİRİM
          </div>
        )}
        <div className="absolute top-2 left-2 bg-brand-black text-brand-gold text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
          Kargo Bedava
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-brand-brown font-medium mb-1">{product.category}</span>
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-brown transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.shortDescription}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.oldPrice.toLocaleString('tr-TR')} ₺
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              {product.price.toLocaleString('tr-TR')} ₺
            </span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-brand-green hover:bg-brand-greenHover text-white p-2 rounded-full transition-colors shadow-md transform active:scale-95"
            aria-label="Sepete Ekle"
          >
            <ShoppingBasket size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;