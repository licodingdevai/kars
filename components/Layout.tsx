import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBasket, Menu, X, Phone, Instagram, Facebook, Video, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout: React.FC = () => {
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Basic breadcrumb generation
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Top Bar */}
      <div className="bg-brand-black text-brand-gold py-2 text-xs md:text-sm text-center px-4 tracking-wide">
        TÜM TÜRKİYE'YE ÜCRETSİZ KARGO | DOĞAL VE KATKISIZ YÖRESEL ÜRÜNLER
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-black text-brand-gold p-2 font-serif font-bold text-xl md:text-2xl border-2 border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300">
                KR
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-serif font-bold text-brand-black tracking-widest">KARS RESERVE</h1>
                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Est. 1878</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-medium text-stone-700">
              <Link to="/" className="hover:text-brand-brown transition">Ana Sayfa</Link>
              <Link to="/products" className="hover:text-brand-brown transition">Tüm Ürünler</Link>
              <Link to="/contact" className="hover:text-brand-brown transition">İletişim</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/905555555555" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full hover:bg-green-100 transition">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              
              <Link to="/cart" className="relative p-2 text-brand-black hover:text-brand-brown transition">
                <ShoppingBasket size={26} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button 
                className="md:hidden p-2 text-brand-black"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 p-4 absolute w-full shadow-lg">
            <nav className="flex flex-col space-y-4 text-lg">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Ana Sayfa</Link>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Tüm Ürünler</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>İletişim</Link>
              <a href="https://wa.me/905555555555" className="flex items-center gap-2 text-green-600 font-medium">
                <MessageCircle size={20} /> WhatsApp İle Sipariş
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Breadcrumb - Global */}
        {pathnames.length > 0 && pathnames[0] !== 'thank-you' && (
          <div className="bg-stone-100 py-2 border-b border-stone-200">
            <div className="container mx-auto px-4 text-xs md:text-sm text-stone-500 flex items-center gap-2">
              <Link to="/" className="hover:underline">Ana Sayfa</Link>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <React.Fragment key={name}>
                    <span>/</span>
                    {isLast ? (
                      <span className="capitalize font-medium text-brand-black">{name.replace(/-/g, ' ')}</span>
                    ) : (
                      <Link to={routeTo} className="capitalize hover:underline">{name.replace(/-/g, ' ')}</Link>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-stone-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-gold text-brand-black p-1 font-serif font-bold border border-brand-gold">KR</div>
                <h3 className="text-xl font-serif text-white">KARS RESERVE</h3>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                1878'den beri değişmeyen lezzet geleneği. Dağların zirvesinden sofranıza, katkısız ve doğal yöresel ürünler.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-brand-gold transition">Tüm Ürünler</Link></li>
                <li><Link to="/products" className="hover:text-brand-gold transition">Peynir Çeşitleri</Link></li>
                <li><Link to="/products" className="hover:text-brand-gold transition">Bal ve Reçeller</Link></li>
                <li><Link to="/contact" className="hover:text-brand-gold transition">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-4">Müşteri Hizmetleri</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-brand-gold cursor-pointer">Kargo Takip</span></li>
                <li><span className="hover:text-brand-gold cursor-pointer">İade Koşulları</span></li>
                <li><span className="hover:text-brand-gold cursor-pointer">Güvenli Ödeme</span></li>
                <li><span className="hover:text-brand-gold cursor-pointer">Sıkça Sorulan Sorular</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-4">Bize Ulaşın</h4>
              <div className="flex flex-col space-y-3 text-sm">
                <a href="tel:+902121234567" className="flex items-center gap-2 hover:text-brand-gold">
                  <Phone size={16} /> 0850 123 45 67
                </a>
                <a href="https://wa.me/905555555555" className="flex items-center gap-2 hover:text-brand-gold">
                  <MessageCircle size={16} /> WhatsApp Destek
                </a>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-gold hover:text-black transition"><Instagram size={18} /></a>
                  <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-gold hover:text-black transition"><Facebook size={18} /></a>
                  <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-gold hover:text-black transition"><Video size={18} /></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <p>&copy; {new Date().getFullYear()} Kars Reserve. Tüm hakları saklıdır.</p>
            <div className="flex gap-4">
              <span className="px-2 py-1 bg-white rounded text-black font-bold">VISA</span>
              <span className="px-2 py-1 bg-white rounded text-black font-bold">MasterCard</span>
              <span className="px-2 py-1 bg-white rounded text-black font-bold">TROY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;