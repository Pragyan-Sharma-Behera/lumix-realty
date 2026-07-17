import { Mark } from './icons';

export default function Footer({ onConsult }) {
  return (
    <footer style={{ backgroundColor: 'var(--color-deep)' }} className="rounded-t-[20px]">
      <div className="mx-auto max-w-[1400px] px-4 py-[clamp(3rem,6vw,5rem)] sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 className="display text-[clamp(1.75rem,3.6vw,2.75rem)] text-white">
              See the price before
              <br />
              you speak to anyone
            </h2>
            <button type="button" onClick={() => onConsult()} className="btn btn-ghost mt-6">
              <span className="uppercase tracking-[0.06em] text-[13px]">Get a consultation</span>
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.05em] text-white/60">
                Office
              </h3>
              <address className="mt-3 text-[14px] not-italic leading-[1.7] text-white/90">
                Avenida del Mediterráneo 118
                <br />
                03730 Jávea, Alicante
                <br />
                Spain
              </address>
            </div>
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.05em] text-white/60">
                Contact
              </h3>
              <ul className="mt-3 list-none text-[14px] leading-[1.7] text-white/90">
                <li>
                  <a href="mailto:hola@lumixrealty.example" className="hover:text-white">
                    hola@lumixrealty.example
                  </a>
                </li>
                <li className="nums">+34 900 000 000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <span className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-0.02em] text-white">
            <Mark />
            LUMIX REALTY
          </span>
          <p className="text-[12px] leading-[1.5] text-white/60">
            Fictional demo project. Not a real company; no listing, price or figure here
            describes a real property.
          </p>
        </div>
      </div>
    </footer>
  );
}
