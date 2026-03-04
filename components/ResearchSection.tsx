import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, ExternalLink } from 'lucide-react';
import { RESEARCH_NAV, Language } from '../types';

interface ResearchSectionProps {
  language: Language;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState(RESEARCH_NAV[0].id);
  const isJP = language === Language.JP;

  const scholarships = [
    {
      title: "Program for Development of Next-Generation Front-Runners with Comprehensive Knowledge and Humanity",
      titleJP: "知と地を創造する次世代フロントランナー養成プログラム",
      year: "2024-2025",
      link: "https://www.spring-boost.i.isct.ac.jp/en/"
    },
    {
      title: "Advanced Human Resource Development Fellowship",
      titleJP: "高度人材育成フェローシップ",
      year: "2023-2024",
      link: "https://www.fellowship.gakumu.titech.ac.jp/en/about/"
    },
    {
      title: "Chinese National Scholarship for Undergraduate Students",
      titleJP: "中国国家奨学金（学部生向け）",
      year: "2016-2018",
      link: null
    }
  ];

  const experiences = [
    {
      role: "Research Assistant",
      roleJP: "リサーチアシスタント",
      organization: "Hybrid Innovation Program",
      organizationJP: "ハイブリッドイノベーションプログラム",
      date: "Sep 2022 - Dec 2023; Aug 2025 - Current",
      description: "Contributed to the development and facilitation of creative thinking workshop tools and supported cross-institutional design research activities.",
      descriptionJP: "創造的思考ワークショップツールの開発とファシリテーションに貢献し、組織横断的なデザインリサーチ活動を支援。",
      link: "https://www.tse.ens.titech.ac.jp/~deepmode/csm/about/"
    },
    {
      role: "Teaching Assistant",
      roleJP: "ティーチングアシスタント",
      organization: "Data Science for Transdisciplinary Research",
      organizationJP: "超学際研究のためのデータサイエンス",
      date: "Sep 2024 - Dec 2024",
      description: "Designed and facilitated a workshop introducing data physicalization for creative data visualization and interpretation; coordinated communication and provided learning support for students.",
      descriptionJP: "創造的なデータ可視化と解釈のためのデータフィジカライゼーションを紹介するワークショップを設計・実施。学生への連絡調整と学習支援を提供。",
      link: "https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362700-0-0/202532432?hl=en"
    },
    {
      role: "Teaching Assistant",
      roleJP: "ティーチングアシスタント",
      organization: "Concept Design Course",
      organizationJP: "コンセプトデザイン論",
      date: "Aug 2022; Aug 2023",
      description: "Assisted in course facilitation and mentored design projects for students from engineering and arts disciplines.",
      descriptionJP: "コースのファシリテーションを支援し、工学系および芸術系の学生のデザインプロジェクトを指導。",
      link: "https://www.titech.ac.jp/english/public-relations/education/stories/concept-designing"
    }
  ];

  const getTagStyle = (tag: string) => {
    // Using theme colors for tags
    const lower = tag.toLowerCase();
    if (lower.includes('press')) {
      return "bg-theme-purple/30 text-indigo-900 border-theme-purple";
    }
    if (lower.includes('presentation')) {
      return "bg-theme-yellow/50 text-amber-900 border-theme-yellow";
    }
    return "bg-gray-100 text-gray-600 border-gray-200";
  };

  const renderPublicationCard = (
    title: string, 
    authors: string, 
    venue: string, 
    year: string, 
    link?: string | null,
    tags: string[] = []
  ) => (
    <div 
      onClick={() => link && window.open(link, '_blank')}
      className={`bg-white p-6 rounded-none border-l-2 border-gray-100 transition-all duration-300 group hover:border-theme-yellow ${
        link ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
             <span className="text-gray-400 italic text-lg">{year}</span>
             {tags.map((tag, i) => (
               <span key={i} className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTagStyle(tag)}`}>
                 {tag}
               </span>
             ))}
          </div>
          <h4 className={`text-xl font-medium mb-2 text-black leading-snug group-hover:text-amber-700 transition-colors`}>
            {title}
          </h4>
          <p className="text-gray-600 text-sm mb-1 leading-relaxed">
            {authors}
          </p>
          <span className="text-gray-500 text-xs uppercase tracking-wider">{venue}</span>
        </div>
        {link ? (
          <ExternalLink className="text-gray-300 w-5 h-5 flex-shrink-0 ml-4 group-hover:text-amber-700 transition-colors" />
        ) : (
           <FileText className="text-gray-300 w-5 h-5 flex-shrink-0 ml-4" />
        )}
      </div>
    </div>
  );

  const researchInterests = [
    { en: "Data Physicalization", jp: "データフィジカライゼーション" },
    { en: "Data Visualization", jp: "データ可視化" },
    { en: "Participatory Design", jp: "参加型デザイン" },
    { en: "Science Communication", jp: "サイエンスコミュニケーション" },
    { en: "Semiotics", jp: "記号論" }
  ];

  return (
    <div className="w-full pt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] lg:grid-cols-[200px_1fr] gap-x-8 lg:gap-x-12">
          
          {/* 1. Research Interests Label */}
          <div className="md:pt-2 mb-4 md:mb-0">
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {isJP ? "研究関心" : "Research Interests"}
             </h3>
          </div>

          {/* 2. Research Interests Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 md:mb-0"
          >
             <div className="flex flex-wrap gap-3">
              {researchInterests.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-theme-yellow text-amber-900 text-xs font-medium uppercase tracking-wide rounded-sm cursor-default">
                  {isJP ? tag.jp : tag.en}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Divider Row: Separates Interests from Nav/Content */}
          <div className="col-span-1 md:col-span-2 h-px bg-gray-200 w-full mt-12 mb-12" />

          {/* 3. Navigation (Sticky on desktop) */}
          <div className="md:sticky md:top-24 md:self-start mb-8 md:mb-0">
             <nav className="flex md:flex-col gap-8 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide border-b md:border-b-0 border-gray-100 md:border-none">
                {RESEARCH_NAV.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`group relative text-left text-sm tracking-widest uppercase py-1 transition-colors flex-shrink-0
                      ${activeTab === item.id ? 'text-black font-bold' : 'text-gray-400 hover:text-gray-600'}
                    `}
                  >
                    <span className="relative inline-block">
                      {isJP && item.labelJP ? item.labelJP : item.label}
                      
                      {/* Desktop Active Indicator - Line through middle */}
                      {activeTab === item.id && (
                          <motion.div 
                            layoutId="nav-line-desktop"
                            className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-theme-yellow -translate-y-1/2 mix-blend-multiply pointer-events-none" 
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                      )}
                    </span>

                    {/* Mobile Active Indicator - Bottom Line */}
                    {activeTab === item.id && (
                      <motion.div 
                        layoutId="nav-indicator-mobile"
                        className="md:hidden absolute bottom-0 left-0 right-0 h-0.5 bg-theme-yellow -mb-4"
                      />
                    )}
                  </button>
                ))}
             </nav>
          </div>

          {/* 4. Content Area */}
          <div className="min-w-0">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Publications Content */}
              {activeTab === 'publications' && (
                <div className="space-y-12">
                  
                  {/* Category 1 */}
                  <section>
                      <h3 className="text-lg font-normal italic text-gray-400 mb-8 border-b border-gray-100 pb-2 inline-block">
                        {isJP ? "査読付き論文誌" : "Refereed Journal Papers"}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                          {renderPublicationCard(
                              "Exploring the creation of data objects for personal data engagement through crochet activities",
                              "Chengtian Li, Betti Marenko, & Kayoko Nohara",
                              "The Design Journal (Accepted Dec. 2025)",
                              "2026",
                              null,
                              ["In Press"]
                          )}
                      </div>
                  </section>

                  {/* Category 2 */}
                  <section>
                      <h3 className="text-lg font-normal italic text-gray-400 mb-8 border-b border-gray-100 pb-2 inline-block">
                        {isJP ? "査読付き国際会議論文" : "Refereed Conference Papers"}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                          {renderPublicationCard(
                              "Crafting the unspoken: Engaging Japanese older adults with data physicalization workshops",
                              "Chengtian Li, Jianrui Zhao, Kayoko Nohara, & Chihiro Sato",
                              "Proceedings of the 2025 ACM Designing Interactive Systems Conference (pp. 2062–2074)",
                              "2025",
                              "https://doi.org/10.1145/3715336.3735721",
                              ["Oral Presentation"]
                          )}
                          {renderPublicationCard(
                              "Exploring data physicalization for environmental engagement: A case study on the disposal of contact lens blisters",
                              "Chengtian Li, Daichi Tezuka, Xinru Zhu, Salani Giorgio, & Kayoko Nohara",
                              "Nordes 2025: Relational Design (Oslo, Norway, 6–8 Aug. 2025)",
                              "2025",
                              "https://doi.org/10.21606/nordes.2025.59",
                              ["Poster Presentation"]
                          )}
                          {renderPublicationCard(
                              "Crafting playful data engagement: Designing textile-based workshops for participants from diverse backgrounds",
                              "Chengtian Li, Jianrui Zhao, Xinru Zhu, Chihiro Sato, & Kayoko Nohara",
                              "IASDR 2025 (Accepted Dec. 2025)",
                              "2026",
                              null,
                              ["In Press", "Oral Presentation"]
                          )}
                      </div>
                  </section>

                  {/* Category 3 */}
                   <section>
                      <h3 className="text-lg font-normal italic text-gray-400 mb-8 border-b border-gray-100 pb-2 inline-block">
                        {isJP ? "その他の発表" : "Other Presentations"}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                           {renderPublicationCard(
                              "Physicalizing Operant Resources through Seasonal Crafting within a Suburban Japanese Danchi Community",
                              "Jianrui Zhao, Chengtian Li, Chihiro Sato",
                              "Society for Serviceology",
                              "2025",
                              "https://pub.confit.atlas.jp/ja/event/sfs13/presentation/2-D-4-03",
                              ["Oral Presentation"]
                          )}
                      </div>
                  </section>

                </div>
              )}

              {/* Work Experience Content */}
              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <div 
                      key={i} 
                      onClick={() => exp.link && window.open(exp.link, '_blank')}
                      className={`bg-white p-8 border border-gray-100 hover:border-theme-yellow hover:shadow-sm transition-all duration-300 group ${
                        exp.link ? 'cursor-pointer' : ''
                      }`}
                    >
                       <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1">
                             <div className="flex items-center gap-4 mb-2">
                                <h3 className={`text-xl font-medium text-black group-hover:text-amber-700 transition-colors`}>
                                    {isJP && exp.organizationJP ? exp.organizationJP : exp.organization}
                                </h3>
                                <span className="bg-theme-yellow/30 text-amber-900 px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider">{exp.date}</span>
                             </div>
                             <p className="text-lg font-normal text-gray-500 mb-4 italic">
                                {isJP && exp.roleJP ? exp.roleJP : exp.role}
                             </p>
                             <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                                {isJP && exp.descriptionJP ? exp.descriptionJP : exp.description}
                             </p>
                          </div>
                          {exp.link && (
                            <div className="mt-4 md:mt-0">
                               <ExternalLink className="text-gray-300 w-5 h-5 group-hover:text-amber-700 transition-colors" />
                            </div>
                          )}
                       </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Scholarships Content */}
              {activeTab === 'scholarships' && (
                <div className="grid grid-cols-1 gap-4">
                  {scholarships.map((item, index) => (
                    <div 
                      key={index}
                      onClick={() => item.link && window.open(item.link, '_blank')}
                      className={`bg-white p-6 rounded-none border-l-2 border-gray-100 transition-all duration-300 group hover:border-theme-yellow ${
                        item.link ? 'cursor-pointer' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                           <div className="flex items-center gap-3 mb-3 flex-wrap">
                               <span className="text-gray-400 italic text-lg">{item.year}</span>
                            </div>
                          <h3 className={`text-xl font-medium mb-2 text-black leading-snug group-hover:text-amber-700 transition-colors`}>
                            {isJP && item.titleJP ? item.titleJP : item.title}
                          </h3>
                        </div>
                        {item.link ? (
                          <ExternalLink className="text-gray-300 w-5 h-5 flex-shrink-0 ml-4 group-hover:text-amber-700 transition-colors" />
                        ) : (
                           <Award className="text-gray-300 w-5 h-5 flex-shrink-0 ml-4" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default ResearchSection;