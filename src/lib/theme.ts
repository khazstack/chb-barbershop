import { siteConfig } from "@/config/site";
import { hexToHslTriplet, isLightColor } from "@/lib/format";

/** Применяет акцентный цвет и мета-данные из конфига к документу */
export const applySiteTheme = () => {
  const root = document.documentElement;
  const accent = hexToHslTriplet(siteConfig.accentColor);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--ring", accent);
  root.style.setProperty(
    "--accent-foreground",
    isLightColor(siteConfig.accentColor) ? "0 0% 10%" : "60 7% 97%",
  );

  root.lang = "ru";
  document.title = siteConfig.seo.title;
  const setMeta = (selector: string, content: string) =>
    document.querySelector(selector)?.setAttribute("content", content);
  setMeta('meta[name="description"]', siteConfig.seo.description);
  setMeta('meta[property="og:title"]', siteConfig.seo.title);
  setMeta('meta[property="og:description"]', siteConfig.seo.description);
  setMeta('meta[name="twitter:title"]', siteConfig.seo.title);
  setMeta('meta[name="twitter:description"]', siteConfig.seo.description);
};
