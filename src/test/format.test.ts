import { describe, it, expect } from "vitest";
import { buildTimeSlots, formatDuration, formatPrice, hexToHslTriplet, whatsappLink } from "@/lib/format";
import { siteConfig } from "@/config/site";

describe("format", () => {
  it("formats prices in tenge", () => {
    expect(formatPrice(9000).replace(/ /g, " ")).toBe("от 9 000 ₸");
    expect(formatPrice(14000).replace(/ /g, " ")).toBe("от 14 000 ₸");
    expect(formatPrice(500).replace(/ /g, " ")).toBe("от 500 ₸");
  });

  it("formats durations", () => {
    expect(formatDuration(45)).toBe("45 мин");
    expect(formatDuration(60)).toBe("1 ч");
    expect(formatDuration(90)).toBe("1 ч 30 мин");
  });

  it("builds wa.me links with prefilled text", () => {
    expect(whatsappLink("+7 707 787 89 15", "Услуга: стрижка")).toBe(
      "https://wa.me/77077878915?text=%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B0%3A%20%D1%81%D1%82%D1%80%D0%B8%D0%B6%D0%BA%D0%B0",
    );
  });

  it("builds time slots within opening hours", () => {
    const slots = buildTimeSlots("10:00", "22:00", 30);
    expect(slots[0]).toBe("10:00");
    expect(slots[slots.length - 1]).toBe("21:30");
  });

  it("converts hex to HSL triplet", () => {
    expect(hexToHslTriplet("#ffffff")).toBe("0 0% 100%");
    expect(hexToHslTriplet("#ff0000")).toBe("0 100% 50%");
  });
});

describe("site config", () => {
  it("links every barber to an existing branch", () => {
    const ids = new Set(siteConfig.branches.map((b) => b.id));
    siteConfig.barbers.forEach((b) => expect(ids.has(b.branchId)).toBe(true));
  });

  it("has a booking url when booking type is altegio", () => {
    if (siteConfig.booking.type === "altegio") expect(siteConfig.booking.url).toBeTruthy();
  });
});
