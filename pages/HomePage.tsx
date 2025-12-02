import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, ShieldCheck, Award } from 'lucide-react';

export const HomePage = () => {
  const { products } = useShop();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  useEffect(() => {
    document.title = "Kars Reserve | Orijinal Lezzet";
  }, []);

  // Filter logic
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = [
    { 
      id: 'all', 
      label: 'TÜMÜ', 
      image: '/assets/images/category-tumu.png' 
    },
    { 
      id: 'peynir', 
      label: 'PEYNİR', 
      image: '/assets/images/category-peynir.png'
    },
    { 
      id: 'bal', 
      label: 'BAL', 
      image: '/assets/images/category-bal.png'
    },
    { 
      id: 'yag', 
      label: 'TEREYAĞI', 
      image: '/assets/images/category-tereyagi.png'
    },
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* DIRECT COMMERCE SECTION */}
      
      {/* 1. Category Navigation - Story Style */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6">
        <div 
          className="container mx-auto px-4 md:px-8 overflow-x-auto [&::-webkit-scrollbar]:hidden" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
           <div className="flex space-x-8 md:justify-center min-w-max px-2 py-2">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="flex flex-col items-center group min-w-[70px] focus:outline-none"
                >
                  <div className={`
                    w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] transition-all duration-300 ease-out
                    ${selectedCategory === cat.id 
                      ? 'border-2 border-brand-green scale-110 shadow-lg shadow-brand-green/20' 
                      : 'border-2 border-gray-100 group-hover:border-brand-green/40'
                    }
                  `}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 relative">
                       <img 
                          src={cat.image} 
                          alt={cat.label} 
                          className={`
                            w-full h-full object-cover transition-all duration-500
                            ${selectedCategory === cat.id ? 'scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}
                          `} 
                       />
                       {/* Subtle overlay for unselected */}
                       {selectedCategory !== cat.id && (
                         <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                       )}
                    </div>
                  </div>
                  
                  <span className={`
                    mt-3 text-[10px] md:text-xs font-display font-bold tracking-widest uppercase transition-colors duration-300
                    ${selectedCategory === cat.id 
                      ? 'text-brand-green' 
                      : 'text-gray-400 group-hover:text-brand-black'
                    }
                  `}>
                    {cat.label}
                  </span>
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* 2. Product Grid - Immediate Display */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8 border-l-4 border-brand-green pl-4">
             <h2 className="text-2xl font-display font-bold text-brand-black tracking-tight uppercase">
               {selectedCategory === 'all' ? 'Öne Çıkanlar' : categories.find(c => c.id === selectedCategory)?.label}
             </h2>
             <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
               {filteredProducts.length} Ürün
             </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100 border-dashed">
               <p className="text-gray-500 font-medium">Bu kategoride henüz ürün bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Visual Gallery Section (5 Mock Images) */}
      <section className="py-12 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                 <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
                    <img 
                      src={`/assets/images/${item}.webp`} 
                      alt="Gallery" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out grayscale-[20%] group-hover:grayscale-0"
                    />
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Trust Badges - Modern Grid with Dividers */}
      <section className="py-20 border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  
                  {/* Item 1 */}
                  <div className="flex flex-col items-center text-center p-8 group cursor-default transition-colors hover:bg-gray-50/50">
                      <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 ease-out">
                        <Snowflake className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-brand-black mb-3 uppercase tracking-tight">Soğuk Zincir</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                        Ürünleriniz özel ısı yalıtımlı kutularda, bozulmadan kapınıza gelir.
                      </p>
                  </div>

                   {/* Item 2 */}
                  <div className="flex flex-col items-center text-center p-8 group cursor-default transition-colors hover:bg-gray-50/50">
                      <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 ease-out">
                        <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-brand-black mb-3 uppercase tracking-tight">Kırılmaz Garanti</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                        Taşıma sırasında oluşabilecek her türlü hasar tarafımızca karşılanır.
                      </p>
                  </div>

                   {/* Item 3 */}
                  <div className="flex flex-col items-center text-center p-8 group cursor-default transition-colors hover:bg-gray-50/50">
                      <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 ease-out">
                        <Award className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-brand-black mb-3 uppercase tracking-tight">%100 Orijinal</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                        Coğrafi işaretli, Kars yöresine ait sertifikalı üretim.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};