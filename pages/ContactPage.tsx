import React from 'react';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

export const ContactPage = () => {
  return (
    <div className="bg-brand-cream py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-serif text-center mb-16 text-brand-black">İletişim</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-brand-black/10 pt-16">
          <div className="space-y-8">
            <div>
               <h3 className="font-display font-bold text-sm uppercase tracking-widest mb-2">Adres</h3>
               <p className="text-gray-600 font-light leading-relaxed">Ortakapı Mahallesi, Faikbey Caddesi No:10<br/>36000 Kars Merkez/Kars</p>
            </div>
            <div>
               <h3 className="font-display font-bold text-sm uppercase tracking-widest mb-2">Telefon</h3>
               <p className="text-gray-600 font-light">{COMPANY_PHONE}</p>
            </div>
            <div>
               <h3 className="font-display font-bold text-sm uppercase tracking-widest mb-2">E-posta</h3>
               <p className="text-gray-600 font-light">info@karsreserve.com</p>
            </div>
          </div>

          <form className="space-y-6">
               <input className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-black transition" placeholder="Adınız" />
               <input className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-black transition" placeholder="E-posta" />
               <textarea className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-brand-black transition h-32" placeholder="Mesajınız" />
               <button className="bg-brand-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-green transition">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};