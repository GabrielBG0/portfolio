import Header from "@/components/Header";
import { Layers, GraduationCap, Box, Github, ExternalLink, Brain, Code, Sparkles, Cpu, Eye, ScanSearch, ArrowRight, ChevronDown, FlaskConical } from "lucide-react";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="hero-section relative w-full min-h-[70vh] sm:h-screen flex flex-col justify-center items-start px-6 sm:px-[90px] overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 hero-gradient opacity-80" />
          {/* Dot grid overlay */}
          <div className="absolute inset-0 hero-dots opacity-[0.04]" />
          
          {/* Additional background noise or vignette could be added, but keeping it simple */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212] z-0" />

          {/* Accent glow orbs */}
          <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-violet-600/[0.07] rounded-full blur-[100px] sm:blur-[180px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-rose-600/[0.05] rounded-full blur-[80px] sm:blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: '7s' }} />

          <div className="relative z-10 py-12 sm:py-0 w-full flex flex-col -mt-16 sm:-mt-32">
            {/* Pill tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 w-fit">
              {["ML Researcher", "Software Architect", "Open Source"].map((tag) => (
                <span key={tag} className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white/[0.03] text-white/60 border border-white/[0.08] backdrop-blur-sm hover:border-white/[0.2] transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Main heading with accent colors */}
            <div className="mb-6 sm:mb-10">
              <h1 className="text-left font-titles text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">Deep Learning</span>,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Software Engineering</span>
                <br />
                <span className="text-white/40 font-light">&amp;</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]">Computer Vision</span>
              </h1>
            </div>

            {/* Meet Gabriel with Lucide arrow - New glass button style */}
            <a 
              href="#AboutMe"
              className="group relative overflow-hidden bg-bg-secondary w-fit px-6 sm:px-10 py-3 sm:py-5 rounded-full border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-16 sm:mb-20 block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-between gap-4">
                <h2 className="font-titles text-lg sm:text-2xl font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                  Meet Gabriel
                </h2>
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white" />
                </div>
              </div>
            </a>

            {/* Scroll indicator */}
            <a 
              href="#AboutMe"
              className="flex flex-col items-center gap-2 w-fit animate-bounce opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-[10px] sm:text-xs text-white/60 font-semibold tracking-[0.2em] uppercase">Scroll</span>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div
          id="AboutMe"
          className="w-full px-4 sm:px-[90px] py-12 sm:py-[90px]"
        >
          <h1 className="font-titles text-4xl sm:text-7xl lg:text-[9rem] font-bold pb-6 sm:pb-[53px]">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* Machine Learning Card */}
            <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-rose-400" />
                  </div>
                  <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Machine Learning
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {["BERT", "NLP", "Seismic Facies", "Weak Supervision", "Unicamp", "EAGE"].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                    I developed a passion for machine learning during my
                    university studies, where I explored its vast potential to
                    solve real-world problems. This interest led me to work as a
                    junior researcher volunteer for two years, focusing on natural
                    language processing, specifically fake news detection using
                    BERT.
                    <br /><br />
                    I completed my master&apos;s degree at Unicamp with a
                    dissertation on the semantic segmentation of seismic facies
                    using transformer architectures, with findings published in
                    Geophysical Prospecting and presented at the 85th annual EAGE
                    conference. Building on that foundation, I am currently
                    pursuing a PhD at Unicamp, where my research focuses on weakly
                    supervised semantic segmentation — developing methods that
                    learn from incomplete, noisy, or inaccurate annotations rather
                    than requiring exhaustive pixel-level labels.
                  </span>
                </div>
              </div>
            </div>

            {/* Software Engineering Card */}
            <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Code className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
                  </div>
                  <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Software Engineering
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {["Open Source", "Minerva", "Architecture", "PyTorch Lightning", "Discovery Unicamp"].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                    I hold a degree in Software Engineering from one of
                    Brazil&apos;s top universities, where I contributed to
                    projects focused on medical data collection for research
                    aimed at informing public policy decisions.
                    <br /><br />
                    Since joining Unicamp&apos;s graduate program, I have applied
                    my software engineering expertise directly to research,
                    bringing a rigorous engineering perspective to complex
                    scientific challenges. I lead Minerva, an open-source machine
                    learning training framework developed in collaboration with
                    Discovery Unicamp. As software architect, core developer, and
                    core maintainer, I design the framework to be robust, modular,
                    and aligned with the evolving demands of the research
                    community — integrating tools such as PyTorch Lightning, Ray
                    Tune, Hyperopt, and MMsegmentation.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Section */}
        <div
          id="Skills"
          className="w-full px-4 sm:px-[90px] py-12 sm:py-[90px]"
        >
          <h1 className="font-titles text-4xl sm:text-7xl lg:text-[9rem] font-bold pb-6 sm:pb-[53px]">
            My Skills
          </h1>

          {/* Skills Overview Card */}
          <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 sm:p-10 lg:p-12">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-fuchsia-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 tracking-tight">
                    Overview
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                    {["Computer Vision", "Semantic Segmentation", "ML Frameworks", "Open Source", "Research"].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                    With a strong foundation in software engineering and machine
                    learning, I bring a unique blend of technical expertise and
                    research experience to my projects. My background spans
                    developing data-driven applications, contributing to impactful
                    research, and leading open-source initiatives. I specialize in
                    computer vision, semantic segmentation, and building scalable
                    machine learning frameworks like Minerva. My skills extend
                    beyond coding; I architect solutions that bridge the gap between
                    cutting-edge research and practical implementation, always with
                    a focus on innovation and collaboration.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">

            {/* Transformers Card */}
            <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 tracking-tight">
                      Transformers
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                      {["BERT", "ViT", "MiT", "SegFormer", "SETR", "Foundation Models"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                      I have extensive experience working with transformer models,
                      beginning with BERT during my early research on fake news
                      detection. In my master&apos;s program I expanded this to vision
                      transformers — working with ViT, MiT, SegFormer, Segmenter,
                      and SETR-PUP for seismic facies segmentation. In my PhD, I
                      continue to build on transformer-based architectures,
                      exploring how large pretrained models and foundation models
                      can be leveraged under weak supervision, where only coarse or
                      noisy labels are available.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

              {/* Computer Vision Card */}
              <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 sm:p-10 lg:p-12">
                  <div className="flex flex-col gap-5">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                    </div>
                    <h2 className="font-titles text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                      Computer Vision
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {["Segmentation", "Weak Supervision", "Scientific Imaging"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                      My experience in computer vision spans semantic segmentation,
                      image processing, and weakly supervised learning. In my
                      master&apos;s research I worked extensively with transformer
                      and CNN-based segmentation models applied to seismic data.
                      My PhD extends this toward label-efficient learning, where I
                      investigate how models can be trained effectively under noisy
                      or incomplete supervision. I have developed a deep
                      understanding of the challenges specific to scientific
                      imaging domains, where annotation is expensive and ground
                      truth is inherently uncertain.
                    </span>
                  </div>
                </div>
              </div>

              {/* Weak Supervision Card */}
              <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 sm:p-10 lg:p-12">
                  <div className="flex flex-col gap-5">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                      <ScanSearch className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400" />
                    </div>
                    <h2 className="font-titles text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                      Weak Supervision
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {["Pseudo-labels", "SAM", "Noisy Annotations", "Foundation Models"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                      My current research centers on weakly supervised semantic
                      segmentation — a paradigm where models learn from imprecise,
                      incomplete, or noisy annotations rather than costly
                      pixel-level labels. This includes working with inaccurate
                      supervision, pseudo-label generation and correction, and
                      SAM-based mask refinement. I study how foundation models and
                      self-supervised pretraining can compensate for annotation
                      scarcity, combining insights from the survey literature with
                      exploration of recent advances in the field.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Work Section */}
        <div
          id="Work"
          className="w-full px-4 sm:px-[90px] pt-12 sm:pt-[90px] pb-4 sm:pb-[60px]"
        >
          <h1 className="font-titles text-4xl sm:text-7xl lg:text-[9rem] font-bold pb-6 sm:pb-[53px]">
            My Work
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">

            {/* Semantic Segmentation Card */}
            <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 tracking-tight">
                      Semantic Segmentation
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                      {["DeepLab", "SegFormer", "SETR", "F3 Dataset", "Seam AI", "Geophysical Prospecting"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                      In my master&apos;s dissertation at Unicamp, I conducted a
                      systematic evaluation of transformer-based segmentation models
                      applied to seismic facies analysis. The study compared five
                      architectures — DeepLab V3, DeepLab V3+, SegFormer, Segmenter,
                      and SETR — trained and evaluated under identical conditions on
                      the F3 and Seam AI datasets, directly addressing the
                      reproducibility gap prevalent in the field. We found that SETR
                      shows promising performance on both datasets, while CNN models
                      offer a higher performance-to-parameter-count ratio compared to
                      transformer models.
                      <br /><br />
                      This work was published in Geophysical Prospecting under the
                      title &apos;On the Performance Evaluation of Deep Learning
                      Models for Seismic Facies Segmentation&apos;, and was also
                      presented at the 85th annual EAGE conference and exhibition,
                      where both the paper and the presentation received among the
                      highest ratings from reviewers.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PhD Research Card */}
            <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 tracking-tight">
                      PhD Research
                    </h2>
                    <p className="text-sm sm:text-base text-white/40 italic mb-4 sm:mb-5">
                      Weakly Supervised Semantic Segmentation
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                      {["Weak Supervision", "SAM", "Pseudo-labels", "Noisy Labels", "Unicamp"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                      My PhD research at Unicamp investigates weakly supervised
                      semantic segmentation — the problem of training dense
                      prediction models without exhaustive pixel-level annotation.
                      Specifically, I focus on inaccurate and noisy label
                      supervision, where training masks are available but contain
                      errors, imprecisions, or incomplete coverage. This setting is
                      particularly relevant to scientific domains such as
                      geoscience, where expert annotation is expensive and
                      inherently subjective.
                      <br /><br />
                      My work draws on recent advances in pseudo-label refinement,
                      Segment Anything Model (SAM) based mask correction, and
                      foundation model adaptation, combining rigorous software
                      engineering with applied research to develop methods that are
                      both principled and practically deployable. This line of
                      research builds directly on the seismic facies segmentation
                      work from my master&apos;s, extending it toward more
                      realistic, label-efficient scenarios.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Minerva Card */}
            <div className="group relative bg-bg-secondary rounded-[20px] sm:rounded-[30px] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Box className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <h2 className="font-titles text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                        Minerva
                      </h2>
                      <a
                        href="https://github.com/discovery-unicamp/Minerva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 w-fit"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        View on GitHub
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                      {["Open Source", "ML Framework", "Python", "Discovery Unicamp"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block max-w-full text-left sm:text-justify text-sm sm:text-base leading-relaxed text-white/70">
                      As the lead of Minerva, an open-source machine learning training
                      framework developed at Discovery Unicamp, I&apos;ve played a key
                      role in its architecture, development, and maintenance. Minerva
                      was designed to meet the specific needs of researchers,
                      providing a flexible and scalable solution for training and
                      fine-tuning machine learning models across a variety of tasks.
                      My role as the software architect, core developer, and core
                      maintainer has involved ensuring that the framework is robust,
                      user-friendly, and adaptable to the fast-evolving demands of
                      machine learning research.
                      <br /><br />
                      Minerva stands out by offering an accessible and powerful tool
                      for both academic and industry researchers, bridging the gap
                      between research and practical implementation. Through my work
                      on this project, I&apos;ve gained valuable experience in
                      open-source software development, contributing to a tool that
                      empowers the research community to advance machine learning in
                      meaningful ways.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
