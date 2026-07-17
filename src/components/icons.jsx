// Inline SVG only — no emoji, no icon font, no rounded-icon-above-heading tiles.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Bed = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M3 18v-9M3 13h18v5M21 18v-5a3 3 0 0 0-3-3h-7v3" />
    <circle cx="7" cy="11" r="2" />
  </svg>
);

export const Bath = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3ZM6 12V6a2 2 0 0 1 4 0M6 19l-1 2M18 19l1 2" />
  </svg>
);

export const Area = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M4 4h16v16H4zM4 9h5M15 4v5M20 15h-5M9 20v-5" />
  </svg>
);

export const Pin = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Check = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Chevron = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ArrowUpRight = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}>
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export const Asterisk = (p) => (
  <svg viewBox="0 0 24 24" width="13" height="13" {...base} {...p}>
    <path d="M12 4v16M4.7 7.8l14.6 8.4M19.3 7.8L4.7 16.2" />
  </svg>
);

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}>
    <path d="M7 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 5.5 5.7 2 2 0 0 1 7.5 3.5Z" />
  </svg>
);

export const Mark = (p) => (
  <svg viewBox="0 0 28 28" width="24" height="24" aria-hidden focusable="false" {...p}>
    <path d="M4 22V9l5-3.5V22H4Z" fill="currentColor" />
    <path d="M11 22V8l5 3v11h-5Z" fill="currentColor" opacity="0.72" />
    <path d="M18 22V13l6 4v5h-6Z" fill="currentColor" opacity="0.45" />
  </svg>
);
