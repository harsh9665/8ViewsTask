'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuoteSection from '@/components/QuoteSection';
import AboutUs from '@/components/AboutUs';
import InteriorVideo from '@/components/InteriorVideo';
import OurProjects from '@/components/OurProjects';
import FeaturedProjects from '@/components/FeaturedProjects';
import StatsSection from '@/components/StatsSection';
import Builders2 from '@/components/Builders2';
import OurServices from '@/components/OurServices';
import ClientReviews from '@/components/ClientReviews';
import NewsUpdates from '@/components/NewsUpdates';
import ContactSection from '@/components/ContactSection';
import Builders from '@/components/Builders';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [letsTalkOpen, setLetsTalkOpen] = useState(false);
  const [stickyOpen, setStickyOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  return (
    <main>
      <Navbar />

      <Hero
        onLetsTalkClick={() => setLetsTalkOpen(true)}
      />

      <QuoteSection />
      <AboutUs />
      <InteriorVideo />
      <OurProjects />
      <FeaturedProjects onViewProject={(title) => {
        setSelectedProject(title);
        setProjectModalOpen(true);
      }} />
      <StatsSection />
      <Builders2 />
      <OurServices />
      <ClientReviews />
      <NewsUpdates />
      <ContactSection />
      <Builders />
      <Footer />

      {/* ── Modals ── */}
      <Modal isOpen={projectModalOpen} onClose={() => setProjectModalOpen(false)} title={`Enquire about ${selectedProject}`}>
        <ContactForm source="project_view" onSuccess={() => setProjectModalOpen(false)} />
      </Modal>
      <Modal isOpen={exploreOpen} onClose={() => setExploreOpen(false)} title="Explore Our Projects">
        <ContactForm source="modal_explore" onSuccess={() => setExploreOpen(false)} />
      </Modal>

      <Modal isOpen={letsTalkOpen} onClose={() => setLetsTalkOpen(false)} title="Let's Talk">
        <ContactForm source="modal_lets_talk" onSuccess={() => setLetsTalkOpen(false)} />
      </Modal>

      <Modal isOpen={stickyOpen} onClose={() => setStickyOpen(false)} title="Contact Us">
        <ContactForm source="sticky_contact" onSuccess={() => setStickyOpen(false)} />
      </Modal>

    </main>
  );
}