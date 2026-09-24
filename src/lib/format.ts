const NBSP = " ";

/** 9000 → "от 9 000 ₸" (неразрывные пробелы, чтобы цена не переносилась) */
export const formatPrice = (price: number) =>
  `от${NBSP}${Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)}${NBSP}₸`;

/** 45 → "45 мин", 60 → "1 ч", 90 → "1 ч 30 мин" */
export const formatDuration = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} мин`;
  return m ? `${h} ч ${m} мин` : `${h} ч`;
};

/** "+7 707 787 89 15" → "77077878915" */
export const digitsOnly = (phone: string) => phone.replace(/\D/g, "");

export const phoneHref = (phone: string) => `tel:+${digitsOnly(phone)}`;

export const whatsappLink = (phone: string, text?: string) =>
  `https://wa.me/${digitsOnly(phone)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const fromMinutes = (total: number) =>
  `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;

/** Слоты записи от открытия до (закрытие − шаг) */
export const buildTimeSlots = (open: string, close: string, step: number) => {
  const slots: string[] = [];
  for (let t = toMinutes(open); t + step <= toMinutes(close); t += step) {
    slots.push(fromMinutes(t));
  }
  return slots;
};

/** "#C4A35A" → "41 47% 56%" — формат HSL-переменных Tailwind/shadcn */
export const hexToHslTriplet = (hex: string) => {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let hue = 0;
  let sat = 0;
  if (max !== min) {
    const d = max - min;
    sat = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) hue = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) hue = (b - r) / d + 2;
    else hue = (r - g) / d + 4;
    hue *= 60;
  }
  return `${Math.round(hue)} ${Math.round(sat * 100)}% ${Math.round(l * 100)}%`;
};

/** Тёмный или светлый текст поверх акцентного цвета — по яркости фона */
export const isLightColor = (hex: string) => {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};
