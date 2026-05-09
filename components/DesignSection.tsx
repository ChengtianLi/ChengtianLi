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
    titleJP: "日常の対価",
    category: "Interactive Installation",
    categoryJP: "インタラクティブ・インスタレーション",
    year: "2023",
    image: `${import.meta.env.BASE_URL}Balance/Image/balanceimage.JPG`,
    bannerImage: `${import.meta.env.BASE_URL}Balance/BannerImage/balancebannerimages.jpg`,
    description: "Transforming consumption data into physical weight.",
    descriptionJP: "日々の消費を、手で感じられる重さに変える。",
    shortIntro: "A balance scale that makes the invisible weight of everyday plastic waste tangible — turning routine disposal into a shared, evolving act of collective environmental care.",
    shortIntroJP: "毎日なにげなく捨てているプラスチックごみの「見えない重さ」を、天秤で体感する作品。ひとりの小さな行動が、みんなの環境意識へとつながっていく。",
    longDescription: "In an era where digital transactions are seamless and often invisible, the tangible impact of our consumption habits is easily forgotten. 'The Price of Daily Behavior' is an interactive installation that translates personal spending data into physical weight.\n\nUsing a custom-built receipt printer and a system of weighted objects, the installation visualizes the 'heaviness' of daily choices. Each transaction adds a specific weight to a suspended balance, creating a visceral representation of financial accumulation and its burden.",
    longDescriptionJP: "デジタル取引がシームレスで目に見えない時代において、私たちの消費習慣がもたらす具体的な影響は忘れられがちです。「日常行動の代償」は、個人の支出データを物理的な重さに変換するインタラクティブなインスタレーションです。\n\n特注のレシートプリンターと重りのシステムを使用し、日々の選択の「重さ」を可視化します。各取引は吊り下げられた天秤に特定の重さを加え、経済的な蓄積とその負担を直感的に表現します。",
    aspect: "aspect-[16/9]",
    type: "Interactive Installation",
    typeJP: "インタラクティブ・インスタレーション",
    mapping: "Behavior to Weight",
    mappingJP: "行動 → 重さ",
    duration: "3 Months",
    durationJP: "3ヶ月",
    dataStrip: [
      { value: "700+", label: "blisters per\nperson / year", labelJP: "一人が1年間に捨てる\nブリスターの数" },
      { value: "1 g", label: "weight of each\nplastic blister", labelJP: "ブリスター1個\n（プラスチック部分）の重さ" },
      { value: "0.8 g", label: "weight of\naluminum seal", labelJP: "アルミシール\n1枚の重さ" },
      { value: "40", valueJP: "40人", label: "visitors", labelJP: "来訪者" }
    ],
    concept: {
      headline: "When small acts\ntip the scales",
      headlineJP: "小さな行動が、\n天秤を動かすとき",
      body: [
        "Every day, contact lens users generate a quiet stream of plastic and aluminum waste — blisters so small and so routine that they rarely register as significant. Yet a single person discards over 700 of them a year.",
        "The Price of Daily Behavior makes that accumulation tangible. A balance scale holds marine creatures — jellyfish and fish — handcrafted from discarded blisters and wire. On the other side, the unpeeled, unsorted blisters visitors bring from their own routines.",
        "As participants peel the aluminum seals and place them on the scale, they watch in real time as their individual act shifts the equilibrium — turning an abstract environmental burden into something felt, seen, and collectively moved."
      ],
      bodyJP: [
        "コンタクトレンズを使っている人は、毎日少しずつプラスチックとアルミのごみを出し続けている。ブリスターはとても小さく、捨てていることすら気にならない。でも、一人が1年間に捨てる数は700個以上になる。それが何年も、何人分も積み重なれば、決して小さくないプラスチックごみの量になる。",
        "この作品は、その積み重ねを「目に見える重さ」に変えるものである。天秤の片側には、捨てられたブリスターとワイヤーで手作りしたクラゲや魚が置かれている。もう片側には、分別されないまま捨てられたブリスターが載っている。私たちがふだん何も考えずにごみ箱に入れている、そのままの姿である。",
        "来場者には、アルミシールを一枚ずつ剥がしてもらう。それはコンタクトレンズを使うとき、誰もが毎日やっている何気ない動作である。その動作を通じて、ふだん意識することのないプラスチックごみの存在に気づいてもらう。一人が剥がしただけでは、天秤はほとんど動かない。でも、2日間の展示を通じて約40人が同じ行動を重ねたとき、天秤はついに反対側へと傾いた。一人の力では見えなかった変化が、みんなの行動の積み重ねによって、はじめて目に見えるかたちになった。"
      ]
    },
    designDimensions: {
      intro: "The installation was developed across four interlocking dimensions — each reinforcing how data, material, interaction, and context come together.",
      introJP: "この作品は、4つの軸をもとに設計されている。データ・素材・体験・実施が互いにつながり、一つの作品として成り立っている。",
      items: [
        { title: "Data", titleJP: "データ", body: "Grounded in three months of unpeeled blisters at five days per week. Each blister ~1 g plastic + ~0.8 g aluminum — calibrated so the scale tips noticeably once enough accumulate.", bodyJP: "週5日×3ヶ月分のブリスターをもとにしている。プラスチック約1g、アルミ約0.8gで、ある程度溜まると天秤が目に見えて傾くよう調整した。" },
        { title: "Physicalization", titleJP: "素材と造形", body: "Jellyfish and fish sculptures crafted from wire and discarded blisters populate both sides — marine creatures endangered by the very material participants hold.", bodyJP: "クラゲや魚の造形物は、廃棄されたブリスターとワイヤーで一つひとつ手作りしたもの。来場者が手にしているのと同じ素材が、海の生きものを脅かしていることを伝えている。" },
        { title: "Interaction", titleJP: "体験のしくみ", body: "Each blister is attached to a wire loop. Visitors peel the aluminum seal themselves. The weight visibly shifts — making collective small-scale action noticeable.", bodyJP: "ブリスターはそれぞれワイヤーのループに取り付けられている。来場者はアルミシールだけを剥がす。プラスチック部分はそのままループに残る。一人分では天秤はほとんど動かない。その小さな期待と、動かない現実とのあいだに、この作品の問いがある。作品の手前には、これまでの来場者が剥がしたアルミシールが並べられている。自分一人では動かせなかった天秤が、これだけ多くの人の手を経てきたことを目にすることで、小さな行動の積み重ねを実感できる。" },
        { title: "Implementation", titleJP: "実装", body: "Over two days of exhibition, as visitors peeled and contributed, the sorted side grew heavier in real time — a live, accumulating record of communal effort.", bodyJP: "2日間の展示期間中、来場者が剥がして分別に参加するたびに、天秤の片側が少しずつ重くなっていった。参加者の行動がそのまま、リアルタイムの記録として積み上がっていく様子が見えた。" }
      ]
    },

    galleryImages: [
      `${import.meta.env.BASE_URL}Balance/GalleryImages/galleryImages.jpg`,
      `${import.meta.env.BASE_URL}Balance/GalleryImages/galleryImages2.JPG`,
      `${import.meta.env.BASE_URL}Balance/GalleryImages/galleryImages3.JPG`
    ]
  },
  {
    id: 1,
    title: "A Shameful Snack",
    titleJP: "恥の味",
    category: "Experiential Design",
    categoryJP: "体験デザイン",
    year: "2021",
    image: `${import.meta.env.BASE_URL}Emotion Snack/Main/MainImage.png`,
    bannerImage: `${import.meta.env.BASE_URL}Emotion Snack/Banner/banner.jpg`,
    description: "Transforming emotion into eating experience.",
    descriptionJP: "感情を、食の体験に変える。",
    shortIntro: "A layered edible experience that transforms private confessions into visible, physical form — using shame as both subject and design material.",
    shortIntroJP: "「恥」という感情を、食の体験を通じて伝えるエクスペリエンスデザイン。恥の構造を分解し、その仕組みをひとつのヨーグルトボウルに再構成しました。",
    longDescription: "Shame is often hidden, swallowed, or ignored. 'A Shameful Snack' invites participants to physically consume representations of shame, turning a negative emotion into a shared, nourishment experience. By externalizing internal feelings into edible forms, the project challenges the isolation of shame and proposes a communal digestion of our vulnerabilities.",
    longDescriptionJP: "恥はしばしば隠され、飲み込まれ、あるいは無視されます。「恥ずべきスナック」は、参加者に恥の表現を物理的に消費させ、否定的な感情を共有された栄養体験へと変えるよう促します。内面の感情を食用可能な形に外在化することで、このプロジェクトは恥の孤立に挑戦し、私たちの脆弱性の共同消化を提案します。",
    aspect: "aspect-[4/3]",
    type: "Experiential Design",
    typeJP: "体験デザイン",
    mapping: "Emotion Anatomy to Bowl Composition",
    mappingJP: "感情の構造からボウルの構成へ",
    duration: "1 Day",
    durationJP: "1日",
    dataStrip: [
      { value: "Shame", valueJP: "恥", label: "emotion studied", labelJP: "研究した感情" },
      { value: "Personal Anecdotes", valueJP: "個人のエピソード", label: "data source", labelJP: "データソース" },
      { value: "6 Questions", valueJP: "6つの質問", label: "shame trigger", labelJP: "恥のトリガー" },
      { value: "Yogurt Bowl", valueJP: "ヨーグルトボウル", label: "physical output", labelJP: "体験のアウトプット" }
    ],
    concept: {
      headline: "Deconstructing shame,\none layer at a time",
      headlineJP: "恥を、一層ずつほどく",
      body: [
        "This project began by dissecting shame. We studied its causes, catalysts, and physical responses through personal anecdotes and emotion research. From this deconstruction, we identified the specific triggers that reliably provoke the feeling.",
        "Each trigger was then translated into a taboo question. A live bartender asks the participant six questions in sequence. For every 'yes' answer, a topping is added to a yogurt bowl, making the participant's personal shame profile accumulate in plain sight.",
        "The participant can lie to avoid a topping. But in doing so, they have lied out of shame, and the emotion is still triggered. Either way, the bowl reflects who you are. At the end, you eat it."
      ],
      bodyJP: [
        "恥とはどんな感情なのか。何がきっかけで生まれ、どんな反応を身体に引き起こすのか。このプロジェクトでは、個人のエピソードや感情に関するリサーチを通じて恥の構造を分解し、この感情を確実に引き起こすトリガーを特定しました。その知見を、食べるという体験に変換して伝えるのがこの作品です。",
        "それぞれのトリガーは、ひとつのタブーな質問になります。バーテンダーが体験者に6つの質問を順番に投げかけ、「はい」と答えるたびに、ヨーグルトボウルにトッピングがひとつ加えられます。体験者の恥のかたちが、目の前に積み重なっていきます。",
        "トッピングを避けるために嘘をつくこともできます。けれど、そのとき体験者は恥から逃れるために嘘をついたことになり、結局「恥」は引き起こされています。どちらにしても、ボウルはあなた自身を映しています。最後に、それを食べます。"
      ],
      quote: "I really don't want to eat that — that is all my regret in one cup.",
      quoteJP: "「あれは絶対食べたくない。精一杯の後悔だ。」"
    },
    designDimensions: {
      intro: "The design followed a process of emotional deconstruction — from understanding shame as a concept, to translating its triggers into a physical, edible experience.",
      introJP: "恥という感情を理解するところから、そのトリガーを食べられる体験として伝えるまでの過程をたどっています。",
      items: [
        { title: "Data", titleJP: "データ", body: "We first mapped the anatomy of shame through personal anecdotes and group analysis, identifying its causes, catalysts, and physical responses. This gave us the raw data: the specific conditions that reliably trigger the feeling.", bodyJP: "まず、個人のエピソードやグループでの分析を通じて、恥の構造を整理しました。原因、きっかけ、身体的な反応を特定し、この感情を確実に引き起こす条件を明らかにしました。" },
        { title: "Physicalization", titleJP: "素材と造形", body: "A yogurt bowl was chosen as the physical form. Each topping maps to one shame trigger, so the bowl's composition reflects the participant's shame profile. A transparent container keeps every layer visible, directly counteracting shame's instinct to conceal.", bodyJP: "ヨーグルトボウルを恥の器として選びました。各トッピングがひとつの恥のトリガーに対応し、ボウルの構成が体験者の恥のかたちをそのまま反映します。透明な容器を使うことで、すべての層が見える状態を保ち、恥が本能的に求める「隠すこと」に正面から逆らう造形にしています。" },
        { title: "Interaction", titleJP: "体験のしくみ", body: "A live bartender in server attire asks six questions in sequence, each probing a taboo scenario. A \"yes\" adds the topping; a lie avoids it but still enacts shame. The final question asks whether all answers were truthful, ensuring the emotion is triggered regardless of how the participant responded.", bodyJP: "サーバーの服装をしたバーテンダーが、6つの質問を順番に投げかけます。それぞれがタブーな場面を問いかけるもので、「はい」と答えるとトッピングが加わり、嘘をつけばトッピングは避けられますが、恥自体は生まれています。最後の質問では、それまでの回答がすべて正直だったかを問い、どのように答えても恥が引き起こされる構造になっています。" },
        { title: "Implementation", titleJP: "実装", body: "The six questions covered a deliberate range of shame registers: cheating on a partner, hiding damage caused to others, knowingly being racist, taking an STD test, stealing, and lying during the snack itself. Together they span intimate, moral, and social dimensions of shame.", bodyJP: "6つの質問は、恥の異なる側面を意図的にカバーしています。パートナーへの不誠実、他者への損害の隠蔽、差別的な意識、性病検査、窃盗、そしてこの体験そのものでの嘘。親密さ、道徳、社会性という恥の三つの領域にまたがることで、恥という感情の広がりを体験者自身の反応を通じて伝えます。" }
      ]
    },

    galleryImages: [
      `${import.meta.env.BASE_URL}Emotion Snack/GalleryImages/galleryimages1.jpg`,
      `${import.meta.env.BASE_URL}Emotion Snack/GalleryImages/galleryImages2.JPG`,
      `${import.meta.env.BASE_URL}Emotion Snack/GalleryImages/galleryImages3.jpg`
    ]
  },
  {
    id: 2,
    title: "The Collective Sigh",
    titleJP: "感情の鈴",
    category: "Interactive Installation",
    categoryJP: "インタラクティブ・インスタレーション",
    year: "2023",
    image: `${import.meta.env.BASE_URL}collectivesigh/main/main.jpg`,
    bannerImage: `${import.meta.env.BASE_URL}collectivesigh/banner/banner.png`,
    description: "Transforming collective sentiment into sonic resonance.",
    descriptionJP: "社会の感情を、音の響きに変える。",
    shortIntro: "An interactive soundscape that gives physical form to the country’s emotional climate — a whispering chime that mirrors the quiet ways our inner world lives and shifts within the emotional atmosphere of our surroundings.",
    shortIntroJP: "国全体の感情データと、そのなかに暮らす「わたし」の感情。この二つのあいだにある距離を、風と音で体験するインタラクティブ・インスタレーションです。",
    longDescription: "A sigh is a universal mechanism of release, a physical resetting of the system. 'The Collective Sigh' gathers these fleeting moments of relief from participants and weaves them into an evolving soundscape. The installation explores how a solitary act of letting go can become a shared experience of resonance and empathy.",
    longDescriptionJP: "ため息は普遍的な解放のメカニズムであり、システムの物理的なリセットです。「集団のため息」は、参加者からこれらの一瞬の安らぎを集め、進化するサウンドスケープへと織り込みます。このインスタレーションは、手放すという孤独な行為が、いかにして共鳴と共感の共有体験になり得るかを探求します。",
    aspect: "aspect-[3/4]",
    type: "Interactive Installation",
    typeJP: "インタラクティブ・インスタレーション",
    mapping: "Collective Sentiment to Sonic Resonance",
    mappingJP: "集合的な感情から音の響きへ",
    duration: "2 Weeks",
    durationJP: "2週間",
    dataStrip: [
      { value: "Mood Survey", valueJP: "感情調査", label: "Asia weekly since 2021", labelJP: "マクロミル調べより\nアジア圏での感情調査" },
      { value: "8 Emotions", valueJP: "8つの感情", label: "one fan each", labelJP: "それぞれにファン1台" },
      { value: "2 Axes", valueJP: "2つの軸", label: "pleasure and arousal", labelJP: "感情価と覚醒度" },
      { value: "Wind Strength", valueJP: "風の強さ", label: "heard as chime sound", labelJP: "風鈴の音として届く" }
    ],
    concept: {
      headline: "The Atmosphere of the Crowd",
      headlineJP: "群衆の空気",
      body: [
        "We often treat our emotions as private, internal states, yet we are constantly immersed in a collective atmosphere. Like a subtle breeze or a sudden gale, the mood of our surroundings—the combined joy, anxiety, or quiet of millions—shapes the very air we inhabit.",
        "The Collective Sigh gives physical form to this invisible influence. Eight fans, arranged according to the Russell Circumplex Model of affect, translate real-time sentiment data into a living wind field. At the center hangs a single wind bell, representing the individual.",
        "By positioning their own emotional state within this field, participants experience the delicate interplay between their inner world and the collective breath of their surroundings. The resulting chime is a physical dialogue—a tangible, resonant encounter where the \"inner weather\" of the self meets the \"outer weather\" of the world."
      ],
      bodyJP: [
        "わたしたちは感情を自分だけのものとして扱いがちですが、実際には常に集団の感情の空気のなかで暮らしています。何百万人もの喜びや不安、静けさが混ざり合い、そよ風のように穏やかなときもあれば、突風のように激しいときもある。その空気は、わたしたちの過ごす世界そのものをかたちづくっています。",
        "「感情の鈴」は、このつながりを目に見え、耳に聞こえるかたちにする作品です。ラッセルの感情円環モデルに基づいて配置された8台のファンが、日本のリアルタイムの感情データを風に変えます。その中心に、個人を表すひとつの風鈴が吊るされています。",
        "体験者はその風のなかに自分自身を置くことで、自分の内面と社会の感情との関係を、風鈴の揺れと音を通じて身をもって体験します。画面上の数字を眺めるだけではわからない、自分と周囲の感情のつながりが、ここでは音と動きとして現れます。"
      ]
    },
    designDimensions: {
      intro: "The installation is defined by four core dimensions that reinforce how data, material, interaction, and context come together.",
      introJP: "このインスタレーションは、データ・素材と造形・体験のしくみ・実装の4つの側面で成り立っています。",
      items: [
        { title: "Data", titleJP: "データ", body: "Japan’s weekly emotional data is processed and categorized into eight distinct states. These states are mapped onto the Circumplex Model of Affect. This psychological framework places emotions on two axes: pleasure to displeasure and arousal to calm. This mapping transforms abstract sentiment statistics into variables that control the physical environment.", bodyJP: "マクロミル社が毎週実施している感情調査から、日本の感情データを取得し、8つの感情に分類します。この8つを、感情を感情価（快〜不快）と覚醒度（覚醒〜非覚醒）の2軸で捉える心理学のモデルであるラッセルの感情円環モデルに配置し、抽象的な統計を空間上の座標と強さに変換します。" },
        { title: "Physicalization", titleJP: "素材と造形", body: "Each emotional state is assigned to one of eight fans arranged in a circular field. The strength of each emotion in the dataset determines the wind speed of the corresponding fan. The wind in the room becomes the data made physical. A traditional Japanese wind bell sits at the center to translate these invisible air currents into visible movement and audible sound.", bodyJP: "8台のファンが、この感情モデルの平面上に円形に並んでいます。各ファンはひとつの感情に対応し、データ上のその感情の割合がファンの風速を決めます。8台のファンが生み出す風が中央にひとつの風の場をつくり、そこに体験者、つまり日本に住む一人ひとりを表す風鈴が吊るされています。" },
        { title: "Interaction", titleJP: "体験のしくみ", body: "Visitors use interface buttons to control the position of the wind chime on the emotional plane. By placing the chime at a coordinate that reflects their current feelings, visitors situate themselves within the country’s data. This allows them to see and hear how their personal state is influenced by the surrounding air. They experience whether their inner feelings harmonize with or are pushed by the collective mood.", bodyJP: "体験者はボタン操作で、風鈴の位置を感情の平面上で動かします。自分の今の気持ちに合った座標に風鈴を置くことで、国の感情データのなかに自分自身を位置づけます。風鈴の揺れ方や音は、ファンの位置（社会の感情の種類）、風の強さ（その感情の割合）、そして風鈴の位置（自分の感情）によって変わります。自分の気持ちが周囲と調和しているのか、押されているのかを、音と動きで感じ取ることができます。" },
        { title: "Implementation", titleJP: "実装", body: "The final experience is a real-time sonification of data through kinetic movement. As the chime rings, its frequency and sway intensity provide a record of the intersection between the visitor and the collective atmosphere. This transforms digital sentiment into a lived experience that shows how the individual exists within the invisible pressure of a society.", bodyJP: "最終的な体験は、風鈴の動きを通じたデータのリアルタイムな音への変換です。風鈴が鳴るたびに、その音の高さや揺れの強さが、体験者と社会の感情との交わりを記録します。オンラインの感情データが身体的なやりとりに変わることで、社会の見えない空気のなかに自分がどう存在しているかを感じる体験が生まれます。" }
      ]
    },

    video: "https://player.vimeo.com/video/1169277407?h=a5fbbd9c15&title=0&byline=0&portrait=0"
  },
  {
    id: 3,
    title: "Dressed in Water",
    titleJP: "クローゼットのゆらぎ",
    category: "Interactive Game",
    categoryJP: "インタラクティブゲーム",
    year: "2025",
    image: `${import.meta.env.BASE_URL}DressedinWater/banner/banner.jpeg`,
    bannerImage: `${import.meta.env.BASE_URL}DressedinWater/banner/banner.jpeg`,
    description: "Transforming wardrobe choices into acts of balance in play.",
    descriptionJP: "日々の服選びを、バランスをめぐる行為に変える。",
    shortIntro: "A Jenga-based data physicalization that makes the fashion industry's ongoing water consumption visible, turning everyday clothing behaviors into a game of structural balance and collective collapse.",
    shortIntroJP: "服をつくるために使われる膨大な水。ふだんは見えないその消費を、ジェンガのゲームで体感できるようにしました。買う、着る、捨てるという日々の行動が、一手ごとにタワーのバランスを揺らし、やがて全員の選択の積み重ねが崩壊を招きます。",
    longDescription: "Every year, the average person buys around 20 new clothing items, discards 14, and keeps roughly 23 that are never worn. Behind each garment lies an enormous environmental cost, from thousands of liters of water to carbon emissions and textile waste. Yet these consequences unfold so far from our daily lives that they rarely feel connected to what we wear.",
    longDescriptionJP: "毎年、一人あたり約20着の服を買い、14着を手放し、約23着を一度も着ないまましまい込んでいます。一着の服をつくるには数千リットルもの水が使われ、CO₂の排出や繊維ごみも生まれています。でも、こうした影響は暮らしの中ではなかなか実感できません。",
    aspect: "aspect-[4/3]",
    type: "Interactive Game",
    typeJP: "インタラクティブゲーム",
    mapping: "Consumption to Collapse",
    mappingJP: "消費から崩壊へ",
    duration: "2 Weeks",
    durationJP: "2週間",
    dataStrip: [
      { value: "6", valueJP: "6", label: "DICE-DRIVEN GAME BEHAVIORS", labelJP: "サイコロで決まるゲーム行動" },
      { value: "3", valueJP: "3", label: "GARMENT TYPES ENCODED", labelJP: "種類の衣類" },
      { value: "3", valueJP: "3", label: "CLOTHING STATUSES IN PLAY", labelJP: "種類の衣服の状態" },
      { value: "4", valueJP: "4", label: "DAILY CLOTHING ACTIONS MAPPED TO DICE", labelJP: "つの日常行動をサイコロに対応" }
    ],
    concept: {
      headline: "When consumption\ntopples the tower",
      headlineJP: "服でタワーを倒すとき",
      body: [
        "Every year, the average person buys around 20 new clothing items, discards 14, and keeps roughly 23 that are never worn. Behind each garment lies an enormous environmental cost, from thousands of liters of water to carbon emissions and textile waste. Yet these consequences unfold so far from our daily lives that they rarely feel connected to what we wear.",
        "Dressed in Water reframes this disconnect through the metaphor of balance. Built as a modified Jenga tower grounded in real fashion and water consumption data from Japan, the game positions sustainability not as a moral judgment on buying, but as an ongoing negotiation between consumption and finite natural resources. A dice system drives each turn, representing the external forces that shape our clothing behaviors in ways we don't fully control: trends, social pressure, habits, and circumstance. Players cannot choose what happens, only how they respond.",
        "The game ends when the tower collapses, yet the fall is never caused by one player alone. It is the collective weight of everyone's choices, turn by turn, that tips the balance. How each person relates to their own clothing, what to buy, what to keep, what to let go, has no universally right answer. The goal is not to prescribe, but to provoke reflection on everyday habits, in a space where balance means something different for everyone."
      ],
      bodyJP: [
        "毎年、一人あたり約20着の服を買い、14着を手放し、約23着を一度も着ないまましまい込んでいます。一着の服をつくるには数千リットルもの水が使われ、CO₂の排出や繊維ごみも生まれています。でも、こうした影響は暮らしの中ではなかなか実感できません。",
        "「クローゼットのゆらぎ」は、この見えにくさを「バランス」のたとえで問い直す作品です。日本のファッション消費と水資源の実際のデータをもとに設計した、改変ジェンガタワー。このゲームでは、サステナビリティを「買い物の善し悪し」として捉えるのではなく、消費と限りある資源のあいだの、終わりのない綱引きとして体験します。",
        "各ターンはサイコロで決まります。これは、流行や社会的な空気、習慣、たまたまの状況など、自分では完全にコントロールできない力を表しています。プレイヤーは何が起きるかを選べません。選べるのは、それにどう向き合うかだけです。",
        "タワーが崩れたらゲーム終了。でも、崩壊は誰か一人のせいではありません。全員の選択がターンごとに少しずつ積み重なって、バランスを崩していきます。何を買い、何を残し、何を手放すか。その正解はひとつではありません。このゲームが目指すのは、正しい答えを教えることではなく、ふだんの習慣について立ち止まって考えるきっかけをつくることです。"
      ]
    },
    designDimensions: {
      intro: "The game was developed across four interlocking dimensions: the sustainability data that grounds it, the physical blocks that encode it, the dice-driven interaction that brings it to life, and the player sessions that put it to the test.",
      introJP: "ゲームは4つの軸で設計しました。基盤となるデータ、情報を込めた物理ブロック、サイコロによるゲームの進行、そしてプレイヤーとのテストセッションです。",
      items: [
        { title: "Data", titleJP: "データ", body: "The design draws on sustainable fashion data from the Japanese Ministry of the Environment and open research sources. Three garment types were selected based on Japanese clothing ownership patterns: T-shirts, sweaters, and jeans. Each carries a distinct water footprint: approximately 2,700 liters for a T-shirt, 3,350 liters for a sweater, and up to 10,000 liters for a pair of jeans. Behavioral data further grounds the system: the average person purchases around 20 items per year, discards 14, and holds 23 as dead stock. Of discarded clothing, 59% is incinerated or landfilled, 24% recycled, and 18% reused.", bodyJP: "環境省や公開されている調査データをもとにしています。日本の衣類所有の傾向から、Tシャツ、セーター、ジーンズの3種類を選びました。それぞれの製造に使われる水の量は、Tシャツ約2,700リットル、セーター約3,350リットル、ジーンズは最大10,000リットル。行動面のデータも取り入れており、年間の購入数は約20着、廃棄は14着、着ないまま保管されている服は23着。捨てられた服のうち59%が焼却・埋立、24%がリサイクル、18%が再利用されています。" },
        { title: "Physicalization", titleJP: "タワーのしくみ", body: "The tower is divided into two vertical zones. The lower foundation consists of blue blocks representing finite water resources. Above it sit clothing blocks in three statuses: grey for garments actively worn, transparent for dead stock never used, and white for new garments available on the \"market,\" placed outside the tower at the start. The water cost of each garment type is encoded in block ratios: buying a T-shirt removes one water block, a sweater removes two, and jeans removes three. White cylindrical inserts represent recycled material; they can fill empty foundation spaces to stabilize the structure, but remain visually and materially distinct from the original water blocks, reflecting that recycling supports the system without truly restoring what was consumed.", bodyJP: "タワーは上下2つのゾーンに分かれています。下の土台は、限りある水資源を表す青いブロック。その上に衣類ブロックが並びます。グレーは着ている服、透明は買ったまま着ていない服、白はまだ買われていない「市場」の新品で、ゲーム開始時はタワーの外に置きます。\n\n服を買うと、その水コストに応じて土台から青いブロックを抜き取ります。Tシャツなら1個、セーターなら2個、ジーンズなら3個。白い円筒パーツはリサイクル素材を表していて、空いた土台のスペースに差し込んで構造を安定させられます。ただし、元の水ブロックとは見た目も素材も違うので、リサイクルが構造を支えはしても、失われた資源を本当に元に戻すわけではないことが伝わるようにしています。" },
        { title: "Interaction", titleJP: "ゲームの進め方", body: "A six-sided die governs each turn, with six possible outcomes: buy a T-shirt, buy a sweater, buy jeans, discard, recycle, or reuse. Buying places a new clothing block on top of the tower while extracting water blocks from the foundation. Discarding removes any clothing block to a visible waste zone. Recycling moves a clothing block to a recycle zone and inserts a cylinder into the foundation. Reusing means passing the turn entirely, reframing inaction as a deliberate strategy for maintaining balance. Water blocks removed during play are kept in front of each player, making every individual's cumulative water footprint visible throughout the game. A recording sheet tracks each player's decisions for post-game reflection.", bodyJP: "6面サイコロを振って、各ターンの行動が決まります。出目は6種類：Tシャツを買う、セーターを買う、ジーンズを買う、捨てる、リサイクルする、再利用する。\n\n「買う」が出たら、タワーの上に新しい衣類ブロックを置き、土台から水ブロックを抜きます。「捨てる」は衣類ブロックをごみ置き場に移動。「リサイクル」は衣類ブロックをリサイクル置き場に移し、土台に円筒を差し込みます。「再利用」はターンをパスすること。何もしないことを、バランスを保つための意識的な選択として位置づけています。\n\n抜き取った水ブロックは各プレイヤーの手元に置くので、自分がどれだけの水を使ったかがゲーム中ずっと見えるようになっています。記録シートも用意し、振り返りに使えるようにしました。" },
        { title: "Implementation", titleJP: "テストと振り返り", body: "The game was tested over two weeks across three sessions with eight participants from diverse academic backgrounds, organized in groups of three, three, and two. Each session lasted approximately one hour: a brief introduction to the rules, followed by two to three rounds of play, and closing with a group discussion. The game always ended in one of two ways: either the water ran out, leaving no resources to buy new clothing, or the tower collapsed under the weight of accumulated waste. In post-game discussions, participants noted that the dice system effectively captured the feeling of not being fully in control of their consumption. Several reflected that the game prompted them to reconsider how their own everyday clothing habits accumulate over time. Players also expressed interest in extending the game with richer contextual layers, such as data sheets reflecting the purchasing patterns of different occupations, or cards based on real clothing brand data that players could adopt as personas, adding a role-playing dimension to the experience.", bodyJP: "2週間のあいだに、さまざまな専攻の8人と3回のセッション（3人・3人・2人）を行いました。各回は約1時間で、ルール説明のあと2〜3ラウンドのプレイ、最後にグループで話し合いました。\n\nゲームの結末はいつも2パターン。水が尽きて新しい服が買えなくなるか、積み上がった重みでタワーが倒れるか。\n\n振り返りでは、サイコロのしくみが「自分の消費を完全にはコントロールできない感覚」をうまく表しているという感想が多く聞かれました。日々の服との付き合い方が積み重なっていくことに改めて気づいた、という声もありました。また、職業別の購買パターンを反映したデータや、実際のブランド情報をカードにしてロールプレイ要素を加えるなど、ゲームの発展にも関心が寄せられました。" }
      ]
    },
    galleryImages: [
      `${import.meta.env.BASE_URL}DressedinWater/GalleryImages/galleryimages1.jpg`,
      `${import.meta.env.BASE_URL}DressedinWater/GalleryImages/galleryImages2.png`,
      `${import.meta.env.BASE_URL}DressedinWater/GalleryImages/galleryImages3.jpeg`
    ]
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