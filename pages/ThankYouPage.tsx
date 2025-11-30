import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Retrieve stored order info
    const lastOrderStr = sessionStorage.getItem('lastOrder');
    
    if (lastOrderStr) {
      const lastOrder = JSON.parse(lastOrderStr);
      
      // CRITICAL: Push purchase event to Data Layer
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: lastOrder.orderId,
            value: lastOrder.total,
            currency: 'TRY',
            shipping: 0,
            coupon: '',
            items: [] // In a real app, populate with item details
          },
          user_data: {
            email: lastOrder.email,
            name: lastOrder.name
          }
        });
        console.log("DataLayer Push Sent:", lastOrder);
      }
      
      // Clear storage to prevent duplicate events on refresh (optional logic)
      sessionStorage.removeItem('lastOrder');
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-stone-100">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full text-green-600 animate-bounce">
            <CheckCircle size={64} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-4">Teşekkürler!</h1>
        <p className="text-lg text-stone-600 mb-2">Siparişiniz başarıyla alınmıştır.</p>
        <p className="text-sm text-stone-400 mb-8">Sipariş numaranız ve detaylar e-posta adresinize gönderildi.</p>

        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mb-8">
          <p className="text-stone-700">Ürünleriniz Kars'ın serin yaylalarından özenle paketlenip yola çıkacaktır.</p>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-3 rounded-lg hover:bg-brand-brown transition"
        >
          <Home size={20} /> Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;