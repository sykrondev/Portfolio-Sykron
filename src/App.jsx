import { useState } from 'react';

const T = {
  en: {
    avatarSticker: 'PHOTO · 2026 · No.01',
    devProgrammer: 'Dev / Programmer',
    tagline: 'I design, I build.',
    sectionPrograms: 'Programs that i made!',
    sectionSkills: 'Technical Competence',
    sectionCerts: 'Certifications',
    rammyDesc: ['RAMMY', ` frees up the memory your PC isn't using, with a slick live visualizer that shows your system breathing in real-time.`],
    rammyFeatures: [
      ['Live Heartbeat Visualizer:', `A real-time EKG that shows exactly what your RAM is doing every second. See your system's pulse at a glance.`],
      ['Auto-Cleanup On Your Terms:', `RAMMY sweeps your memory automatically. Set your own intervals, or let it react the moment your PC needs a hand.`],
      ['Invisible Performance:', `Runs without slowing you down. No spikes, no lag, no noise — just a faster PC.`],
    ],
    tinypicDesc: ['TinyPic', ' is the fastest way to grab anything on your screen. Hit a key, get the shot — no setup, no fuss.'],
    tinypicFeatures: [
      ['One-Tap Capture:', 'Press a hotkey to grab the full screen, a custom region, or the active window. Whatever you need, instantly.'],
      ['Smart Filing:', 'Screenshots save themselves with custom names, dates, and counters — straight into the folder you choose.'],
      ['Floating Preview:', 'Every shot pops up in a clean preview window. Edit, save, copy, or discard without breaking flow.'],
    ],
    githubRepo: 'GitHub Repository',
    tabSettings: 'Settings',
    tabPreview: 'Preview Panel',
    tinypicSettingsTitle: 'TinyPic Settings',
    tinypicPreviewTitle: 'TinyPic Preview',
    rammyDashboard: 'RAMMY Dashboard',
    skillSystems: 'Systems Development',
    skillSystemsDesc: 'Hands-on engineering in C and C++, working with Windows Win32/SDK system services, threading models, and memory optimization.',
    skillUI: 'Interactive Interfaces',
    skillUIDesc: 'Crafting high-fidelity, custom-drawn user interfaces using hardware rendering, responsive styling, and micro-interactions.',
    skillPerf: 'Performance Tuning',
    skillPerfDesc: 'Optimizing runtimes and canvas calculations. Profiling heap/cache utilization, minimizing asset overhead, and ensuring consistent 60fps renders.',
    hours162: '162 Hours',
    hours20: '20 Hours',
    grade: 'Grade 7.0',
    issued: 'Issued 2025',
    cred1Issuer: 'Instituto Profesional INACAP',
    cred1Title: 'Desarrollo de Aplicaciones Iniciales',
    cred1Body: 'Comprehensive professional training program covering secure coding practices and object-oriented application design.',
    cred2Issuer: 'INACAP',
    cred2Title: 'Inventory Bootcamp Tech 2025',
    cred2Body: 'Team-based on-site inventory of 300+ units of university tech equipment. Contributed to a shared database with mobile barcode scanning.',
    cred3Issuer: 'INACAP / Universidad de Chile',
    cred3Title: 'Finance Education',
    cred3Body: 'Markets, asset theory & quantitative methods. Completed with maximum academic grade 7.0.',
    footer: '© 2026 SYKRON — All rights reserved.',
  },
  es: {
    avatarSticker: 'FOTO · 2026 · No.01',
    devProgrammer: 'Dev / Programador',
    tagline: 'Diseño y construyo.',
    sectionPrograms: '¡Programas que hice!',
    sectionSkills: 'Competencia Técnica',
    sectionCerts: 'Certificaciones',
    rammyDesc: ['RAMMY', ' libera la memoria que tu PC no está usando, con un visualizador en vivo que muestra tu sistema respirando en tiempo real.'],
    rammyFeatures: [
      ['Visualizador de Latido en Vivo:', 'Un EKG en tiempo real que muestra exactamente qué hace tu RAM cada segundo. Mira el pulso de tu sistema de un vistazo.'],
      ['Limpieza Automática a Tu Manera:', 'RAMMY barre tu memoria automáticamente. Configura tus propios intervalos o deja que reaccione cuando tu PC lo necesite.'],
      ['Rendimiento Invisible:', 'Funciona sin frenarte. Sin picos, sin retraso, sin ruido — solo un PC más rápido.'],
    ],
    tinypicDesc: ['TinyPic', ' es la forma más rápida de capturar cualquier cosa en tu pantalla. Aprieta una tecla, listo — sin configurar, sin complicaciones.'],
    tinypicFeatures: [
      ['Captura de Un Toque:', 'Aprieta una tecla para capturar pantalla completa, una región personalizada o la ventana activa. Lo que necesites, al instante.'],
      ['Archivado Inteligente:', 'Las capturas se guardan solas con nombres personalizados, fechas y contadores — directo a la carpeta que elijas.'],
      ['Vista Previa Flotante:', 'Cada captura aparece en una ventana de vista previa limpia. Edita, guarda, copia o descarta sin romper el flujo.'],
    ],
    githubRepo: 'Repositorio GitHub',
    tabSettings: 'Ajustes',
    tabPreview: 'Vista Previa',
    tinypicSettingsTitle: 'Ajustes TinyPic',
    tinypicPreviewTitle: 'Vista Previa TinyPic',
    rammyDashboard: 'Panel RAMMY',
    skillSystems: 'Desarrollo de Sistemas',
    skillSystemsDesc: 'Ingeniería práctica en C y C++, trabajando con servicios del sistema Win32/SDK de Windows, modelos de hilos y optimización de memoria.',
    skillUI: 'Interfaces Interactivas',
    skillUIDesc: 'Construyendo interfaces de usuario de alta fidelidad dibujadas a medida usando renderizado por hardware, estilos responsivos y micro-interacciones.',
    skillPerf: 'Optimización de Rendimiento',
    skillPerfDesc: 'Optimizando runtimes y cálculos de canvas. Perfilando uso de heap/cache, minimizando carga de assets y asegurando renders consistentes a 60fps.',
    hours162: '162 Horas',
    hours20: '20 Horas',
    grade: 'Nota 7.0',
    issued: 'Emitido 2025',
    cred1Issuer: 'Instituto Profesional INACAP',
    cred1Title: 'Desarrollo de Aplicaciones Iniciales',
    cred1Body: 'Programa integral de formación profesional que cubre prácticas seguras de programación y diseño de aplicaciones orientadas a objetos.',
    cred2Issuer: 'INACAP',
    cred2Title: 'Inventory Bootcamp Tech 2025',
    cred2Body: 'Inventario en terreno en equipo de más de 300 unidades de equipos técnicos universitarios. Aportando a una base de datos compartida con escaneo móvil.',
    cred3Issuer: 'INACAP / Universidad de Chile',
    cred3Title: 'Educación Financiera',
    cred3Body: 'Mercados, teoría de activos y métodos cuantitativos. Completado con la nota académica máxima 7.0.',
    footer: '© 2026 SYKRON — Todos los derechos reservados.',
  },
};

function App() {
  const [activeTab, setActiveTab] = useState('settings');
  const [lang, setLang] = useState('en');
  const t = T[lang];

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
        <div className="chrome-orb orb-7" />
        <div className="chrome-orb orb-8" />
        <div className="chrome-orb orb-9" />
        <div className="chrome-orb orb-10" />
      </div>

      {/* JSR halftone screentone overlay */}
      <div className="bg-halftone" aria-hidden="true" />

      {/* Spray-paint splats — street tag decoration */}
      <div className="splats" aria-hidden="true">
        <span className="splat splat-acid"    style={{ top: '10%', left: '-5%' }} />
        <span className="splat splat-magenta" style={{ top: '44%', right: '-4%' }} />
        <span className="splat splat-orange"  style={{ top: '78%', left: '-6%' }} />
        <span className="splat splat-cyan"    style={{ top: '92%', right: '-5%' }} />
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

      {/* Language toggle */}
      <div className="lang-toggle" role="group" aria-label="Language">
        <button
          type="button"
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >EN</button>
        <span className="lang-sep">/</span>
        <button
          type="button"
          className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
          onClick={() => setLang('es')}
          aria-pressed={lang === 'es'}
        >ESP</button>
      </div>

      {/* Main content */}
      <main className="portfolio-container">

        {/* ==================== HERO ==================== */}
        <section className="section hero-section" id="home">
          <div className="hero-wrapper">
            <div className="hero-kana">シクロン · ポートフォリオ · ニューバージョン 2026</div>

            <div className="avatar-container">
              <img src="avatar.jpg" className="profile-avatar" alt="Sykron" />
              <div className="avatar-glow"></div>
              <span className="avatar-sticker">{t.avatarSticker}</span>
            </div>

            <h1 className="hero-title" data-text="Sykron">Sykron</h1>

            <div className="hero-sticker-row">
              <span className="hero-sticker hero-sticker-jp">開発・プログラマー</span>
              <span className="hero-sticker hero-sticker-en">{t.devProgrammer}</span>
            </div>

            <p className="hero-desc">{t.tagline}</p>
          </div>
        </section>

        {/* ==================== PROGRAMS ==================== */}
        <section className="section" id="projects">
          <h2 className="section-title">
            <span className="section-kana">プログラム · 制作物</span>
            <span className="section-title-text">{t.sectionPrograms}</span>
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
                  <p><strong>{t.rammyDesc[0]}</strong>{t.rammyDesc[1]}</p>
                  <ul className="features-list">
                    {t.rammyFeatures.map(([title, body], i) => (
                      <li key={i}><strong>{title}</strong> {body}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href="https://github.com/sykrondev/RAMMY" target="_blank" rel="noopener noreferrer" className="project-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    {t.githubRepo}
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="visual-frame">
                  <div className="frame-header">
                    <div className="dots-indicator"><span></span><span></span><span></span></div>
                    <span className="frame-title">{t.rammyDashboard}</span>
                  </div>
                  <div className="frame-body">
                    <img src="rammy.jpg" alt="RAMMY Desktop Application Screenshot" className="project-screenshot" style={{display:'block'}} />
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
                  <p><strong>{t.tinypicDesc[0]}</strong>{t.tinypicDesc[1]}</p>
                  <ul className="features-list">
                    {t.tinypicFeatures.map(([title, body], i) => (
                      <li key={i}><strong>{title}</strong> {body}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href="https://github.com/sykrondev/TinyPic" target="_blank" rel="noopener noreferrer" className="project-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    {t.githubRepo}
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="visual-gallery">
                  <div className="gallery-tabs">
                    <button
                      className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
                      onClick={() => setActiveTab('settings')}
                    >{t.tabSettings}</button>
                    <button
                      className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('preview')}
                    >{t.tabPreview}</button>
                  </div>
                  <div className="visual-frame">
                    <div className="frame-header">
                      <div className="dots-indicator"><span></span><span></span><span></span></div>
                      <span className="frame-title">
                        {activeTab === 'settings' ? t.tinypicSettingsTitle : t.tinypicPreviewTitle}
                      </span>
                    </div>
                    <div className="frame-body">
                      {activeTab === 'settings'
                        ? <img src="tinypic_settings.png" alt="TinyPic Settings Interface"    className="project-screenshot" style={{display:'block'}} />
                        : <img src="tinypic_preview.png"  alt="TinyPic Image Preview Screen" className="project-screenshot" style={{display:'block'}} />
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
            <span className="section-title-text">{t.sectionSkills}</span>
          </h2>
          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h5>{t.skillSystems}</h5>
              <p>{t.skillSystemsDesc}</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h5>{t.skillUI}</h5>
              <p>{t.skillUIDesc}</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6"  y1="20" x2="6"  y2="14"/>
                </svg>
              </div>
              <h5>{t.skillPerf}</h5>
              <p>{t.skillPerfDesc}</p>
            </div>

          </div>
        </section>

        {/* ==================== CERTIFICATIONS ==================== */}
        <section className="section" id="credentials">
          <h2 className="section-title">
            <span className="section-kana">認定証 · クレデンシャル</span>
            <span className="section-title-text">{t.sectionCerts}</span>
          </h2>
          <div className="credentials-grid">

            <div className="credential-card">
              <div className="cred-badge badge-blue">{t.hours162}</div>
              <div className="cred-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                </svg>
              </div>
              <div className="cred-content">
                <span className="cred-issuer">{t.cred1Issuer}</span>
                <h5>{t.cred1Title}</h5>
                <p className="cred-details">{t.cred1Body}</p>
                <div className="cred-meta"><span className="cred-date">{t.issued}</span></div>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-badge badge-green">{t.hours20}</div>
              <div className="cred-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="cred-content">
                <span className="cred-issuer">{t.cred2Issuer}</span>
                <h5>{t.cred2Title}</h5>
                <p className="cred-details">{t.cred2Body}</p>
                <div className="cred-meta"><span className="cred-date">{t.issued}</span></div>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-badge badge-blue">
                <span className="cred-star" aria-hidden="true">✦</span>
                {t.grade}
              </div>
              <div className="cred-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <div className="cred-content">
                <span className="cred-issuer">{t.cred3Issuer}</span>
                <h5>{t.cred3Title}</h5>
                <p className="cred-details">{t.cred3Body}</p>
                <div className="cred-meta"><span className="cred-date">{t.issued}</span></div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
