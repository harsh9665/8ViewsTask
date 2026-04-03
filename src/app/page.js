'use client';

import { useState } from 'react';
import AboutUs from '@/components/AboutUs';
import Builders from '@/components/Builders';
import Builders2 from '@/components/Builders2';
import ClientReviews from '@/components/ClientReviews';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InteriorVideo from '@/components/InteriorVideo';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import NewsUpdates from '@/components/NewsUpdates';
import OurProjects from '@/components/OurProjects';
import OurServices from '@/components/OurServices';
import QuoteSection from '@/components/QuoteSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  const [letsTalkOpen, setLetsTalkOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const openProjectModal = (title) => {
    setSelectedProject(title);
    setProjectModalOpen(true);
  };

  return (
    <main>
      <Navbar />
      <Hero onLetsTalkClick={() => setLetsTalkOpen(true)} />
      <QuoteSection />
      <AboutUs />
      <InteriorVideo />
      <OurProjects />
      <FeaturedProjects onViewProject={openProjectModal} />
      <StatsSection />
      <Builders2 />
      <OurServices />
      <ClientReviews />
      <NewsUpdates />
      <ContactSection />
      <Builders />
      <Footer />

      <Modal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        title={`Enquire about ${selectedProject}`}
      >
        <ContactForm
          source="project_view"
          onSuccess={() => setProjectModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={letsTalkOpen}
        onClose={() => setLetsTalkOpen(false)}
        title="Let's Talk"
      >
        <ContactForm
          source="modal_lets_talk"
          onSuccess={() => setLetsTalkOpen(false)}
        />
      </Modal>
    </main>
  );
}
