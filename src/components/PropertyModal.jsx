import { useEffect, useState } from 'react';
import Modal from './Modal';
import { imgUrl, formatPrice, formatUsd } from '../data/properties';
import { Bed, Bath, Area, Pin, Check } from './icons';

export default function PropertyModal({ property, onClose, onConsult }) {
  const [shot, setShot] = useState(0);

  // Reset the gallery when a different property opens, or the new one inherits
  // the previous index and can land past the end of a shorter gallery.
  useEffect(() => setShot(0), [property?.id]);

  if (!property) return null;

  const specs = [
    { icon: Bed, label: 'Bedrooms', value: property.beds },
    { icon: Bath, label: 'Bathrooms', value: property.baths },
    { icon: Area, label: 'Built', value: `${property.m2} m²` },
    ...(property.plot ? [{ icon: Area, label: 'Plot', value: `${property.plot} m²` }] : []),
  ];

  return (
    <Modal open={!!property} onClose={onClose} labelledBy="property-title">
      <div className="overflow-y-auto">
        <div className="relative">
          <img
            src={imgUrl(property.gallery[shot], 1400)}
            alt={property.alt}
            className="h-[240px] w-full object-cover sm:h-[320px]"
          />
          {property.gallery.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-2">
              {property.gallery.map((g, i) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setShot(i)}
                  aria-label={`View image ${i + 1} of ${property.gallery.length}`}
                  aria-current={i === shot}
                  className="h-12 w-12 overflow-hidden rounded-lg"
                  style={{
                    outline: i === shot ? '2px solid white' : '1px solid rgba(255,255,255,0.5)',
                    outlineOffset: '-1px',
                    opacity: i === shot ? 1 : 0.65,
                    transition: 'opacity 160ms var(--ease-out)',
                  }}
                >
                  <img src={imgUrl(g, 120)} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2
                id="property-title"
                className="display text-[clamp(1.75rem,3.4vw,2.5rem)] text-ink"
              >
                {property.name}
              </h2>
              <p className="mt-2 flex items-center gap-1.5 text-[14px] text-muted">
                <Pin />
                {property.location}, {property.province}
              </p>
            </div>
            <div className="text-right">
              <p className="nums display text-[clamp(1.5rem,2.8vw,2rem)] text-ink">
                {formatPrice(property.price)}
              </p>
              <p className="nums mt-0.5 text-[13px] font-bold text-muted">
                ≈ {formatUsd(property.price)}
              </p>
              <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.04em] text-muted">
                {property.handover}
              </p>
            </div>
          </div>

          <p className="prose-balance mt-5 text-[15px] leading-[1.65] text-muted">
            {property.blurb}
          </p>

          <dl className="nums mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {specs.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-3.5"
                style={{ backgroundColor: 'var(--color-canvas)' }}
              >
                <dt className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.04em] text-muted">
                  <s.icon />
                  {s.label}
                </dt>
                <dd className="mt-1.5 text-[18px] font-bold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 text-[13px] font-bold uppercase tracking-[0.05em] text-muted">
            What is included
          </h3>
          <ul className="mt-3 grid list-none gap-2.5 sm:grid-cols-2">
            {property.features.map((feat) => (
              <li key={feat} className="flex gap-2.5 text-[14px] leading-[1.5] text-ink">
                <Check className="mt-0.5 shrink-0 text-marine" />
                {feat}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onConsult(property);
              }}
            >
              <span className="uppercase tracking-[0.06em] text-[13px]">
                Request the full breakdown
              </span>
            </button>
            <button type="button" onClick={onClose} className="btn btn-ghost">
              <span className="uppercase tracking-[0.06em] text-[13px]">Back to projects</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
