import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { Lock, CreditCard, CheckCircle } from 'lucide-react';

export const CheckoutPage = () => {
  const { cart, cartTotal, addOrder, clearCart } = useShop();
  const navigate = useNavigate();

  const isFreeShipping = cartTotal >= 500;
  const shippingCost = isFreeShipping ? 0 : 50;
  const grandTotal = cartTotal + shippingCost;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 1000000)}`,
      items: [...cart],
      total: grandTotal,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address
      },
      date: new Date().toISOString(),
      status: 'pending' as const
    };

    addOrder(newOrder);
    navigate('/thank-you', { state: { order: newOrder } });
    clearCart();
  };

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-serif mb-10 text-center">Ödeme</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-10">
            {/* Step 1 */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-brand-black pb-2 mb-6">1. Teslimat Adresi</h2>
              <div className="space-y-4">
                  <input required name="name" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition" placeholder="Ad Soyad" />
                  <div className="grid grid-cols-2 gap-4">
                     <input required type="email" name="email" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition" placeholder="E-posta" />
                     <input required type="tel" name="phone" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition" placeholder="Telefon" />
                  </div>
                  <textarea required name="address" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition h-24 resize-none" placeholder="Adres" />
              </div>
            </section>

            {/* Step 2 */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-brand-black pb-2 mb-6">2. Kart Bilgileri</h2>
              <div className="space-y-4">
                  <div className="relative">
                      <CreditCard className="absolute right-0 top-3 w-4 h-4 text-gray-400" />
                      <input required name="cardNumber" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition" placeholder="Kart Numarası" maxLength={19} />
                  </div>
                  <input required name="cardName" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition uppercase" placeholder="Kart Sahibi" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required name="expiry" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition" placeholder="AA/YY" maxLength={5} />
                    <input required name="cvv" onChange={handleInputChange} className="w-full bg-transparent border-b border-gray-300 p-3 text-sm outline-none focus:border-brand-black transition" placeholder="CVV" maxLength={3} />
                  </div>
              </div>
            </section>
          </div>

          <div className="md:pl-8 md:border-l border-gray-200">
             <div className="bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl mb-6">Sipariş Özeti</h3>
                
                <div className="space-y-4 mb-6">
                   {cart.map(item => (
                     <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} x {item.quantity}</span>
                        <span className="font-bold">{item.price * item.quantity} TL</span>
                     </div>
                   ))}
                </div>

                <div className="border-t border-gray-100 pt-4 text-sm mb-6">
                    <div className="flex justify-between mb-2">
                        <span>Kargo</span>
                        <span>{shippingCost === 0 ? 'Ücretsiz' : `${shippingCost} TL`}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Toplam</span>
                        <span>{grandTotal} TL</span>
                    </div>
                </div>

                <button type="submit" className="w-full bg-brand-green text-white font-bold text-xs uppercase tracking-widest py-4 hover:bg-brand-black transition">
                  Satın Al
                </button>
             </div>
          </div>

        </form>
      </div>
    </div>
  );
};