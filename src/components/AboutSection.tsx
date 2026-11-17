import React from 'react';
import { TEAM_MEMBERS, TEACHER_MENTORS, PROJECT_TIMELINE } from '../data/cafeData';
import { GraduationCap, Award, Calendar, CheckCircle2, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7] mb-3">
          <GraduationCap className="w-4 h-4 text-[#5f7d69]" />
          <span>SMP IT Citra Azzahra · Academic Year 2024–2025</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
          About Our Class 9A Project Team
        </h1>
        <p className="text-base text-stone-600 mt-3 leading-relaxed">
          We are a team of five 9th-grade junior high school students collaborating on an 
          interdisciplinary English, Science, and Information Technology final exhibition. 
          Our objective was to conceptualize, model, and document a real-world technological solution 
          that benefits our school community.
        </p>
      </div>

      {/* Student Team Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-800">
            Student Researchers & Developers
          </h2>
          <span className="text-xs text-stone-500 font-medium">Class 9A · 5 Members</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-stone-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f2ede4] flex items-center justify-center text-2xl border border-[#e4dcce]">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-800 leading-tight">
                      {member.name}
                    </h3>
                    <div className="text-xs text-[#4b6b53] font-medium mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-stone-400 font-mono mt-0.5">
                      NIS: {member.nis}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    Core Project Contributions:
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {member.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5f8769] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 space-y-2">
                <div className="text-[11px] text-stone-500">
                  <span className="font-semibold text-stone-700">Favorite Drink: </span>
                  {member.favoriteDrink}
                </div>
                <p className="text-xs italic text-stone-600 bg-[#fbf9f5] p-3 rounded-xl border border-stone-200/60 leading-relaxed">
                  {member.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supervising Teachers & Mentors (Soft Pastel Cream) */}
      <section className="bg-[#f5efe6]/70 border border-[#e8ded0] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#665541] uppercase tracking-wider mb-1">
            Faculty Guidance
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            Supervising Teachers & Project Advisors
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            We are deeply grateful to our subject teachers who guided our research methodology, 
            academic English writing standards, and circuit safety calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEACHER_MENTORS.map((teacher, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#edf3ee] text-[#4b6d58] flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-800">{teacher.name}</h3>
                  <div className="text-xs text-stone-500">{teacher.subject}</div>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed bg-[#fbf9f5] p-3.5 rounded-xl border border-stone-100">
                <span className="font-semibold text-stone-800">Teacher Note: </span>
                {teacher.feedback}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Milestones Timeline */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#54735b] uppercase tracking-wider mb-1">
            5-Week Sprint
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            Project Development Timeline
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            How our team took the concept from student questionnaire to working digital prototype.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROJECT_TIMELINE.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-stone-200/90 relative flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="text-xs font-bold font-mono text-[#54735b] mb-1">
                  {step.week}
                </div>
                <h3 className="text-sm font-bold text-stone-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-[#4b6d58] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Completed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Competencies */}
      <section className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2">
          <Award className="w-5 h-5 text-[#9e7943]" />
          <span>Curriculum Competencies & Learning Objectives Met</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-600">
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-stone-100">
            <div className="font-bold text-stone-800 mb-1">English (KD 3.9 & 4.9)</div>
            <span>Generic structure of Report Text, Simple Present Tense, and scientific passive voice.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-stone-100">
            <div className="font-bold text-stone-800 mb-1">Informatics / ICT</div>
            <span>Microcontrollers, IoT sensor telemetry, edge computing logic, and web interface design.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-stone-100">
            <div className="font-bold text-stone-800 mb-1">Natural Science (IPA)</div>
            <span>Solar photovoltaic energy conversion, hydroponic nutrients, and adolescent caloric needs.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-stone-100">
            <div className="font-bold text-stone-800 mb-1">Economics / Social Studies</div>
            <span>Market survey analysis, price elasticity for students, and break-even SWOT forecasting.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
