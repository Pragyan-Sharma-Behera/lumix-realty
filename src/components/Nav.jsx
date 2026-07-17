import { useEffect, useState } from 'react';
import { Mark, Menu, Close, Phone } from './icons';

const LINKS = [
  { href: '#projects', label: 'Our projects' },
  { href: '#company', label: 'About us' },
  { href: '#pricing', label: 'Price and terms' },
  { href: '#guarantees', label: 'Guarantees' },
];

const TEL = '+34 900 000 000';

export default function Nav({ onConsult }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape and whenever we widen past the breakpoint,
  // so the panel can't be left open and orphaned behind a desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  // Over the hero the type is white on a deepened sky; once the page scrolls
  // under the frosted bar it has to flip to ink or it vanishes on the canvas.
  const fg = scrolled ? 'var(--color-ink)' : 'white';
  const fgMuted = scrolled ? 'var(--color-muted)' : 'color-mix(in oklab, white 82%, transparent)';

  return (
    <header className="fixed inset-x-0 top-0" style={{ zIndex: 'var(--z-sticky)' }}>
      <div className="relative mx-auto flex h-[72px] max-w-[1400px] items-center gap-6 px-4 sm:px-6 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[72px] border-b"
          style={{
            backgroundColor: scrolled
              ? 'color-mix(in oklab, white 72%, transparent)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
            borderColor: scrolled
              ? 'color-mix(in oklab, var(--color-hairline) 80%, transparent)'
              : 'transparent',
            transition:
              'background-color 200ms var(--ease-out), border-color 200ms var(--ease-out)',
          }}
        />

        <a
          href="#top"
          className="relative flex items-center gap-2.5 font-display text-[17px] font-bold tracking-[-0.02em]"
          style={{ color: fg, transition: 'color 200ms var(--ease-out)' }}
        >
          <Mark />
          LUMIX
          <span className="sr-only">Realty — back to top</span>
        </a>

        {/* Centred link row, per the reference. */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px]"
              style={{ color: fgMuted, transition: 'color 200ms var(--ease-out)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="relative ml-auto flex items-center gap-3">
          <p
            className="hidden text-[13px] font-bold tracking-[0.04em] sm:block"
            style={{ color: fgMuted, transition: 'color 200ms var(--ease-out)' }}
          >
            <span style={{ color: fg }}>EN</span> | ES
          </p>

          <a href={`tel:${TEL.replace(/\s/g, '')}`} className="nav-cta btn btn-ghost !pr-1.5">
            <span className="nums text-[13px] font-bold">{TEL}</span>
            <span
              aria-hidden
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: 'var(--color-ink)' }}
            >
              <Phone />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="btn btn-ghost nav-burger !w-[44px] !px-0"
          >
            {open ? <Close /> : <Menu />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="glass nav-burger mx-4 rounded-2xl p-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-[14px] font-bold text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${TEL.replace(/\s/g, '')}`}
            className="menu-only nums rounded-xl px-4 py-3 text-[14px] font-bold text-ink"
          >
            {TEL}
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onConsult();
            }}
            className="btn btn-primary mt-1 w-full"
          >
            <span className="uppercase tracking-[0.06em] text-[13px]">Get a consultation</span>
          </button>
        </nav>
      )}
    </header>
  );
}
