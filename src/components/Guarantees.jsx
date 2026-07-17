import Reveal from './Reveal';
import { IMG, imgUrl } from '../data/properties';

const ITEMS = [
  {
    k: 'Bank-guaranteed deposits',
    v: 'Every off-plan payment is held under a Spanish bank guarantee (aval bancario) and returned in full if we miss the licence or handover date.',
  },
  {
    k: 'Ten-year structural warranty',
    v: 'The statutory decennial insurance, plus three years on waterproofing and one on finishes. Policy numbers are in the contract.',
  },
  {
    k: 'Fixed price at reservation',
    v: 'Material costs are our problem, not yours. The figure on your reservation is the figure at completion.',
  },
  {
    k: 'Independent legal review',
    v: 'We will not complete unless your own lawyer has signed off. If you do not have one, we will give you three names and instruct none of them.',
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
              Everything below is contractual, not a promise on a website. Ask for the draft
              before you reserve and we will send it unredacted.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal as="h2" className="display text-[clamp(2rem,4.6vw,3.5rem)] text-ink">
            Guarantees
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
        </div>
      </div>
    </section>
  );
}
