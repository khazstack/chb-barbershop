/**
 * ЕДИНЫЙ КОНФИГ КЛИЕНТА
 * ---------------------------------------------------------------------------
 * Все данные барбершопа живут здесь. Чтобы запустить сайт для нового клиента,
 * достаточно заменить значения в этом файле (и картинки в src/assets).
 * Компоненты не содержат данных клиента — только берут их отсюда.
 *
 * ⚠️ Демо-данные для «ЧБ»: всё, что помечено «DEMO», — примерные значения,
 * их нужно сверить с клиентом перед запуском.
 */

import heroImage from "@/assets/hero-barber.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

// ---------------------------------------------------------------------------
// Типы
// ---------------------------------------------------------------------------

export type BookingType = "altegio" | "whatsapp" | "form";

export interface Branch {
  id: string;
  name: string;
  address: string;
  district: string;
  /** Телефон в любом формате, например "+7 707 787 89 15" */
  phone: string;
  /** Номер WhatsApp в любом формате — лишние символы отбрасываются */
  whatsapp: string;
  hours: {
    /** Как показывать часы на сайте */
    label: string;
    /** Время открытия/закрытия "ЧЧ:ММ" — из них строятся слоты записи */
    open: string;
    close: string;
  };
  /** Координаты для карты */
  coords: { lat: number; lng: number };
  /** Ссылка на филиал в 2ГИС */
  twoGisUrl: string;
  /** Необязательно: своя ссылка на онлайн-запись для этого филиала */
  bookingUrl?: string;
}

export interface Service {
  name: string;
  /** Цена «от», в тенге */
  price: number;
  /** Длительность в минутах */
  duration: number;
  description: string;
}

export interface Barber {
  name: string;
  role: string;
  /** Путь или импорт фото. Если не задано — показываются инициалы */
  photo?: string;
  /** id филиала из списка branches */
  branchId: string;
}

export interface Review {
  name: string;
  text: string;
  /** Оценка 1–5 */
  rating: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  /** Логотип (картинка). Если не задан — выводится название текстом */
  logo?: string;
  /** Основной акцентный цвет в hex — меняет стиль всего сайта */
  accentColor: string;
  city: string;
  seo: { title: string; description: string };
  hero: {
    /** Заголовок первого экрана; "\n" — перенос строки */
    title: string;
    image: string;
  };
  branches: Branch[];
  services: Service[];
  barbers: Barber[];
  gallery: string[];
  reviews: Review[];
  promo: {
    enabled: boolean;
    title: string;
    text: string;
  };
  socials: {
    instagram?: string;
    tiktok?: string;
    telegram?: string;
  };
  booking: {
    type: BookingType;
    /** Ссылка на Altegio (для type: "altegio") */
    url?: string;
    /** Шаг сетки времени в форме записи, минут */
    slotStepMinutes: number;
  };
}

// ---------------------------------------------------------------------------
// Данные клиента: барбершоп «ЧБ», Алматы
// ---------------------------------------------------------------------------

const PHONE = "+7 707 787 89 15";
const DAILY_HOURS = { label: "Ежедневно 10:00–22:00", open: "10:00", close: "22:00" };

const twoGisSearch = (query: string) =>
  `https://2gis.kz/almaty/search/${encodeURIComponent(query)}`;

export const siteConfig: SiteConfig = {
  name: "ЧБ",
  tagline: "Мужской барбершоп в Алматы",
  logo: undefined,
  accentColor: "#C4A35A",
  city: "Алматы",

  seo: {
    title: "ЧБ — барбершоп в Алматы",
    description:
      "Мужские и детские стрижки, оформление бороды. 5 филиалов в Алматы, ежедневно 10:00–22:00. Онлайн-запись.",
  },

  hero: {
    title: "Стрижка\nбез\nкомпромиссов",
    image: heroImage,
  },

  branches: [
    {
      id: "auezova",
      name: "ЧБ на Ауэзова",
      address: "ул. Ауэзова, 129",
      district: "Бостандыкский район",
      phone: PHONE,
      whatsapp: PHONE,
      hours: DAILY_HOURS,
      coords: { lat: 43.2262, lng: 76.9064 }, // DEMO: уточнить точку
      twoGisUrl: twoGisSearch("ЧБ барбершоп Ауэзова 129"),
    },
    // DEMO: адреса филиалов ниже — примерные, заменить на реальные
    {
      id: "abaya",
      name: "ЧБ на Абая",
      address: "пр. Абая, 52",
      district: "Алмалинский район",
      phone: PHONE,
      whatsapp: PHONE,
      hours: DAILY_HOURS,
      coords: { lat: 43.2403, lng: 76.9160 },
      twoGisUrl: twoGisSearch("ЧБ барбершоп Абая 52"),
    },
    {
      id: "dostyk",
      name: "ЧБ на Достык",
      address: "пр. Достык, 97",
      district: "Медеуский район",
      phone: PHONE,
      whatsapp: PHONE,
      hours: DAILY_HOURS,
      coords: { lat: 43.2330, lng: 76.9570 },
      twoGisUrl: twoGisSearch("ЧБ барбершоп Достык 97"),
    },
    {
      id: "samal",
      name: "ЧБ в Самале",
      address: "мкр. Самал-2, 58",
      district: "Медеуский район",
      phone: PHONE,
      whatsapp: PHONE,
      hours: DAILY_HOURS,
      coords: { lat: 43.2330, lng: 76.9480 },
      twoGisUrl: twoGisSearch("ЧБ барбершоп Самал-2 58"),
    },
    {
      id: "orbita",
      name: "ЧБ в Орбите",
      address: "мкр. Орбита-1, 40",
      district: "Бостандыкский район",
      phone: PHONE,
      whatsapp: PHONE,
      hours: DAILY_HOURS,
      coords: { lat: 43.1870, lng: 76.8930 },
      twoGisUrl: twoGisSearch("ЧБ барбершоп Орбита-1 40"),
    },
  ],

  // DEMO: цены, кроме мужской стрижки, — примерные
  services: [
    {
      name: "Мужская стрижка",
      price: 9000,
      duration: 60,
      description: "Консультация, стрижка машинкой и ножницами, мытьё головы и укладка.",
    },
    {
      name: "Детская стрижка",
      price: 7000,
      duration: 45,
      description: "Аккуратная стрижка для мальчиков до 12 лет. Спокойно, быстро и без слёз.",
    },
    {
      name: "Моделирование бороды",
      price: 6000,
      duration: 40,
      description: "Форма, контур опасной бритвой, горячее полотенце и уход маслом.",
    },
    {
      name: "Стрижка + борода",
      price: 14000,
      duration: 90,
      description: "Полный образ: стрижка и оформление бороды за один визит.",
    },
    {
      name: "Бритьё головы",
      price: 7000,
      duration: 40,
      description: "Гладкое бритьё опасной бритвой с горячим полотенцем.",
    },
    {
      name: "Камуфляж седины",
      price: 6000,
      duration: 30,
      description: "Естественное тонирование седины на голове или бороде.",
    },
  ],

  // DEMO: имена и распределение по филиалам
  barbers: [
    { name: "Алихан", role: "Топ-барбер", branchId: "auezova" },
    { name: "Данияр", role: "Барбер", branchId: "auezova" },
    { name: "Руслан", role: "Барбер", branchId: "abaya" },
    { name: "Тимур", role: "Топ-барбер", branchId: "dostyk" },
    { name: "Ерлан", role: "Барбер", branchId: "samal" },
    { name: "Арман", role: "Барбер", branchId: "orbita" },
  ],

  gallery: [g1, g2, g3, g4, g5, g6, g7, g8],

  // DEMO: заменить на реальные отзывы
  reviews: [
    {
      name: "Азамат",
      text: "Хожу только сюда уже год. Мастера слушают, что ты хочешь, и делают ровно так. Атмосфера — огонь.",
      rating: 5,
    },
    {
      name: "Дмитрий",
      text: "Записался онлайн за минуту, приняли вовремя. Стрижка и борода — лучшие в городе.",
      rating: 5,
    },
    {
      name: "Нурлан",
      text: "Водил сына на детскую стрижку — мастер нашёл подход, ребёнок доволен. Теперь ходим вдвоём.",
      rating: 5,
    },
    {
      name: "Сергей",
      text: "Чисто, стильно, без лишнего пафоса. При первом визите сделали массаж головы в подарок — приятно.",
      rating: 5,
    },
  ],

  promo: {
    enabled: true,
    title: "Для новых клиентов",
    text: "При первом посещении маска или массаж головы в подарок",
  },

  socials: {
    instagram: "https://instagram.com/chb_barbershop",
    tiktok: undefined,
    telegram: undefined,
  },

  booking: {
    type: "altegio",
    url: "https://n835703.alteg.io/select-city/36/select-branch?o=",
    slotStepMinutes: 30,
  },
};
