import { IMG, imgUrl } from '../data/properties';
import { ArrowUpRight, Asterisk } from './icons';

// The source PNG was 1.86MB for the page's LCP image. Same pixels as WebP:
// 111KB at full width, 50KB for phones. JPEG stays as the fallback.
const HERO_ALT =
  'A white modernist villa lit from within at dusk, framed by pines with mountains beyond';

// Three property thumbnails stand in for the reference's face avatars. Inventing
// portraits of people who don't exist to sell a fictional developer is a step
// past demo content.
const THUMBS = [IMG.villaPoolBright, IMG.villaPalms, IMG.interiorLounge];

export default function Hero({ onConsult }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-b-[20px]"
      style={{ minHeight: 'min(100dvh, 940px)' }}
    >
      <picture>
        <source
          type="image/webp"
          srcSet="/hero-house-900.webp 900w, /hero-house-1582.webp 1582w"
          sizes="100vw"
        />
        <img
          src="/hero-house.jpg"
          alt={HERO_ALT}
          fetchpriority="high"
          decoding="async"
          className="hero-photo absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Shading runs across the whole hero, villa included. The wordmark and
          every label are white and land on white render and pale driveway, so
          without this they'd sit near 1.4:1. Measured, not eyeballed. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.26 0.035 245 / 0.62) 0%, oklch(0.28 0.035 245 / 0.5) 46%, oklch(0.3 0.03 245 / 0.34) 66%, oklch(0.3 0.03 245 / 0.28) 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, oklch(0.2 0.03 245 / 0.34) 0%, oklch(0.2 0.03 245 / 0.12) 34%, transparent 58%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: 'linear-gradient(to top, oklch(0.18 0.03 245 / 0.34), transparent)' }}
      />

      {/* Everything below is sized against viewport HEIGHT as well as width.
          Sized on width alone, the stack came to ~908px and the bottom card
          dropped below the fold on any short screen (1280x720, 1024x768). */}
      <div
        className="relative z-[1] mx-auto flex max-w-[1400px] flex-col px-4 sm:px-6 lg:px-10"
        style={{
          minHeight: 'min(100dvh, 940px)',
          paddingTop: 'clamp(84px, 11vh, 104px)',
          paddingBottom: 'clamp(20px, 3vh, 32px)',
        }}
      >
        <div className="flex justify-end">
          <p className="flex items-start gap-3 text-right text-[11px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-white/90">
            <Asterisk className="mt-[1px] shrink-0" />
            <span>
              We build on the
              <br />
              Spanish coast
            </span>
          </p>
        </div>

        <div className="mt-[clamp(4px,2vh,20px)]">
          <h1 className="display-thin text-white">
            <span className="relative block text-[clamp(3rem,min(15.5vw,21vh),13rem)]">
              LUMIX
              <span className="absolute -top-[0.1em] ml-[0.12em] text-[0.16em] font-normal tracking-normal">
                ©
              </span>
            </span>
            <span className="mt-[0.06em] block text-[clamp(3rem,min(15.5vw,21vh),13rem)] sm:pl-[0.16em] lg:pl-[0.3em]">
              REALTY
            </span>
          </h1>
          <p className="mt-[clamp(10px,2vh,20px)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
            Property in the heart of Spain
          </p>
        </div>

        {/* Left stack — code, headline, CTA, footnote — with the card opposite,
            per the reference. */}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-6 pt-[clamp(20px,3vh,40px)]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
              Est. 2014
            </p>
            <p className="display-thin mt-[clamp(8px,1.6vh,16px)] text-[clamp(1.2rem,min(3.1vw,4.3vh),2.6rem)] text-white">
              <span className="block sm:pl-[3.2em]">Where</span>
              <span className="block">clarity meets</span>
              <span className="block">modern living</span>
            </p>

            <a href="#projects" className="btn mt-[clamp(16px,3vh,28px)] bg-white text-ink">
              <span className="uppercase tracking-[0.08em] text-[13px]">View projects</span>
              <span aria-hidden className="ml-1 h-2.5 w-2.5 rounded-full bg-ink" />
            </a>

            <p className="mt-[clamp(16px,3.5vh,40px)] max-w-[34ch] text-[11px] font-bold uppercase leading-[1.6] tracking-[0.1em] text-white/85">
              Private homes surrounded by nature.
              <br />
              Forty minutes from Alicante airport.
            </p>
          </div>

          <div className="flex w-full justify-end sm:w-auto">
            {/* Glass earns its place: it floats over the photograph. */}
            <div className="glass-dark w-full max-w-[340px] rounded-2xl p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="nums display-thin text-[2.25rem] text-white">1,200+</p>
                <button
                  type="button"
                  onClick={() => onConsult()}
                  className="btn !min-h-[38px] !w-[38px] !px-0 bg-white text-ink"
                >
                  <ArrowUpRight />
                  <span className="sr-only">Get a consultation</span>
                </button>
              </div>
              <p className="mt-2 text-[13px] leading-[1.5] text-white/90">
                Families and investors have already settled with us across Alicante, Málaga
                and Cádiz.
              </p>
              <div className="mt-4 flex -space-x-2">
                {THUMBS.map((t) => (
                  <img
                    key={t}
                    src={imgUrl(t, 80)}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-8 rounded-full border-2 border-white/70 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
