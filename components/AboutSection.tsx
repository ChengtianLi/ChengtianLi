import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const isJP = language === Language.JP;

  return (
    <div className="w-full pt-12">
      {/* Content Area */}
      <div className="pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl"
        >
          {/* Intro */}
          <section className="mb-20">
            <p className="text-gray-600 leading-relaxed text-lg mb-6 whitespace-pre-line">
              {isJP 
                ? "Chiaは、私たちの世界を構成するデータの中に潜む物語や感情を明らかにします。デザイナーとして、彼女はインタラクティブなオブジェクトを制作し、ワークショップを支援するツールをデザインしています。どちらのアプローチも、発見、解釈、省察を促す遊び心のある体験を生み出します。研究者としては、抽象的な情報がいかにして視覚的・物理的なデザインを通じてより広い層に響く形で伝えられるかを探求し、人々を能動的な参加者として巻き込みながら協働しています。"
                : "Chia uncovers the stories and emotions within the data that makes up our world. As a designer, she creates interactive objects and designs tools that scaffold workshops. Both approaches create playful experiences that invite discovery, interpretation, and reflection. As a researcher, she investigates how abstract information can be communicated through visual and physical designs that resonate with wider audiences, working collaboratively with people as active participants."
              }
            </p>
            <div className="w-20 h-1 bg-theme-yellow mb-6"></div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
            
            {/* Education */}
            <section>
              <h3 className="text-sm font-bold uppercase text-gray-400 tracking-widest mb-8 border-b border-gray-100 pb-2 inline-block">
                {isJP ? "学歴" : "Education"}
              </h3>
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                  <span className="text-gray-400 text-sm pt-1 font-medium">2022/04 – 2026/03</span>
                  <div>
                    <h4 className="font-normal text-xl text-black">
                      {isJP ? "東京科学大学" : "Institute of Science Tokyo"}
                    </h4>
                    <p className="text-gray-600 font-normal mt-2 leading-relaxed">
                      {isJP 
                        ? "博士課程 — 環境・社会理工学院 融合理工学系 野原研究室" 
                        : "Ph.D — School of Environment and Society, Global Engineering for Development, Environment and Society, Nohara Lab"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                  <span className="text-gray-400 text-sm pt-1 font-medium">2019/09 – 2021/07</span>
                  <div>
                    <h4 className="font-normal text-xl text-black">
                      {isJP ? "デルフト工科大学" : "Delft Institute of Technology"}
                    </h4>
                    <p className="text-gray-600 font-normal mt-2 leading-relaxed">
                      {isJP 
                        ? "修士 — インダストリアルデザインエンジニアリング学部 デザイン・フォー・インタラクション" 
                        : "Master — Industrial Design Engineering, Design for Interaction"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                  <span className="text-gray-400 text-sm pt-1 font-medium">2017/09 – 2018/03</span>
                  <div>
                    <h4 className="font-normal text-xl text-black">
                      {isJP ? "銘伝大学" : "Ming Chuan University"}
                    </h4>
                    <p className="text-gray-600 font-normal mt-2 leading-relaxed">
                      {isJP 
                        ? "交換留学 — デザイン学部 プロダクトデザイン学科" 
                        : "Exchange Student — School of Design, Department of Product Design"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                  <span className="text-gray-400 text-sm pt-1 font-medium">2015/09 – 2019/08</span>
                  <div>
                    <h4 className="font-normal text-xl text-black">
                      {isJP ? "ハルビン工程大学" : "Harbin Engineering University"}
                    </h4>
                    <p className="text-gray-600 font-normal mt-2 leading-relaxed">
                      {isJP 
                        ? "学士 — 機電工程学院 インダストリアルデザイン" 
                        : "Bachelor — Industrial Design, School of Mechanical and Electrical Engineering"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-sm font-bold uppercase text-gray-400 tracking-widest mb-8 border-b border-gray-100 pb-2 inline-block">
                {isJP ? "言語" : "Languages"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 border border-gray-100">
                      <h4 className="font-normal text-lg mb-1">{isJP ? "中国語" : "Chinese"}</h4>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{isJP ? "母語" : "Native"}</p>
                  </div>
                  <div className="bg-gray-50 p-6 border border-gray-100">
                      <h4 className="font-normal text-lg mb-1">{isJP ? "英語" : "English"}</h4>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{isJP ? "ビジネスレベル" : "Business Level"}</p>
                  </div>
                  <div className="bg-gray-50 p-6 border border-gray-100">
                      <h4 className="font-normal text-lg mb-1">{isJP ? "日本語" : "Japanese"}</h4>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{isJP ? "ビジネスレベル" : "Business Level"}</p>
                  </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;