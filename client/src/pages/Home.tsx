/**
 * Design reminder: Acid Editorial Atelier — use cinematic asymmetry, oversized typography,
 * graphite materiality, Horizon Blue accents, and focused directional energy for Horizon Creative.
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
import { useEffect, useState } from "react";

type InquiryField = "name" | "email" | "budget" | "message";

type InquiryValues = Record<InquiryField, string>;

type InquiryErrors = Partial<Record<InquiryField, string>>;

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
    alt: "A dark editorial art catalog with a blue resin sphere on a graphite surface",
  },
  {
    title: "Lumen Objects",
    type: "E-commerce · Art direction",
    image: "/manus-storage/digitaal-project-motion_b90409e4.jpg",
    alt: "A sculptural lamp and black ceramic object lit with a cool blue light",
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

const initialInquiry: InquiryValues = {
  name: "",
  email: "",
  budget: "select",
  message: "",
};

function validateInquiryField(field: InquiryField, value: string) {
  const trimmedValue = value.trim();

  if (field === "name") {
    return trimmedValue.length >= 2 ? "" : "Please enter your name.";
  }

  if (field === "email") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
      ? ""
      : "Enter a valid email address.";
  }

  if (field === "budget") {
    return value !== "select" ? "" : "Choose an investment range.";
  }

  return trimmedValue.length >= 24
    ? ""
    : "Tell us a little more—at least 24 characters.";
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadState, setLoadState] = useState<"loading" | "exiting" | "done">("loading");
  const [inquiry, setInquiry] = useState<InquiryValues>(initialInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<InquiryField, boolean>>>({});
  const [formStatus, setFormStatus] = useState<"idle" | "ready">("idle");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const startExit = window.setTimeout(() => setLoadState("exiting"), 980);
    const finishLoad = window.setTimeout(() => setLoadState("done"), 1380);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finishLoad);
    };
  }, []);

  const updateInquiry = (field: InquiryField, value: string) => {
    setInquiry((current) => ({ ...current, [field]: value }));
    setFormStatus("idle");

    if (touched[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validateInquiryField(field, value),
      }));
    }
  };

  const touchInquiryField = (field: InquiryField) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({
      ...current,
      [field]: validateInquiryField(field, inquiry[field]),
    }));
  };

  const submitInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = (Object.keys(inquiry) as InquiryField[]).reduce<InquiryErrors>(
      (allErrors, field) => ({ ...allErrors, [field]: validateInquiryField(field, inquiry[field]) }),
      {},
    );
    const invalidField = (Object.keys(nextErrors) as InquiryField[]).find(
      (field) => nextErrors[field],
    );

    setTouched({ name: true, email: true, budget: true, message: true });
    setErrors(nextErrors);

    if (invalidField) {
      document.getElementById(`inquiry-${invalidField}`)?.focus();
      return;
    }

    const subject = encodeURIComponent(`New project enquiry from ${inquiry.name}`);
    const body = encodeURIComponent(
      `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nInvestment range: ${inquiry.budget}\n\nProject notes:\n${inquiry.message}`,
    );
    setFormStatus("ready");
    window.location.href = `mailto:hello@horizoncreative.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`site-shell ${loadState === "done" ? "is-ready" : "is-loading"}`}>
      {loadState !== "done" && (
        <div className={`preloader ${loadState === "exiting" ? "is-exiting" : ""}`} role="status" aria-live="polite">
          <div className="preloader-topline">
            <span>Horizon Creative / Studio</span>
            <span>Loading the vivid future</span>
          </div>
          <div className="preloader-core">
            <img className="preloader-mark" src="/manus-storage/horizon-creative-logo_b60d3219.png" alt="" />
            <p>Making the difficult<br /><em>feel inevitable.</em></p>
          </div>
          <div className="preloader-bottomline">
            <div className="preloader-track"><span /></div>
            <span>00 — 01</span>
          </div>
        </div>
      )}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Horizon Creative home">
          <img
            className="brand-mark"
            src="/manus-storage/horizon-creative-logo_b60d3219.png"
            alt=""
          />
          <span>Horizon Creative</span>
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
            <p className="hero-kicker">Independent creative agency / 2026</p>
            <h1 id="hero-title">
              <span>Horizon</span>
              <span className="blue-outline">creative</span>
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
            <p className="image-word">HORIZON</p>
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
                Horizon Creative is a small, senior team that turns messy questions into distinct brand worlds and digital work with a clear point of view.
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
            <a className="contact-cta" href="#contact-form">
              Share project details <ArrowDownRight size={25} />
            </a>
            <form className="inquiry-form" id="contact-form" noValidate onSubmit={submitInquiry}>
              <div className={`form-field ${touched.name && errors.name ? "has-error" : ""}`}>
                <label htmlFor="inquiry-name">Your name</label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  value={inquiry.name}
                  onChange={(event) => updateInquiry("name", event.target.value)}
                  onBlur={() => touchInquiryField("name")}
                  autoComplete="name"
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? "inquiry-name-error" : undefined}
                  placeholder="Name / studio"
                />
                {touched.name && errors.name && <p className="form-error" id="inquiry-name-error">{errors.name}</p>}
              </div>
              <div className={`form-field ${touched.email && errors.email ? "has-error" : ""}`}>
                <label htmlFor="inquiry-email">Email address</label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  value={inquiry.email}
                  onChange={(event) => updateInquiry("email", event.target.value)}
                  onBlur={() => touchInquiryField("email")}
                  autoComplete="email"
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? "inquiry-email-error" : undefined}
                  placeholder="you@company.com"
                />
                {touched.email && errors.email && <p className="form-error" id="inquiry-email-error">{errors.email}</p>}
              </div>
              <div className={`form-field ${touched.budget && errors.budget ? "has-error" : ""}`}>
                <label htmlFor="inquiry-budget">Investment range</label>
                <select
                  id="inquiry-budget"
                  name="budget"
                  value={inquiry.budget}
                  onChange={(event) => updateInquiry("budget", event.target.value)}
                  onBlur={() => touchInquiryField("budget")}
                  aria-invalid={Boolean(touched.budget && errors.budget)}
                  aria-describedby={touched.budget && errors.budget ? "inquiry-budget-error" : undefined}
                >
                  <option value="select" disabled>Select a range</option>
                  <option value="Under $10k">Under $10k</option>
                  <option value="$10k – $25k">$10k – $25k</option>
                  <option value="$25k – $50k">$25k – $50k</option>
                  <option value="$50k+">$50k+</option>
                </select>
                {touched.budget && errors.budget && <p className="form-error" id="inquiry-budget-error">{errors.budget}</p>}
              </div>
              <div className={`form-field form-message ${touched.message && errors.message ? "has-error" : ""}`}>
                <label htmlFor="inquiry-message">The interesting part</label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={4}
                  value={inquiry.message}
                  onChange={(event) => updateInquiry("message", event.target.value)}
                  onBlur={() => touchInquiryField("message")}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby={touched.message && errors.message ? "inquiry-message-error" : undefined}
                  placeholder="What are you making, solving, or rethinking?"
                />
                {touched.message && errors.message && <p className="form-error" id="inquiry-message-error">{errors.message}</p>}
              </div>
              <div className="form-submit-row">
                <button className="form-submit" type="submit">
                  Open enquiry <ArrowUpRight size={19} />
                </button>
                <p>We’ll open your email app with the completed brief.</p>
              </div>
              {formStatus === "ready" && <p className="form-success" role="status">Your project brief is ready to send.</p>}
            </form>
          </div>
          <div className="contact-orbit" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>
        </section>
      </main>

      <footer className="site-footer full-bleed footer-animate">
        <a className="brand footer-brand" href="#top">
          <img className="brand-mark" src="/manus-storage/horizon-creative-logo_b60d3219.png" alt="" />
          <span>Horizon Creative</span>
        </a>
        <p>Independent, inquisitive, digital-first.</p>
        <div><a href="#studio">Studio</a><a href="#services">Services</a><a href="#work">Work</a></div>
      </footer>
    </div>
  );
}
