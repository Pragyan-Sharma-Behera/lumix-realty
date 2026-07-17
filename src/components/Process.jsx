import Reveal from './Reveal';
import { IMG, imgUrl } from '../data/properties';

// This section genuinely is an ordered sequence, so the numbers carry real
// information rather than acting as section scaffolding.
const STEPS = [
  {
    n: '01',
    title: 'Property selection',
    body: 'Choose the project and layout, and see the price and construction stage right away.',
    img: IMG.villaWood,
    alt: 'A modern villa with timber soffits beside a lit pool',
  },
  {
    n: '02',
    title: 'Cost calculation',
    body: 'A full written breakdown: unit price, taxes, notary, and what is not included.',
    img: IMG.houseCorten,
    alt: 'A weathered steel and white apartment block in sharp sunlight',
  },
  {
    n: '03',
    title: 'Contract signing',
    body: 'Completed with independent legal support and the price fixed against increases.',
    img: IMG.houseDusk,
    alt: 'A dark-framed glazed pavilion lit from within at dusk',
  },
  {
    n: '04',
    title: 'Construction and handover',
    body: 'Monthly progress photography, then keys on the date written in the contract.',
    img: IMG.villaPalms,
    alt: 'A white villa framed by palms above a turquoise pool',
  },
];

export default function Process({ onConsult }) {
  return (
    <section id="pricing" className="mx-auto max-w-[1400px] px-4 py-[clamp(4rem,9vw,7.5rem)] sm:px-6 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.6vw,3.5rem)] text-ink">
            Transparent pricing
            <br />
            and clear purchase steps
          </h2>
        </Reveal>

        <Reveal delay={60} className="card-raised overflow-hidden">
          <img
            src={imgUrl(IMG.villaPoolBright, 1000)}
            alt="A bright white three-storey villa with a long pool and open sky"
            loading="lazy"
            decoding="async"
            className="h-[220px] w-full object-cover sm:h-[280px]"
          />
          <div className="p-6">
            <h3 className="text-[15px] font-bold text-ink">Four steps, no surprises</h3>
            <p className="prose-balance mt-2 text-[14px] leading-[1.6] text-muted">
              You will not be asked for a phone number to see a price, and nobody will call
              you unless you ask them to.
            </p>
          </div>
        </Reveal>
      </div>

      <ol className="mt-[clamp(2.5rem,5vw,4rem)] grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 50} className="card-raised relative overflow-hidden">
            <img
              src={imgUrl(s.img, 700)}
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className="h-[300px] w-full object-cover sm:h-[340px]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, oklch(0.2 0.022 250 / 0.86) 0%, oklch(0.2 0.022 250 / 0.35) 45%, oklch(0.2 0.022 250 / 0.08) 100%)',
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <span className="nums glass-dark inline-flex h-8 w-8 items-center justify-center self-start rounded-full text-[12px] font-bold text-white">
                {s.n}
              </span>
              <div>
                <h3 className="text-[15px] font-bold uppercase leading-[1.25] tracking-[0.01em] text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.5] text-white/90">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10 flex justify-center">
        <button type="button" onClick={onConsult} className="btn btn-primary">
          <span className="uppercase tracking-[0.06em] text-[13px]">Get a consultation</span>
        </button>
      </Reveal>
    </section>
  );
}
