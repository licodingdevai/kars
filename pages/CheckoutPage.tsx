import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Lock, ArrowRight, CreditCard, Banknote } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validation and API call here.
    // Store simple order info in session storage to pass to Thank You page
    sessionStorage.setItem('lastOrder', JSON.stringify({
      orderId: 'KR-' + Math.floor(Math.random() * 1000000),
      total: cartTotal,
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`
    }));
    
    clearCart();
    navigate('/thank-you');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-serif font-bold text-center mb-10 text-brand-black">Ödeme ve Teslimat</h1>
        
        <form onSubmit={handlePurchase} className="flex flex-col lg:flex-row gap-8">
          
          {/* Left: Form */}
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand-black">
                <span className="bg-brand-black text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span> 
                Teslimat Bilgileri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Adınız</label>
                  <input required name="firstName" onChange={handleInputChange} className="w-full border border-stone-300 rounded p-2 focus:border-brand-gold outline-none" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Soyadınız</label>
                  <input required name="lastName" onChange={handleInputChange} className="w-full border border-stone-300 rounded p-2 focus:border-brand-gold outline-none" placeholder="Soyadınız" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-stone-600 mb-1">E-Posta</label>
                  <input required type="email" name="email" onChange={handleInputChange} className="w-full border border-stone-300 rounded p-2 focus:border-brand-gold outline-none" placeholder="ornek@email.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-stone-600 mb-1">Telefon</label>
                  <input required type="tel" name="phone" onChange={handleInputChange} className="w-full border border-stone-300 rounded p-2 focus:border-brand-gold outline-none" placeholder="05XX XXX XX XX" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-stone-600 mb-1">Adres</label>
                  <textarea required name="address" onChange={handleInputChange} rows={3} className="w-full border border-stone-300 rounded p-2 focus:border-brand-gold outline-none" placeholder="Mahalle, Cadde, Sokak, No..."></textarea>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand-black">
                <span className="bg-brand-black text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span> 
                Ödeme Yöntemi
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-brand-green bg-green-50 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-brand-green" />
                  <CreditCard size={20} className="text-brand-green" />
                  <span className="font-medium">Kredi Kartı ile Güvenli Ödeme</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer opacity-70 hover:opacity-100">
                  <input type="radio" name="payment" className="w-4 h-4 text-brand-green" />
                  <Banknote size={20} className="text-stone-600" />
                  <span className="font-medium">Kapıda Ödeme (+20 TL)</span>
                </label>
              </div>
              
              {/* Fake Credit Card Form for Visuals */}
              <div className="mt-4 p-4 bg-stone-50 rounded border border-stone-100">
                <div className="text-sm text-stone-500 mb-2 flex items-center gap-1"><Lock size={12}/> Kart bilgileriniz 256-bit SSL ile korunmaktadır.</div>
                <input disabled className="w-full border border-stone-300 rounded p-2 mb-2 bg-stone-100" placeholder="Kart Numarası" />
                <div className="flex gap-2">
                   <input disabled className="w-1/2 border border-stone-300 rounded p-2 bg-stone-100" placeholder="AA/YY" />
                   <input disabled className="w-1/2 border border-stone-300 rounded p-2 bg-stone-100" placeholder="CVC" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 sticky top-24">
              <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Sipariş Özeti</h3>
              <div className="max-h-64 overflow-y-auto mb-4 scrollbar-thin">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3 mb-3 text-sm">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <div className="text-stone-800 font-medium truncate">{item.name}</div>
                      <div className="text-stone-500">{item.quantity} Adet x {item.price} ₺</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone-100 pt-4 space-y-2 text-stone-700">
                 <div className="flex justify-between"><span>Ara Toplam</span><span>{cartTotal.toLocaleString('tr-TR')} ₺</span></div>
                 <div className="flex justify-between text-green-600"><span>Kargo</span><span>0,00 ₺</span></div>
                 <div className="flex justify-between text-xl font-bold text-brand-black pt-2 border-t border-stone-100">
                   <span>Toplam</span>
                   <span>{cartTotal.toLocaleString('tr-TR')} ₺</span>
                 </div>
              </div>

              <button type="submit" className="w-full mt-6 bg-brand-green hover:bg-brand-greenHover text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                SATIN AL <ArrowRight />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;