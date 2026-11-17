import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Play, 
  RotateCcw, 
  CreditCard, 
  Sun, 
  Radio, 
  BatteryCharging,
  CheckCircle2
} from 'lucide-react';

export const TechSection: React.FC = () => {
  // Simulator 1: Robotic Arm
  const [brewStep, setBrewStep] = useState<number>(0);
  const [isBrewing, setIsBrewing] = useState<boolean>(false);
  const [brewProgress, setBrewProgress] = useState<number>(0);

  // Simulator 2: Smart Table
  const [batteryLevel, setBatteryLevel] = useState<number>(45);
  const [isCharging, setIsCharging] = useState<boolean>(true);
  const [studyMinutes, setStudyMinutes] = useState<number>(25);

  // Simulator 3: RFID Student Card Tap
  const [rfidStatus, setRfidStatus] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [studentBalance, setStudentBalance] = useState<number>(48000);

  // Simulator 4: IoT Environmental Telemetry
  const [sunlightSlider, setSunlightSlider] = useState<number>(85); // 0-100%

  // Simulator 5: AI Optical Waste Sorter
  const [wasteItem, setWasteItem] = useState<'plastic_cup' | 'paper_note' | 'apple_core' | 'can'>('plastic_cup');
  const [isDetecting, setIsDetecting] = useState<boolean>(false);
  const [detectedCategory, setDetectedCategory] = useState<string>('Plastic Polymer #5 PP (Recyclable)');

  // Brew simulation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBrewing) {
      timer = setInterval(() => {
        setBrewProgress((prev) => {
          if (prev >= 100) {
            setIsBrewing(false);
            setBrewStep(5);
            return 100;
          }
          const next = prev + 5;
          if (next > 80) setBrewStep(4);
          else if (next > 60) setBrewStep(3);
          else if (next > 35) setBrewStep(2);
          else if (next > 10) setBrewStep(1);
          return next;
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isBrewing]);

  const handleStartBrew = () => {
    setBrewProgress(0);
    setBrewStep(1);
    setIsBrewing(true);
  };

  const handleTapCard = () => {
    setRfidStatus('scanning');
    setTimeout(() => {
      setRfidStatus('success');
      setStudentBalance((prev) => Math.max(0, prev - 15000));
    }, 600);
  };

  const handleClassifyWaste = (item: 'plastic_cup' | 'paper_note' | 'apple_core' | 'can') => {
    setWasteItem(item);
    setIsDetecting(true);
    setTimeout(() => {
      setIsDetecting(false);
      if (item === 'plastic_cup') setDetectedCategory('Plastic Polymer #5 PP · Shutter A Opens');
      else if (item === 'paper_note') setDetectedCategory('Cellulose Paper / Pulp · Shutter B Opens');
      else if (item === 'apple_core') setDetectedCategory('Organic Compostable · Shutter C Opens');
      else if (item === 'can') setDetectedCategory('Aluminum Metal · Shutter D Opens');
    }, 400);
  };

  const brewStepsLabels = [
    'Idle (Awaiting Order Queue)',
    'Grinding Beans (18.5g Specialty Arabica)',
    'Precision Tamping (15 kg automated pressure)',
    '9-Bar Extraction (92.5°C water temp)',
    'Steaming Oat Milk (Silky microfoam 65°C)',
    'Dispensed & Conveyed to Pickup Counter!'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7] mb-3">
          <Cpu className="w-4 h-4 text-[#5f7d69]" />
          <span>Interactive STEM & IoT Sandbox</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
          Smart Technology in Action
        </h1>
        <p className="text-base text-stone-600 mt-3 leading-relaxed">
          Engineered by Kevin Pratama (Grade 9A). Test the five core hardware subsystems below 
          to explore how sensors, microcontrollers, and computer vision automate the cafe.
        </p>
      </div>

      {/* Grid of Interactive Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Module 1: Robotic Barista Arm Simulation */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#edf3ee] text-[#4b6d58] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800">
                  Robotic Barista Brew Engine
                </h3>
                <span className="text-xs text-stone-500">6-Axis Stepper Servo & Pressure Telemetry</span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f2ede4] text-[#6d553b]">
              ESP32 + Modbus
            </span>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80">
              <img
                src="/src/assets/images/smart_robot_barista_counter_1794284120908.jpg"
                alt="Robotic barista arm in action"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-stone-900/70 backdrop-blur-xs text-white p-2.5 rounded-xl text-xs flex items-center justify-between">
                <span>Status: <strong className="font-mono text-emerald-300">{brewStepsLabels[brewStep]}</strong></span>
                <span className="font-mono text-xs">{brewProgress}%</span>
              </div>
            </div>

            {/* Progress Bar (Soft Pastel Sage) */}
            <div className="w-full bg-[#ebe5dc] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#6b8e73] h-full transition-all duration-200"
                style={{ width: `${brewProgress}%` }}
              ></div>
            </div>

            {/* Telemetry Readouts */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-[#faf7f2] rounded-xl border border-stone-100">
                <div className="text-[11px] text-stone-500">Water Temp</div>
                <div className="font-mono font-bold text-stone-800">{isBrewing ? '92.4 °C' : '92.0 °C'}</div>
              </div>
              <div className="p-2.5 bg-[#edf3ee] rounded-xl border border-[#dbe6dc]">
                <div className="text-[11px] text-[#4b6b53]">Pump Pressure</div>
                <div className="font-mono font-bold text-[#35523c]">{brewStep >= 3 ? '9.1 Bar' : '0.0 Bar'}</div>
              </div>
              <div className="p-2.5 bg-[#faf7f2] rounded-xl border border-stone-100">
                <div className="text-[11px] text-stone-500">Cycle Time</div>
                <div className="font-mono font-bold text-stone-800">45.0 s</div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                disabled={isBrewing}
                onClick={handleStartBrew}
                className="flex-1 py-2.5 text-xs font-semibold text-white bg-[#55785f] hover:bg-[#47654f] disabled:opacity-50 rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isBrewing ? 'Brewing in Progress...' : 'Trigger Automated Brew Cycle'}</span>
              </button>
              <button
                onClick={() => {
                  setIsBrewing(false);
                  setBrewProgress(0);
                  setBrewStep(0);
                }}
                className="px-3.5 py-2.5 text-xs font-semibold text-stone-700 bg-[#f0eae0] hover:bg-[#e4dcce] rounded-2xl transition-all"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Module 2: Smart Table Interactive OS (Warm Muted Stone & Pastel Glow) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#eef1f5] text-[#4c6382] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800">
                  Smart Table OS & Wireless Charging
                </h3>
                <span className="text-xs text-stone-500">Capacitive Glass Surface + Qi Induction Coils</span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f2ede4] text-[#6d553b]">
              Table #04 Active
            </span>
          </div>

          <div className="space-y-4">
            {/* Virtual Table Screen (Soft Muted Stone) */}
            <div className="p-5 rounded-2xl bg-[#3f4a42] text-stone-100 space-y-4 shadow-inner">
              <div className="flex items-center justify-between text-xs border-b border-[#525f56] pb-2">
                <span className="text-stone-300">CyberBite Table OS v2.4</span>
                <span className="text-emerald-300 font-mono">Wi-Fi 6 · 240 Mbps</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Qi Charger status */}
                <div className="bg-[#4d5a51] p-3 rounded-xl border border-[#5d6c62]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-stone-300">Qi Coil A (Phone)</span>
                    <BatteryCharging className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    {batteryLevel}%
                  </div>
                  <div className="text-[10px] text-stone-300 mt-1">
                    {isCharging ? 'Fast Charging (15W Wireless)' : 'Surface Idle'}
                  </div>
                </div>

                {/* Study Pomodoro */}
                <div className="bg-[#4d5a51] p-3 rounded-xl border border-[#5d6c62]">
                  <div className="text-xs text-stone-300 mb-1">Study Focus Timer</div>
                  <div className="text-xl font-bold font-mono text-amber-300">
                    {studyMinutes}:00 min
                  </div>
                  <div className="text-[10px] text-stone-300 mt-1">Pomodoro Cycle Mode</div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => setIsCharging(!isCharging)}
                  className="flex-1 py-2 text-xs font-semibold rounded-xl bg-[#59685e] hover:bg-[#687a6e] transition-colors text-white"
                >
                  {isCharging ? 'Lift Phone off Pad' : 'Place Phone on Coil'}
                </button>
                <button
                  onClick={() => setStudyMinutes((prev) => (prev === 25 ? 45 : 25))}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-[#59685e] hover:bg-[#687a6e] transition-colors text-white"
                >
                  Toggle Timer
                </button>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Touch panels embedded inside tempered safety glass allow students to summon digital orders, 
              view whiteboard diagrams, and recharge devices simultaneously without messy power cords.
            </p>
          </div>
        </div>

        {/* Module 3: RFID Student Card Tap (Pastel Green Theme) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#edf3ee] text-[#4b6d58] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800">
                  RFID Student ID Contactless Tap
                </h3>
                <span className="text-xs text-stone-500">13.56 MHz NFC School Card Protocol</span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f2ede4] text-[#6d553b]">
              RC522 Module
            </span>
          </div>

          <div className="space-y-4">
            {/* Digital Student Card Graphic in Soft Pastel Sage */}
            <div className="bg-[#6b8572] text-white p-5 rounded-2xl shadow-xs space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] tracking-widest uppercase font-semibold text-emerald-100">
                    SMP IT Citra Azzahra
                  </div>
                  <div className="text-sm font-bold mt-0.5">Official Student Digital Pass</div>
                </div>
                <Radio className="w-5 h-5 text-emerald-200 animate-pulse" />
              </div>

              <div className="pt-2 flex justify-between items-end">
                <div>
                  <div className="text-xs font-mono font-semibold">KEVIN PRATAMA WIJAYA</div>
                  <div className="text-[10px] text-emerald-100 font-mono">NIS: 9A-2024-014</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-100">Meal Balance</div>
                  <div className="text-base font-bold font-mono">
                    Rp {studentBalance.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>
            </div>

            {/* Tap Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleTapCard}
                className="flex-1 py-2.5 text-xs font-semibold text-white bg-[#55785f] hover:bg-[#47654f] rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <CreditCard className="w-4 h-4" />
                <span>Simulate Tap on Cafe Counter</span>
              </button>
            </div>

            {rfidStatus === 'scanning' && (
              <div className="text-xs text-center py-1 text-stone-500 font-mono">
                Authenticating encrypted token via SHA-256...
              </div>
            )}
            {rfidStatus === 'success' && (
              <div className="text-xs bg-[#eef4ef] text-[#2f4937] p-3 rounded-xl border border-[#d1ded3] flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#4b6d58] shrink-0" />
                <span>Transaction Approved: Rp 15.000 debited for Brain Boost Latte!</span>
              </div>
            )}
          </div>
        </div>

        {/* Module 4: IoT Solar & IAQ Telemetry */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#fdf4e8] text-[#916b38] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800">
                  Solar Microgrid & Indoor Air Quality
                </h3>
                <span className="text-xs text-stone-500">Real-Time Photovoltaic & CO2 Sensor Bus</span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f2ede4] text-[#6d553b]">
              MQTT Broker
            </span>
          </div>

          <div className="space-y-4">
            {/* Sunlight Slider Simulator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-stone-700">Simulate Sunlight Irradiance:</span>
                <span className="font-mono font-bold text-[#8c6734]">{sunlightSlider}% Solar Noon</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sunlightSlider}
                onChange={(e) => setSunlightSlider(Number(e.target.value))}
                className="w-full accent-[#a8824e] h-2 bg-stone-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Gauges */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 bg-[#faf4ea] rounded-2xl border border-[#ede1ce]">
                <div className="text-[11px] text-[#826131]">Solar Output</div>
                <div className="text-base font-bold font-mono text-stone-800 mt-0.5">
                  {(4.2 * (sunlightSlider / 100)).toFixed(2)} kW
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">12 Panels Active</div>
              </div>

              <div className="p-3 bg-[#edf3ee] rounded-2xl border border-[#dbe6dc]">
                <div className="text-[11px] text-[#4b6d58]">Indoor CO2</div>
                <div className="text-base font-bold font-mono text-stone-800 mt-0.5">
                  520 ppm
                </div>
                <div className="text-[10px] text-[#4b6d58] font-medium mt-0.5">Optimal Focus</div>
              </div>

              <div className="p-3 bg-[#faf7f2] rounded-2xl border border-stone-200/70">
                <div className="text-[11px] text-stone-500">Air Temperature</div>
                <div className="text-base font-bold font-mono text-stone-800 mt-0.5">
                  23.5 °C
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">Circadian HVAC</div>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              When sunlight exceeds 70%, the solar array generates excess power that automatically recharges 
              the 10 kWh battery bank to power evening school study sessions.
            </p>
          </div>
        </div>

        {/* Module 5: AI Optical Waste Classifier (Full Width below) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#edf3ee] text-[#4b6d58] flex items-center justify-center font-bold text-sm">
                05
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800">
                  AI Computer Vision Waste Sorter
                </h3>
                <span className="text-xs text-stone-500">Raspberry Pi + TinyML Neural Classification Model</span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#edf3ee] text-[#3e5e48]">
              94.8% Test Accuracy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <label className="text-xs font-bold text-stone-700 block">
                Select an item to drop in the Smart Waste Chute:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'plastic_cup', label: '🥤 Plastic Cup' },
                  { id: 'paper_note', label: '📝 Paper Note' },
                  { id: 'apple_core', label: '🍏 Apple Core' },
                  { id: 'can', label: '🥫 Soda Can' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClassifyWaste(item.id as any)}
                    className={`p-3 text-xs font-medium rounded-2xl border text-center transition-all ${
                      wasteItem === item.id
                        ? 'bg-[#e4ece5] text-[#2b4433] border-[#b9cfbb] font-semibold'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-[#faf7f2]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-[#faf7f2] p-4 rounded-2xl border border-stone-200/80 space-y-2 text-xs">
              <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Edge Neural Classifier Output:
              </div>
              {isDetecting ? (
                <div className="py-2 text-stone-500 font-mono animate-pulse">
                  Analyzing RGB tensor matrix (300ms)...
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="text-sm font-bold text-stone-800 font-mono">
                    {detectedCategory}
                  </div>
                  <div className="text-[11px] text-[#4b6d58] font-medium">
                    ✓ Mechanical servo opens bin lid automatically to prevent contamination.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
