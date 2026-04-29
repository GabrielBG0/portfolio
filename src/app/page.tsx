import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section id="hero">
          <div className="hero-top-bar">
            <div className="hero-top-cell">DWG-001 / Portfolio</div>
            <div className="hero-top-cell">
              Computer Vision · Weakly Supervised Learning
            </div>
            <div className="hero-top-cell">Campinas, BR · 2026</div>
          </div>
          <div className="hero-body">
            <div className="hero-left">
              <div>
                <div className="hero-name name-split">
                  <span className="name-first">Gabriel</span>
                  <span className="name-last">Gutierrez</span>
                </div>
                <p className="hero-tagline">
                  Making computer vision work in the real world,<br />
                  where <strong>labels are noisy</strong>, annotations are
                  scarce,
                  <br />
                  and <strong>ground truth is a moving target.</strong>
                </p>
              </div>
              <div className="hero-actions">
                <a
                  href="mailto:gabriel.gutierrez@ic.unicamp.br"
                  className="btn btn-fill"
                >
                  Get in touch
                </a>
                <a href="https://mqgno3fpjl.ufs.sh/f/yjUPHnZjk2GScRBOmVQfDiZXCHU0uYGoS1bpVWl8OtgwMdsT" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Download CV ↗
                </a>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-meta-table">
                <div className="meta-row">
                  <div className="meta-label">Role</div>
                  <div className="meta-value">
                    <strong>PhD Candidate</strong> in Computer Science
                  </div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Institution</div>
                  <div className="meta-value">Unicamp — Campinas, BR</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Focus</div>
                  <div className="meta-value">
                    Weakly Supervised Semantic Segmentation
                  </div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Publication</div>
                  <div className="meta-value">
                    <strong>Geophysical Prospecting</strong> · EAGE 85th
                  </div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Framework</div>
                  <div className="meta-value">
                    discovery-unicamp/<strong>Minerva</strong>
                  </div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Background</div>
                  <div className="meta-value">
                    NLP → Vision · Supervised → Weakly Supervised
                  </div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">GitHub</div>
                  <div className="meta-value">
                    <a
                      href="https://github.com/GabrielBG0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GabrielBG0 ↗
                    </a>
                  </div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Scholar</div>
                  <div className="meta-value">
                    <a
                      href="https://scholar.google.com/citations?user=g6yM01cAAAAJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section id="about">
          <div className="section-inner">
            <div className="section-header reveal">
              <span className="section-num">01 — About</span>
              <h2 className="section-title">Who I am</h2>
            </div>
            <div className="about-rows">
              <div className="about-row reveal">
                <div className="about-row-label">Background</div>
                <div className="about-row-text">
                  I&apos;m a{" "}
                  <strong>PhD candidate in Computer Science at Unicamp</strong>{" "}
                  and a software engineer by training. The two things I do most
                  seriously are research and engineering. In my work
                  they&apos;re deeply intertwined rather than separate tracks.
                </div>
              </div>
              <div className="about-row reveal">
                <div className="about-row-label">Research focus</div>
                <div className="about-row-text">
                  I study{" "}
                  <strong>weakly supervised semantic segmentation</strong>,
                  teaching computer vision models to understand images without
                  painstaking pixel-level annotation. Real-world labels are
                  expensive and imprecise, so I focus on methods that learn from{" "}
                  <strong>noisy, incomplete, or inaccurate labels</strong>. This
                  is especially meaningful in domains like geoscience, where
                  expert annotation is both scarce and inherently subjective.
                </div>
              </div>
              <div className="about-row reveal">
                <div className="about-row-label">Through-line</div>
                <div className="about-row-text">
                  My path runs from <code>NLP</code> to vision, supervised to
                  weakly supervised, seismic facies to general segmentation. I
                  work extensively with transformer architectures (
                  <code>ViT</code>, <code>SegFormer</code>, <code>SETR</code>,{" "}
                  <code>MiT</code>, <code>BERT</code>) and CNN-based models (
                  <code>DeepLab</code>, <code>U-Net</code>). My engineering
                  background means I approach research with a systems mindset,
                  and my research means I build tools shaped by real scientific
                  needs, not abstract requirements.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESEARCH ─────────────────────────────────────────── */}
        <section id="research">
          <div className="section-inner">
            <div className="section-header reveal">
              <span className="section-num">02 — Research</span>
              <h2 className="section-title">Projects</h2>
            </div>
            <div className="research-list">
              <div className="research-item reveal">
                <div className="research-n">01 /</div>
                <div>
                  <h3 className="research-title">
                    Weakly Supervised Semantic Segmentation
                  </h3>
                  <p className="research-desc">
                    PhD research on training segmentation models under weak
                    supervision, when ground truth annotations are noisy,
                    incomplete, or generated automatically. Current focus on
                    pseudo-label generation and refinement strategies that allow
                    better use of scarce labeled data without sacrificing model
                    reliability.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Computer Vision</span>
                    <span className="tag">Weak Supervision</span>
                    <span className="tag">Pseudo-labels</span>
                    <span className="tag">Semantic Segmentation</span>
                  </div>
                </div>
                <span className="status-badge active">In Progress</span>
              </div>

              <div className="research-item reveal">
                <div className="research-n">02 /</div>
                <div>
                  <h3 className="research-title">
                    Transformer Architectures for Seismic Segmentation
                  </h3>
                  <p className="research-desc">
                    A systematic comparison of transformer-based segmentation
                    architectures applied to seismic facies data, bridging
                    state-of-the-art vision models and the practical demands of
                    geoscientific interpretation. The study addresses model
                    performance and the inherent ambiguity of expert annotation
                    in subsurface data.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Seismic Facies</span>
                    <span className="tag">SegFormer</span>
                    <span className="tag">SETR</span>
                    <span className="tag">Geoscience</span>
                  </div>
                  <div className="pub-line">
                    Published in <em>Geophysical Prospecting</em> (peer-reviewed)
                    <br />
                    Presented at the{" "}
                    <strong>85th EAGE Annual Conference</strong>
                  </div>
                </div>
                <span className="status-badge">Published</span>
              </div>

              <div className="research-item reveal">
                <div className="research-n">03 /</div>
                <div>
                  <h3 className="research-title">
                    Fake News Detection with BERT
                  </h3>
                  <p className="research-desc">
                    Two years as a junior researcher applying transformer-based
                    NLP to automated misinformation detection. This was where I
                    first got serious about machine learning and established the
                    methodological foundation, from supervised NLP to the
                    weakly supervised vision work that followed.
                  </p>
                  <div className="tag-row">
                    <span className="tag">NLP</span>
                    <span className="tag">BERT</span>
                    <span className="tag">Transformers</span>
                    <span className="tag">Misinformation</span>
                  </div>
                </div>
                <span className="status-badge">Completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MINERVA ──────────────────────────────────────────── */}
        <section id="minerva">
          <div className="section-inner">
            <div className="section-header reveal">
              <span className="section-num">03 — Open Source</span>
              <h2 className="section-title">Minerva</h2>
            </div>
            <div className="minerva-grid reveal">
              <div className="minerva-left">
                <span className="minerva-role">
                  Software Architect &amp; Core Maintainer
                </span>
                <div className="minerva-title">
                  Training infrastructure for researchers who need
                  reproducibility.
                </div>
                <div className="minerva-body">
                  <p>
                    <strong>Minerva</strong> fills the gap between raw PyTorch
                    and production MLOps, the space where researchers burn time
                    on glue code. Concrete, opinionated classes so experiments
                    can be built and reproduced, not assembled from scratch each
                    time.
                  </p>
                  <p>
                    The architecture is layered: readers, datasets, data
                    modules, and pipelines, each with a defined contract to extend.
                    The standout decision is <strong>FromPretrained</strong>:
                    Minerva wraps messy SSL checkpoint transfer into a
                    constructor-compatible class with regex filters and a rename
                    map, composing cleanly with YAML configs.
                  </p>
                  <p>
                    Aimed at graduate researchers in applied deep learning:
                    time-series, computer vision, limited-label domains. Not a
                    production platform. Engineering for science means
                    reproducibility and honest defaults over throughput.
                  </p>
                </div>
                <div className="minerva-cta">
                  <a
                    href="https://github.com/discovery-unicamp/Minerva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-fill"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>
              <div className="minerva-right">
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-n">01</div>
                    <div className="feature-text">
                      <strong>PyTorch Lightning foundation</strong> — structured
                      training loops with researcher-first configurability and a
                      clean path to evaluation pipelines
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-n">02</div>
                    <div className="feature-text">
                      <strong>Layered composable architecture</strong> —
                      readers, datasets, data modules, and pipelines each have
                      defined contracts and base classes to extend
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-n">04</div>
                    <div className="feature-text">
                      <strong>YAML-driven reproducibility</strong> — every
                      parameter serializable; collaborators can reproduce any
                      experiment with a single CLI command
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-n">05</div>
                    <div className="feature-text">
                      <strong>SSL model catalog</strong> — LFR, TF-C, and
                      SimCLR-style modules for representation learning on
                      limited-label data
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-n">03</div>
                    <div className="feature-text">
                      <strong>FromPretrained</strong> — composable checkpoint
                      loading with regex filters and rename maps for clean
                      transfer from SSL runs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────────────────── */}
        <section id="skills">
          <div className="section-inner">
            <div className="section-header reveal">
              <span className="section-num">04 — Technical Depth</span>
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="skills-grid reveal">
              <div className="skill-group">
                <div className="skill-group-label">Vision Models</div>
                <ul className="skill-list">
                  <li className="skill-item">ViT (Vision Transformer)</li>
                  <li className="skill-item">SegFormer</li>
                  <li className="skill-item">SETR</li>
                  <li className="skill-item">Segmenter</li>
                  <li className="skill-item">MiT (Mix Transformer)</li>
                  <li className="skill-item">DeepLab Family</li>
                  <li className="skill-item">U-Net</li>
                </ul>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">NLP &amp; Language</div>
                <ul className="skill-list">
                  <li className="skill-item">BERT</li>
                  <li className="skill-item">Transformer architectures</li>
                  <li className="skill-item">Fine-tuning strategies</li>
                  <li className="skill-item">Text classification</li>
                </ul>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">Research Methods</div>
                <ul className="skill-list">
                  <li className="skill-item">Weakly supervised learning</li>
                  <li className="skill-item">Pseudo-label generation</li>
                  <li className="skill-item">Systematic comparison</li>
                  <li className="skill-item">Geoscience applications</li>
                  <li className="skill-item">Seismic segmentation</li>
                </ul>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">Engineering</div>
                <ul className="skill-list">
                  <li className="skill-item">PyTorch + Lightning</li>
                  <li className="skill-item">Python (primary)</li>
                  <li className="skill-item">OSS framework design</li>
                  <li className="skill-item">Software architecture</li>
                  <li className="skill-item">Modular ML pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact">
          <div className="section-inner">
            <div className="section-header reveal">
              <span className="section-num">05 — Contact</span>
              <h2 className="section-title">Get in touch</h2>
            </div>
            <div className="contact-grid reveal">
              <div className="contact-left">
                <p className="contact-statement">
                  Open to <strong>research collaborations</strong>,<br />
                  engineering conversations,
                  <br />
                  and interesting problems.
                </p>
                <div>
                  <a href="https://mqgno3fpjl.ufs.sh/f/yjUPHnZjk2GScRBOmVQfDiZXCHU0uYGoS1bpVWl8OtgwMdsT" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Download CV ↗
                  </a>
                </div>
              </div>
              <div className="contact-right">
                <a
                  href="mailto:gabriel.gutierrez@ic.unicamp.br"
                  className="contact-link-row"
                >
                  <span className="cl-label">Email</span>
                  <span className="cl-value">
                    gabriel.gutierrez@ic.unicamp.br
                  </span>
                  <span className="cl-arrow">→</span>
                </a>
                <a
                  href="https://linkedin.com/in/gabrielbgutierrez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="cl-label">LinkedIn</span>
                  <span className="cl-value">gabrielbgutierrez</span>
                  <span className="cl-arrow">→</span>
                </a>
                <a
                  href="https://github.com/GabrielBG0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="cl-label">GitHub</span>
                  <span className="cl-value">GabrielBG0</span>
                  <span className="cl-arrow">→</span>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=g6yM01cAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="cl-label">Scholar</span>
                  <span className="cl-value">Google Scholar Profile</span>
                  <span className="cl-arrow">→</span>
                </a>
                <a
                  href="https://gabrielbg.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="cl-label">Blog</span>
                  <span className="cl-value">gabrielbg.dev</span>
                  <span className="cl-arrow">→</span>
                </a>
                <a
                  href="https://gabrielbg.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="cl-label">Portfolio</span>
                  <span className="cl-value">gabrielbg.com.br</span>
                  <span className="cl-arrow">→</span>
                </a>
                <a
                  href="https://orcid.org/0009-0008-4200-8963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="cl-label">ORCID</span>
                  <span className="cl-value">ORCID Profile</span>
                  <span className="cl-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
