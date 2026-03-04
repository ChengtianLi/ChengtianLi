import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectDetail from './ProjectDetail';
import { Language } from '../types';

interface DesignSectionProps {
  language: Language;
  selectedProject: any;
  setSelectedProject: (project: any) => void;
}

const projects = [
  {
    id: 0,
    title: "The Price of Daily Behavior",
    titleJP: "日常行動の代償",
    category: "Interactive Installation",
    categoryJP: "インタラクティブ・インスタレーション",
    year: "2023",
    image: "/Balance/Image/balanceimage.JPG",
    bannerImage: "/Balance/BannerImage/balancebannerimages.jpg",
    description: "Transforming consumption data into physical weight.",
    descriptionJP: "消費データを物理的な重さに変換する。",
    shortIntro: "A balance scale that makes the invisible weight of everyday plastic waste tangible — turning routine disposal into a shared, evolving act of collective environmental care.",
    shortIntroJP: "日常のプラスチック廃棄物の目に見えない重さを具体化する天秤ばかり。日常的な廃棄を、集団的な環境への配慮という共有された進化する行為へと変えます。",
    longDescription: "In an era where digital transactions are seamless and often invisible, the tangible impact of our consumption habits is easily forgotten. 'The Price of Daily Behavior' is an interactive installation that translates personal spending data into physical weight.\n\nUsing a custom-built receipt printer and a system of weighted objects, the installation visualizes the 'heaviness' of daily choices. Each transaction adds a specific weight to a suspended balance, creating a visceral representation of financial accumulation and its burden.",
    longDescriptionJP: "デジタル取引がシームレスで目に見えない時代において、私たちの消費習慣がもたらす具体的な影響は忘れられがちです。「日常行動の代償」は、個人の支出データを物理的な重さに変換するインタラクティブなインスタレーションです。\n\n特注のレシートプリンターと重りのシステムを使用し、日々の選択の「重さ」を可視化します。各取引は吊り下げられた天秤に特定の重さを加え、経済的な蓄積とその負担を直感的に表現します。",
    aspect: "aspect-[16/9]",
    type: "Interactive Installation",
    typeJP: "インタラクティブ・インスタレーション",
    mapping: "Behavior to Weight",
    mappingJP: "行動から重さへ",
    duration: "3 Months",
    durationJP: "3ヶ月",
    dataStrip: [
      { value: "700+", label: "blisters per\nperson / year", labelJP: "1人あたりの\n年間ブリスター数" },
      { value: "1 g", label: "weight of each\nplastic blister", labelJP: "プラスチック\nブリスター1個の重さ" },
      { value: "0.8 g", label: "weight of\naluminum seal", labelJP: "アルミシールの重さ" },
      { value: "3 mo.", label: "accumulation\nperiod visualized", labelJP: "可視化された\n蓄積期間" }
    ],
    concept: {
      headline: "When small acts\ntip the scales",
      headlineJP: "小さな行為が\n天秤を傾けるとき",
      body: [
        "Every day, contact lens users generate a quiet stream of plastic and aluminum waste — blisters so small and so routine that they rarely register as significant. Yet a single person discards over 700 of them a year.",
        "The Price of Daily Behavior makes that accumulation tangible. A balance scale holds marine creatures — jellyfish and fish — handcrafted from discarded blisters and wire. On the other side, the unpeeled, unsorted blisters visitors bring from their own routines.",
        "As participants peel the aluminum seals and place them on the scale, they watch in real time as their individual act shifts the equilibrium — turning an abstract environmental burden into something felt, seen, and collectively moved."
      ],
      bodyJP: [
        "毎日、コンタクトレンズユーザーはプラスチックとアルミニウムの廃棄物を静かに生み出しています。ブリスターは非常に小さく日常的であるため、重要だと認識されることはほとんどありません。しかし、たった一人で年間700個以上を廃棄しています。",
        "「日常行動の代償」はその蓄積を具体化します。天秤の一方には、廃棄されたブリスターとワイヤーで作られた海洋生物（クラゲや魚）が乗っています。もう一方には、来場者が自分の日常から持ち寄った、未開封で未分別のブリスターが乗せられます。",
        "参加者がアルミシールを剥がして天秤に乗せると、個人の行為が平衡を崩す様子をリアルタイムで目の当たりにします。抽象的な環境負荷が、感じられ、見え、集団で動かされるものへと変わるのです。"
      ]
    },
    designDimensions: {
      intro: "The installation was developed across four interlocking dimensions — each reinforcing how data, material, interaction, and context come together.",
      introJP: "このインスタレーションは、データ、素材、インタラクション、コンテキストがどのように組み合わさるかを強化する4つの連動した次元にわたって開発されました。",
      items: [
        { title: "Data", titleJP: "データ", body: "Grounded in three months of unpeeled blisters at five days per week. Each blister ~1 g plastic + ~0.8 g aluminum — calibrated so the scale tips noticeably once enough accumulate.", bodyJP: "週5日、3ヶ月分の未開封ブリスターに基づいています。各ブリスターは約1gのプラスチックと約0.8gのアルミニウムで、十分な量が蓄積すると天秤が著しく傾くように調整されています。" },
        { title: "Physicalization", titleJP: "フィジカライゼーション", body: "Jellyfish and fish sculptures crafted from wire and discarded blisters populate both sides — marine creatures endangered by the very material participants hold.", bodyJP: "ワイヤーと廃棄されたブリスターで作られたクラゲや魚の彫刻が両側に配置されています。これらは、参加者が手にしている素材そのものによって危険にさらされている海洋生物です。" },
        { title: "Interaction", titleJP: "インタラクション", body: "Each blister is attached to a wire loop. Visitors peel the aluminum seal themselves. The weight visibly shifts — making collective small-scale action noticeable.", bodyJP: "各ブリスターはワイヤーループに取り付けられています。来場者は自分でアルミシールを剥がします。重さが目に見えて移動し、集団的な小規模な行動を認識させます。" },
        { title: "Implementation", titleJP: "実装", body: "Over two days of exhibition, as visitors peeled and contributed, the sorted side grew heavier in real time — a live, accumulating record of communal effort.", bodyJP: "2日間の展示期間中、来場者が剥がして貢献するにつれて、分別された側がリアルタイムで重くなっていきました。これは共同の努力の生きた蓄積記録です。" }
      ]
    },

    galleryImages: [
      "/Balance/GalleryImages/galleryImages.jpg",
      "/Balance/GalleryImages/galleryImages2.JPG",
      "/Balance/GalleryImages/galleryImages3.JPG"
    ]
  },
  {
    id: 1,
    title: "A Shameful Snack",
    titleJP: "恥ずべきスナック",
    category: "Experiential Design",
    categoryJP: "体験デザイン",
    year: "2021",
    image: "/Emotion Snack/Main/MainImage.png",
    bannerImage: "/Emotion Snack/Banner/banner.jpg",
    description: "Transforming emotion into eating experience.",
    descriptionJP: "感情を食べる体験に変える。",
    shortIntro: "A layered edible experience that transforms private confessions into visible, physical form — using shame as both subject and design material.",
    shortIntroJP: "個人の告白を目に見える物理的な形に変える、層状の食用体験。恥を主題およびデザイン素材として使用します。",
    longDescription: "Shame is often hidden, swallowed, or ignored. 'A Shameful Snack' invites participants to physically consume representations of shame, turning a negative emotion into a shared, nourishment experience. By externalizing internal feelings into edible forms, the project challenges the isolation of shame and proposes a communal digestion of our vulnerabilities.",
    longDescriptionJP: "恥はしばしば隠され、飲み込まれ、あるいは無視されます。「恥ずべきスナック」は、参加者に恥の表現を物理的に消費させ、否定的な感情を共有された栄養体験へと変えるよう促します。内面の感情を食用可能な形に外在化することで、このプロジェクトは恥の孤立に挑戦し、私たちの脆弱性の共同消化を提案します。",
    aspect: "aspect-[4/3]",
    type: "Experiential Design",
    typeJP: "体験デザイン",
    mapping: "Emotion Anatomy to Bowl Composition",
    mappingJP: "感情の解剖学からボウルの構成へ",
    duration: "1 Day",
    durationJP: "1日",
    dataStrip: [
      { value: "Shame", valueJP: "恥", label: "emotion studied", labelJP: "研究された感情" },
      { value: "Personal Anecdotes", valueJP: "個人的な逸話", label: "data source", labelJP: "データソース" },
      { value: "6 Questions", valueJP: "6つの質問", label: "shame trigger", labelJP: "恥のトリガー" },
      { value: "Yogurt Bowl", valueJP: "ヨーグルトボウル", label: "physical output", labelJP: "物理的出力" }
    ],
    concept: {
      headline: "Deconstructing shame,\none layer at a time",
      headlineJP: "恥を一層ずつ\n解体する",
      body: [
        "This project began by dissecting shame. We studied its causes, catalysts, and physical responses through personal anecdotes and emotion research. From this deconstruction, we identified the specific triggers that reliably provoke the feeling.",
        "Each trigger was then translated into a taboo question. A live bartender asks the participant six questions in sequence. For every 'yes' answer, a topping is added to a yogurt bowl, making the participant's personal shame profile accumulate in plain sight.",
        "The participant can lie to avoid a topping. But in doing so, they have lied out of shame, and the emotion is still triggered. Either way, the bowl reflects who you are. At the end, you eat it."
      ],
      bodyJP: [
        "このプロジェクトは、恥を解剖することから始まりました。個人的な逸話や感情研究を通じて、その原因、触媒、身体的反応を研究しました。この解体から、確実にその感情を引き起こす特定のトリガーを特定しました。",
        "各トリガーはタブーな質問に変換されました。ライブバーテンダーが参加者に6つの質問を順番に尋ねます。「はい」と答えるごとに、ヨーグルトボウルにトッピングが追加され、参加者の個人的な恥のプロフィールが目の前で蓄積されていきます。",
        "参加者はトッピングを避けるために嘘をつくことができます。しかしそうすることで、彼らは恥から嘘をついたことになり、感情は依然として引き起こされます。いずれにせよ、ボウルはあなたが誰であるかを反映しています。最後に、あなたはそれを食べます。"
      ],
      quote: "I really don't want to eat that — that is all my regret in one cup.",
      quoteJP: "本当に食べたくない——それはカップ一杯の私の後悔そのものだ。"
    },
    designDimensions: {
      intro: "The design followed a process of emotional deconstruction — from understanding shame as a concept, to translating its triggers into a physical, edible experience.",
      introJP: "デザインは、恥を概念として理解することから、そのトリガーを物理的で食用可能な体験に変換することまで、感情的な解体のプロセスに従いました。",
      items: [
        { title: "Data", titleJP: "データ", body: "We first mapped the anatomy of shame through personal anecdotes and group analysis, identifying its causes, catalysts, and physical responses. This gave us the raw data: the specific conditions that reliably trigger the feeling.", bodyJP: "まず、個人的な逸話やグループ分析を通じて恥の解剖学をマッピングし、その原因、触媒、身体的反応を特定しました。これにより、感情を確実に引き起こす特定の条件という生データが得られました。" },
        { title: "Physicalization", titleJP: "フィジカライゼーション", body: "A yogurt bowl was chosen as the physical form. Each topping maps to one shame trigger, so the bowl's composition reflects the participant's shame profile. A transparent container keeps every layer visible, directly counteracting shame's instinct to conceal.", bodyJP: "物理的な形態としてヨーグルトボウルが選ばれました。各トッピングは1つの恥のトリガーに対応しており、ボウルの構成は参加者の恥のプロフィールを反映しています。透明な容器はすべての層を見えるようにし、恥の隠そうとする本能に直接対抗します。" },
        { title: "Interaction", titleJP: "インタラクション", body: "A live bartender in server attire asks six questions in sequence, each probing a taboo scenario. A \"yes\" adds the topping; a lie avoids it but still enacts shame. The final question asks whether all answers were truthful, ensuring the emotion is triggered regardless of how the participant responded.", bodyJP: "サーバーの服装をしたライブバーテンダーが、タブーなシナリオを探る6つの質問を順番に尋ねます。「はい」でトッピングが追加されます。嘘をつけば回避できますが、それでも恥を演じることになります。最後の質問は、すべての回答が真実であったかどうかを尋ね、参加者がどのように答えたかに関わらず感情が引き起こされることを保証します。" },
        { title: "Implementation", titleJP: "実装", body: "The six questions covered a deliberate range of shame registers: cheating on a partner, hiding damage caused to others, knowingly being racist, taking an STD test, stealing, and lying during the snack itself. Together they span intimate, moral, and social dimensions of shame.", bodyJP: "6つの質問は、パートナーへの浮気、他人に与えた損害の隠蔽、意図的な人種差別、性病検査の受診、盗み、そしてスナック中の嘘など、意図的な範囲の恥の領域をカバーしました。これらは共に、恥の親密、道徳的、社会的側面を網羅しています。" }
      ]
    },

    galleryImages: [
      "/Emotion Snack/GalleryImages/galleryimages1.jpg",
      "/Emotion Snack/GalleryImages/galleryImages2.JPG",
      "/Emotion Snack/GalleryImages/galleryImages3.jpg"
    ]
  },
  {
    id: 2,
    title: "The Collective Sigh",
    titleJP: "集団のため息",
    category: "Interactive Installation",
    categoryJP: "インタラクティブ・インスタレーション",
    year: "2023",
    image: "/collectivesigh/main/main.jpg",
    bannerImage: "/collectivesigh/banner/banner.png",
    description: "Transforming collective sentiment into sonic resonance.",
    descriptionJP: "集団の感情を音の共鳴に変える。",
    shortIntro: "An interactive soundscape that gives physical form to the country’s emotional climate — a whispering chime that mirrors the quiet ways our inner world lives and shifts within the emotional atmosphere of our surroundings.",
    shortIntroJP: "国の感情的な気候に物理的な形を与えるインタラクティブなサウンドスケープ。私たちの内面世界が周囲の感情的な雰囲気の中でどのように生き、変化するかを映し出す、ささやくようなチャイムです。",
    longDescription: "A sigh is a universal mechanism of release, a physical resetting of the system. 'The Collective Sigh' gathers these fleeting moments of relief from participants and weaves them into an evolving soundscape. The installation explores how a solitary act of letting go can become a shared experience of resonance and empathy.",
    longDescriptionJP: "ため息は普遍的な解放のメカニズムであり、システムの物理的なリセットです。「集団のため息」は、参加者からこれらの一瞬の安らぎを集め、進化するサウンドスケープへと織り込みます。このインスタレーションは、手放すという孤独な行為が、いかにして共鳴と共感の共有体験になり得るかを探求します。",
    aspect: "aspect-[3/4]",
    type: "Interactive Installation",
    typeJP: "インタラクティブ・インスタレーション",
    mapping: "Collective Sentiment to Sonic Resonance",
    mappingJP: "集団感情から音響共鳴へ",
    duration: "2 Weeks",
    durationJP: "2週間",
    dataStrip: [
      { value: "Mood Survey", valueJP: "ムード調査", label: "Asia weekly since 2021", labelJP: "2021年からの\nアジア週間調査" },
      { value: "8 Emotions", valueJP: "8つの感情", label: "one fan each", labelJP: "各1つのファン" },
      { value: "2 Axes", valueJP: "2つの軸", label: "pleasure and arousal", labelJP: "快と覚醒" },
      { value: "Wind Strength", valueJP: "風の強さ", label: "heard as chime sound", labelJP: "チャイムの音として\n聞こえる" }
    ],
    concept: {
      headline: "The Atmosphere of the Crowd",
      headlineJP: "群衆の雰囲気",
      body: [
        "We often treat our emotions as private, internal states, yet we are constantly immersed in a collective atmosphere. Like a subtle breeze or a sudden gale, the mood of our surroundings—the combined joy, anxiety, or quiet of millions—shapes the very air we inhabit.",
        "The Collective Sigh gives physical form to this invisible influence. Eight fans, arranged according to the Russell Circumplex Model of affect, translate real-time sentiment data into a living wind field. At the center hangs a single wind bell, representing the individual.",
        "By positioning their own emotional state within this field, participants experience the delicate interplay between their inner world and the collective breath of their surroundings. The resulting chime is a physical dialogue—a tangible, resonant encounter where the \"inner weather\" of the self meets the \"outer weather\" of the world."
      ],
      bodyJP: [
        "私たちはしばしば感情を私的で内面的な状態として扱いますが、常に集団的な雰囲気に浸っています。微風や突然の強風のように、周囲のムード——何百万もの人々の喜び、不安、静けさの結合——は、私たちが住む空気そのものを形作ります。",
        "「集団のため息」はこの目に見えない影響に物理的な形を与えます。ラッセルの円環モデルに基づいて配置された8つのファンが、リアルタイムの感情データを生きた風の場に変換します。中心には、個人を表す一つの風鈴が吊るされています。",
        "この場の中に自分の感情状態を位置づけることで、参加者は自分の内面世界と周囲の集団的な呼吸との間の繊細な相互作用を体験します。結果として生じるチャイムは物理的な対話であり、自己の「内なる天気」が世界の「外なる天気」と出会う、具体的で共鳴する遭遇です。"
      ]
    },
    designDimensions: {
      intro: "The installation is defined by four core dimensions that reinforce how data, material, interaction, and context come together.",
      introJP: "このインスタレーションは、データ、素材、インタラクション、コンテキストがどのように組み合わさるかを強化する4つの主要な次元によって定義されています。",
      items: [
        { title: "Data", titleJP: "データ", body: "Japan’s weekly emotional data is processed and categorized into eight distinct states. These states are mapped onto the Circumplex Model of Affect. This psychological framework places emotions on two axes: pleasure to displeasure and arousal to calm. This mapping transforms abstract sentiment statistics into variables that control the physical environment.", bodyJP: "日本の週間感情データが処理され、8つの異なる状態に分類されます。これらの状態は感情円環モデルにマッピングされます。この心理学的枠組みは、感情を「快-不快」と「覚醒-沈静」の2つの軸上に配置します。このマッピングにより、抽象的な感情統計が物理的環境を制御する変数に変換されます。" },
        { title: "Physicalization", titleJP: "フィジカライゼーション", body: "Each emotional state is assigned to one of eight fans arranged in a circular field. The strength of each emotion in the dataset determines the wind speed of the corresponding fan. The wind in the room becomes the data made physical. A traditional Japanese wind bell sits at the center to translate these invisible air currents into visible movement and audible sound.", bodyJP: "各感情状態は、円形に配置された8つのファンの1つに割り当てられます。データセット内の各感情の強さが、対応するファンの風速を決定します。部屋の中の風は、物理化されたデータとなります。中心には伝統的な日本の風鈴があり、これらの目に見えない気流を目に見える動きと聞こえる音に変換します。" },
        { title: "Interaction", titleJP: "インタラクション", body: "Visitors use interface buttons to control the position of the wind chime on the emotional plane. By placing the chime at a coordinate that reflects their current feelings, visitors situate themselves within the country’s data. This allows them to see and hear how their personal state is influenced by the surrounding air. They experience whether their inner feelings harmonize with or are pushed by the collective mood.", bodyJP: "来場者はインターフェースボタンを使用して、感情平面上の風鈴の位置を制御します。現在の感情を反映した座標にチャイムを配置することで、来場者は国のデータの中に自分自身を位置づけます。これにより、自分の個人的な状態が周囲の空気にどのように影響されるかを見て、聞くことができます。彼らは、自分の内なる感情が集団のムードと調和するのか、それとも押されるのかを体験します。" },
        { title: "Implementation", titleJP: "実装", body: "The final experience is a real-time sonification of data through kinetic movement. As the chime rings, its frequency and sway intensity provide a record of the intersection between the visitor and the collective atmosphere. This transforms digital sentiment into a lived experience that shows how the individual exists within the invisible pressure of a society.", bodyJP: "最終的な体験は、運動によるデータのリアルタイム可聴化です。チャイムが鳴ると、その周波数と揺れの強さが、来場者と集団的な雰囲気との交差の記録を提供します。これは、デジタルな感情を、個人が社会の目に見えない圧力の中でどのように存在するかを示す生きた体験へと変えます。" }
      ]
    },

    video: "https://player.vimeo.com/video/1169277407?h=a5fbbd9c15&title=0&byline=0&portrait=0"
  }
].sort((a, b) => parseInt(b.year) - parseInt(a.year));

const ProjectCard: React.FC<{ project: typeof projects[0], isJP: boolean, onClick: () => void }> = ({ project, isJP, onClick }) => (
  <motion.div
    onClick={onClick}
    className="group cursor-pointer flex flex-col mb-16"
  >
    {/* Image Container */}
    <div className="w-full bg-gray-100 mb-6 overflow-hidden relative transition-all duration-500">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

      {/* Overlay Icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 p-2.5 rounded-full backdrop-blur-sm shadow-sm">
          <ArrowUpRight className="w-4 h-4 text-black" />
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="flex flex-col px-1">
      {/* Meta */}
      <div className="flex justify-between items-baseline border-b border-gray-200 pb-3 mb-3">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          {isJP && project.categoryJP ? project.categoryJP : project.category}
        </span>
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{project.year}</span>
      </div>

      {/* Title */}
      <h4 className="text-xl font-normal text-black mb-2 group-hover:text-amber-700 transition-colors">
        {isJP && project.titleJP ? project.titleJP : project.title}
      </h4>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed font-normal">
        {isJP && project.descriptionJP ? project.descriptionJP : project.description}
      </p>
    </div>
  </motion.div>
);

const DesignSection: React.FC<DesignSectionProps> = ({ language, selectedProject, setSelectedProject }) => {
  const isJP = language === Language.JP;

  // Split projects into two columns for masonry effect
  const leftColumn = projects.filter((_, i) => i % 2 === 0);
  const rightColumn = projects.filter((_, i) => i % 2 !== 0);

  return (
    <div className={`w-full pb-20 ${selectedProject ? '' : 'pt-8'}`}>
      {selectedProject ? (
        <ProjectDetail
          key="detail"
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
          language={language}
        />
      ) : (
        <div
          key="grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Left Column */}
          <div className="flex flex-col">
            {leftColumn.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                isJP={isJP}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightColumn.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                isJP={isJP}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignSection;