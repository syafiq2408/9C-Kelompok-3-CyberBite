import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types/cafe';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Timer, 
  BookOpen, 
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

interface PresenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

const SLIDES: {
  tab: ActiveTab;
  title: string;
  speaker: string;
  targetTime: string;
  talkingPoints: string[];
  teacherCriteria: string;
}[] = [
  {
    tab: 'home',
    title: 'Slide 1: Problem Statement & Innovation Vision',
    speaker: 'Aisyah Nurul (Project Lead)',
    targetTime: '1:30 min',
    talkingPoints: [
      'Greet the teacher and classmates warmly in English ("Good morning honorable teachers and fellow friends").',
      'Present the survey of 120 students: 20-minute break congestion and single-use plastic waste.',
      'Introduce CyberBite as an eco-smart educational cafe combining robotics, solar energy, and quiet study pods.'
    ],
    teacherCriteria: 'Clear vocal articulation, introductory engagement, problem-solution alignment.'
  },
  {
    tab: 'about',
    title: 'Slide 2: Team Roles & Project Timeline',
    speaker: 'Kevin Pratama (Systems Architect)',
    targetTime: '1:30 min',
    talkingPoints: [
      'Introduce the 5 student specialists in Class 9A (Lead, IoT Architect, Spatial Designer, Nutritionist, Finance).',
      'Acknowledge our English & Science supervising teachers for their mentorship.',
      'Summarize the 5-week project sprint from student questionnaires to final web modeling.'
    ],
    teacherCriteria: 'Collaboration evidence, clear task delegation, project management milestones.'
  },
  {
    tab: 'design',
    title: 'Slide 3: Spatial Floor Plan & 3D Architecture',
    speaker: 'Sarah Amalia (Spatial Designer)',
    targetTime: '2:00 min',
    talkingPoints: [
      'Walk through the 150 m² 3D isometric layout diagram.',
      'Explain the 6 functional zones: Contactless entry, robotic barista bar, touch tables, silent study pods, and indoor hydroponics.',
      'Highlight daylight harvesting and acoustic insulation keeping study pod volume under 45 dB.'
    ],
    teacherCriteria: 'Architectural clarity, ergonomics, environmental sustainability principles.'
  },
  {
    tab: 'menu',
    title: 'Slide 4: Nutritional Science & Student Pricing',
    speaker: 'Farhan Rizky (Nutrition Lead)',
    targetTime: '2:00 min',
    talkingPoints: [
      'Demonstrate how beverages incorporate L-Theanine and low glycemic index natural sugars to prevent brain crashes.',
      'Show the interactive customizer: live calorie calculation and student discount tiers (Honor Roll 25% off).',
      'Explain the digital receipt with estimated 45-second robotic brewing turnaround.'
    ],
    teacherCriteria: 'Scientific reasoning behind recipes, affordability analysis, interactive tool demonstration.'
  },
  {
    tab: 'tech',
    title: 'Slide 5: STEM & IoT Hardware Demonstrations',
    speaker: 'Kevin Pratama (Systems Architect)',
    targetTime: '2:30 min',
    talkingPoints: [
      'Trigger the live robotic barista arm brewing telemetry (pressure 9.1 bar, temp 92.4°C).',
      'Demonstrate the Smart Table OS with Qi wireless phone charging and Pomodoro study timer.',
      'Simulate the 13.56 MHz RFID student card tap and the AI Computer Vision waste classifier.'
    ],
    teacherCriteria: 'Depth of technical understanding, correct use of electronics and sensor terminology.'
  },
  {
    tab: 'business',
    title: 'Slide 6: Business Feasibility & Campaigns',
    speaker: 'Nadia Putri (Finance Lead)',
    targetTime: '1:30 min',
    talkingPoints: [
      'Review the SWOT matrix with focus on student opportunities and equipment safeguards.',
      'Present the financial model: 28 cups/day break-even volume and 9.5 months payback period.',
      'Explain student campaigns: Straight-A report card promo, BYOT tumbler savings, and study squad packs.'
    ],
    teacherCriteria: 'Economic literacy, realistic budget assumptions, marketing creativity.'
  },
  {
    tab: 'report',
    title: 'Slide 7: Academic English Report Text Defense',
    speaker: 'Aisyah Nurul & Entire Team',
    targetTime: '2:30 min',
    talkingPoints: [
      'Recite the General Classification defining smart cafes in contemporary society.',
      'Analyze key language features: Simple Present Tense for scientific facts, technical vocabulary, and passive voice.',
      'Invite our teacher and classmates to take the 5-question comprehension quiz and vocabulary review.'
    ],
    teacherCriteria: 'Mastery of Grade 9 KD 3.9/4.9 Report Text curriculum, formal English grammar, pronunciation.'
  }
];

export const PresenterModal: React.FC<PresenterModalProps> = ({
  isOpen,
  onClose,
  setActiveTab
}) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isTimerRunning]);

  if (!isOpen) return null;

  const currentSlide = SLIDES[currentSlideIdx];

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGoToSlide = (idx: number) => {
    setCurrentSlideIdx(idx);
    setActiveTab(SLIDES[idx].tab);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fbf9f5] text-stone-800 w-full max-w-4xl rounded-3xl border border-stone-200/90 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200/80 flex items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#edf3ee] text-[#3e5e48] border border-[#d6e3d8]">
              PRESENTER MODE
            </span>
            <div className="text-sm font-bold text-stone-800 truncate">
              {currentSlide.title}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Presentation Timer */}
            <div className="flex items-center gap-2 bg-[#faf7f2] px-3.5 py-1.5 rounded-xl border border-stone-200 text-xs font-mono">
              <Timer className="w-3.5 h-3.5 text-[#916d3e]" />
              <span className="text-[#7d592b] font-bold">{formatTimer(secondsElapsed)}</span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-stone-400 hover:text-stone-700 ml-1"
                title={isTimerRunning ? 'Pause timer' : 'Resume timer'}
              >
                {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Deck Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Speaker & Target Duration Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs">
              <span className="text-stone-400 block text-[11px]">Primary Speaker</span>
              <strong className="text-[#3b5944] font-semibold text-xs mt-0.5 block">{currentSlide.speaker}</strong>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs">
              <span className="text-stone-400 block text-[11px]">Suggested Duration</span>
              <strong className="text-[#8c6734] font-semibold text-xs mt-0.5 block">{currentSlide.targetTime} (Total ~12 mins)</strong>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs">
              <span className="text-stone-400 block text-[11px]">Current Page Jump</span>
              <strong className="text-[#4c6382] font-semibold text-xs mt-0.5 block uppercase tracking-wider">{currentSlide.tab} tab</strong>
            </div>
          </div>

          {/* Key Speaking Cue Points */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#8c6734]" />
              <span>Speaker Cue Cards & Talking Points (English Oral Delivery):</span>
            </h4>
            <div className="space-y-2">
              {currentSlide.talkingPoints.map((point, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white border border-stone-200/80 text-xs sm:text-sm text-stone-700 flex items-start gap-3 shadow-xs">
                  <div className="w-6 h-6 rounded-xl bg-[#edf3ee] text-[#3e5e48] flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher Assessment Rubric Note */}
          <div className="p-4 rounded-2xl bg-[#edf3ee] border border-[#d6e3d8] text-xs space-y-1">
            <div className="font-bold text-[#35523c] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#4b6d58]" />
              <span>Teacher Evaluation Criteria Highlight:</span>
            </div>
            <p className="text-[#45644d] leading-relaxed">
              {currentSlide.teacherCriteria}
            </p>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 bg-white border-t border-stone-200/80 flex items-center justify-between gap-4">
          <button
            disabled={currentSlideIdx === 0}
            onClick={() => handleGoToSlide(currentSlideIdx - 1)}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#f5efe6] hover:bg-[#ece2d4] disabled:opacity-40 transition-colors flex items-center gap-1 text-stone-700"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Slide</span>
          </button>

          {/* Slide Dots / Indicator */}
          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleGoToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlideIdx === idx ? 'bg-[#55785f] w-6' : 'bg-stone-300 hover:bg-stone-400'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-mono text-stone-500 ml-2">
              {currentSlideIdx + 1} / {SLIDES.length}
            </span>
          </div>

          <button
            disabled={currentSlideIdx === SLIDES.length - 1}
            onClick={() => handleGoToSlide(currentSlideIdx + 1)}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#55785f] hover:bg-[#47654f] disabled:opacity-40 transition-colors flex items-center gap-1 text-white shadow-xs"
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
