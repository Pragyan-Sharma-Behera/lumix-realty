import Reveal from './Reveal';
import { IMG, imgUrl } from '../data/properties';

const ITEMS = [
  {
    k: 'DLD-regulated escrow',
    v: 'Off-plan payments are held in a Dubai Land Department–regulated escrow account, not by the agent or the developer directly — a legal requirement for every registered project in Dubai.',
  },
  {
    k: 'Licensed brokerage',
    v: "Kat Beaton is a RERA-registered broker operating under Dacha Real Estate. [Add Kat Beaton's BRN / license number here.]",
  },
  {
    k: 'Transparent fees',
    v: 'Commission, DLD transfer fees and any agency charges are itemised before you commit — nothing added after the fact.',
  },
  {
    k: 'Independent legal support',
    v: "Conveyancing and contract review from an independent lawyer, not Dacha's in-house counsel — you choose who represents you.",
  },
];

// Placeholder quotes only. Kat's IG "Reviews" highlight has real testimonials
// this section should carry instead — these exist to hold the layout, not to
// be mistaken for actual client feedback.
const TESTIMONIALS = [
  {
    quote: '[Pull a real quote from Kat Beaton\'s Reviews highlight here.]',
    who: '[Client name], [off-plan buyer / tenant / seller]',
  },
  {
    quote: '[A second real quote goes here.]',
    who: '[Client name], [off-plan buyer / tenant / seller]',
  },
];

export default function Guarantees() {
  return (
    <section id="guarantees" className="mx-auto max-w-[1400px] px-4 pb-[clamp(4rem,9vw,7.5rem)] sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="card-raised overflow-hidden lg:sticky lg:top-[96px] lg:self-start">
          <img
            src={imgUrl(IMG.interiorStair, 900)}
            alt="A bright stairwell with a timber and steel balustrade rising through a white interior"
            loading="lazy"
            decoding="async"
            className="h-[320px] w-full object-cover lg:h-[420px]"
          />
          <div className="p-6">
            <p className="prose-balance text-[14px] leading-[1.6] text-muted">
              None of this is a sales pitch — ask Kat Beaton for the license number, the
              escrow account details, or a past client to call directly.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal as="h2" className="display text-[clamp(2rem,4.6vw,3.5rem)] text-ink">
            Trust &amp; reviews
          </Reveal>

          {/* A definition list, not a card grid — these are terms, not products. */}
          <dl className="mt-8">
            {ITEMS.map((it, i) => (
              <Reveal
                key={it.k}
                delay={i * 50}
                className="border-t py-6"
                style={{ borderColor: 'var(--color-hairline)' }}
              >
                <dt className="text-[17px] font-bold tracking-[-0.015em] text-ink">{it.k}</dt>
                <dd className="prose-balance mt-2 text-[14px] leading-[1.65] text-muted">{it.v}</dd>
              </Reveal>
            ))}
          </dl>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={i}
                delay={200 + i * 50}
                as="blockquote"
                className="card p-5"
              >
                <p className="prose-balance text-[14px] italic leading-[1.6] text-muted">
                  “{t.quote}”
                </p>
                <footer className="mt-3 text-[12px] font-bold uppercase tracking-[0.04em] text-ink">
                  {t.who}
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
