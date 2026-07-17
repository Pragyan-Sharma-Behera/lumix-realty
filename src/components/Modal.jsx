import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Close } from './icons';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Rendered through a portal so it escapes any `overflow: hidden` ancestor —
 * an absolutely-positioned panel inside a clipped container gets cut off.
 */
export default function Modal({ open, onClose, labelledBy, children }) {
  const panelRef = useRef(null);
  const restoreTo = useRef(null);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const nodes = panelRef.current?.querySelectorAll(FOCUSABLE);
      if (!nodes?.length) return;
      const list = Array.from(nodes).filter((n) => n.offsetParent !== null);
      if (!list.length) return;

      const first = list[0];
      const last = list[list.length - 1];
      // Cycle focus rather than letting Tab escape to the page behind.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    restoreTo.current = document.activeElement;
    document.body.classList.add('no-scroll');

    // Focus the panel itself, not the close button: landing on "Close" invites
    // dismissing the thing you just opened.
    const t = requestAnimationFrame(() => panelRef.current?.focus());

    return () => {
      cancelAnimationFrame(t);
      document.body.classList.remove('no-scroll');
      // Return focus to whatever opened this, so keyboard users keep their place.
      if (restoreTo.current instanceof HTMLElement) restoreTo.current.focus();
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 flex items-end justify-center p-0 sm:items-center sm:p-6"
      style={{
        zIndex: 'var(--z-modal)',
        backgroundColor: 'oklch(0.2 0.022 250 / 0.42)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="modal-panel relative flex max-h-[92dvh] w-full max-w-[880px] flex-col overflow-hidden rounded-t-[20px] bg-surface outline-none sm:rounded-[20px]"
      >
        <button
          type="button"
          onClick={onClose}
          className="btn btn-ghost absolute right-3 top-3 !min-h-[40px] !w-[40px] !px-0"
          style={{ zIndex: 1 }}
        >
          <Close />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
