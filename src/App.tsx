/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types/cafe';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { DesignSection } from './components/DesignSection';
import { MenuSection } from './components/MenuSection';
import { TechSection } from './components/TechSection';
import { BusinessSection } from './components/BusinessSection';
import { ReportTextSection } from './components/ReportTextSection';
import { DocsSection } from './components/DocsSection';
import { PresenterModal } from './components/PresenterModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-800 flex flex-col selection:bg-[#e2ebe3] selection:text-[#2c4434] transition-colors">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeSection
            setActiveTab={setActiveTab}
            onOpenPresentation={() => setIsPresentationOpen(true)}
          />
        )}
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'design' && <DesignSection />}
        {activeTab === 'menu' && <MenuSection />}
        {activeTab === 'tech' && <TechSection />}
        {activeTab === 'business' && <BusinessSection />}
        {activeTab === 'report' && <ReportTextSection />}
        {activeTab === 'docs' && <DocsSection />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Classroom Presenter Mode Modal */}
      <PresenterModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
