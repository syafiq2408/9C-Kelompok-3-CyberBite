import React from 'react';
import { ActiveTab } from '../types/cafe';
import { Presentation, GraduationCap, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenPresentation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPresentation,
}) => {
  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'design', label: 'Cafe Design' },
    { id: 'menu', label: 'Smart Menu' },
    { id: 'tech', label: 'Smart Tech' },
    { id: 'business', label: 'Business & Promo' },
    { id: 'report', label: 'Report Text' },
    { id: 'docs', label: 'Google Docs Hub' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Top micro-announcement banner in soft pastel sage */}
      <div className="bg-[#eef3ee] text-[#42594a] text-xs py-2 px-4 text-center flex items-center justify-center gap-2 border-b border-[#e1eae2]/70 font-medium">
        <GraduationCap className="w-3.5 h-3.5 text-[#5f7d69]" />
        <span>Grade 9 English & STEM Exhibition · SMP IT Citra Azzahra</span>
        <span className="text-[#a8bdae] hidden sm:inline">|</span>
        <span className="text-[#5f7d69] hidden sm:inline">Class 9A Project Showcase</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title, soft and organic */}
        <button
          onClick={() => setActiveTab('home')}
          className="text-left flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#98ab9d] text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-[#869b8b] transition-colors">
            CB
          </div>
          <div>
            <div className="font-bold text-base tracking-tight text-stone-800 leading-none">
              CyberBite Smart Cafe
            </div>
            <div className="text-[11px] text-stone-500 font-medium leading-none mt-1">
              Grade 9 Student Exhibition
            </div>
          </div>
        </button>

        {/* Zone 2: Navigation Links (soft pastel natural states) */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#e2ebe3] text-[#2d4735] font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Presentation Mode in soft pastel matcha green) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#2d4735] bg-[#dbe8dc] hover:bg-[#cedece] rounded-xl transition-all whitespace-nowrap border border-[#c4d6c6]"
            title="Open presentation cues and speech notes for class defense"
          >
            <Presentation className="w-3.5 h-3.5 text-[#3d5a46]" />
            <span>Presentation Mode</span>
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Sub-Navigation */}
      <div className="lg:hidden border-t border-stone-200/60 overflow-x-auto py-2 px-4 flex gap-1.5 no-scrollbar bg-[#faf7f2]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all shrink-0 ${
                isActive
                  ? 'bg-[#e2ebe3] text-[#2d4735] font-semibold'
                  : 'text-stone-600 bg-stone-100/80 hover:bg-stone-200/60'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
