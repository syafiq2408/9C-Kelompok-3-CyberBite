import React, { useState } from 'react';
import { CAFE_ZONES } from '../data/cafeData';
import { CafeZone } from '../types/cafe';
import { 
  Compass, 
  Sun, 
  VolumeX, 
  Wind, 
  CheckCircle2, 
  Zap, 
  Sparkles
} from 'lucide-react';

export const DesignSection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<CafeZone>(CAFE_ZONES[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7] mb-3">
          <Compass className="w-4 h-4 text-[#5f7d69]" />
          <span>Architectural & Ergonomic Blueprint</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
          Our Cafe Design & Spatial Architecture
        </h1>
        <p className="text-base text-stone-600 mt-3 leading-relaxed">
          Designed by Grade 9 student Sarah Amalia, this 150 m² layout optimizes natural daylight, 
          acoustic isolation for study pods, and rapid counter traffic so school breaks remain relaxed and productive.
        </p>
      </div>

      {/* Primary Visual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Main Isometric Blueprint */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="relative group">
              <img
                src="/src/assets/images/smart_cafe_isometric_concept_1794284119871.jpg"
                alt="Detailed 3D isometric layout diagram of CyberBite Smart Cafe"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#38483e]/85 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 rounded-lg">
                Blueprint Render · Class 9A Architectural CAD
              </div>
            </div>
            <div className="p-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Overall Footprint: 150 m² · Seating Capacity: 64 Students</span>
              <span className="font-semibold text-[#4b6d58]">Zero-Carbon Ready</span>
            </div>
          </div>

          {/* Secondary Interior Photo */}
          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="/src/assets/images/smart_cafe_interior_view_1794284121767.jpg"
                alt="Interior study tables with wireless chargers and students collaborating"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>
            <div className="p-5 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#7d5e46] uppercase tracking-wider mb-1">
                  Interior Atmosphere
                </div>
                <h3 className="text-base font-bold text-stone-800 mb-2">
                  Ergonomic Study Tables
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Natural oak surfaces with built-in magnetic wireless charging spots. Glare-free daylight 
                  reduces eye fatigue during long reading or digital exam revision.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#54755d]" />
                <span>Dual Qi Wireless Chargers per Seat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Zone Explorer (Soft Pastel Design) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#eef3ee] text-[#2f4637] p-5 rounded-3xl border border-[#d8e4da] shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#476650]">
                Interactive Zone Inspector
              </div>
              <span className="text-[11px] text-[#587a62]">Click a zone below</span>
            </div>
            <p className="text-xs text-stone-600">
              Select any functional zone to examine its square footage, hardware specs, and IoT integration.
            </p>
          </div>

          {/* Zone Selector Buttons */}
          <div className="grid grid-cols-1 gap-2">
            {CAFE_ZONES.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#e4ece5] border-[#b8ccbb] text-stone-900 shadow-xs'
                      : 'bg-white border-stone-200/80 text-stone-700 hover:bg-[#faf7f2]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">{zone.name}</div>
                    <div className="text-[11px] text-stone-500">{zone.area} · {zone.energyUse}</div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-[#54755d]' : 'bg-stone-300'}`}></div>
                </button>
              );
            })}
          </div>

          {/* Active Zone Details Card */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="text-base font-bold text-stone-800">
                {selectedZone.name}
              </h3>
              <span className="text-xs font-mono font-bold text-[#405c48] bg-[#eef4ef] px-2.5 py-1 rounded-lg">
                {selectedZone.area}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-stone-700 block mb-0.5">Primary Purpose:</span>
                <p className="text-stone-600 leading-relaxed">{selectedZone.purpose}</p>
              </div>

              <div>
                <span className="font-semibold text-stone-700 block mb-0.5">Hardware & Sensor Specs:</span>
                <p className="text-stone-600 font-mono text-[11px] bg-[#fbf9f5] p-3 rounded-xl border border-stone-100">
                  {selectedZone.specs}
                </p>
              </div>

              <div>
                <span className="font-semibold text-stone-700 block mb-0.5">IoT & Microcontroller Role:</span>
                <p className="text-stone-600 leading-relaxed">{selectedZone.iotFeature}</p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span>Power Consumption:</span>
                <span className="font-mono font-semibold text-stone-800">{selectedZone.energyUse}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architectural & Environmental Engineering Specs */}
      <section className="bg-[#f5efe6]/70 border border-[#e8ded0] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#665541] uppercase tracking-wider mb-1">
            Building Science & Physics
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            Four Architectural Engineering Decisions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Applying 9th grade physics and environmental biology to make our cafe healthy and energy-efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#fcf3e6] text-[#9c713b] flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">1. Daylight Harvesting</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Oriented 15° north to capture natural diffuse sunlight without direct infrared heat buildup, 
              cutting artificial lighting power by 55%.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#eef1f5] text-[#4d6382] flex items-center justify-center">
              <VolumeX className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">2. Acoustic Insulation</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Study pods utilize recycled rockwool sound absorption panels to keep study area noise strictly 
              below 45 decibels (library standard).
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#edf4ee] text-[#486b51] flex items-center justify-center">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">3. IAQ & CO2 Sensors</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              NDIR CO2 monitors trigger automated fresh air exchange fans when classroom drowsiness 
              thresholds (1,000 ppm) are approached.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#fdf2e9] text-[#96633b] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">4. Solar Microgrid</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              12 monocrystalline rooftop solar panels generate 4.2 kW/h peak power, channeled into a 10 kWh 
              lithium-iron-phosphate (LiFePO4) battery bank.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
