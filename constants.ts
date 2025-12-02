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
    image: '/assets/images/eski-kasar.jpeg',
    imageAlt: 'dogal-kars-eski-kasar-peyniri-tekerlek.jpg',
    category: 'peynir',
    shortDescription: 'En az 1 yıl olgunlaştırılmış, %100 doğal Kars meralarından.',
    description:
      'Geleneksel yöntemlerle üretilen ve Kars yaylalarındaki endemik bitkilerle beslenen ineklerin sütünden elde edilen Eski Kaşar peynirimiz, en az 12 ay soğuk hava depolarında olgunlaştırılmıştır. Yoğun aroma ve benzersiz bir tat profili sunar.',
    longDescription: `Kars Eski Kaşar Peyniri, bölgenin yüksek rakımlı ve serin ikliminde otlayan ineklerin sütünden üretilir. Peynir, en az 12 ay boyunca kontrollü koşullarda olgunlaştırıldığı için kristalimsi bir yapı, yoğun ve kalıcı bir aroma kazanır.

Eski kaşarın sıkı dokusu; kahvaltı sofralarında dilimleyerek, peynir tabaklarında şarap eşlikçisi olarak ya da makarna, fırın yemekleri ve gratende rendeleyerek kullanmak için idealdir. Tuz oranı dengelidir, yağ oranı yüksek olduğu için az miktarda tüketildiğinde bile güçlü bir lezzet sunar.

İçindekiler: İnek sütü, tuz, şirden mayası. 
Koruyucu, bitkisel yağ ve katkı maddesi içermez.`,
    stock: 50,
    reviews: [
      {
        id: 'r1',
        user: 'Ahmet Y.',
        avatar: 'https://picsum.photos/50/50?random=100',
        rating: 5,
        comment: 'Paketleme harikaydı, tadı tam beklediğim gibi.',
        date: '2023-10-15',
      },
      {
        id: 'r2',
        user: 'Ayşe K.',
        avatar: 'https://picsum.photos/50/50?random=101',
        rating: 4,
        comment: 'Kargo hızlı geldi, teşekkürler.',
        date: '2023-10-12',
      },
    ],
  },
  {
    id: '2',
    name: 'Kars Taze Kaşar Peyniri (700g)',
    slug: 'kars-taze-kasar-peyniri-700g',
    price: 380,
    oldPrice: 420,
    image: '/assets/images/taze-kasar.jpeg',
    imageAlt: 'organik-kars-taze-kasar-peyniri.jpg',
    category: 'peynir',
    shortDescription: 'Günlük sütten yapılan, taptaze ve lezzetli Kars kaşarı.',
    description:
      "Kars'ın verimli yaylalarından elde edilen günlük, taze sütlerle hazırlanan bu kaşar peyniri, hafif ve kremalı bir dokuya sahiptir. Kahvaltılık olarak veya tostlarınızda eritmek için mükemmel bir seçimdir. Geleneksel lezzeti modern sofralara taşır.",
    longDescription: `Kars Taze Kaşar Peyniri; günlük, taze sütten üretilen, yumuşak dokulu ve hafif aromalı bir peynirdir. Eski kaşara göre daha kısa sürede olgunlaştırıldığı için süt tadı daha belirgindir ve çocuklar tarafından da kolaylıkla sevilir.

Kolay eriyen yapısı sayesinde tost, sandviç, menemen, omlet ve fırın yemeklerinde mükemmel sonuç verir. İnce dilimleyerek kahvaltıda sade tüketebilir; rendelenmiş hâlde pizzalarda ve makarnalarda kullanabilirsiniz.

İçindekiler: İnek sütü, tuz, şirden mayası.
Palm yağı, nişasta ve koruyucu içermez.`,
    stock: 40,
    reviews: [],
  },
  {
    id: '3',
    name: 'Kars Çiçek Balı (Süzme - 850g)',
    slug: 'kars-cicek-bali-suzme-850g',
    price: 350,
    oldPrice: 400,
    image: '/assets/images/suzme-bal.jpeg',
    imageAlt: 'organik-kars-cicek-bali-kavanoz.jpg',
    category: 'bal',
    shortDescription: 'Yüksek rakımlı yaylalardan derlenen şifalı çiçek balı.',
    description:
      "Kars'ın binbir çiçekli yaylalarında üretilen bu bal, katkısız ve %100 doğaldır. Kristalize olması doğallığının kanıtıdır.",
    longDescription: `Kars Çiçek Balı, bölgenin yüksek rakımlı yaylalarında yetişen farklı çiçek türlerinden elde edilen nektarlarla üretilen, yoğun aromalı ve doğal bir baldır. Altın sarısı rengi, dengeli tatlılığı ve karakteristik çiçek kokusuyla kahvaltı sofralarının vazgeçilmezidir.

Çay, süt, yoğurt, müsli ve tatlılarda doğal tatlandırıcı olarak kullanılabilir. Rafine şeker yerine tercih edildiğinde daha dengeli ve doğal bir enerji kaynağı sunar. Balın zamanla kristalleşmesi tamamen doğaldır; ısıl işlem görmediğinin ve katkısız olduğunun bir göstergesidir.

İçindekiler: %100 süzme çiçek balı.
İlave şeker, glikoz şurubu ve katkı maddesi içermez.`,
    stock: 100,
    reviews: [],
  },
  {
    id: '4',
    name: 'Kars Tulum Peyniri (500g)',
    slug: 'kars-tulum-peyniri-500g',
    price: 280,
    image: '/assets/images/tulum-peyniri.jpeg',
    imageAlt: 'kars-tulum-peyniri.jpg',
    category: 'peynir',
    shortDescription: 'Keçi ve koyun sütünden yapılan, kendine has lezzetiyle özel bir peynir.',
    description:
      "Kars'ın yüksek rakımlı yaylalarında otlayan keçi ve koyunların sütünden üretilen tulum peyniri, özel olarak hazırlanan derilere basılarak olgunlaştırılır. Kahvaltılarda ve salatalarda keyifle tüketebileceğiniz, hafif baharatlı ve zengin bir aromaya sahiptir.",
    longDescription: `Kars Tulum Peyniri, ağırlıklı olarak keçi ve koyun sütü karışımından elde edilen, kırıntılı yapıda ve güçlü aromalı geleneksel bir peynirdir. Özel tulumlarda veya kaplarda olgunlaştırıldığı için kendine özgü keskin, hafif tuzlu ve zengin bir tat profili sunar.

Kahvaltıda dilimleyerek, salata ve meze tabaklarında ufalayarak ya da börek ve poğaça iç harcı olarak kullanabilirsiniz. Az miktarda tüketildiğinde bile yoğun bir peynir lezzeti verdiği için ekonomik bir seçenektir.

İçindekiler: Keçi ve koyun sütü (bölgesel olarak karışım oranı değişebilir), tuz, şirden mayası.
Bitkisel yağ, nişasta ve koruyucu içermez.`,
    stock: 35,
    reviews: [],
  },
  {
    id: '5',
    name: 'Kars Kovan Balı (Petekli - 1kg)',
    slug: 'kars-kovan-bali-petekli-1kg',
    price: 550,
    oldPrice: 600,
    image: '/assets/images/kovan-bal.jpeg',
    imageAlt: 'dogal-kars-petekli-kovan-bali.jpg',
    category: 'bal',
    shortDescription: 'Doğal peteğiyle birlikte sunulan, şifa dolu Kars kovan balı.',
    description:
      "Kars'ın el değmemiş doğasında, binlerce çiçeğin özünden elde edilen bu petekli kovan balı, en saf haliyle sofralarınıza geliyor. Propolis, polen ve arı sütü gibi değerli içerikleri barındıran doğal peteği ile besin değeri çok yüksektir.",
    longDescription: `Kars Kovan Balı, arıların ahşap kovan içerisinde kendi ördükleri balmumu peteğe depoladığı, süzme işleminden geçmemiş saf ve doğal bir baldır. Bal, peteğiyle birlikte sunulduğu için; propolis, polen ve arı sütü gibi değerli bileşenleri doğal formunda barındırır.

Petek kısmı çiğnenerek tüketilebilir; balmumunun sakız gibi çiğnenip tükürülmesi geleneksel bir tüketim şeklidir. Yoğun, dolgun lezzetiyle kahvaltılarda, özel sunumlarda ve bağışıklığı desteklemek amacıyla tüketim için idealdir.

İçindekiler: %100 petekli çiçek balı (kovan balı).
Rafine şeker, glikoz şurubu ve katkı maddesi içermez.`,
    stock: 25,
    reviews: [],
  },
];

export const COMPANY_PHONE = '+90 555 123 45 67';
export const COMPANY_WHATSAPP = '905551234567'; // No + for api links usually
