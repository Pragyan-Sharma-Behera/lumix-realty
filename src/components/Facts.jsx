import Reveal from './Reveal';
import { IMG, imgUrl } from '../data/properties';

// Figures carried over from the reference board. Nothing here is invented
// beyond it, and the developer itself is fictional.
export default function Facts() {
  return (
    <section id="company" className="mx-auto max-w-[1400px] px-4 py-[clamp(4rem,9vw,7.5rem)] sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal as="h2" className="display text-[clamp(2rem,4.6vw,3.5rem)] text-ink">
          A Spanish developer,
          <br />
          in numbers and facts
        </Reveal>
        <Reveal delay={60} className="max-w-[52ch] self-end">
          <p className="text-[15px] leading-[1.65] text-muted">
            We build to a published schedule and price. Every stage — planning, licence,
            structure, handover — is dated in the contract before you pay anything, and
            the figure you reserve at is the figure you complete at.
          </p>
        </Reveal>
      </div>

      {/* Deliberately uneven: the two photographs break the metric rhythm so
          this reads as a composition rather than a stat strip. */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="card-raised flex flex-col justify-between p-6 lg:row-span-2">
          <p className="nums display text-[clamp(2.75rem,5vw,4rem)] text-ink">12</p>
          <div className="mt-6">
            <p className="text-[15px] font-bold leading-[1.3] text-ink">Years on the market</p>
            <p className="mt-2 text-[13px] leading-[1.5] text-muted">
              Trading since 2014, through one full property cycle and out the other side.
            </p>
          </div>
        </Reveal>

        <Reveal delay={40} className="card-raised relative overflow-hidden sm:col-span-1 lg:col-span-2 lg:row-span-2">
          <img
            src={imgUrl(IMG.villaPoolHill, 1000)}
            alt="A white hillside villa with a rectangular pool overlooking the Bay of Altea"
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
              Clarity at every stage
            </p>
            <p className="mt-2 max-w-[34ch] text-[13px] leading-[1.5] text-white/90">
              Site photography and a written progress note every month until you hold the keys.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="card-raised flex flex-col justify-between p-6">
          <p className="nums display text-[clamp(1.75rem,3.2vw,2.5rem)] text-ink">
            450,000 <span className="text-[0.4em] font-bold tracking-normal text-muted">m²</span>
          </p>
          <p className="mt-4 text-[15px] font-bold leading-[1.3] text-ink">Of built real estate</p>
        </Reveal>

        <Reveal delay={120} className="card-raised flex flex-col justify-between p-6">
          <p className="nums display text-[clamp(1.75rem,3.2vw,2.5rem)] text-ink">1,200</p>
          <p className="mt-4 text-[15px] font-bold leading-[1.3] text-ink">
            Families and investors settled
          </p>
        </Reveal>

        <Reveal
          delay={160}
          className="relative flex flex-col justify-between rounded-2xl p-6 sm:col-span-2 lg:col-span-2"
          style={{ backgroundColor: 'var(--color-deep)' }}
        >
          <p className="nums display text-[clamp(1.75rem,3.2vw,2.5rem)] text-white">35</p>
          <div className="mt-4">
            <p className="text-[15px] font-bold leading-[1.3] text-white">
              Completed residential complexes
            </p>
            <p className="mt-2 max-w-[46ch] text-[13px] leading-[1.5] text-white/80">
              Every one delivered on the handover date written into the contract, or the
              delay penalty paid without being asked.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
