import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';

export const AdminPage = () => {
  const { products, deleteProduct, addProduct, orders } = useShop();
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    category: 'peynir',
    image: 'https://picsum.photos/600/600'
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const product: Product = {
        id: `PROD-${Date.now()}`,
        name: newProduct.name,
        price: Number(newProduct.price),
        slug: newProduct.name.toLowerCase().replace(/ /g, '-'),
        category: newProduct.category || 'peynir',
        image: newProduct.image || 'https://picsum.photos/600/600',
        imageAlt: newProduct.name + '.jpg',
        description: 'Admin tarafından eklendi.',
        shortDescription: 'Yeni ürün',
        stock: 100,
        reviews: []
    };
    addProduct(product);
    setNewProduct({ category: 'peynir', image: 'https://picsum.photos/600/600', name: '', price: 0 });
    alert('Ürün eklendi');
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-serif font-bold mb-8">Yönetim Paneli</h1>
      
      <div className="flex space-x-1 border-b border-gray-200 mb-8">
        <button onClick={() => setActiveTab('products')} className={`px-6 py-3 font-bold text-sm uppercase tracking-wide ${activeTab === 'products' ? 'border-b-2 border-brand-black' : 'text-gray-400'}`}>Ürünler</button>
        <button onClick={() => setActiveTab('orders')} className={`px-6 py-3 font-bold text-sm uppercase tracking-wide ${activeTab === 'orders' ? 'border-b-2 border-brand-black' : 'text-gray-400'}`}>Siparişler</button>
      </div>

      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Add Product */}
           <div className="bg-white p-6 shadow-sm h-fit border border-gray-100">
             <h3 className="font-bold mb-4 uppercase text-xs tracking-wider">Yeni Ürün</h3>
             <form onSubmit={handleAddProduct} className="space-y-4">
                <input required placeholder="Ürün Adı" className="w-full border p-3 text-sm outline-none" value={newProduct.name || ''} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                <input required type="number" placeholder="Fiyat" className="w-full border p-3 text-sm outline-none" value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})} />
                <select className="w-full border p-3 text-sm outline-none bg-white" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    <option value="peynir">Peynir</option>
                    <option value="bal">Bal</option>
                    <option value="et">Et</option>
                </select>
                <button type="submit" className="bg-brand-black text-white px-4 py-3 w-full uppercase font-bold text-xs tracking-widest hover:bg-brand-green">Ekle</button>
             </form>
           </div>

           {/* List */}
           <div className="md:col-span-2 space-y-2">
             {products.map(p => (
               <div key={p.id} className="bg-white p-4 border border-gray-100 flex justify-between items-center">
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-gray-100">
                      <img src={p.image} className="w-full h-full object-cover" alt="" />
                   </div>
                   <div>
                     <div className="font-bold text-sm">{p.name}</div>
                     <div className="text-xs text-gray-500">{p.price} TL</div>
                   </div>
                 </div>
                 <button onClick={() => deleteProduct(p.id)} className="text-red-500 text-xs font-bold uppercase tracking-wider border border-red-200 px-3 py-1 hover:bg-red-50">Sil</button>
               </div>
             ))}
           </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-6 border border-gray-100">
               <div className="flex justify-between mb-4 border-b border-gray-100 pb-2">
                 <span className="font-bold font-mono">{order.id}</span>
                 <span className="text-gray-400 text-xs">{new Date(order.date).toLocaleDateString()}</span>
               </div>
               <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                 <div>
                    <h4 className="font-bold text-xs uppercase text-gray-400">Müşteri</h4>
                    <p>{order.customer.name}</p>
                    <p className="text-gray-500">{order.customer.phone}</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-xs uppercase text-gray-400">Tutar</h4>
                    <p className="text-brand-green font-bold">{order.total} TL</p>
                 </div>
               </div>
               <div className="bg-gray-50 p-3 text-xs space-y-1">
                 {order.items.map(item => (
                   <div key={item.id} className="flex justify-between">
                     <span>{item.quantity}x {item.name}</span>
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};