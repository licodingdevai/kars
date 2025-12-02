import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Order } from '../types';

export const ThankYouPage = () => {
  const location = useLocation();
  const order = location.state?.order as Order | undefined;

  useEffect(() => {
    if (order && window.dataLayer) {
      window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
          transaction_id: order.id,
          value: order.total,
          currency: 'TRY',
          items: order.items.map(item => ({
            item_id: item.id,
            item_name: item.name,
            price: item.price,
            quantity: item.quantity
          }))
        },
        user_data: {
            email: order.customer.email
        }
      });
    }
  }, [order]);

  if (!order) return <div className="p-20 text-center">Sipariş bulunamadı.</div>;

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg w-full border border-brand-black/10 p-12 bg-white">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border-2 border-brand-green rounded-full flex items-center justify-center">
             <Check className="w-8 h-8 text-brand-green" />
          </div>
        </div>
        <h1 className="text-4xl font-serif text-brand-black mb-4">Teşekkürler</h1>
        <p className="text-gray-500 mb-8 font-light">Siparişiniz alındı. Hazırlanıyor.</p>
        
        <div className="text-sm font-mono mb-8 bg-gray-50 p-4">
           SIPARIS NO: {order.id}
        </div>

        <Link to="/" className="inline-block bg-brand-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-green transition">
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
};