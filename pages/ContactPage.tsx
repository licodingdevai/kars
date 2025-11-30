import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-brand-black">Bize Ulaşın</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h2 className="text-xl font-bold mb-6 font-serif">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-brown">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">Adresimiz</h3>
                    <p className="text-stone-600">Cumhuriyet Cad. No:12<br/>Merkez / KARS</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-brown">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">Telefon</h3>
                    <p className="text-stone-600">0850 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-brown">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">E-Posta</h3>
                    <p className="text-stone-600">bilgi@karsreserve.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-brown">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black">WhatsApp</h3>
                    <p className="text-stone-600">0555 555 55 55</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-brown text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Toplu Siparişler</h3>
              <p className="mb-4 text-white/90">Kurumsal hediyelikler ve düğün/nişan organizasyonlarınız için özel fiyat teklifi alın.</p>
              <button className="bg-white text-brand-brown font-bold px-6 py-2 rounded hover:bg-stone-100 transition">Teklif Alın</button>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold mb-6 font-serif">Mesaj Gönderin</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Ad</label>
                  <input type="text" className="w-full border border-stone-300 rounded p-3 focus:border-brand-gold outline-none" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-1">Soyad</label>
                  <input type="text" className="w-full border border-stone-300 rounded p-3 focus:border-brand-gold outline-none" placeholder="Soyadınız" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">E-Posta</label>
                <input type="email" className="w-full border border-stone-300 rounded p-3 focus:border-brand-gold outline-none" placeholder="ornek@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Mesajınız</label>
                <textarea rows={5} className="w-full border border-stone-300 rounded p-3 focus:border-brand-gold outline-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>
              <button className="w-full bg-brand-black text-white font-bold py-3 rounded hover:bg-stone-800 transition">
                GÖNDER
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;