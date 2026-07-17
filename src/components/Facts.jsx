import Reveal from './Reveal';
import { IMG, imgUrl } from '../data/properties';

// Every number in the original developer version of this section (12 years,
// 450,000 m², 1,200 families, 35 complexes) was either a metric that doesn't
// apply to a broker, or a specific figure that would need to come from Kat
// directly. Rather than invent replacements, tiles that would need a real
// number carry a bracketed placeholder; tiles that can state something true
// without a number (the escrow requirement, the Dacha affiliation) do that
// instead.
export default function Facts() {
  return (
    <section id="company" className="mx-auto max-w-[1400px] px-4 py-[clamp(4rem,9vw,7.5rem)] sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal as="h2" className="display text-[clamp(2rem,4.6vw,3.5rem)] text-ink">
          Kat Beaton | Dacha Real Estate,
          <br />
          in brief
        </Reveal>
        <Reveal delay={60} className="max-w-[52ch] self-end">
          <p className="text-[15px] leading-[1.65] text-muted">
            Kat Beaton works across sales, rentals and off-plan investment in Dubai and
            Ras Al Khaimah, backed by Dacha Real Estate. Every off-plan payment is held
            in a DLD-regulated escrow account — never with the agent, and never in the
            developer's general funds.
          </p>
        </Reveal>
      </div>

      {/* Deliberately uneven: the photograph breaks the metric rhythm so this
          reads as a composition rather than a stat strip. */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="card-raised flex flex-col justify-between p-6 lg:row-span-2">
          <p className="display text-[clamp(2.25rem,4vw,3.25rem)] text-ink">RERA</p>
          <div className="mt-6">
            <p className="text-[15px] font-bold leading-[1.3] text-ink">Registered broker</p>
            <p className="mt-2 text-[13px] leading-[1.5] text-muted">
              Licensed under Dubai's Real Estate Regulatory Agency. [Add Kat Beaton's
              BRN / license number here.]
            </p>
          </div>
        </Reveal>

        <Reveal delay={40} className="card-raised relative overflow-hidden sm:col-span-1 lg:col-span-2 lg:row-span-2">
          <img
            src={imgUrl(IMG.villaPoolHill, 1000)}
            alt="A white hillside villa with a rectangular pool overlooking the water"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[260px] w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, oklch(0.2 0.022 250 / 0.72), oklch(0.2 0.022 250 / 0.05) 60%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="display text-[clamp(1.5rem,2.4vw,2rem)] text-white">
              Clarity at every step
            </p>
            <p className="mt-2 max-w-[34ch] text-[13px] leading-[1.5] text-white/90">
              A curated shortlist, straight answers on price and fees, and no pressure to
              decide today.
            </p>
          </div>
        </Reveal>

        {/* Placeholder — swap for a real client count once Kat confirms one. */}
        <Reveal delay={80} className="card-raised flex flex-col justify-between p-6 lg:row-span-2">
          <p className="display text-[clamp(1.75rem,3.2vw,2.5rem)] text-ink">[X]+</p>
          <p className="mt-4 text-[15px] font-bold leading-[1.3] text-ink">
            Happy clients across Dubai and Ras Al Khaimah
          </p>
        </Reveal>

        <Reveal
          delay={160}
          className="relative flex flex-col justify-between rounded-2xl p-6 sm:col-span-2 lg:col-span-2"
          style={{ backgroundColor: 'var(--color-deep)' }}
        >
          <p className="display text-[clamp(1.5rem,2.6vw,2rem)] text-white">
            Dacha Real Estate
          </p>
          <div className="mt-4">
            <p className="text-[15px] font-bold leading-[1.3] text-white">
              Kat Beaton operates under Dacha Real Estate
            </p>
            <p className="mt-2 max-w-[46ch] text-[13px] leading-[1.5] text-white/80">
              Covering sales, rentals and off-plan investment across Dubai and Ras Al
              Khaimah, with agency backing behind every transaction.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
