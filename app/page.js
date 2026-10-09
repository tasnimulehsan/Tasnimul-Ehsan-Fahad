import LiquidScene from "../components/LiquidScene";
import PortfolioEffects from "../components/PortfolioEffects";

export default function Home() {
  return (
    <>
      <PortfolioEffects />
      <div className="noise" aria-hidden="true"></div>
    <header className="site-header">
      <a className="wordmark magnetic" href="#top" aria-label="Fahad home">
        <span className="wordmark-mark"><i></i><i></i><i></i></span>
        <span>fahad<span className="wordmark-dot">.</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <span className="availability"><span className="status-dot"></span>Available for select work</span>
        <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </header>

    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow reveal"><span className="eyebrow-line"></span>Creative developer / Dhaka → everywhere</p>
          <h1 className="hero-title reveal reveal-delay-1">Interfaces<br /><em>with a pulse.</em></h1>
          <p className="hero-intro reveal reveal-delay-2">I build digital experiences that feel less like software and more like a place you want to stay.</p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-primary magnetic" href="#work"><span>Explore selected work</span><span className="button-arrow">↘</span></a>
            <a className="text-link" href="#about">A little about me <span>↗</span></a>
          </div>
          <div className="hero-footnote reveal reveal-delay-4"><span className="scroll-mark"></span><span>Scroll to wander</span></div>
        </div>
        <div className="hero-stage" aria-label="Interactive generative glass object">
          <div className="stage-meta stage-meta-top"><span>01 / 04</span><span>WebGL study no. 01</span></div>
          <LiquidScene />
          <div className="stage-orbit-label orbit-label-a">soft<br />systems</div>
          <div className="stage-orbit-label orbit-label-b">made<br />human</div>
          <div className="stage-crosshair" aria-hidden="true"><span></span><span></span></div>
          <div className="stage-meta stage-meta-bottom"><span>Drag to orbit</span><span className="stage-signal"><i></i><i></i><i></i><i></i><i></i></span></div>
        </div>
        <div className="hero-side-note">Selected note<br /><span>Volume 02 / 2024—25</span></div>
      </section>

      <section className="statement section-shell reveal-on-scroll">
        <div className="section-index">/ 00</div>
        <div className="statement-body">
          <p className="eyebrow">A point of view</p>
          <h2>Technology should<br /><span>leave a feeling.</span></h2>
          <p className="statement-detail">Not louder. Not busier. Just more considered. I care about the space between the click and the response — the tiny details that make a digital thing feel unmistakably alive.</p>
        </div>
        <div className="statement-sigil" aria-hidden="true"><span>✳</span></div>
      </section>

      <section className="work section-shell reveal-on-scroll" id="work">
        <div className="section-heading">
          <div><div className="section-index">/ 01</div><p className="eyebrow">Selected work</p></div>
          <p className="section-caption">A few places where<br />curiosity met a deadline.</p>
        </div>
        <div className="project-list">
          <a className="project-card project-card-featured magnetic-card" href="https://www.google.com/search?q=harbor+design+studio" target="_blank" rel="noreferrer">
            <div className="project-visual visual-harbor"><div className="visual-glow"></div><div className="visual-lines"></div><div className="visual-cursor"></div><span className="visual-tag">Product / 01</span><span className="visual-year">2025</span></div>
            <div className="project-info"><div><p className="project-kicker">Harbor / platform for good ideas</p><h3>A calmer way to make<br /><em>complex things.</em></h3></div><span className="project-arrow">↗</span></div>
          </a>
          <div className="project-row">
            <a className="project-card magnetic-card" href="https://www.google.com/search?q=prism+creative+technology" target="_blank" rel="noreferrer">
              <div className="project-visual visual-prism"><div className="prism-orb"></div><div className="prism-grid"></div><span className="visual-tag">Identity / 02</span><span className="visual-year">2024</span></div>
              <div className="project-info"><div><p className="project-kicker">Prism / the future is softer</p><h3>Branding a new<br /><em>kind of energy.</em></h3></div><span className="project-arrow">↗</span></div>
            </a>
            <a className="project-card magnetic-card" href="https://www.google.com/search?q=monument+digital+experience" target="_blank" rel="noreferrer">
              <div className="project-visual visual-monument"><div className="monument-frame"></div><div className="monument-sun"></div><span className="visual-tag">Experience / 03</span><span className="visual-year">2024</span></div>
              <div className="project-info"><div><p className="project-kicker">Monument / city as interface</p><h3>Finding the pulse<br /><em>in public space.</em></h3></div><span className="project-arrow">↗</span></div>
            </a>
          </div>
        </div>
        <div className="work-footer"><span>03 / 03 featured projects</span><a className="text-link" href="mailto:hello@fahad.studio">Have a project in mind? <span>↗</span></a></div>
      </section>

      <section className="about section-shell reveal-on-scroll" id="about">
        <div className="section-heading">
          <div><div className="section-index">/ 02</div><p className="eyebrow">A little context</p></div>
          <p className="section-caption">The work is the<br />shortest biography.</p>
        </div>
        <div className="about-layout">
          <div className="about-lede"><p>Hey, I’m Fahad — a creative developer who likes to make the invisible feel tangible.</p><p>I work across interface, identity, and the odd corner of 3D. My sweet spot is translating a sharp idea into an experience people can feel in their fingertips.</p><a className="button button-outline magnetic" href="mailto:hello@fahad.studio"><span>Say hello</span><span className="button-arrow">↗</span></a></div>
          <div className="about-details"><div className="detail-block"><span className="detail-label">Currently</span><p>Independent creative developer<br />Partnering with teams who care.</p></div><div className="detail-block"><span className="detail-label">Capabilities</span><p>Creative direction / Art direction<br />WebGL / Three.js / Motion<br />Design systems / Prototyping</p></div><div className="detail-block"><span className="detail-label">Elsewhere</span><p><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><br /><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><br /><a href="mailto:hello@fahad.studio">Email ↗</a></p></div></div>
        </div>
        <div className="about-footer"><span>Based in Dhaka, working everywhere</span><span>© 2025 Fahad</span></div>
      </section>

      <section className="contact section-shell reveal-on-scroll" id="contact">
        <div className="contact-orb" aria-hidden="true"><span></span><span></span><span></span></div>
        <div className="section-index">/ 03</div>
        <p className="eyebrow">Now let’s make a good one</p>
        <h2>Have a feeling<br /><em>about something?</em></h2>
        <a className="contact-link magnetic" href="mailto:hello@fahad.studio">hello@fahad.studio <span>↗</span></a>
        <div className="contact-meta"><span>Open for select collaborations</span><span>Dhaka · UTC+6</span></div>
      </section>
    </main>

    <footer className="site-footer section-shell"><a className="wordmark" href="#top"><span className="wordmark-mark"><i></i><i></i><i></i></span><span>fahad<span className="wordmark-dot">.</span></span></a><span>Built with intention & a little WebGL</span><a href="#top" className="back-top">Back to top ↑</a></footer>
    <div className="cursor-dot" aria-hidden="true"></div>
    <div className="cursor-ring" aria-hidden="true"></div>
    <div className="mobile-menu" aria-hidden="true"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><span>Available for select work</span></div>
    <div className="toast" role="status" aria-live="polite"></div>
    </>
  );
}
