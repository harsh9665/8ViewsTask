'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';
import Builders from '@/components/Builders';
import ContactSection from '@/components/ContactSection';
import NewsUpdates from '@/components/NewsUpdates';
import ClientReviews from '@/components/ClientReviews';
import OurServices from '@/components/OurServices';
import StatsSection from '@/components/StatsSection';
import Builders2 from '@/components/Builders2';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutUs from '@/components/AboutUs';
import InteriorVideo from '@/components/InteriorVideo';
import OurProjects from '@/components/OurProjects';

export default function Home() {
  const [exploreModalOpen, setExploreModalOpen] = useState(false);
  const [letsTalkModalOpen, setLetsTalkModalOpen] = useState(false);

  return (
    <main>
      <Navbar />

      <Hero
        onExploreClick={() => setExploreModalOpen(true)}
        onLetsTalkClick={() => setLetsTalkModalOpen(true)}
      />
      <QuoteSection/>
      <AboutUs/>
      <InteriorVideo/>
      <OurProjects/>

      <FeaturedProjects/>
      <StatsSection/>
      <Builders2/>
      <OurServices/>
      <ClientReviews/>
      <NewsUpdates/>
      <ContactSection/>
      <Builders/>
      <Footer/>
    </main>
  );
}