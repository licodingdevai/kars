import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Phone, CheckCircle, MessageCircle, Minus, Plus } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../constants';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping' | 'nutrition'>('details');

  const handleAddToCart = () => {
    addToCart(product, qty);
    // You could add a toast notification here
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Images */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-stone-100 mb-4 bg-stone-50">
              <img 
                src={product.image} 
                alt={product.alt} 
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-green text-white px-3 py-1 rounded text-sm font-bold shadow-sm">ÜCRETSİZ KARGO</span>
              </div>
            </div>
            {/* Thumbnails (Mock) */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`rounded-lg overflow-hidden border-2 cursor-pointer aspect-square ${i === 1 ? 'border-brand-gold' : 'border-transparent'}`}>
                  <img src={product.image} alt={`${product.alt} detay ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-2">
              <span className="text-brand-brown font-medium text-sm tracking-wide uppercase">{product.category}</span>
            </div>
            
            {/* SEO: H1 is critical */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="text-stone-500 text-sm underline cursor-pointer">(124 Müşteri Yorumu)</span>
            </div>

            {/* Price */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mb-8">
              <div className="flex items-end gap-3 mb-2">
                {product.oldPrice && (
                  <span className="text-xl text-stone-400 line-through decoration-red-500 decoration-2">
                    {product.oldPrice.toLocaleString('tr-TR')} ₺
                  </span>
                )}
                <span className="text-4xl font-bold text-brand-black">
                  {product.price.toLocaleString('tr-TR')} ₺
                </span>
              </div>
              <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                <Truck size={16} /> Kargo Dahil Fiyattır
              </p>
            </div>

            {/* Features Short List */}
            <ul className="space-y-2 mb-8">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-stone-700">
                  <CheckCircle size={18} className="text-brand-gold" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sticky bottom-0 bg-white sm:static p-4 sm:p-0 border-t sm:border-0 border-stone-200 shadow-xl sm:shadow-none z-40">
              <div className="flex items-center border border-stone-300 rounded-lg h-14">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 h-full hover:bg-stone-100 text-stone-600"
                >
                  <Minus size={20} />
                </button>
                <div className="w-16 text-center font-bold text-lg">{qty}</div>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="px-4 h-full hover:bg-stone-100 text-stone-600"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-green hover:bg-brand-greenHover text-white font-bold text-lg rounded-lg h-14 shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 animate-pulse-slow"
              >
                SEPETE EKLE
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                <ShieldCheck className="text-brand-black" size={24} />
                <div className="text-xs">
                  <p className="font-bold text-brand-black">Güvenli Alışveriş</p>
                  <p className="text-stone-500">256-Bit SSL Koruma</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                <Phone className="text-brand-black" size={24} />
                <div className="text-xs">
                  <p className="font-bold text-brand-black">Destek Hattı</p>
                  <p className="text-stone-500">0850 123 45 67</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/905555555555" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 py-3 rounded-lg font-medium transition"
            >
              <MessageCircle size={20} />
              WhatsApp İle Bilgi Al
            </a>

          </div>
        </div>
      </div>

      {/* Tabs Section: Info & SEO Text */}
      <div className="bg-stone-50 py-12 border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex border-b border-stone-300 mb-8">
            <button 
              onClick={() => setActiveTab('details')}
              className={`pb-4 px-6 font-bold text-lg transition ${activeTab === 'details' ? 'text-brand-black border-b-2 border-brand-black' : 'text-stone-400 hover:text-stone-600'}`}
            >
              Ürün Açıklaması
            </button>
            <button 
              onClick={() => setActiveTab('shipping')}
              className={`pb-4 px-6 font-bold text-lg transition ${activeTab === 'shipping' ? 'text-brand-black border-b-2 border-brand-black' : 'text-stone-400 hover:text-stone-600'}`}
            >
              Teslimat & İade
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 prose max-w-none text-stone-700">
            {activeTab === 'details' && (
              <div>
                <h2 className="text-2xl font-serif text-brand-black mb-4">{product.name} Hakkında</h2>
                <p className="mb-4 leading-relaxed">{product.description}</p>
                <p className="mb-4">Bu ürün Kars yöresinin yüksek rakımlı yaylalarında, tamamen doğal ortamda beslenen hayvanlardan elde edilen sütlerle üretilmiştir. Geleneksel yöntemler kullanılarak, hiçbir katkı maddesi eklenmeden hazırlanmıştır.</p>
                <h3 className="text-xl font-bold mt-6 mb-3">Saklama Koşulları</h3>
                <p>Serin ve kuru yerde muhafaza ediniz. Buzdolabında +4 derecede saklanması önerilir.</p>
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800">
                  <strong>Bilgilendirme:</strong> Yöresel ürünlerimiz el yapımı olduğu için gramajlarda küçük farklılıklar (%5 +/-) olabilir.
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="font-bold text-lg mb-2">Kargo Süreci</h3>
                <p className="mb-4">Siparişleriniz özel strafor kutularda, buz aküleri ile desteklenerek gönderilmektedir. Bu sayede ürünleriniz tazeliğini kaybetmeden kapınıza ulaşır.</p>
                <p className="mb-4">Hafta içi saat 15:00'a kadar verilen siparişler aynı gün kargoya verilir.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Müşteri Yorumları</h2>
          <div className="grid gap-6">
            {REVIEWS.map(review => (
              <div key={review.id} className="flex gap-4 p-6 bg-stone-50 rounded-xl border border-stone-100">
                <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-gray-900">{review.user}</h4>
                    <span className="text-xs text-stone-400">{review.date}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-300" : ""} />
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">Bunları da Beğenebilirsiniz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(recProduct => (
               <ProductCard key={recProduct.id} product={recProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;