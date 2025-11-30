import { Product, Category, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eski Kars Kaşarı (2 Yıllık)',
    slug: 'eski-kars-kasari-2-yillik',
    category: 'Peynir',
    price: 450,
    oldPrice: 550,
    image: 'https://picsum.photos/id/1080/800/800', 
    alt: 'eski-kars-kasari-2-yillik.jpg',
    shortDescription: 'Mevsiminde toplanan sütlerle geleneksel yöntemlerle üretilmiş, 24 ay dinlendirilmiş özel seri.',
    description: 'Kars yaylalarının binbir çeşit çiçeğinden beslenen ineklerin sütünden elde edilen, 2 yıl boyunca özel mahzenlerde olgunlaştırılan Eski Kars Kaşarı. Aroması yoğun, yapısı kristalleşmiş ve tam yağlıdır.',
    features: ['%100 Doğal', '24 Ay Olgunlaştırma', 'Katkısız', 'Coğrafi İşaretli']
  },
  {
    id: '2',
    name: 'Organik Karakovan Balı',
    slug: 'organik-karakovan-bali',
    category: 'Bal',
    price: 850,
    oldPrice: 1000,
    image: 'https://picsum.photos/id/312/800/800',
    alt: 'organik-karakovan-bali-kars.jpg',
    shortDescription: 'İnsan eli değmeden, tamamen arıların doğal mum ile ördüğü şifa kaynağı.',
    description: 'Yüksek rakımlı yaylalarda, endemik bitki örtüsünden derlenen nektarlarla üretilmiştir. Petekleri tamamen doğaldır, ağızda erir.',
    features: ['Şeker İlavesiz', 'Yüksek Prolin', 'Doğal Petek']
  },
  {
    id: '3',
    name: 'Kars Gravyer Peyniri',
    slug: 'kars-gravyer-peyniri',
    category: 'Peynir',
    price: 900,
    oldPrice: 1100,
    image: 'https://picsum.photos/id/292/800/800',
    alt: 'kars-gravyer-peyniri-dilim.jpg',
    shortDescription: 'Türk mutfağının en prestijli peyniri. İsviçre gravyerini aratmayan lezzet.',
    description: 'Büyük delikli yapısı, sarı rengi ve benzersiz aromasıyla kahvaltıların vazgeçilmezi. En az 10 ay dinlendirilmiştir.',
    features: ['Tam Yağlı', 'Özel Üretim', 'Yoğun Aroma']
  },
  {
    id: '4',
    name: 'Doğal Köy Tereyağı',
    slug: 'dogal-koy-tereyagi',
    category: 'Süt Ürünleri',
    price: 350,
    oldPrice: 400,
    image: 'https://picsum.photos/id/431/800/800',
    alt: 'dogal-koy-tereyagi-tuzsuz.jpg',
    shortDescription: 'Yayık yöntemiyle elde edilen, mis kokulu ve tuzsuz köy tereyağı.',
    description: 'Yemeklerinize lezzet, kahvaltılarınıza sağlık katan %100 doğal tereyağı. Hiçbir renklendirici içermez.',
    features: ['Tuzsuz', 'Yayık', 'Katkısız']
  }
];

export const CATEGORIES: Category[] = [
  { id: 'peynir', name: 'Yöresel Peynirler', image: 'https://picsum.photos/id/1080/400/300' },
  { id: 'bal', name: 'Doğal Ballar', image: 'https://picsum.photos/id/312/400/300' },
  { id: 'yag', name: 'Tereyağı & Kaymak', image: 'https://picsum.photos/id/431/400/300' },
  { id: 'et', name: 'Kurutulmuş Etler', image: 'https://picsum.photos/id/1062/400/300' },
];

export const REVIEWS: Review[] = [
  { id: 1, user: 'Ahmet Y.', avatar: 'https://picsum.photos/id/1005/100/100', rating: 5, comment: 'Paketleme muazzamdı, peynir tadı çocukluğumdaki gibi. Teşekkürler.', date: '2 gün önce' },
  { id: 2, user: 'Ayşe K.', avatar: 'https://picsum.photos/id/1011/100/100', rating: 5, comment: 'Kargo çok hızlı geldi. Balın kalitesi tartışılmaz.', date: '1 hafta önce' },
  { id: 3, user: 'Mehmet D.', avatar: 'https://picsum.photos/id/1012/100/100', rating: 4, comment: 'Ürünler harika ama kargo şirketi biraz geç getirdi. Firma çok ilgiliydi.', date: '3 hafta önce' },
];