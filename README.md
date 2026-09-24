# Шаблон сайта барбершопа (Алматы)

Все данные клиента — в одном файле **`src/config/site.ts`**. Компоненты берут данные только оттуда.

## Как запустить сайт для нового клиента

1. Заменить значения в `src/config/site.ts`: название, слоган, логотип, филиалы, услуги, барберы, галерея, отзывы, акция, соцсети.
2. Поменять `accentColor` (hex) — цвет применяется ко всему сайту через CSS-переменную `--accent`.
3. Выбрать режим записи `booking.type`:
   - `"altegio"` — все кнопки «Записаться» открывают `booking.url` (у филиала можно задать свой `bookingUrl`);
   - `"whatsapp"` — пошаговая форма, в конце открывается `wa.me` с готовым текстом (филиал, услуга, барбер, дата, время);
   - `"form"` — пошаговая форма на сайте.
4. Картинки положить в `src/assets` и импортировать в конфиге.

Если филиал один — показывается блок «Как нас найти»; если несколько — секция «Филиалы» с картой.
Акция показывается под первым экраном, только если `promo.enabled: true`.

```sh
npm install --legacy-peer-deps
npm run dev
```

---

# chb_barbershop

*use the image as inspiration for layout, typography, imagery and spacing
"TrimSync" (Simple–Medium)

A modern appointment booking page for a barbershop/salon.

Inspired by: Squarespace Scheduling (Acuity) + Wix Bookings examples Squarespace is praised as best for design-forward service businesses. "A great booking website doesn't just look good—it works hard behind the scenes. It should feel effortless for your clients and powerful for your business."

Tailored Concept:

Bold, lifestyle hero section with a short headline + "Book Now" button

Service menu cards: Haircut, Beard Trim, Full Package — each with price, duration, and individual booking link

Embedded calendar widget with time slot selection + staff member choice

Gallery section showcasing recent work (Instagram-style grid)

Testimonials carousel + Google Maps embed for location

Mobile-first design with sticky bottom CTA bar

Complexity: Simple–Medium — multi-service selector, calendar integration, staff profiles

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/075834ef-a9e8-45ec-93d0-a44d979f18cb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
