import type { Land } from "./Land";

export const mockLands: Land[] = [
  {
    title: "أرض سكنية مميزة في الرمادي",
    slug: "ramadi-residential-1",
    briefDescription: "فرصة استثمارية رائعة في قلب الرمادي. لمزيد من التفاصيل وجولة الموقع، يرجى زيارة مكتبنا لمكتب الطيب للعقار.",
    price: 50000000000, // 50 مليار دينار
    area: 500, // 500 متر مربع
    promoted: true,
    coords: [33.4237, 43.3096], // Ramadi coordinates
    address: "الرمادي، الأنبار، العراق",
    images: [{
      kind: "image",
      title: "أرض سكنية في الرمادي",
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      originalSize: { width: 800, height: 500 }
    }],
  },
  {
    title: "أرض تجارية استراتيجية في الفلوجة",
    slug: "fallujah-commercial-1",
    briefDescription: "موقع تجاري ممتاز في الفلوجا مثالي للمشاريع التجارية. مكتب الطيب للعقار يوفر لكم استشارة مجانية عند زيارتكم لمكتبنا.",
    price: 75000000000, // 75 مليار دينار
    area: 750, // 750 متر مربع
    promoted: false,
    coords: [33.351472, 43.778722], // Fallujah coordinates
    address: "الفلوجة، الأنبار، العراق",
    images: [{
      kind: "image",
      title: "أرض تجارية في الفلوجة",
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      originalSize: { width: 800, height: 500 }
    }],
  },
  {
    title: "أرض زراعية خصبة في الرمادي",
    slug: "ramadi-agricultural-1",
    briefDescription: "أرض زراعية ممتازة بالرمادي مناسبة لجميع المشاريع الزراعية. تفاصيل كاملة ووثائق متاحة في مكتب الطيب للعقار.",
    price: 30000000000, // 30 مليار دينار
    area: 2000, // 2000 متر مربع
    promoted: true,
    coords: [33.4200, 43.3100],
    address: "الرمادي، الأنبار، العراق",
    images: [{
      kind: "image",
      title: "أرض زراعية في الرمادي",
      url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop",
      originalSize: { width: 800, height: 500 }
    }],
  },
  {
    title: "أرض سكنية في حديثة",
    slug: "haditha-residential-1",
    briefDescription: "فرصة ذهبية للاستثمار السكني في حديثة. مكتب الطيب للعقار يرحب بكم في مكتبنا لمناقشة تفاصيل هذا العرض المميز.",
    price: 40000000000, // 40 مليار دينار
    area: 400, // 400 متر مربع
    promoted: false,
    coords: [33.6833, 42.4000],
    address: "حديثة، الأنبار، العراق",
    images: [{
      kind: "image",
      title: "أرض سكنية في حديثة",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop",
      originalSize: { width: 800, height: 500 }
    }],
  },
  {
    title: "أرض تجارية مركزية في الرمادي",
    slug: "ramadi-commercial-2",
    briefDescription: "موقع تجاري نادر في قلب الرمادي مثالي للمتاجر والمكاتب. زيارة مكتب الطيب للعقار ضرورية لمعاينة الموقع ومراجعة الوثائق.",
    price: 60000000000, // 60 مليار دينار
    area: 300, // 300 متر مربع
    promoted: true,
    coords: [33.4250, 43.3120],
    address: "الرمادي، الأنبار، العراق",
    images: [{
      kind: "image",
      title: "أرض تجارية في الرمادي",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      originalSize: { width: 800, height: 500 }
    }],
  },
];
