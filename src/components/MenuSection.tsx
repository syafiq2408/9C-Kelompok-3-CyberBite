import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types/cafe';
import { 
  Coffee, 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  Receipt, 
  QrCode, 
  Zap, 
  Tag
} from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<MenuItem>(MENU_ITEMS[0]);
  
  // Customizer State
  const [cupSize, setCupSize] = useState<'Regular' | 'Large'>('Regular');
  const [sweetness, setSweetness] = useState<number>(50); // 0, 25, 50, 100
  const [iceLevel, setIceLevel] = useState<'None' | 'Less' | 'Normal'>('Normal');
  const [milkOption, setMilkOption] = useState<'Dairy' | 'Oat' | 'Soy'>('Oat');
  const [discountType, setDiscountType] = useState<'standard' | 'honor' | 'tumbler'>('honor');
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<number>(42);

  // Filter items
  const filteredItems = selectedCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  // Live Nutrition and Price Math
  const basePrice = activeItem.priceIdr;
  const sizeMultiplier = cupSize === 'Large' ? 1.25 : 1.0;
  const milkAddon = milkOption === 'Oat' ? 3000 : milkOption === 'Soy' ? 2000 : 0;
  const rawTotal = Math.round(basePrice * sizeMultiplier + milkAddon);
  
  // Discounts
  let discountAmount = 0;
  let discountLabel = '';
  if (discountType === 'honor') {
    discountAmount = Math.round(rawTotal * 0.25);
    discountLabel = 'Honor Roll Grade >= 90 (25% OFF)';
  } else if (discountType === 'standard') {
    discountAmount = Math.round(rawTotal * 0.10);
    discountLabel = 'Student Card ID (10% OFF)';
  } else if (discountType === 'tumbler') {
    discountAmount = 5000;
    discountLabel = 'BYOT - Eco Tumbler (-Rp 5.000)';
  }
  const finalPrice = Math.max(0, rawTotal - discountAmount);

  // Calories & Sugar Calculation
  const sugarFactor = sweetness / 100;
  const calculatedSugar = Math.round(activeItem.sugarGrams * sugarFactor * (cupSize === 'Large' ? 1.3 : 1));
  const calculatedCalories = Math.round(
    (activeItem.calories + (milkOption === 'Oat' ? 20 : milkOption === 'Soy' ? 15 : 0)) * 
    (cupSize === 'Large' ? 1.3 : 1) - 
    ((100 - sweetness) * 0.4)
  );

  const handleSimulateOrder = () => {
    setOrderNumber(prev => prev + 1);
    setShowReceipt(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7] mb-3">
          <Coffee className="w-4 h-4 text-[#5f7d69]" />
          <span>Nutritional Science & Student Economy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
          Smart Student Menu & Nutrition Simulator
        </h1>
        <p className="text-base text-stone-600 mt-3 leading-relaxed">
          Formulated by Farhan Rizky (Grade 9A) to provide clean cognitive energy without sugar crashes. 
          Use the interactive simulator on the right to test how sweetness, cup size, and student discounts affect calories and price!
        </p>
      </div>

      {/* Main Split: Menu Cards on Left, Interactive Simulator on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Menu Items */}
        <div className="lg:col-span-7 space-y-6">
          {/* Category Filter Tabs (Soft Pastel) */}
          <div className="flex items-center gap-2 p-1.5 bg-[#f1ebe1] rounded-2xl overflow-x-auto">
            {['All', 'Brain Boosters', 'Refreshers', 'Smart Bakery'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-stone-800 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards List */}
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isSelected = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item);
                    setShowReceipt(false);
                  }}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#f5f8f5] border-[#9bb89f] shadow-xs'
                      : 'bg-white border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-stone-800">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3d5a46] bg-[#e1ece3] px-2.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0">
                      <div className="text-base font-bold font-mono text-stone-800">
                        Rp {item.priceIdr.toLocaleString('id-ID')}
                      </div>
                      <div className="text-[11px] text-stone-400 font-mono">
                        ≈ ${item.priceUsd.toFixed(2)} USD
                      </div>
                    </div>
                  </div>

                  {/* Metadata Bar */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-700">{item.calories} kcal</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.sugarGrams}g natural sugar</span>
                      <span aria-hidden="true">·</span>
                      <span>Focus: {'⚡'.repeat(item.focusRating)}</span>
                    </div>

                    <button
                      className={`text-xs font-semibold flex items-center gap-1 ${
                        isSelected ? 'text-[#3d5a46]' : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <Sliders className="w-3.5 h-3.5" />
                      <span>{isSelected ? 'Selected' : 'Select to Customize'}</span>
                    </button>
                  </div>

                  {/* Student Cognitive Benefit Note */}
                  <div className="mt-3 text-[11px] bg-[#faf7f2] p-2.5 rounded-xl text-stone-600 border border-stone-100">
                    <span className="font-semibold text-[#4b6d58]">Student Benefit: </span>
                    {item.studentBenefit}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Customizer & Receipt Simulator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-semibold text-[#54755d] uppercase tracking-wider block">
                  Interactive Simulator
                </span>
                <h3 className="text-lg font-bold text-stone-800">
                  {activeItem.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-400 block">Base Price</span>
                <span className="font-bold font-mono text-stone-800">
                  Rp {activeItem.priceIdr.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            {/* Cup Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block">
                1. Cup Size:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCupSize('Regular')}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                    cupSize === 'Regular'
                      ? 'bg-[#e4ece5] text-[#2b4433] border-[#b9cfbb] font-semibold'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-[#faf7f2]'
                  }`}
                >
                  Regular (350 ml)
                </button>
                <button
                  type="button"
                  onClick={() => setCupSize('Large')}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                    cupSize === 'Large'
                      ? 'bg-[#e4ece5] text-[#2b4433] border-[#b9cfbb] font-semibold'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-[#faf7f2]'
                  }`}
                >
                  Large 500 ml (+25%)
                </button>
              </div>
            </div>

            {/* Sweetness Level Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-stone-700">2. Sweetness Level:</label>
                <span className="font-mono font-bold text-[#486b51]">{sweetness}% Sweetness</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[0, 25, 50, 100].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSweetness(level)}
                    className={`py-1.5 text-xs rounded-xl border transition-all ${
                      sweetness === level
                        ? 'bg-[#dfebe1] text-[#2b4433] border-[#b6ceb9] font-semibold'
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-[#faf7f2]'
                    }`}
                  >
                    {level === 0 ? '0%' : `${level}%`}
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Alternative */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block">
                3. Milk Formulation:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Oat', label: 'Oat Milk (+3k)' },
                  { id: 'Dairy', label: 'Fresh Dairy' },
                  { id: 'Soy', label: 'Soy Milk (+2k)' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMilkOption(opt.id as any)}
                    className={`py-2 text-[11px] font-medium rounded-xl border text-center transition-all ${
                      milkOption === opt.id
                        ? 'bg-[#f4ebe1] text-[#6d4d31] border-[#dbcab7] font-semibold'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-[#faf7f2]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Discount Program */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block flex items-center justify-between">
                <span>4. Student Incentive Discount:</span>
                <span className="text-[10px] text-[#4d6d56] font-semibold">School Campaign</span>
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setDiscountType('honor')}
                  className={`w-full p-3 rounded-2xl border text-left text-xs flex items-center justify-between transition-all ${
                    discountType === 'honor'
                      ? 'bg-[#fcf5e8] border-[#e8d5b7] text-stone-800 font-medium'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-[#faf7f2]'
                  }`}
                >
                  <span>Honor Roll Report Card (Grade ≥ 90)</span>
                  <span className="font-bold text-[#9e763b] font-mono">25% OFF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDiscountType('tumbler')}
                  className={`w-full p-3 rounded-2xl border text-left text-xs flex items-center justify-between transition-all ${
                    discountType === 'tumbler'
                      ? 'bg-[#edf4ee] border-[#c7d9c9] text-stone-800 font-medium'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-[#faf7f2]'
                  }`}
                >
                  <span>Bring Your Own Smart Tumbler (BYOT)</span>
                  <span className="font-bold text-[#44664c] font-mono">-Rp 5.000</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDiscountType('standard')}
                  className={`w-full p-3 rounded-2xl border text-left text-xs flex items-center justify-between transition-all ${
                    discountType === 'standard'
                      ? 'bg-[#eef1f5] border-[#c9d3e0] text-stone-800 font-medium'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-[#faf7f2]'
                  }`}
                >
                  <span>Standard Student ID (Kartu Pelajar)</span>
                  <span className="font-bold text-[#4f6787] font-mono">10% OFF</span>
                </button>
              </div>
            </div>

            {/* Live Nutritional & Price Dashboard */}
            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-stone-200/90 space-y-3">
              <div className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Simulated Nutritional Telemetry
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                  <div className="text-lg font-bold font-mono text-stone-800 tabular-nums">
                    {calculatedCalories}
                  </div>
                  <div className="text-[11px] text-stone-500">Est. Calories (kcal)</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200/70">
                  <div className="text-lg font-bold font-mono text-[#4b6d58] tabular-nums">
                    {calculatedSugar}g
                  </div>
                  <div className="text-[11px] text-stone-500">Natural Sugars</div>
                </div>
              </div>

              {/* Price Calculation Row */}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Total After Discount:</span>
                  <span className="text-[11px] text-[#4b6d58] font-medium">{discountLabel}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 line-through block font-mono">
                    Rp {rawTotal.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xl font-bold font-mono text-stone-800">
                    Rp {finalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleSimulateOrder}
              className="w-full py-3 text-xs font-semibold text-white bg-[#55785f] hover:bg-[#47654f] rounded-2xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Receipt className="w-4 h-4" />
              <span>Simulate RFID Tap & Print Smart Receipt</span>
            </button>
          </div>

          {/* Generated Digital Student Receipt (Warm Aesthetic Paper Card) */}
          {showReceipt && (
            <div className="bg-[#fefcf9] rounded-3xl border-2 border-dashed border-[#b8ccbb] p-6 space-y-4 shadow-xs animate-in fade-in duration-300">
              <div className="text-center pb-3 border-b border-stone-200/80">
                <div className="text-xs font-bold text-[#4b6d58] uppercase tracking-wider">
                  CyberBite Smart Cafe · E-Receipt
                </div>
                <div className="text-lg font-bold text-stone-800 mt-1">
                  Order #{orderNumber} · Queued for Robot Barista
                </div>
                <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                  Est. Brew Time: 45 seconds · Pickup Lane 02
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-600">{activeItem.name} ({cupSize})</span>
                  <span className="font-mono text-stone-800">Rp {rawTotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-stone-500 text-[11px]">
                  <span>Sweetness: {sweetness}% · Milk: {milkOption}</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between text-[#4b6d58] font-medium">
                  <span>Discount: {discountLabel}</span>
                  <span className="font-mono">-Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-sm text-stone-800">
                  <span>Paid via RFID Student Card:</span>
                  <span className="font-mono text-[#385341]">Rp {finalPrice.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-500">
                <div className="space-y-0.5">
                  <div>Remaining Student Balance: <span className="font-mono font-semibold text-stone-700">Rp 38.500</span></div>
                  <div className="text-[#4b6d58] font-medium">🌱 Carbon Saved: 0.12 kg CO2 (Solar Offset)</div>
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-stone-700 border border-stone-200">
                  <QrCode className="w-8 h-8 text-stone-600" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
