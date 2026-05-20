import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <>
      {/* Magazine atmospheric background */}
      <div className="bg-mag" aria-hidden="true" />

      {/* Flowing iridescent gradient — pink/purple/red/blue */}
      <div className="bg-flow" aria-hidden="true" />

      {/* Counter-rotating chrome swirl layers */}
      <div className="bg-swirl bg-swirl-a" aria-hidden="true" />
      <div className="bg-swirl bg-swirl-b" aria-hidden="true" />

      {/* Floating chrome 3D objects — Y2K render aesthetic */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="chrome-orb orb-1" />
        <div className="chrome-orb orb-2" />
        <div className="chrome-orb orb-3" />
        <div className="chrome-orb orb-4" />
        <div className="chrome-orb orb-5" />
        <div className="chrome-orb orb-6" />
      </div>

      {/* JSR halftone screentone overlay */}
      <div className="bg-halftone" aria-hidden="true" />

      {/* Spray-paint splats — street tag decoration */}
      <div className="splats" aria-hidden="true">
        <span className="splat splat-acid"   style={{ top: '14%', left: '4%' }} />
        <span className="splat splat-magenta" style={{ top: '46%', right: '6%' }} />
        <span className="splat splat-orange"  style={{ top: '78%', left: '8%' }} />
        <span className="splat splat-cyan"    style={{ top: '92%', right: '12%' }} />
      </div>

      {/* Magazine decoration: edge text, issue header, CMYK marks */}
      <div className="mag-deco" aria-hidden="true">
        <span className="mag-edge mag-edge-left">
          SYKRON · DEV / PROGRAMMER · ISSUE 01 · 春 2026 · NEW PORTFOLIO · ALL RIGHTS RESERVED
        </span>
        <span className="mag-edge mag-edge-right">
          ニューポートフォリオ · 新世代 · CASUAL DEV CATALOG · MMXXVI · DESIGNED BY SYKRON
        </span>
        <div className="mag-corner-bl">
          <span>NO.</span>
          <span className="mag-corner-num">01</span>
          <span className="mag-corner-tick">———</span>
        </div>
      </div>

      {/* Main content */}
      <main className="portfolio-container">

        {/* ==================== HERO ==================== */}
        <section className="section hero-section" id="home">
          <div className="hero-wrapper">
            <div className="hero-kana">シクロン · ポートフォリオ · ニューバージョン 2026</div>

            <div className="avatar-container">
              <img src="avatar.jpg" className="profile-avatar" alt="Sykron" width="736" height="736" decoding="async" fetchPriority="high" />
              <div className="avatar-glow"></div>
              <span className="avatar-sticker">PHOTO · 2026 · No.01</span>
            </div>

            <h1 className="hero-title" data-text="Sykron">Sykron</h1>

            <div className="hero-sticker-row">
              <span className="hero-sticker hero-sticker-jp">開発・プログラマー</span>
              <span className="hero-sticker hero-sticker-en">Dev / Programmer</span>
            </div>

            <p className="hero-desc">I design, I build.</p>
          </div>
        </section>

        {/* ==================== PROGRAMS ==================== */}
        <section className="section" id="projects">
          <h2 className="section-title">
            <span className="section-kana">プログラム · 制作物</span>
            <span className="section-title-text">Programs that i made!</span>
          </h2>

          {/* Project: RAMMY */}
          <div className="project-card">
            <div className="project-num">№ 01</div>
            <div className="project-grid">
              <div className="project-info">
                <div className="project-meta">
                  <span className="tech-tag tag-cyan">C++</span>
                  <span className="tech-tag tag-cyan">Windows</span>
                </div>
                <h3 className="project-name" data-text="RAMMY">RAMMY</h3>
                <p className="project-name-jp">ラミー · メモリ最適化</p>
                <div className="project-explanation">
                  <p><strong>RAMMY</strong> frees up the memory your PC isn&apos;t using, with a slick live visualizer that shows your system breathing in real-time.</p>
                  <ul className="features-list">
                    <li><strong>Live Heartbeat Visualizer:</strong> A real-time EKG that shows exactly what your RAM is doing every second. See your system&apos;s pulse at a glance.</li>
                    <li><strong>Auto-Cleanup On Your Terms:</strong> RAMMY sweeps your memory automatically. Set your own intervals, or let it react the moment your PC needs a hand.</li>
                    <li><strong>Invisible Performance:</strong> Runs without slowing you down. No spikes, no lag, no noise — just a faster PC.</li>
                  </ul>
                </div>
                <div className="project-links">
                  <a href="https://github.com/sykrondev/RAMMY" target="_blank" rel="noopener noreferrer" className="project-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub Repository
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="visual-frame">
                  <div className="frame-header">
                    <div className="dots-indicator"><span></span><span></span><span></span></div>
                    <span className="frame-title">RAMMY Dashboard</span>
                  </div>
                  <div className="frame-body">
                    <img src="rammy.jpg" alt="RAMMY Desktop Application Screenshot" className="project-screenshot" width="1024" height="658" loading="lazy" decoding="async" fetchPriority="low" style={{display:'block'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project: TinyPic */}
          <div className="project-card">
            <div className="project-num">№ 02</div>
            <div className="project-grid reverse">
              <div className="project-info">
                <div className="project-meta">
                  <span className="tech-tag tag-magenta">C / C++</span>
                  <span className="tech-tag tag-magenta">Windows</span>
                </div>
                <h3 className="project-name" data-text="TinyPic">TinyPic</h3>
                <p className="project-name-jp">タイニーピック · スクリーン捕獲</p>
                <div className="project-explanation">
                  <p><strong>TinyPic</strong> is the fastest way to grab anything on your screen. Hit a key, get the shot — no setup, no fuss.</p>
                  <ul className="features-list">
                    <li><strong>One-Tap Capture:</strong> Press a hotkey to grab the full screen, a custom region, or the active window. Whatever you need, instantly.</li>
                    <li><strong>Smart Filing:</strong> Screenshots save themselves with custom names, dates, and counters — straight into the folder you choose.</li>
                    <li><strong>Floating Preview:</strong> Every shot pops up in a clean preview window. Edit, save, copy, or discard without breaking flow.</li>
                  </ul>
                </div>
                <div className="project-links">
                  <a href="https://github.com/sykrondev/TinyPic" target="_blank" rel="noopener noreferrer" className="project-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub Repository
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="visual-gallery">
                  <div className="gallery-tabs">
                    <button
                      className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
                      onClick={() => setActiveTab('settings')}
                    >Settings</button>
                    <button
                      className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('preview')}
                    >Preview Panel</button>
                  </div>
                  <div className="visual-frame">
                    <div className="frame-header">
                      <div className="dots-indicator"><span></span><span></span><span></span></div>
                      <span className="frame-title">
                        {activeTab === 'settings' ? 'TinyPic Settings' : 'TinyPic Preview'}
                      </span>
                    </div>
                    <div className="frame-body">
                      {activeTab === 'settings'
                        ? <img src="tinypic_settings.png" alt="TinyPic Settings Interface"    className="project-screenshot" width="496" height="811" loading="lazy" decoding="async" fetchPriority="low" style={{display:'block'}} />
                        : <img src="tinypic_preview.png"  alt="TinyPic Image Preview Screen" className="project-screenshot" width="538" height="559" loading="lazy" decoding="async" fetchPriority="low" style={{display:'block'}} />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SKILLS ==================== */}
        <section className="section" id="about">
          <h2 className="section-title">
            <span className="section-kana">技術 · スキル</span>
            <span className="section-title-text">Technical Competence</span>
          </h2>
          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h5>Systems Development</h5>
              <p>Low-level engineering using C and C++, interfacing with Windows Win32/SDK system services, threading models, and memory optimization.</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h5>Interactive Interfaces</h5>
              <p>Crafting high-fidelity, custom-drawn user interfaces using hardware rendering, responsive styling, and micro-interactions.</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6"  y1="20" x2="6"  y2="14"/>
                </svg>
              </div>
              <h5>Performance Tuning</h5>
              <p>Optimizing runtimes and canvas calculations. Profiling heap/cache utilization, minimizing asset overhead, and ensuring consistent 60fps renders.</p>
            </div>

          </div>
        </section>

        {/* ==================== CERTIFICATIONS ==================== */}
        <section className="section" id="credentials">
          <h2 className="section-title">
            <span className="section-kana">認定証 · クレデンシャル</span>
            <span className="section-title-text">Certifications</span>
          </h2>
          <div className="credentials-grid">

            <div className="credential-card">
              <div className="cred-badge badge-blue">162 Hours</div>
              <div className="cred-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                </svg>
              </div>
              <div className="cred-content">
                <span className="cred-issuer">Instituto Profesional INACAP</span>
                <h5>Desarrollo de Aplicaciones Iniciales</h5>
                <p className="cred-details">Comprehensive professional training program covering secure coding practices and object-oriented application design.</p>
                <div className="cred-meta"><span className="cred-date">Issued 2025</span></div>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-badge badge-green">20 Hours</div>
              <div className="cred-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="cred-content">
                <span className="cred-issuer">INACAP</span>
                <h5>Inventory Bootcamp Tech 2025</h5>
                <p className="cred-details">Intensive technical bootcamp covering transactional system logic, database designs, and inventory tool architectures.</p>
                <div className="cred-meta"><span className="cred-date">Issued 2025</span></div>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-badge badge-blue">Grade 7.0</div>
              <div className="cred-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <div className="cred-content">
                <span className="cred-issuer">INACAP / Universidad de Chile</span>
                <h5>Finance Education</h5>
                <p className="cred-details">Advanced financial theory, asset markets, and quantitative evaluation methods. Completed with the maximum academic grade of 7.0.</p>
                <div className="cred-meta"><span className="cred-date">Issued 2025</span></div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 SYKRON &mdash; All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
