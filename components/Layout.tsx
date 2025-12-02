import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowRight, Truck, Search, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { COMPANY_PHONE } from '../constants';

const TopBar = () => (
  <div className="bg-[#dcfce7] text-brand-black py-3 overflow-hidden relative z-50">
    <div className="container mx-auto px-4 flex justify-center items-center text-xs font-bold tracking-widest uppercase">
       <div className="flex items-center gap-2">
         <Truck className="w-4 h-4" />
         <span>500TL ve Üzeri Kargo Ücretsiz</span>
         <span className="mx-2">•</span>
         <span>7/24 İletişim</span>
       </div>
    </div>
  </div>
);

const NavItem = ({ to, children }: { to: string, children?: React.ReactNode }) => (
  <Link 
    to={to} 
    className="relative group py-2"
  >
    <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-black group-hover:text-brand-green transition-colors duration-300">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-green transition-all duration-300 ease-out group-hover:w-full"></span>
  </Link>
);

const Header = () => {
  const { cart } = useShop();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
            
            {/* 1. Logo (Left) */}
            <Link to="/" className="flex flex-col justify-center items-start group z-50">
              <img src="/assets/images/logo-dark.png" alt="Kars Reserve Logo" className="h-10 md:h-12 object-contain" />
            </Link>

            {/* 2. Desktop Navigation (Center) */}
            <nav className="hidden lg:flex items-center gap-10">
              <NavItem to="/products?category=peynir">Peynirler</NavItem>
              <NavItem to="/products?category=bal">Ballar</NavItem>
              <NavItem to="/products?category=et">Şarküteri</NavItem>
              <NavItem to="/products?category=yag">Yağlar</NavItem>
              <NavItem to="/products">Koleksiyon</NavItem>
            </nav>

            {/* 3. Actions (Right) */}
            <div className="flex items-center gap-6">
               {/* Search (Visual Only) */}
               <button className="hidden md:block group">
                 <Search className="w-5 h-5 text-gray-400 group-hover:text-brand-black transition-colors" strokeWidth={1.5} />
               </button>

               {/* User (Visual Only) */}
               <button className="hidden md:block group">
                 <User className="w-5 h-5 text-gray-400 group-hover:text-brand-black transition-colors" strokeWidth={1.5} />
               </button>

               {/* Cart */}
               <Link to="/cart" className="flex items-center group relative pl-2">
                 <ShoppingBag className="w-6 h-6 text-brand-black group-hover:text-brand-green transition-colors" strokeWidth={1.5} />
                 {cartItemCount > 0 && (
                   <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                     {cartItemCount}
                   </span>
                 )}
               </Link>

               {/* Mobile Toggle */}
               <button className="lg:hidden ml-2" onClick={() => setIsMenuOpen(true)}>
                  <Menu className="w-6 h-6 text-brand-black" strokeWidth={1.5} />
               </button>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex flex-col">
                  <img src="/assets/images/logo-dark.png" alt="Kars Reserve Logo" className="h-8 object-contain" />
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
                <X className="w-6 h-6 text-brand-black" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col p-8 space-y-8 flex-grow justify-center items-center text-center">
              <Link to="/products?category=peynir" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold uppercase tracking-tight text-brand-black hover:text-brand-green transition-colors">Peynirler</Link>
              <Link to="/products?category=bal" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold uppercase tracking-tight text-brand-black hover:text-brand-green transition-colors">Ballar</Link>
              <Link to="/products?category=et" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold uppercase tracking-tight text-brand-black hover:text-brand-green transition-colors">Şarküteri</Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold uppercase tracking-tight text-brand-black hover:text-brand-green transition-colors">Tüm Ürünler</Link>
              
              <div className="w-12 h-1 bg-gray-100 my-8"></div>
              
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-display font-medium text-gray-400 hover:text-brand-black">İletişim</Link>
            </div>
            
            <div className="p-6 bg-gray-50 text-center text-xs text-gray-400 tracking-widest uppercase">
              &copy; 2024 Kars Reserve
            </div>
          </div>
        )}
      </header>
    </>
  );
};

const Footer = () => (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-brand-black">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-1">
                 <Link to="/" className="flex flex-col group mb-6">
                    <span className="font-display font-black text-3xl tracking-tighter text-white leading-none">KARS</span>
                    <span className="font-display font-bold text-xs tracking-[0.3em] text-brand-green leading-none mt-1">RESERVE</span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Kars'ın yüksek rakımlı yaylalarından, %100 doğal, katkısız ve geleneksel yöntemlerle üretilmiş gurme lezzetler.
                </p>
            </div>
            
            <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-green mb-6">Kurumsal</h4>
                <div className="flex flex-col space-y-4 text-sm text-gray-400 font-medium">
                    <Link to="/" className="hover:text-white transition-colors">Hakkımızda</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">İletişim</Link>
                    <Link to="/" className="hover:text-white transition-colors">Sıkça Sorulanlar</Link>
                    <Link to="/" className="hover:text-white transition-colors">Kargo ve Teslimat</Link>
                </div>
            </div>

             <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-green mb-6">Koleksiyonlar</h4>
                <div className="flex flex-col space-y-4 text-sm text-gray-400 font-medium">
                    <Link to="/products?category=peynir" className="hover:text-white transition-colors">Eski Kaşar & Gravyer</Link>
                    <Link to="/products?category=bal" className="hover:text-white transition-colors">Organik Çiçek Balı</Link>
                    <Link to="/products?category=et" className="hover:text-white transition-colors">Kurutulmuş Kaz Eti</Link>
                    <Link to="/products?category=yag" className="hover:text-white transition-colors">Köy Tereyağı</Link>
                </div>
            </div>

             <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-green mb-6">İletişim</h4>
                 <div className="flex flex-col space-y-4 text-sm text-gray-400">
                    <p className="flex items-center gap-2"><span className="text-white">Tel:</span> {COMPANY_PHONE}</p>
                    <p className="flex items-center gap-2"><span className="text-white">Email:</span> info@karsreserve.com</p>
                    <p className="leading-relaxed">Ortakapı Mahallesi,<br/>Faikbey Caddesi No:10<br/>Merkez, Kars</p>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <span>&copy; 2024 Kars Reserve. Tüm hakları saklıdır.</span>
            <div className="flex gap-4">
               <span>Gizlilik Politikası</span>
               <span>Mesafeli Satış Sözleşmesi</span>
            </div>
        </div>
    </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-black bg-white">
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
    </div>
  );
};