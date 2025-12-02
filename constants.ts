import { Product } from './types';

export const CATEGORIES = [
  { id: 'peynir', name: 'Peynir Çeşitleri', image: 'https://picsum.photos/400/300?random=10' },
  { id: 'bal', name: 'Organik Bal', image: 'https://picsum.photos/400/300?random=11' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kars Eski Kaşar Peyniri (1kg)',
    slug: 'kars-eski-kasar-peyniri-1kg',
    price: 450,
    oldPrice: 550,
    image: 'assets/images/eski-kasar.jpeg',
    imageAlt: 'dogal-kars-eski-kasar-peyniri-tekerlek.jpg',
    category: 'peynir',
    shortDescription: 'En az 1 yıl olgunlaştırılmış, %100 doğal Kars meralarından.',
    description: 'Geleneksel yöntemlerle üretilen ve Kars yaylalarındaki endemik bitkilerle beslenen ineklerin sütünden elde edilen Eski Kaşar peynirimiz, en az 12 ay soğuk hava depolarında olgunlaştırılmıştır. Yoğun aroma ve benzersiz bir tat profili sunar.',
    stock: 50,
    reviews: [
      { id: 'r1', user: 'Ahmet Y.', avatar: 'https://picsum.photos/50/50?random=100', rating: 5, comment: 'Paketleme harikaydı, tadı tam beklediğim gibi.', date: '2023-10-15' },
      { id: 'r2', user: 'Ayşe K.', avatar: 'https://picsum.photos/50/50?random=101', rating: 4, comment: 'Kargo hızlı geldi, teşekkürler.', date: '2023-10-12' }
    ]
  },
  {
    id: '2',
    name: 'Kars Taze Kaşar Peyniri (700g)',
    slug: 'kars-taze-kasar-peyniri-700g',
    price: 380,
    oldPrice: 420,
    image: 'assets/images/taze-kasar.jpeg',
    imageAlt: 'organik-kars-taze-kasar-peyniri.jpg',
    category: 'peynir',
    shortDescription: 'Günlük sütten yapılan, taptaze ve lezzetli Kars kaşarı.',
    description: 'Kars\'ın verimli yaylalarından elde edilen günlük, taze sütlerle hazırlanan bu kaşar peyniri, hafif ve kremalı bir dokuya sahiptir. Kahvaltılık olarak veya tostlarınızda eritmek için mükemmel bir seçimdir. Geleneksel lezzeti modern sofralara taşır.',
    stock: 40,
    reviews: []
  },
  {
    id: '3',
    name: 'Kars Çiçek Balı (Süzme - 850g)',
    slug: 'kars-cicek-bali-suzme-850g',
    price: 350,
    oldPrice: 400,
    image: 'assets/images/suzme-bal.jpeg',
    imageAlt: 'organik-kars-cicek-bali-kavanoz.jpg',
    category: 'bal',
    shortDescription: 'Yüksek rakımlı yaylalardan derlenen şifalı çiçek balı.',
    description: 'Kars\'ın binbir çiçekli yaylalarında üretilen bu bal, katkısız ve %100 doğaldır. Kristalize olması doğallığının kanıtıdır.',
    stock: 100,
    reviews: []
  },
  {
    id: '4',
    name: 'Kars Tulum Peyniri (500g)',
    slug: 'kars-tulum-peyniri-500g',
    price: 280,
    image: 'assets/images/tulum-peyniri.jpeg',
    imageAlt: 'kars-tulum-peyniri.jpg',
    category: 'peynir',
    shortDescription: 'Keçi ve koyun sütünden yapılan, kendine has lezzetiyle özel bir peynir.',
    description: 'Kars\'ın yüksek rakımlı yaylalarında otlayan keçi ve koyunların sütünden üretilen tulum peyniri, özel olarak hazırlanan derilere basılarak olgunlaştırılır. Kahvaltılarda ve salatalarda keyifle tüketebileceğiniz, hafif baharatlı ve zengin bir aromaya sahiptir.',
    stock: 35,
    reviews: []
  },
    {
    id: '5',
    name: 'Kars Kovan Balı (Petekli - 1kg)',
    slug: 'kars-kovan-bali-petekli-1kg',
    price: 550,
    oldPrice: 600,
    image: 'assets/images/kovan-bal.jpeg',
    imageAlt: 'dogal-kars-petekli-kovan-bali.jpg',
    category: 'bal',
    shortDescription: 'Doğal peteğiyle birlikte sunulan, şifa dolu Kars kovan balı.',
    description: 'Kars\'ın el değmemiş doğasında, binlerce çiçeğin özünden elde edilen bu petekli kovan balı, en saf haliyle sofralarınıza geliyor. Propolis, polen ve arı sütü gibi değerli içerikleri barındıran doğal peteği ile besin değeri çok yüksektir.',
    stock: 25,
    reviews: []
  }
];

export const COMPANY_PHONE = "+90 555 123 45 67";
export const COMPANY_WHATSAPP = "905551234567"; // No + for api links usually