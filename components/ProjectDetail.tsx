import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface Project {
  id: number;
  title: string;
  titleJP?: string;
  category: string;
  categoryJP?: string;
  year: string;
  image: string;
  description: string;
  descriptionJP?: string;
  aspect: string;
  bannerImage?: string;
  longDescription?: string;
  longDescriptionJP?: string;
  shortIntro?: string;
  shortIntroJP?: string;
  type?: string;
  typeJP?: string;
  mapping?: string;
  mappingJP?: string;
  duration?: string;
  durationJP?: string;
  dataStrip?: { value: string; label: string; valueJP?: string; labelJP?: string }[];
  concept?: { headline: string; headlineJP?: string; body: string[]; bodyJP?: string[]; quote?: string; quoteJP?: string };
  designDimensions?: { intro: string; introJP?: string; items: { title: string; titleJP?: string; body: string; bodyJP?: string }[] };
  galleryCaptions?: string[];
  galleryImages?: string[];
  video?: string;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  language: Language;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, language }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const isJP = language === Language.JP;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-24 left-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-black" />
      </button>

      {/* Banner Image */}
      <div className="w-[100vw] h-[520px] relative left-1/2 -translate-x-1/2 overflow-hidden group">
        <img
          src={project.bannerImage || project.image}
          alt={project.title}
          className="w-full h-full object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Header Section */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 mt-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-[#111] mb-6"
        >
          {isJP && project.titleJP ? project.titleJP : project.title}
        </motion.h1>

        {(isJP ? project.shortIntroJP || project.shortIntro : project.shortIntro) && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-[#333] leading-relaxed font-normal max-w-[800px]"
          >
            {isJP && project.shortIntroJP ? project.shortIntroJP : project.shortIntro}
          </motion.p>
        )}

        <div className="w-full h-px bg-gray-200 my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-x-12 gap-y-4"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1">
              {isJP ? "年" : "Year"}
            </span>
            <span className="text-sm font-medium">{project.year}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1">
              {isJP ? "タイプ" : "Type"}
            </span>
            <span className="text-sm font-medium">
              {isJP && project.typeJP ? project.typeJP : (project.type || (isJP && project.categoryJP ? project.categoryJP : project.category))}
            </span>
          </div>
          {project.mapping && (
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1">
                {isJP ? "マッピング" : "Mapping"}
              </span>
              <span className="text-sm font-medium">
                {isJP && project.mappingJP ? project.mappingJP : project.mapping}
              </span>
            </div>
          )}
          {project.duration && (
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1">
                {isJP ? "期間" : "Duration"}
              </span>
              <span className="text-sm font-medium">
                {isJP && project.durationJP ? project.durationJP : project.duration}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Main Content Column */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">

        {/* Data Strip */}
        {project.dataStrip && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-[3.5rem] mb-[3.5rem] border border-gray-200 rounded-[4px] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200"
          >
            {project.dataStrip.map((item, index) => (
              <div key={index} className="py-10 px-6 flex flex-col items-center justify-center text-center h-full">
                <span className="text-xl md:text-2xl lg:text-3xl leading-tight text-[#111] font-normal">
                  {isJP && item.valueJP ? item.valueJP : item.value}
                </span>
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-gray-400 leading-relaxed mt-3 whitespace-pre-line">
                  {isJP && item.labelJP ? item.labelJP : item.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Concept Section */}
        {project.concept && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {isJP ? "コンセプト" : "Concept"}
              </span>
              <div className="h-px bg-gray-200 flex-grow" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-normal leading-tight text-[#111] whitespace-pre-line mb-8">
                  {isJP && project.concept.headlineJP ? project.concept.headlineJP : project.concept.headline}
                </h2>
                {(isJP ? project.concept.quoteJP || project.concept.quote : project.concept.quote) && (
                  <blockquote className="border-l-2 border-gray-900 pl-6 py-2 text-xl text-gray-600 font-serif italic leading-relaxed">
                    "{isJP && project.concept.quoteJP ? project.concept.quoteJP : project.concept.quote}"
                  </blockquote>
                )}
              </div>
              <div className="lg:col-span-7 space-y-6">
                {(isJP && project.concept.bodyJP ? project.concept.bodyJP : project.concept.body).map((paragraph, i) => (
                  <p key={i} className="text-lg text-[#555] leading-[1.85]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Design Dimensions Section */}
        {project.designDimensions && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {isJP ? "デザイン" : "Design"}
              </span>
              <div className="h-px bg-gray-200 flex-grow" />
            </div>
            <p className="text-xl text-[#333] leading-relaxed mb-12 max-w-3xl">
              {isJP && project.designDimensions.introJP ? project.designDimensions.introJP : project.designDimensions.intro}
            </p>
            <div className="relative ml-2">
              <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gray-200" />
              <div className="space-y-12">
                {project.designDimensions.items.map((item, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border border-gray-300 bg-white z-10" />
                    <span className="absolute left-6 top-1.5 text-xs font-bold text-gray-300">
                      0{i + 1}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-1">
                      <div className="md:col-span-3">
                        <h3 className="text-lg font-medium text-[#111]">
                          {isJP && item.titleJP ? item.titleJP : item.title}
                        </h3>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-base text-[#555] leading-relaxed">
                          {isJP && item.bodyJP ? item.bodyJP : item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Default Description Fallback (if no specific sections) */}
        {!project.concept && !project.designDimensions && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-[#555] leading-[1.85] whitespace-pre-line">
              {isJP && project.longDescriptionJP ? project.longDescriptionJP : (project.longDescription || (isJP && project.descriptionJP ? project.descriptionJP : project.description))}
            </p>
          </motion.div>
        )}

        {/* Documentation / Gallery Section */}
        {(project.galleryImages && project.galleryImages.length > 0) || project.video ? (
          <div className="mb-24 relative group">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {isJP ? "ドキュメンテーション" : "Documentation"}
              </span>
              <div className="h-px bg-gray-200 flex-grow" />
            </div>

            {project.video ? (
              <div className="w-full bg-gray-50 aspect-video rounded-sm overflow-hidden relative">
                <iframe
                  src={project.video}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title={project.title}
                ></iframe>
              </div>
            ) : (
              <>

                {/* Scroll Controls */}
                <div className="absolute top-[60%] -translate-y-1/2 left-4 z-10 pointer-events-none">
                  {showLeftScroll && (
                    <button
                      onClick={() => scroll('left')}
                      className="pointer-events-auto p-3 bg-white/90 backdrop-blur shadow-lg rounded-full hover:bg-white transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}
                </div>
                <div className="absolute top-[60%] -translate-y-1/2 right-4 z-10 pointer-events-none">
                  {showRightScroll && (
                    <button
                      onClick={() => scroll('right')}
                      className="pointer-events-auto p-3 bg-white/90 backdrop-blur shadow-lg rounded-full hover:bg-white transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </div>

                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x items-start"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {project.galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex-none snap-center"
                    >
                      <div className="mb-4 bg-gray-50">
                        <img
                          src={img}
                          alt={`Gallery ${index + 1}`}
                          className="h-[60vh] w-auto max-w-[90vw] object-contain"
                        />
                      </div>
                      {project.galleryCaptions && project.galleryCaptions[index] && (
                        <p className="text-sm text-gray-500 italic text-center max-w-[60vh]">
                          {project.galleryCaptions[index]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDetail;
