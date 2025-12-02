import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Trash2, Minus, Plus, ArrowRight, Lock } from 'lucide-react';

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sepetim | Kars Reserve";
  }, []);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 bg-brand-cream">
        <h2 className="text-4xl font-serif mb-6 text-brand-black">Sepetiniz Boş</h2>
        <Link to="/products" className="border-b-2 border-brand-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-brand-green hover:border-brand-green transition">
          Alışverişe Dön
        </Link>
      </div>
    );
  }

  const isFreeShipping = cartTotal >= 500;
  const shippingCost = isFreeShipping ? 0 : 50;
  const grandTotal = cartTotal + shippingCost;

  return (
    <div className="bg-brand-cream min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl font-serif mb-12 text-brand-black">Alışveriş Sepeti</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart List - Minimal List Style */}
          <div className="lg:col-span-2 space-y-8">
             {cart.map(item => (
                <div key={item.id} className="flex gap-6 border-b border-gray-200 pb-8 items-start">
                    <div className="w-24 h-32 bg-gray-100 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[20%]" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between mb-2">
                             <Link to={`/product/${item.id}`} className="font-serif text-xl text-brand-black hover:underline">{item.name}</Link>
                             <span className="font-sans font-bold text-lg">{item.price * item.quantity} TL</span>
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Miktar: {item.quantity}</p>
                        
                        <div className="flex items-center gap-6">
                            <div className="flex items-center border border-gray-300">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100"><Minus className="w-3 h-3" /></button>
                                <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100"><Plus className="w-3 h-3" /></button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-xs text-gray-400 hover:text-red-500 underline">
                                Kaldır
                            </button>
                        </div>
                    </div>
                </div>
             ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
             <div className="bg-white p-8 border border-gray-200 sticky top-32">
                <h3 className="font-display font-bold text-lg uppercase tracking-wider mb-6">Özet</h3>
                
                <div className="space-y-4 mb-8 text-sm text-gray-600">
                    <div className="flex justify-between">
                        <span>Ara Toplam</span>
                        <span>{cartTotal} TL</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Kargo</span>
                        {isFreeShipping ? (
                             <span className="text-brand-green font-bold">Ücretsiz</span>
                        ) : (
                             <span>{shippingCost} TL</span>
                        )}
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-8">
                    <div className="flex justify-between items-baseline">
                        <span className="font-bold text-lg text-brand-black">Toplam</span>
                        <span className="font-bold text-2xl text-brand-green">{grandTotal} TL</span>
                    </div>
                </div>

                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-brand-black text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-green transition flex justify-center items-center group"
                >
                  Ödemeye Geç <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                
                <div className="mt-4 flex justify-center items-center text-[10px] text-gray-400 gap-1">
                   <Lock className="w-3 h-3" /> Güvenli SSL Ödeme
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};