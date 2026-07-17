import { Mark } from './icons';

export default function Footer({ onConsult }) {
  return (
    <footer style={{ backgroundColor: 'var(--color-deep)' }} className="rounded-t-[20px]">
      <div className="mx-auto max-w-[1400px] px-4 py-[clamp(3rem,6vw,5rem)] sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 className="display text-[clamp(1.75rem,3.6vw,2.75rem)] text-white">
              Let's find your
              <br />
              next home in Dubai
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
              {/* Placeholder — swap for Dacha's real office address. */}
              <address className="mt-3 text-[14px] not-italic leading-[1.7] text-white/90">
                [Dacha Real Estate office address]
                <br />
                Dubai, United Arab Emirates
              </address>
            </div>
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.05em] text-white/60">
                Contact
              </h3>
              <ul className="mt-3 list-none text-[14px] leading-[1.7] text-white/90">
                <li>
                  {/* .example keeps this from resolving as a real address until
                      Kat's actual one replaces it. */}
                  <a href="mailto:kat@dacharealestate.example" className="hover:text-white">
                    [kat@dacharealestate.example]
                  </a>
                </li>
                <li className="nums">+971 58 568 1911</li>
                <li>
                  <a
                    href="https://instagram.com/dacharealestate"
                    className="hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dacharealestate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <span className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-0.02em] text-white">
            <Mark />
            KAT | DACHA REAL ESTATE
          </span>
          <p className="max-w-[52ch] text-[12px] leading-[1.5] text-white/60">
            Website concept prepared for Kat | Dacha Real Estate. Listings, figures and
            testimonials shown are placeholder content pending confirmed details — not a
            record of actual inventory, license status or client history.
          </p>
        </div>
      </div>
    </footer>
  );
}
