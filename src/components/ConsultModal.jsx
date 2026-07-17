import { useEffect, useState } from 'react';
import Modal from './Modal';
import { PROPERTIES } from '../data/properties';
import { Check } from './icons';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const emptyForm = { name: '', email: '', phone: '', property: '', message: '', consent: false };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please tell us who we are writing back to.';
  if (!v.email.trim()) e.email = 'We need an email address to send the breakdown to.';
  else if (!EMAIL.test(v.email.trim())) e.email = 'That does not look like an email address.';
  if (v.phone.trim() && v.phone.replace(/[^\d]/g, '').length < 7)
    e.phone = 'That phone number looks too short.';
  if (!v.consent) e.consent = 'We need your permission before we can reply.';
  return e;
}

function Field({ id, label, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-bold text-ink">
        {label}
      </label>
      {children}
      {/* Error sits below the field and is tied to it by aria-describedby. */}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[12px] font-bold text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[12px] text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

const inputCls =
  'mt-1.5 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-[14px] text-ink placeholder:text-muted';

export default function ConsultModal({ open, seed, onClose }) {
  const [v, setV] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (!open) return;
    setV({ ...emptyForm, property: seed?.id ?? '' });
    setErrors({});
    setStatus('idle');
  }, [open, seed?.id]);

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setV((p) => ({ ...p, [k]: val }));
    // Clear a field's error as soon as the user starts fixing it, but never
    // introduce new errors mid-typing.
    setErrors((p) => (p[k] ? { ...p, [k]: undefined } : p));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(v);
    if (Object.keys(found).some((k) => found[k])) {
      setErrors(found);
      // Move focus to the first problem so a keyboard user is taken to it.
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setStatus('sending');
    try {
      // Demo only: there is no backend behind this form.
      await new Promise((res) => setTimeout(res, 900));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const field = (k) => ({
    id: k,
    value: v[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : undefined,
    className: inputCls,
    style: { borderColor: errors[k] ? 'var(--color-danger)' : 'var(--color-hairline)' },
  });

  return (
    <Modal open={open} onClose={onClose} labelledBy="consult-title">
      <div className="overflow-y-auto p-6 sm:p-8">
        {status === 'sent' ? (
          <div className="py-8 text-center">
            <span
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--color-marine)' }}
            >
              <Check width="26" height="26" className="text-white" />
            </span>
            <h2 id="consult-title" className="display mt-5 text-[clamp(1.5rem,3vw,2rem)] text-ink">
              Request received
            </h2>
            <p className="prose-balance mx-auto mt-3 text-[15px] leading-[1.65] text-muted">
              We will send the full cost breakdown to{' '}
              <span className="font-bold text-ink">{v.email}</span> within one working day.
              Nobody will call you unless you asked us to.
            </p>
            <button type="button" onClick={onClose} className="btn btn-primary mt-7">
              <span className="uppercase tracking-[0.06em] text-[13px]">Close</span>
            </button>
          </div>
        ) : (
          <>
            <h2 id="consult-title" className="display text-[clamp(1.75rem,3.4vw,2.5rem)] text-ink">
              Get a consultation
            </h2>
            <p className="prose-balance mt-3 text-[15px] leading-[1.65] text-muted">
              Tell us which project you are looking at and we will send the full written
              breakdown — price, taxes, notary, and what is not included.
            </p>

            {status === 'error' && (
              <p
                role="alert"
                className="mt-5 rounded-xl px-4 py-3 text-[14px] font-bold text-white"
                style={{ backgroundColor: 'var(--color-danger)' }}
              >
                We could not send that just now. Please try again in a moment.
              </p>
            )}

            <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input {...field('name')} type="text" autoComplete="name" placeholder="Your name" />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    {...field('email')}
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="phone"
                  label="Phone"
                  error={errors.phone}
                  hint="Optional. Only used if you ask us to call."
                >
                  <input {...field('phone')} type="tel" autoComplete="tel" placeholder="+34 000 000 000" />
                </Field>
                <Field id="property" label="Project">
                  <select {...field('property')}>
                    <option value="">Not decided yet</option>
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.location}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="message" label="Anything specific?" hint="Optional.">
                <textarea
                  {...field('message')}
                  rows={3}
                  placeholder="Budget, timing, or a question about a particular unit."
                  className={`${inputCls} resize-y`}
                />
              </Field>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-muted">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={v.consent}
                    onChange={set('consent')}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-marine"
                  />
                  <span>
                    You may email me the cost breakdown for the project above. This is a demo
                    form and nothing is transmitted anywhere.
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-1.5 text-[12px] font-bold text-danger">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
                  <span className="uppercase tracking-[0.06em] text-[13px]">
                    {status === 'sending' ? 'Sending…' : 'Send request'}
                  </span>
                </button>
                <button type="button" onClick={onClose} className="btn btn-ghost">
                  <span className="uppercase tracking-[0.06em] text-[13px]">Cancel</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}
