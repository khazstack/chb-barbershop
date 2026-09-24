import type { Branch } from "@/config/site";

/**
 * Встраиваемая карта (Яндекс.Карты, работает без API-ключа).
 * Для нескольких филиалов — все точки на одной карте с номерами.
 */
export const mapEmbedUrl = (branches: Branch[]) => {
  if (!branches.length) return "";
  const points = branches
    .map((b, i) => `${b.coords.lng},${b.coords.lat},pm2rdm${branches.length > 1 ? i + 1 : ""}`)
    .join("~");
  const params = new URLSearchParams({ pt: points, lang: "ru_RU" });
  if (branches.length === 1) {
    params.set("ll", `${branches[0].coords.lng},${branches[0].coords.lat}`);
    params.set("z", "16");
  }
  return `https://yandex.kz/map-widget/v1/?${params.toString()}`;
};
