import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShieldCheck, Lock, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="bg-stone-100 p-8 rounded-full mb-6">
          <ShieldCheck size={64} className="text-stone-300" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Sepetiniz Boş</h2>
        <p className="text-gray-500 mb-8">Henüz sepetinize doğal lezzetlerimizden eklemediniz.</p>
        <Link to="/products" className="bg-brand-black text-white px-8 py-3 rounded-lg hover:bg-brand-brown transition">
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Alışveriş Sepeti</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="p-4 border-b border-stone-100 bg-stone-50 text-xs font-bold text-stone-500 uppercase tracking-wider hidden md:flex">
                <div className="w-1/2">Ürün</div>
                <div className="w-1/6 text-center">Fiyat</div>
                <div className="w-1/6 text-center">Adet</div>
                <div className="w-1/6 text-right">Toplam</div>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b border-stone-100 flex flex-col md:flex-row items-center gap-4">
                  
                  {/* Product Info */}
                  <div className="w-full md:w-1/2 flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded bg-stone-100" />
                    <div>
                      <div className="text-xs text-brand-brown mb-1">Ürün Kodu: {item.slug.slice(0, 6).toUpperCase()}</div>
                      <Link to={`/product/${item.slug}`} className="font-bold text-gray-900 hover:text-brand-brown transition">
                        {item.name}
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-red-500 text-xs mt-2 hover:text-red-700"
                      >
                        <Trash2 size={12} /> Kaldır
                      </button>
                    </div>
                  </div>

                  {/* Mobile Price Label */}
                  <div className="flex justify-between w-full md:hidden">
                    <span className="font-bold">Birim Fiyat:</span>
                    <span>{item.price} ₺</span>
                  </div>

                  {/* Desktop Price */}
                  <div className="hidden md:block w-1/6 text-center font-medium text-stone-600">
                    {item.price.toLocaleString('tr-TR')} ₺
                  </div>

                  {/* Quantity */}
                  <div className="w-full md:w-1/6 flex justify-center">
                    <div className="flex items-center border border-stone-300 rounded h-10 bg-stone-50">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 h-full hover:bg-stone-200 text-stone-600"><Minus size={16} /></button>
                      <input 
                        type="text" 
                        readOnly 
                        value={item.quantity} 
                        className="w-10 text-center bg-transparent font-medium focus:outline-none"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 h-full hover:bg-stone-200 text-stone-600"><Plus size={16} /></button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="w-full md:w-1/6 flex justify-between md:justify-end items-center md:items-start mt-2 md:mt-0">
                    <span className="md:hidden font-bold">Toplam:</span>
                    <span className="font-bold text-lg text-brand-black">
                      {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Info */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start text-stone-500 text-xs">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-stone-200">
                <ShieldCheck size={16} className="text-green-600" /> %100 Güvenli Alışveriş
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-stone-200">
                <Truck size={16} className="text-brand-brown" /> Ücretsiz Kargo
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 sticky top-24">
              <h3 className="font-serif font-bold text-xl mb-4 text-gray-900 border-b border-stone-100 pb-2">Sipariş Özeti</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-stone-600">
                  <span>Ara Toplam</span>
                  <span>{cartTotal.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Kargo</span>
                  <span>0,00 ₺</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xl font-bold text-gray-900 border-t border-stone-100 pt-4 mb-6">
                <span>Genel Toplam</span>
                <span>{cartTotal.toLocaleString('tr-TR')} ₺</span>
              </div>

              <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm text-center mb-6 border border-green-100">
                <span className="font-bold">Ücretsiz Kargo</span> fırsatından yararlanıyorsunuz!
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-green hover:bg-brand-greenHover text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 text-lg"
              >
                SEPETİ ONAYLA <ArrowRight size={20} />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-stone-400 text-xs">
                <Lock size={12} />
                <span>256-Bit SSL ile güvenli ödeme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;