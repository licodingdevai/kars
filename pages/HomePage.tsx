import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Award, MessageCircle } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://picsum.photos/id/106/1920/1080" 
            alt="Kars Yaylası" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-sm md:text-base mb-4 block animate-fade-in-up">DOĞADAN GELEN LEZZET</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight shadow-sm">
            Kars'ın Zirvesinden<br/>Sofranıza
          </h1>
          <p className="text-stone-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Yüzyıllık gelenekle üretilen, katkısız ve doğal yöresel ürünleri kapınıza kadar getiriyoruz.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg text-lg"
          >
            Alışverişe Başla <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-stone-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-stone-50 p-4 rounded-full mb-4 text-brand-brown">
              <Truck size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Ücretsiz Kargo</h3>
            <p className="text-sm text-gray-500">Tüm Türkiye'ye bedava</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-stone-50 p-4 rounded-full mb-4 text-brand-brown">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Güvenli Ödeme</h3>
            <p className="text-sm text-gray-500">256-bit SSL Koruması</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-stone-50 p-4 rounded-full mb-4 text-brand-brown">
              <Star size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">%100 Doğal</h3>
            <p className="text-sm text-gray-500">Katkısız ve organik</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-stone-50 p-4 rounded-full mb-4 text-brand-brown">
              <Award size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Memnuniyet Garantisi</h3>
            <p className="text-sm text-gray-500">İade garantisi</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Kategoriler</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to="/products" className="group relative h-64 overflow-hidden rounded-xl shadow-md cursor-pointer">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-xl font-serif font-bold border-b-2 border-brand-gold pb-1">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Müşterilerimizin en çok tercih ettiği, Kars'ın eşsiz lezzetlerini keşfedin.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-block border-2 border-brand-black text-brand-black px-10 py-3 rounded hover:bg-brand-black hover:text-white transition font-medium tracking-wide"
            >
              TÜM ÜRÜNLERİ GÖR
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-brand-brown text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">WhatsApp ile Hızlı Sipariş</h2>
            <p className="text-white/80 text-lg mb-8">
              Web sitesiyle uğraşmak istemiyor musunuz? WhatsApp hattımız üzerinden uzman ekibimizle görüşerek siparişinizi saniyeler içinde oluşturabilirsiniz.
            </p>
            <a 
              href="https://wa.me/905555555555" 
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg"
            >
              <MessageCircle size={24} />
              WhatsApp'tan Yazın
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://picsum.photos/id/431/500/500" alt="Doğal Lezzetler" className="rounded-2xl shadow-2xl border-4 border-white/20" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;