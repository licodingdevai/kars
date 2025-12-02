import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Star, Minus, Plus, ShoppingBag, Truck, Shield } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useShop();
  const [qty, setQty] = useState(1);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Kars Reserve`;
      window.scrollTo(0,0);
    }
  }, [product]);

  if (!product) return <div className="p-20 text-center">Ürün bulunamadı.</div>;

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 5);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-12">
         {/* Breadcrumb - Clean */}
         <nav className="text-xs font-medium text-gray-400 mb-8 flex gap-2">
          <Link to="/" className="hover:text-brand-black transition">Anasayfa</Link> 
          <span>/</span> 
          <Link to={`/products?category=${product.category}`} className="hover:text-brand-black capitalize transition">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-black truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Left: Images - Rounded */}
          <div className="lg:col-span-7">
             <div className="bg-gray-50 rounded-3xl aspect-[1/1] w-full relative overflow-hidden border border-gray-100">
                <img src={product.image} alt={product.imageAlt} className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-4 leading-tight tracking-tight">{product.name}</h1>
            
            <div className="flex items-center space-x-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-gray-500 font-medium">
                ({product.reviews.length} Değerlendirme)
              </span>
            </div>

            <div className="flex items-baseline space-x-4 mb-8">
               <span className="text-4xl font-display font-bold text-brand-green">{product.price} TL</span>
               {product.oldPrice && (
                 <span className="text-xl text-gray-400 line-through font-medium">{product.oldPrice} TL</span>
               )}
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed font-sans text-lg">
               {product.description}
            </p>

            {/* Actions */}
            <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 h-14">
                       <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 hover:text-brand-green transition"><Minus className="w-4 h-4" /></button>
                       <span className="w-8 flex items-center justify-center font-bold text-lg">{qty}</span>
                       <button onClick={() => setQty(qty + 1)} className="px-4 hover:text-brand-green transition"><Plus className="w-4 h-4" /></button>
                    </div>
                    
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 bg-brand-black text-white font-display font-bold text-lg h-14 rounded-lg hover:bg-brand-green transition duration-300 flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Sepete Ekle
                    </button>
                </div>
            </div>

            {/* Micro Info Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Truck className="w-6 h-6 text-brand-black mb-2" />
                    <span className="font-bold text-sm text-brand-black">Hızlı Teslimat</span>
                    <span className="text-xs text-gray-500">Soğuk zincir ile güvenle.</span>
                </div>
                <div className="flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Shield className="w-6 h-6 text-brand-black mb-2" />
                    <span className="font-bold text-sm text-brand-black">Güvenli Ödeme</span>
                    <span className="text-xs text-gray-500">256-bit SSL koruması.</span>
                </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-100 pt-16 mb-20">
             <h3 className="text-2xl font-display font-bold mb-8">Müşteri Deneyimleri</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.reviews.map(r => (
                    <div key={r.id} className="bg-gray-50 p-6 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                             <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                <img src={r.avatar} alt="User" />
                             </div>
                             <div>
                                <div className="font-bold font-display text-sm">{r.user}</div>
                                <div className="flex text-yellow-400 text-[10px]">
                                    {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                             </div>
                        </div>
                        <p className="text-gray-600 text-sm italic">"{r.comment}"</p>
                    </div>
                ))}
             </div>
        </div>

        {/* Related */}
        <div className="pt-16 border-t border-gray-100">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-display font-bold">Benzer Ürünler</h3>
              <Link to="/products" className="font-bold text-sm underline">Tümünü Gör</Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};