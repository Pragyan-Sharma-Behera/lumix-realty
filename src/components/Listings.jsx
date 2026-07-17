import { useMemo, useState } from 'react';
import {
  PROPERTIES,
  TYPES,
  STAGES,
  LOCATIONS,
  PRICE_BOUNDS,
  formatCompact,
} from '../data/properties';
import PropertyCard from './PropertyCard';
import Reveal from './Reveal';
import { Check } from './icons';

const SORTS = {
  'price-asc': { label: 'Price, low to high', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price, high to low', fn: (a, b) => b.price - a.price },
  'area-desc': { label: 'Largest first', fn: (a, b) => b.m2 - a.m2 },
};

const EMPTY = { types: [], stages: [], location: 'all', beds: 0, maxPrice: PRICE_BOUNDS.max };

function Chip({ active, children, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className="btn !min-h-[38px] !px-3.5 text-[13px]"
      style={{
        backgroundColor: active ? 'var(--color-marine)' : 'var(--color-surface)',
        color: active ? 'white' : 'var(--color-ink)',
        border: `1px solid ${active ? 'transparent' : 'var(--color-hairline)'}`,
      }}
      {...rest}
    >
      {/* State is carried by the tick and aria-pressed, not by colour alone. */}
      {active && <Check width="14" height="14" />}
      {children}
    </button>
  );
}

export default function Listings({ onOpen }) {
  const [f, setF] = useState(EMPTY);
  const [sort, setSort] = useState('price-asc');

  const toggle = (key, value) =>
    setF((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));

  const results = useMemo(() => {
    const out = PROPERTIES.filter((p) => {
      if (f.types.length && !f.types.includes(p.type)) return false;
      if (f.stages.length && !f.stages.includes(p.stage)) return false;
      if (f.location !== 'all' && p.location !== f.location) return false;
      if (f.beds && p.beds < f.beds) return false;
      if (p.price > f.maxPrice) return false;
      return true;
    });
    return out.sort(SORTS[sort].fn);
  }, [f, sort]);

  const active =
    f.types.length + f.stages.length + (f.location !== 'all' ? 1 : 0) + (f.beds ? 1 : 0) +
    (f.maxPrice < PRICE_BOUNDS.max ? 1 : 0);

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1400px] px-4 py-[clamp(4rem,9vw,7.5rem)] sm:px-6 lg:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.6vw,3.5rem)] text-ink">Listings</h2>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.6] text-muted">
            Every unit currently available, with its price and stage. Nothing is held
            back behind a form.
          </p>
        </Reveal>

        <Reveal delay={60} className="flex items-center gap-2">
          <label htmlFor="sort" className="text-[13px] font-bold text-muted">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="btn btn-ghost !px-3.5 text-[13px] font-bold"
          >
            {Object.entries(SORTS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </Reveal>
      </div>

      {/* Filters sit on the canvas, not on a photo — so this is a plain panel.
          Glass on a flat background would be decoration. */}
      <Reveal className="card mt-8 p-4 sm:p-5">
        <div className="flex flex-wrap gap-x-8 gap-y-5">
          <fieldset className="min-w-0">
            <legend className="mb-2 text-[12px] font-bold uppercase tracking-[0.05em] text-muted">
              Type
            </legend>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <Chip key={t} active={f.types.includes(t)} onClick={() => toggle('types', t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="min-w-0">
            <legend className="mb-2 text-[12px] font-bold uppercase tracking-[0.05em] text-muted">
              Stage
            </legend>
            <div className="flex flex-wrap gap-2">
              {STAGES.map((s) => (
                <Chip key={s} active={f.stages.includes(s)} onClick={() => toggle('stages', s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div className="min-w-0">
            <label
              htmlFor="location"
              className="mb-2 block text-[12px] font-bold uppercase tracking-[0.05em] text-muted"
            >
              Location
            </label>
            <select
              id="location"
              value={f.location}
              onChange={(e) => setF((p) => ({ ...p, location: e.target.value }))}
              className="btn btn-ghost !min-h-[38px] !px-3.5 text-[13px] font-bold"
            >
              <option value="all">All locations</option>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="min-w-0">
            <legend className="mb-2 text-[12px] font-bold uppercase tracking-[0.05em] text-muted">
              Bedrooms
            </legend>
            <div className="flex flex-wrap gap-2">
              {[0, 2, 3, 4, 5].map((b) => (
                <Chip
                  key={b}
                  active={f.beds === b && b !== 0}
                  onClick={() => setF((p) => ({ ...p, beds: b }))}
                >
                  {b === 0 ? 'Any' : `${b}+`}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div className="min-w-[240px] flex-1">
            <label
              htmlFor="price"
              className="mb-2 flex items-baseline justify-between text-[12px] font-bold uppercase tracking-[0.05em] text-muted"
            >
              <span>Max price</span>
              <span className="nums text-[13px] normal-case tracking-normal text-ink">
                {formatCompact(f.maxPrice)}
              </span>
            </label>
            <input
              id="price"
              type="range"
              min={PRICE_BOUNDS.min}
              max={PRICE_BOUNDS.max}
              step={5000}
              value={f.maxPrice}
              onChange={(e) => setF((p) => ({ ...p, maxPrice: Number(e.target.value) }))}
              className="w-full accent-marine"
              style={{ minHeight: '38px' }}
            />
          </div>
        </div>

        <div
          className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-4"
          style={{ borderColor: 'var(--color-hairline)' }}
        >
          {/* Result count is announced, so filtering is legible to a screen reader. */}
          <p aria-live="polite" className="nums text-[13px] font-bold text-ink">
            {results.length} {results.length === 1 ? 'property' : 'properties'}
            {active > 0 && (
              <span className="font-normal text-muted"> · {active} filter{active === 1 ? '' : 's'} active</span>
            )}
          </p>
          <button
            type="button"
            onClick={() => setF(EMPTY)}
            disabled={active === 0}
            className="text-[13px] font-bold text-marine disabled:cursor-not-allowed disabled:text-faint"
          >
            Reset filters
          </button>
        </div>
      </Reveal>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {results.map((p) => (
            <PropertyCard key={p.id} property={p} onOpen={onOpen} />
          ))}
        </div>
      ) : (
        <div className="card mt-6 flex flex-col items-center px-6 py-16 text-center">
          <h3 className="display text-[clamp(1.5rem,3vw,2rem)] text-ink">
            Nothing matches those filters
          </h3>
          <p className="prose-balance mt-3 text-[14px] leading-[1.6] text-muted">
            We have {PROPERTIES.length} properties between {formatCompact(PRICE_BOUNDS.min)} and{' '}
            {formatCompact(PRICE_BOUNDS.max)}. Widening the price or bedroom filter will bring
            some back.
          </p>
          <button type="button" onClick={() => setF(EMPTY)} className="btn btn-primary mt-6">
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
