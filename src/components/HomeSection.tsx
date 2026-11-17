import React from 'react';
import { ActiveTab } from '../types/cafe';
import { 
  Cpu, 
  Leaf, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Zap, 
  Sparkles,
  Heart
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenPresentation: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab, onOpenPresentation }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section with Gentle 2-Column Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Academic Brief & Headline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7]">
              <span className="w-2 h-2 rounded-full bg-[#7fa385]"></span>
              <span>Junior High School Final Project</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>English & Science Integration</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Class 9A</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2b6078] leading-[1.18]" style={{ textWrap: 'balance', color: '#2b6078' }}>
              CyberBite: The Eco-Smart Cafe of Tomorrow
            </h1>

            <p className="text-base text-stone-600 leading-relaxed max-w-xl">
              An interdisciplinary research and design exhibition created by 9th Grade students. 
              We conceptualized a warm, sustainable cafe powered by IoT automation, clean solar energy, 
              and cozy touchscreen study pods to solve school canteen overcrowding and plastic waste.
            </p>

            {/* Quick Action CTAs in Pastel Tones */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('design')}
                className="px-5 py-2.5 text-xs font-semibold text-[#2c4434] bg-[#dbe8dc] hover:bg-[#cee0cf] border border-[#c5d9c7] rounded-xl transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Explore Cafe Design</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveTab('report')}
                className="px-5 py-2.5 text-xs font-semibold text-[#4c4235] bg-[#f5ecde] hover:bg-[#eee2d0] border border-[#e4d6c0] rounded-xl transition-all flex items-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#8c7453]" />
                <span>Read Grade 9 Report Text</span>
              </button>

              <button
                onClick={() => setActiveTab('tech')}
                className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200/90 rounded-xl transition-all flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-stone-500" />
                <span>Test IoT Simulations</span>
              </button>
            </div>

            {/* Academic Rigor Indicators with Unboxed Metadata */}
            <div className="pt-4 border-t border-stone-200/60">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="bg-[#f5efe6]/70 p-3 rounded-2xl border border-[#ece3d4]/80">
                  <div className="text-2xl font-bold font-mono text-stone-800 tabular-nums">5</div>
                  <div className="text-xs text-stone-500 font-medium mt-0.5">Student Researchers</div>
                </div>
                <div className="bg-[#edf3ee]/80 p-3 rounded-2xl border border-[#dbe6dc]">
                  <div className="text-2xl font-bold font-mono text-[#4b6b53] tabular-nums">6</div>
                  <div className="text-xs text-stone-500 font-medium mt-0.5">IoT Systems Modeled</div>
                </div>
                <div className="bg-[#f5eee8]/70 p-3 rounded-2xl border border-[#ebe0d7]">
                  <div className="text-2xl font-bold font-mono text-[#8a5b4c] tabular-nums">45s</div>
                  <div className="text-xs text-stone-500 font-medium mt-0.5">Robot Brew Speed</div>
                </div>
                <div className="bg-[#edf0f5]/70 p-3 rounded-2xl border border-[#dbe1ec]">
                  <div className="text-2xl font-bold font-mono text-[#546a8a] tabular-nums">100%</div>
                  <div className="text-xs text-stone-500 font-medium mt-0.5">Clean Solar Energy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Anchor with Natural Framing */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white group">
              <img
                src="/src/assets/images/smart_cafe_isometric_concept_1794284119871.jpg"
                alt="Isometric 3D architectural floor plan of CyberBite Smart Cafe designed by Grade 9 students"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Overlay Caption Banner */}
              <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-800">
                    Figure 1.0: Student-Designed 3D Architecture
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Solar roof · Robotic barista counter · Interactive study tables · Hydroponics
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('design')}
                  className="text-xs font-semibold text-[#486350] hover:text-[#334739] flex items-center gap-1"
                >
                  <span>Interactive Map</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Are Solving (Pastel & Natural Tone) */}
      <section className="bg-[#f4efe8]/60 border-y border-stone-200/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold text-[#5a7460] uppercase tracking-wider mb-1">
              Field Research & Student Survey
            </div>
            <h2 className="text-2xl font-bold text-stone-800">
              Why Did Our Grade 9 Team Design a Smart Cafe?
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Before drawing blueprints or writing code, our team distributed a 10-question questionnaire 
              to 120 fellow junior high students across Grades 7, 8, and 9. We discovered three major pain points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#faece8] text-[#9c594c] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-800">
                1. 20-Minute Break Congestion
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                78% of students reported spending 12 to 15 minutes merely standing in line at the school canteen, 
                leaving barely 5 minutes to eat or prepare for the next lesson.
              </p>
              <div className="pt-3 border-t border-stone-100 text-xs font-medium text-stone-500">
                <span className="text-[#9c594c] font-semibold">Solution:</span> 45-second robotic brewing + digital queueing.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fbf2e3] text-[#94713c] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-800">
                2. No Study Space with Power Outlets
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                With increasing digital homework and school tablet requirements, 84% of students wished for a quiet, 
                collaborative study spot equipped with phone and laptop charging coils.
              </p>
              <div className="pt-3 border-t border-stone-100 text-xs font-medium text-stone-500">
                <span className="text-[#94713c] font-semibold">Solution:</span> Touchscreen tables with embedded Qi fast charging.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#edf4ee] text-[#4b6e54] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-800">
                3. Single-Use Plastic Overflow
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The school generates over 400 disposable plastic cups each day. Conventional trash cans 
                mix compostable leftovers with recyclable plastic, ruining recycling efforts.
              </p>
              <div className="pt-3 border-t border-stone-100 text-xs font-medium text-stone-500">
                <span className="text-[#4b6e54] font-semibold">Solution:</span> AI optical sorting bin + BYOT tumbler incentive.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Project Pillars in Soft Pastel Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#5a7460] uppercase tracking-wider mb-1">
            Interdisciplinary Innovation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
            Our Three Design Pillars
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Balancing cutting-edge technology with environmental stewardship and student health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-bold font-mono text-[#54735b] uppercase tracking-wider mb-2">
                Pillar 01
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                Robotics & IoT Automation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Custom microcontroller logic governs a 6-axis robotic arm, guaranteeing exact water temperature 
                (92°C) and silky milk microfoam. Cashless RFID student card taps reduce contact and queue times.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">STEM / Informatics</span>
              <button
                onClick={() => setActiveTab('tech')}
                className="text-xs font-semibold text-[#405646] hover:text-[#2d3e32] flex items-center gap-1"
              >
                <span>View Tech</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-bold font-mono text-[#8a684b] uppercase tracking-wider mb-2">
                Pillar 02
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                Youth Nutrition & Affordability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Drinks are engineered with L-Theanine and low glycemic index natural sweeteners to prevent 
                sugar crashes. Prices range from Rp 10.000 to Rp 20.000 so every student can afford clean fuel.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">Science / Health</span>
              <button
                onClick={() => setActiveTab('menu')}
                className="text-xs font-semibold text-[#73543b] hover:text-[#573d28] flex items-center gap-1"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-bold font-mono text-[#4b6d58] uppercase tracking-wider mb-2">
                Pillar 03
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                Zero-Waste & Clean Solar
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                4.2 kW rooftop photovoltaic panels offset municipal electricity draw. An indoor vertical 
                hydroponic wall produces fresh organic mint while purifying indoor classroom air.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">Ecology / Architecture</span>
              <button
                onClick={() => setActiveTab('design')}
                className="text-xs font-semibold text-[#3b5545] hover:text-[#283b2f] flex items-center gap-1"
              >
                <span>View Layout</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Defense & Presentation Mode Callout - Soft Sage & Cream */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#e9f0ea] text-[#2b4133] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#d3ded4] shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#486b51] font-semibold bg-white/70 px-3 py-1 rounded-full border border-[#d2ded3]">
              <Sparkles className="w-3.5 h-3.5 text-[#5f8769]" />
              <span>Designed for Class 9A Exhibition & Grading</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-800">
              Ready for Classroom Presentation Defense
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Evaluating teachers and peers can use our interactive Presenter Mode with structured slide cues, 
              live speaker speaking notes, and rubric highlights for English and STEM criteria.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenPresentation}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#55785f] hover:bg-[#47654f] rounded-xl transition-all shadow-xs"
            >
              Launch Presenter Deck
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#3d5444] bg-white hover:bg-stone-50 border border-[#c8d6c9] rounded-xl transition-all"
            >
              Review English Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
