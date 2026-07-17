import { useState } from 'react';
import { imgUrl, formatPrice, formatUsd } from '../data/properties';
import { Bed, Bath, Area, Pin, ArrowRight } from './icons';

const STAGE_STYLE = {
  Ready: { bg: 'oklch(0.52 0.135 236)', fg: 'white' },
  'Off-plan': { bg: 'oklch(0.993 0.003 230)', fg: 'var(--color-ink)' },
};

export default function PropertyCard({ property, onOpen }) {
  const [loaded, setLoaded] = useState(false);
  const stage = STAGE_STYLE[property.stage];

  return (
    <article className="card-raised group flex flex-col">
      <button
        type="button"
        onClick={() => onOpen(property)}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`View ${property.name}, ${property.location} — ${formatPrice(property.price)}`}
      >
        <div className="relative h-[230px] w-full overflow-hidden">
          {!loaded && <div className="skeleton absolute inset-0" aria-hidden />}
          <img
            src={imgUrl(property.cover, 800)}
            alt={property.alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className="h-full w-full object-cover"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 300ms var(--ease-out), transform 400ms var(--ease-out)',
            }}
          />
        </div>

        {/* Stage is never conveyed by colour alone — the chip is always labelled. */}
        <span
          className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em]"
          style={
            property.stage === 'Ready'
              ? { backgroundColor: stage.bg, color: stage.fg, borderColor: 'transparent' }
              : { color: 'var(--color-ink)' }
          }
        >
          {property.stage}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[17px] font-bold leading-[1.2] tracking-[-0.015em] text-ink">
              {property.name}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted">
              <Pin className="shrink-0" />
              <span className="truncate">
                {property.location}, {property.province}
              </span>
            </p>
          </div>
          <p className="nums shrink-0 text-right">
            <span className="block text-[17px] font-bold tracking-[-0.02em] text-ink">
              {formatPrice(property.price)}
            </span>
            <span className="block text-[12px] font-bold text-muted">
              ≈ {formatUsd(property.price)}
            </span>
          </p>
        </div>

        <p className="prose-balance mt-3 text-[13px] leading-[1.55] text-muted">{property.blurb}</p>

        <dl className="nums mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
          <div className="flex items-center gap-1.5">
            <Bed className="shrink-0" />
            <dt className="sr-only">Bedrooms</dt>
            <dd>{property.beds}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="shrink-0" />
            <dt className="sr-only">Bathrooms</dt>
            <dd>{property.baths}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Area className="shrink-0" />
            <dt className="sr-only">Built area</dt>
            <dd>{property.m2} m²</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4"
             style={{ borderColor: 'var(--color-hairline)' }}>
          <span className="text-[12px] font-bold uppercase tracking-[0.04em] text-muted">
            {property.handover}
          </span>
          <button
            type="button"
            onClick={() => onOpen(property)}
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-marine"
            style={{ transition: 'gap 160ms var(--ease-out)' }}
          >
            Details
            <ArrowRight />
          </button>
        </div>
      </div>
    </article>
  );
}
