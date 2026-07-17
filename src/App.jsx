import { useCallback, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Facts from './components/Facts';
import Listings from './components/Listings';
import Process from './components/Process';
import Guarantees from './components/Guarantees';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import ConsultModal from './components/ConsultModal';

export default function App() {
  const [detail, setDetail] = useState(null);
  const [consult, setConsult] = useState({ open: false, seed: null });

  const openConsult = useCallback((seed = null) => setConsult({ open: true, seed }), []);
  const closeConsult = useCallback(() => setConsult((c) => ({ ...c, open: false })), []);

  return (
    <>
      <a
        href="#projects"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        style={{ zIndex: 'var(--z-toast)' }}
      >
        Skip to projects
      </a>

      <Nav onConsult={() => openConsult()} />

      <main>
        <Hero onConsult={() => openConsult()} />
        <Facts />
        <Listings onOpen={setDetail} />
        <Process onConsult={() => openConsult()} />
        <Guarantees />
      </main>

      <Footer onConsult={openConsult} />

      <PropertyModal
        property={detail}
        onClose={() => setDetail(null)}
        onConsult={(p) => openConsult(p)}
      />
      <ConsultModal open={consult.open} seed={consult.seed} onClose={closeConsult} />
    </>
  );
}
