# Project Re:define Design System

## 1. Brand Intent

Project Re:define should feel like a quiet invitation rather than a recruitment notice. The visual language is warm minimal, editorial, soft daylight, and low-pressure. It supports young people who are resting, isolated, or uncertain without pathologizing them.

## 2. Color Tokens

- `--cream`: `#F7F3EB`, primary warm background.
- `--paper`: `#FFFDF9`, elevated card background.
- `--ink`: `#2E2A25`, primary text.
- `--warm-gray`: `#8F877C`, secondary text.
- `--line-soft`: `#D9CCBD`, quiet dividers.
- `--orange`: `#EA8B45`, limited word emphasis only.
- `--green`: `#123F31`, CTA and deep transition card.
- `--green-2`: `#143F33`, alternate deep green background.
- `--white-soft`: `#F8F4EC`, text on green.

## 3. Typography

- Primary Korean font: Pretendard.
- Fallbacks: Noto Sans KR, Apple SD Gothic Neo, system sans-serif.
- Card headline: 54-66px, 800-900 weight, 1.22-1.34 line height.
- Card supporting text: 22-28px, 500-700 weight, 1.65-1.85 line height.
- Labels and footer: 20-24px, 800-900 weight, compact and steady.
- Letter spacing stays at 0 for card art to avoid fragile Korean rendering.

## 4. Spacing And Layout

- Instagram feed card size: 1080px by 1350px.
- Outer safe margin: minimum 60px.
- Main text side margin: minimum 72px.
- Footer baseline area: 80-100px from the bottom.
- Photo cards use rounded rectangles, 32-40px radius, and very soft shadows.
- Text should never sit on top of photos.

## 5. Components

- `promo-card`: fixed 1080x1350 canvas with warm paper texture.
- `photo-panel`: rounded image block with object-position chosen per page.
- `brand-label`: small uppercase Project Re:define label.
- `page-footer`: bottom-left brand plus bottom-right page number.
- `quiet-cta`: deep green pill button for low-pressure action.
- `constellation`: thin line and dot motif used sparingly.

## 6. Motion And Output

The cardnews output is static PNG. The editable HTML preview can use no layout-affecting animation. Final screenshots must be captured in a real Chromium browser at 1080x1350 per card.

## 7. Accessibility And Content Rules

- Avoid medical, therapeutic, or overcome/success language.
- Use `뒤처진`, never `뒤쳐진`.
- Keep cards 1-3 empathy-first.
- Explain program meaning only from card 4 onward.
- Use orange only for the designated emphasis words.
