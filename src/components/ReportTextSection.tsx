import React, { useState } from 'react';
import { REPORT_TEXT_DATA, QUIZ_QUESTIONS, VOCAB_WORDS } from '../data/cafeData';
import { 
  BookOpen, 
  CheckCircle2, 
  Printer, 
  Languages,
  RotateCcw
} from 'lucide-react';

export const ReportTextSection: React.FC = () => {
  const [grammarFilter, setGrammarFilter] = useState<'none' | 'present' | 'technical' | 'passive' | 'relational'>('none');
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 20;
      }
    });
    return score;
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  const renderHighlightedParagraph = (text: string) => {
    if (grammarFilter === 'none') {
      return <span>{text}</span>;
    }

    let targetWords: string[] = [];
    let highlightClass = '';

    if (grammarFilter === 'present') {
      targetWords = REPORT_TEXT_DATA.grammarFeatures.simplePresentVerbs;
      highlightClass = 'bg-[#dfebe1] text-[#2a4533] font-semibold px-1 rounded-md';
    } else if (grammarFilter === 'technical') {
      targetWords = REPORT_TEXT_DATA.grammarFeatures.technicalTerms;
      highlightClass = 'bg-[#e5ecf5] text-[#344d6e] font-semibold px-1 rounded-md';
    } else if (grammarFilter === 'passive') {
      targetWords = REPORT_TEXT_DATA.grammarFeatures.passiveVoice;
      highlightClass = 'bg-[#faefe3] text-[#7d5830] font-semibold px-1 rounded-md';
    } else if (grammarFilter === 'relational') {
      targetWords = REPORT_TEXT_DATA.grammarFeatures.relationalVerbs;
      highlightClass = 'bg-[#f4e8f7] text-[#693973] font-semibold px-1 rounded-md';
    }

    const escaped = targetWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');

    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => {
          const isMatch = targetWords.some(w => w.toLowerCase() === part.toLowerCase());
          return isMatch ? (
            <mark key={i} className={highlightClass}>
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7] mb-3">
          <BookOpen className="w-4 h-4 text-[#5f7d69]" />
          <span>Curriculum 2013 / Merdeka · Academic English Component</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
          Report Text: Smart Cafes in Modern Education
        </h1>
        <p className="text-base text-stone-600 mt-3 leading-relaxed">
          Authored by Aisyah Nurul (Grade 9A) to fulfill the formal Grade 9 English Report Text syllabus. 
          A report text presents factual information about a subject based on systematic observation, 
          structured into a <strong>General Classification</strong> followed by <strong>Detailed Descriptions</strong>.
        </p>
      </div>

      {/* Report Text Article Box (Soft Ivory & Journal Style) */}
      <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800">
              {REPORT_TEXT_DATA.title}
            </h2>
            <div className="text-xs text-stone-500 mt-1 flex items-center gap-2">
              <span>Class 9A Project Paper</span>
              <span aria-hidden="true">·</span>
              <span>Target Standard: Grade 9 KD 3.9 & 4.9</span>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-stone-700 bg-[#f5efe6] hover:bg-[#ece2d4] rounded-xl transition-all flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5 text-stone-600" />
            <span>Print Student Handout</span>
          </button>
        </div>

        {/* Interactive Grammar Highlighter Filter Bar (Pastel Tones) */}
        <div className="p-4 bg-[#faf7f2] rounded-2xl border border-stone-200/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              Language Features Analysis Tool:
            </span>
            <span className="text-[11px] text-stone-500">Click to highlight grammar elements</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'none', label: 'Plain Text View' },
              { id: 'present', label: 'Simple Present Tense (Facts)' },
              { id: 'technical', label: 'Technical & Scientific Terms' },
              { id: 'passive', label: 'Passive Voice Constructions' },
              { id: 'relational', label: 'Relational & Linking Verbs' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setGrammarFilter(btn.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  grammarFilter === btn.id
                    ? 'bg-[#e2ebe3] text-[#2b4433] font-semibold border border-[#b8ccbb] shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-[#fbf9f5]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Four Academic Paragraphs with Pastel Structure Labels */}
        <div className="space-y-8">
          {REPORT_TEXT_DATA.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                  sec.type === 'classification'
                    ? 'bg-[#edf3ee] text-[#3d5a45] border border-[#d6e3d8]'
                    : 'bg-[#f4efe8] text-[#69543d] border border-[#e4d8c8]'
                }`}>
                  [{sec.heading}]
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-serif">
                {renderHighlightedParagraph(sec.paragraph)}
              </p>

              <div className="text-xs text-stone-600 italic bg-[#faf7f2] p-3 rounded-xl border border-stone-100">
                <strong className="text-stone-800 not-italic">Structure Note: </strong>
                {sec.analysis}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 5-Question Reading Comprehension Quiz */}
      <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-[#54735b] uppercase tracking-wider mb-1">
              Classroom Assessment
            </div>
            <h2 className="text-xl font-bold text-stone-800">
              Report Text Reading Comprehension Quiz
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              5 multiple-choice questions designed for classmate peer evaluation.
            </p>
          </div>

          {showQuizResults && (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Class Score</span>
                <span className="text-2xl font-bold font-mono text-[#4b6d58]">
                  {calculateScore()} / 100
                </span>
              </div>
              <button
                onClick={handleResetQuiz}
                className="px-3.5 py-1.5 text-xs text-stone-600 bg-[#f5efe6] hover:bg-[#ece2d4] rounded-xl flex items-center gap-1 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          )}
        </div>

        <div className="space-y-6 pt-2">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            return (
              <div key={q.id} className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200/70 space-y-3">
                <div className="text-sm font-bold text-stone-800">
                  {idx + 1}. {q.question}
                </div>

                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAnswer === oIdx;
                    let optionStyle = 'bg-white border-stone-200 text-stone-700 hover:bg-[#fbf9f5]';
                    if (showQuizResults) {
                      if (oIdx === q.correctAnswer) {
                        optionStyle = 'bg-[#edf4ee] border-[#b7ceba] text-[#2b4433] font-semibold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-[#fcf0ee] border-[#f0c3bd] text-[#853e34]';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-[#e4ece5] border-[#b8ccbb] text-[#2b4433] font-semibold shadow-xs';
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectOption(q.id, oIdx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {showQuizResults && oIdx === q.correctAnswer && (
                          <CheckCircle2 className="w-4 h-4 text-[#4b6d58] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {showQuizResults && (
                  <div className="mt-2 text-xs p-3 rounded-xl bg-white border border-stone-200/80 text-stone-600">
                    <strong className="text-stone-800">Explanation: </strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showQuizResults ? (
          <button
            onClick={() => setShowQuizResults(true)}
            className="w-full py-3 text-xs font-semibold text-white bg-[#55785f] hover:bg-[#47654f] rounded-2xl transition-all shadow-xs"
          >
            Submit Quiz Answers & Reveal Explanations
          </button>
        ) : (
          <div className="p-4 bg-[#edf3ee] border border-[#d5e2d7] rounded-2xl text-center space-y-1">
            <div className="text-sm font-bold text-[#35523c]">
              Quiz Evaluation Complete: You scored {calculateScore()} / 100!
            </div>
            <p className="text-xs text-[#4b6d58]">
              Great work reviewing the generic structure and scientific vocabulary of this report text.
            </p>
          </div>
        )}
      </section>

      {/* Bilingual Academic Vocabulary Gloss */}
      <section className="bg-[#f5efe6]/70 border border-[#e8ded0] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#665541] uppercase tracking-wider mb-1">
            <Languages className="w-4 h-4 text-[#8a6e4d]" />
            <span>Peer Learning Aid</span>
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            English–Indonesian Academic Vocabulary Gloss
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Key scientific and technological terms used in our Report Text to help Grade 9 classmates build vocabulary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VOCAB_WORDS.map((vocab, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-bold text-stone-800">{vocab.term}</h3>
                <span className="text-[11px] text-stone-400 font-mono italic">({vocab.partOfSpeech})</span>
              </div>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                {vocab.definitionEn}
              </p>
              <div className="pt-2 border-t border-stone-100 text-xs text-[#3d5a45] bg-[#edf3ee] p-2.5 rounded-xl">
                <span className="font-semibold text-stone-700">Arti (ID): </span>
                {vocab.meaningId}
              </div>
              <div className="text-[11px] text-stone-500 italic">
                Ex: "{vocab.example}"
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
