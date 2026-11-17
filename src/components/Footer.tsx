import React from 'react';
import { ActiveTab } from '../types/cafe';
import { GraduationCap, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f7f3ec] border-t border-stone-200/80 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-stone-200/60">
          {/* Col 1: School Brand & Overview */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#8ea693] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                CB
              </div>
              <span className="font-bold text-base text-stone-800">
                CyberBite Smart Cafe
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-md">
              A Grade 9 English & STEM final project created by Class 9A at SMP IT Citra Azzahra. 
              Exploring IoT robotics, solar microgrids, and nutritional beverage design for secondary school students.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <GraduationCap className="w-4 h-4 text-[#5f7d69]" />
              <span>Academic Year 2024–2025 · Curriculum 2013 / Merdeka</span>
            </div>
          </div>

          {/* Col 2: Project Sections */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
              Project Sections
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-stone-900 transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-stone-900 transition-colors">
                  About Us (Class 9A Team)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('design')} className="hover:text-stone-900 transition-colors">
                  Cafe Design & Architecture
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('menu')} className="hover:text-stone-900 transition-colors">
                  Smart Menu & Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech & Report */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
              Academic Curricula
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li>
                <button onClick={() => setActiveTab('tech')} className="hover:text-stone-900 transition-colors">
                  Smart Technology & IoT
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('business')} className="hover:text-stone-900 transition-colors">
                  Business & Promotion
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('report')} className="hover:text-stone-900 transition-colors">
                  Grade 9 English Report Text
                </button>
              </li>
              <li>
                <button onClick={scrollToTop} className="hover:text-stone-900 transition-colors flex items-center gap-1 text-[#4b6d58] font-medium pt-1">
                  <ArrowUp className="w-3 h-3" />
                  <span>Back to Top</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal / Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2024–2025 Class 9A · SMP IT Citra Azzahra. Non-commercial educational prototype.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Teacher Advisors: Mrs. Ratna Dewi, M.Pd. & Mr. Bambang Sutrisno, S.T.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
