/**
 * Design reminder: Acid Editorial Atelier — use cinematic asymmetry, oversized typography,
 * graphite materiality, and sparse voltage-lime accents inspired by the supplied reference.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleArrowRight,
  Menu,
  MoveUpRight,
  Plus,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    index: "01",
    title: "Brand systems",
    copy: "Positioning, verbal identity and flexible visual worlds that make the next move obvious.",
    tag: "Strategy / Identity",
  },
  {
    index: "02",
    title: "Digital experiences",
    copy: "High-performing websites and product journeys with editorial clarity in every interaction.",
    tag: "Design / Development",
  },
  {
    index: "03",
    title: "Launch momentum",
    copy: "Campaign ideas and content systems built to turn attention into durable momentum.",
    tag: "Campaign / Content",
  },
];

const projects = [
  {
    title: "Orbital Archive",
    type: "Brand identity · Web direction",
    image: "/manus-storage/digitaal-project-orbit_4195f70e.jpg",
    alt: "A dark editorial art catalog with a lime sphere on a graphite surface",
  },
  {
    title: "Lumen Objects",
    type: "E-commerce · Art direction",
    image: "/manus-storage/digitaal-project-motion_b90409e4.jpg",
    alt: "A sculptural lamp and black ceramic object lit with acid lime light",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-eyebrow">
      <span aria-hidden="true">✦</span>
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Digitaal home">
          <img
            className="brand-mark"
            src="/manus-storage/digitaal-mark_3fe22ea1.png"
            alt=""
          />
          <span>Digitaal</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#studio">Studio <Plus aria-hidden="true" /></a>
          <a href="#services">Services <Plus aria-hidden="true" /></a>
          <a href="#work">Work <Plus aria-hidden="true" /></a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button desktop-search" type="button" aria-label="Search">
            <Search size={18} strokeWidth={1.8} />
          </button>
          <a className="talk-button" href="#contact">
            Let’s talk <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu">
          <a onClick={closeMenu} href="#studio">Studio</a>
          <a onClick={closeMenu} href="#services">Services</a>
          <a onClick={closeMenu} href="#work">Work</a>
          <a onClick={closeMenu} href="#contact">Contact</a>
        </div>
      </header>

      <main id="top">
        <section className="hero full-bleed hero-animate" aria-labelledby="hero-title">
          <div className="hero-aura" aria-hidden="true" />
          <img
            className="hero-sculpture"
            src="/manus-storage/digitaal-hero-sculpture_b766332e.jpg"
            alt=""
          />
          <div className="hero-copy">
            <p className="hero-kicker">Independent digital atelier / 2026</p>
            <h1 id="hero-title">
              <span>Creative</span>
              <span className="lime-outline">digital</span>
              <span className="thin-line">agency</span>
            </h1>
          </div>
          <div className="hero-aside">
            <p>
              We give ambitious businesses a sharper way to show up, move forward and stay remembered.
            </p>
            <div className="hero-links">
              <a href="#work" className="round-link" aria-label="Explore selected work">
                <ArrowDownRight size={23} />
              </a>
              <span>Selected work<br />and new ideas</span>
            </div>
          </div>
          <a className="hero-scroll" href="#studio">
            <span>Scroll to make an entrance</span>
            <ArrowDownRight size={17} />
          </a>
        </section>

        <section className="hero-image-wrap full-bleed image-animate" aria-label="Creative team at work">
          <div className="hero-image">
            <img
              src="/manus-storage/digitaal-team_3132c19c.jpg"
              alt="A diverse creative team gathered around a table reviewing ideas"
            />
            <div className="image-overlay" />
            <p className="image-word">DIGITAAL</p>
            <div className="image-caption">
              <span>01 / built for the vivid future</span>
              <Sparkles size={19} />
            </div>
          </div>
        </section>

        <section className="signal-rail full-bleed rail-animate" aria-label="Creative disciplines">
          <p><span>Made for</span> brands in motion</p>
          <span>Strategy</span>
          <span>Branding</span>
          <span>Digital</span>
          <span>Growth</span>
          <span className="rail-mark">⟲</span>
        </section>

        <section className="studio full-bleed studio-animate" id="studio" aria-labelledby="studio-heading">
          <div className="studio-ornament" aria-hidden="true" />
          <div className="section-side"><SectionEyebrow>About the studio</SectionEyebrow></div>
          <div className="studio-body">
            <h2 id="studio-heading">
              A home for thoughtful moves, bold experiments and
              <em> digital details that hold up.</em>
            </h2>
            <div className="studio-foot">
              <div className="studio-values">
                <p><span>01</span> Curious by default</p>
                <p><span>02</span> Useful in the real world</p>
                <p><span>03</span> Built around people</p>
              </div>
              <p className="body-copy">
                Digitaal is a small, senior team that turns messy questions into distinct brand worlds and digital work with a clear point of view.
              </p>
            </div>
          </div>
        </section>

        <section className="statement full-bleed statement-animate" aria-label="Service introduction">
          <p className="statement-prefix">Every brief needs</p>
          <h2><span>OUR</span> SERVICES</h2>
          <div className="statement-rule" />
        </section>

        <section className="services full-bleed services-animate" id="services" aria-labelledby="services-heading">
          <div className="service-heading">
            <SectionEyebrow>What we bring</SectionEyebrow>
            <h2 id="services-heading">A digital presence that acts like it means it.</h2>
            <p>From first question to the moment people click in, we shape the entire experience.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.index}>
                <span className="service-index">{service.index}</span>
                <div>
                  <p className="service-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
                <a href="#contact" className="service-arrow" aria-label={`Discuss ${service.title}`}>
                  <MoveUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="work full-bleed work-animate" id="work" aria-labelledby="work-heading">
          <div className="work-topline">
            <SectionEyebrow>Selected work</SectionEyebrow>
            <p>Two expressions of the same idea: make the memorable choice.</p>
          </div>
          <div className="work-heading-row">
            <h2 id="work-heading">Case files<br /><em>in focus.</em></h2>
            <a href="#contact" className="text-link">See what we could build <CircleArrowRight size={18} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project project-${index + 1}`} key={project.title}>
                <a href="#contact" className="project-image-wrap" aria-label={`Discuss ${project.title}`}>
                  <img src={project.image} alt={project.alt} />
                  <span className="project-action"><ArrowUpRight size={21} /></span>
                </a>
                <div className="project-meta">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="method full-bleed method-animate" aria-labelledby="method-heading">
          <div>
            <SectionEyebrow>Working together</SectionEyebrow>
            <h2 id="method-heading">Built around an honest exchange.</h2>
          </div>
          <ol>
            <li><span>01</span><p>We listen for the useful tension.</p></li>
            <li><span>02</span><p>We frame the distinctive possibility.</p></li>
            <li><span>03</span><p>We make it real, together.</p></li>
          </ol>
        </section>

        <section className="contact full-bleed contact-animate" id="contact" aria-labelledby="contact-heading">
          <div className="contact-inner">
            <SectionEyebrow>Start a useful conversation</SectionEyebrow>
            <h2 id="contact-heading">Bring us the<br /><em>difficult brief.</em></h2>
            <a className="contact-cta" href="mailto:hello@digitaal.studio?subject=New%20project%20enquiry">
              hello@digitaal.studio <ArrowUpRight size={25} />
            </a>
          </div>
          <div className="contact-orbit" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>
        </section>
      </main>

      <footer className="site-footer full-bleed footer-animate">
        <a className="brand footer-brand" href="#top">
          <img className="brand-mark" src="/manus-storage/digitaal-mark_3fe22ea1.png" alt="" />
          <span>Digitaal</span>
        </a>
        <p>Independent, inquisitive, digital-first.</p>
        <div><a href="#studio">Studio</a><a href="#services">Services</a><a href="#work">Work</a></div>
      </footer>
    </div>
  );
}
