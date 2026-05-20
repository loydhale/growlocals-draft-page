import React from 'react';
import { createRoot } from 'react-dom/client';
import founderStage from './assets/founder-stage.jpg';
import heroAsset from './assets/prime-iv-hero-gpt-image2.png';
import ecosystemReference from './assets/clean-ecosystem-flow-diagram.png';
import leadJourneyPipeline from './assets/lead-journey-pipeline-desktop.png';

import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  BarChart3,
  Bell,
  Bot,
  Filter,
  PhoneCall,
  Send,
  Shield,
  Zap,
  Clock3,
  DollarSign,
  FileText,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  MousePointerClick,
  RefreshCcw,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
} from 'lucide-react';
import './styles.css';

const paymentUrl = '#start-onboarding';
const demoUrl = '#schedule-demo';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <LeakSection />
      <EcosystemSection />
      <AutomationLoop />
      <BeforeAfterSection />
      <InstallSection />
      <FounderSection />
      <OnboardingSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Prime IV FP’s Special Offer home">
        Prime IV FP’s Special Offer
      </a>
      <nav aria-label="Page navigation">
        <a href="#loop">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href={demoUrl}>Demo</a>
      </nav>
    </header>
  );
}

function GrowLocalsLockup({ compact = false }) {
  return (
    <div className={`growlocals-lockup ${compact ? 'compact' : ''}`}>
      <div className="gl-brand-mark gl-pin-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="gl-pin-svg" focusable="false">
          <path d="M12 2.25c-3.72 0-6.75 3.03-6.75 6.75 0 5.05 6.75 12.75 6.75 12.75S18.75 14.05 18.75 9c0-3.72-3.03-6.75-6.75-6.75Z" fill="currentColor" />
          <circle cx="12" cy="9" r="2.45" fill="white" />
        </svg>
      </div>
      <strong>GrowLocals.ai</strong>
      <span className="lockup-divider" aria-hidden="true" />
      <div className="inside-crm">
        <span>Inside</span>
        <strong>ReviveSalesCRM</strong>
      </div>
      <span className="lockup-highlight" aria-hidden="true" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <GrowLocalsLockup />
        <p className="eyebrow hero-lead-pill"><Sparkles size={15} aria-hidden="true" /> New Prime IV Lead</p>
        <h1>Turn New Customer Leads Into Booked Visits And Google Reviews</h1>
        <p className="hero-subhead">
          GrowLocals.ai installs a Prime IV-specific AI follow-up system inside your current ReviveSalesCRM account. It carries leads from first reply to a booked visit directly on your Booker calendar, then continues post-visit nurture and Google review requests without your front desk chasing every lead manually.
        </p>
        <div className="cta-row" aria-label="Primary actions">
          <a className="button button-primary" href={paymentUrl}>
            Start Onboarding Now <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={demoUrl}>Schedule A Demo First</a>
        </div>
        <div className="trust-strip" aria-label="Offer reassurance">
          <TrustItem icon={<ShieldCheck />} title="By GrowLocals.ai" />
          <TrustItem icon={<UsersRound />} title="Staff stays in control" />
          <TrustItem icon={<CalendarCheck />} title="ReviveSalesCRM + Booker" />
          <TrustItem icon={<DollarSign />} title="$297/mo after activation" />
        </div>
      </div>
      <HeroLoop />
    </section>
  );
}

function TrustItem({ icon, title }) {
  return (
    <div className="trust-item">
      {React.cloneElement(icon, { size: 19, 'aria-hidden': true })}
      <span>{title}</span>
    </div>
  );
}

function HeroLoop() {
  return (
    <div className="hero-visual image-hero-asset" aria-label="Prime IV AI booking assistant workflow visual">
      <img
        src={heroAsset}
        alt="GrowLocals.ai AI Booking Assistant workflow showing ReviveSalesCRM, Booker appointment confirmation, reminders, and review requests"
      />
    </div>
  );
}

function StatusCard({ icon, title, text }) {
  return (
    <div className="status-card">
      <div className="status-icon">{React.cloneElement(icon, { size: 20, 'aria-hidden': true })}</div>
      <div><strong>{title}</strong><span>{text}</span></div>
    </div>
  );
}

function MiniProcess({ icon, title }) {
  return (
    <div className="mini-process-item">
      <div>{React.cloneElement(icon, { size: 20, 'aria-hidden': true })}</div>
      <span>{title}</span>
    </div>
  );
}

function LeakSection() {
  const leaks = [
    ['No timely follow-up', 'Claims come in, but leads do not hear back while intent is still high.', <Clock3 />],
    ['Inconsistent process', 'Responses depend on who sees the lead and how busy the desk is.', <Route />],
    ['Manual workload', 'Your team is helping patients while new leads need next steps.', <FileText />],
    ['No review follow-through', 'Happy visitors leave without the right nurture or review request.', <Star />],
  ];
  return (
    <section className="section leak-section">
      <div className="center-copy narrow">
        <p className="eyebrow">The actual leak</p>
        <h2>Most lost Prime IV leads are lost after the claim.</h2>
        <p>
          The ad worked. The offer got attention. The problem is what happens next, especially when your staff is busy and the lead needs quick, consistent follow-up.
        </p>
      </div>
      <div className="leak-grid">
        {leaks.map(([title, text, icon]) => (
          <article className="leak-card" key={title}>
            <div className="icon-bubble">{React.cloneElement(icon, { size: 22, 'aria-hidden': true })}</div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section className="section ecosystem-section">
      <div className="section-split compact">
        <div>
          <p className="eyebrow">Ecosystem flow</p>
          <h2>Your booking assistant sits in the middle of the whole lead journey.</h2>
        </div>
        <p className="section-lede">
          Instead of adding another disconnected tool, GrowLocals.ai connects the parts Prime IV already depends on: lead sources, ReviveSalesCRM, Booker, reminders, reviews, and reactivation.
        </p>
      </div>
      <div className="ecosystem-reference-card">
        <img src={ecosystemReference} alt="Ecosystem flow diagram showing AI Booking Assistant connected to Meta Ads, Google Ads, SMS, website chat, appointments booked, ReviveSalesCRM, forms, reviews, and reactivation" />
      </div>
    </section>
  );
}


function AutomationLoop() {
  const steps = [
    ['New Lead', 'New lead comes from ad, form, chat, or call.', <PhoneCall />],
    ['AI Follows Up', 'Fast SMS/chat nurture inside ReviveSalesCRM.', <Bot />],
    ['Qualify Lead', 'AI answers questions and builds trust.', <Filter />],
    ['Book Appointment', 'Lead gets guided to the best Booker time.', <CalendarCheck />],
    ['Send Reminder', 'Automated reminders reduce no-shows.', <Bell />],
    ['Visit Completed', 'Appointment happens and staff stays in control.', <CheckCircle2 />],
    ['Review Request', 'Google review request goes out after the visit.', <Star />],
    ['Reactivation', 'Past leads can be followed up again later.', <RefreshCcw />],
  ];
  return (
    <section className="section loop-section lead-pipeline-section" id="loop">
      <div className="lead-pipeline-shell">
        <div className="lead-pipeline-head">
          <p className="eyebrow">Lead journey timeline</p>
          <h2>From new lead to booked visit, reminder, review, and reactivation.</h2>
          <p>
            This is the operational path your team gets: not a vague chatbot, but a ReviveSalesCRM workflow that keeps each lead moving toward a Booker appointment and follow-up.
          </p>
        </div>

        <div className="pipeline-image-wrap" aria-label="Lead journey pipeline desktop visual">
          <img src={leadJourneyPipeline} alt="Lead journey pipeline from new lead to AI follow-up, qualification, booking, reminder, visit completed, review request, and reactivation" />
        </div>

        <div className="pipeline-track" aria-label="Lead journey pipeline mobile timeline">
          <svg className="pipeline-connector" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="connector-wide" d="M6.25 0 H93.75" />
            <path className="connector-wrap" d="M12.5 0 H87.5 V50 H12.5" />
          </svg>
          {steps.map(([title, text, icon], index) => (
            <article className="pipeline-card" key={title}>
              <span className="pipeline-step-num">{index + 1}</span>
              <div className="pipeline-icon">{React.cloneElement(icon, { size: 26, 'aria-hidden': true })}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="pipeline-summary">
          <div className="summary-icon"><BarChart3 size={28} aria-hidden="true" /></div>
          <div>
            <strong>Every step is automated. Every lead is tracked. Every opportunity protected.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}


function BeforeAfterSection() {
  const before = ['Missed calls', 'Slow response times', 'Leads go cold', 'Front desk overwhelmed', 'Lost revenue'];
  const after = ['Instant AI replies', '24/7 lead nurturing', 'More appointments', 'Front desk runs smoothly', 'More reviews'];
  return (
    <section className="section before-after-section">
      <div className="center-copy narrow">
        <p className="eyebrow">Before / after</p>
        <h2>Stop manually chasing leads. Let AI handle the follow-up.</h2>
      </div>
      <div className="comparison-grid">
        <ComparisonCard label="Before" tone="bad" title="Manual process" items={before} />
        <ComparisonCard label="After" tone="good" title="With AI booking assistant" items={after} />
      </div>
    </section>
  );
}

function ComparisonCard({ label, title, items, tone }) {
  return (
    <article className={`comparison-card ${tone}`}>
      <span className="comparison-label">{label}</span>
      <h3>{title}</h3>
      <div className="comparison-funnel" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{tone === 'good' ? <CheckCircle2 size={18} /> : <span className="x-mark">×</span>}{item}</li>
        ))}
      </ul>
    </article>
  );
}

function InstallSection() {
  const props = [
    ['Prime IV-specific workflow', 'Built around Prime IV lead follow-up, ReviveSalesCRM, Booker scheduling, and post-visit nurture.'],
    ['AI follow-up', 'Handles repetitive replies while your staff stays focused on patients.'],
    ['Pipeline movement handled', 'AI and software automations move leads through the CRM pipeline, so your team is not manually tracking every stage.'],
    ['ReviveSalesCRM + Booker', 'Integrates into your current ReviveSalesCRM account and guides qualified leads toward your Booker calendar.'],
    ['Post-visit review path', 'Triggers post-visit nurture and Google review requests without relying on manual reminders.'],
  ];
  return (
    <section className="section install-section">
      <div className="center-copy">
        <p className="eyebrow">What gets installed</p>
        <h2>Give your team a cleaner acquisition system without building one yourself.</h2>
      </div>
      <div className="value-grid">
        {props.map(([title, text]) => (
          <article className="value-card" key={title}>
            <BadgeCheck size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


function FounderSection() {
  return (
    <section className="section founder-section" id="founder">
      <div className="founder-card">
        <div className="founder-media">
          <img src={founderStage} alt="Loyd Hale on stage receiving a business growth award" />
        </div>
        <div className="founder-copy">
          <p className="eyebrow">About the founder</p>
          <h2>I built this because busy front desks lose good leads.</h2>
          <p>
            I built this customer follow-up system because I’ve seen the same problem across healthcare and wellness businesses: owners spend money to create demand, but good leads still fall through the cracks when follow-up depends entirely on a busy front desk.
          </p>
          <p>
            I’ve owned and operated healthcare clinics for more than 10 years, helped grow businesses to $70M+ in revenue, and worked hands-on with the details that drive growth: speed-to-lead, scheduling, staff handoffs, nurture, reviews, and reactivation.
          </p>
          <p>
            Today, our AI software is used by 300+ small businesses, and we’ve already tested and refined this system across 50+ Prime IV locations. That real-world usage shaped this Prime IV-specific customer follow-up system.
          </p>
          <p>
            GrowLocals.ai is the team behind the system, but this is not a generic marketing agency offer. It is a done-for-you system for offer requests, SMS/chat nurture, ReviveSalesCRM setup, Booker calendar scheduling, post-visit follow-up, Google review requests, and reactivation.
          </p>
          <div className="founder-proof">
            <span><Trophy size={18} aria-hidden="true" /> 10+ years operating healthcare clinics</span>
            <span><Trophy size={18} aria-hidden="true" /> 300+ small businesses using our AI software</span>
            <span><Trophy size={18} aria-hidden="true" /> Tested across 50+ Prime IV locations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OnboardingSection() {
  return (
    <section className="section onboarding-section">
      <div className="offer-panel">
        <div>
          <p className="eyebrow">What happens after you start</p>
          <h2>Start onboarding now. We set it up, test it, then train your team.</h2>
          <p>
            After you start onboarding, our team manually configures your CRM, the sync software, and our AI assistant. We connect the Booker scheduling path, test the AI, test the automations, test the sync to Booker, and prepare your activation call.
          </p>
          <p>
            Activation can take up to 14 days depending on current setup volume. Once ready, we walk you and your staff through how it works, then support continues through the training community and scheduled support calls.
          </p>
        </div>
        <div className="mini-steps" aria-label="Onboarding steps">
          <div><span>1</span> Start onboarding and complete intake</div>
          <div><span>2</span> We configure your CRM, the sync software, and our AI assistant</div>
          <div><span>3</span> We test the AI, the automations, and the sync to Booker</div>
          <div><span>4</span> Activation call and staff training</div>
          <div><span>5</span> Community training and support calls</div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="pricing-card">
        <div className="pricing-copy">
          <p className="eyebrow">Prime IV FP’s Special Offer</p>
          <h2>Start onboarding for $497.</h2>
          <p>
            Your setup fee begins the Prime IV AI follow-up workflow buildout for your location. Ongoing access and support is $297/month after activation.
          </p>
          <ul>
            <li><CheckCircle2 /> AI follow-up workflow setup</li>
            <li><CheckCircle2 /> CRM, Autogration sync, and Booker scheduling setup</li>
            <li><CheckCircle2 /> Post-visit nurture and review request path</li>
          </ul>
        </div>
        <aside className="checkout-box" aria-label="Pricing summary">
          <span className="price-label">Setup</span>
          <strong>$497</strong>
          <span className="price-sub">then $297/mo after activation</span>
          <a className="button button-primary full" href={paymentUrl}>Start Onboarding Now <ArrowRight size={18} aria-hidden="true" /></a>
          <a className="quiet-link" href={demoUrl}>Schedule a demo first</a>
        </aside>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    ['Is this just an AI chatbot?', 'No. AI follow-up is one part of the system. GrowLocals.ai installs the workflow inside your CRM, including Autogration sync, Booker scheduling handoff, staff routing, post-visit nurture, and Google review requests.'],
    ['How does Booker scheduling work?', 'We use your CRM calendar structure and Autogration to sync availability and appointments with Booker. During setup, we test the AI, the automations, and the sync so leads can be guided toward real Booker appointment times.'],
    ['Does this replace my front desk?', 'No. Staff stays in control. The system handles repetitive follow-up and gives your team clearer next steps.'],
    ['Does it include AI voice calling?', 'Not yet for Prime IV locations. Our broader system supports voice, and we are working on introducing it here. If/when voice is added, it would include a per-minute usage charge and we would discuss it with you before turning it on.'],
    ['Is this only for Prime IV locations?', 'Yes. This offer page is for Prime IV locations only, and GrowLocals.ai is the provider behind the system.'],
    ['When does the monthly fee start?', 'The monthly fee is $297/month after activation.'],
    ['Is there a long-term contract?', 'No. It is month to month. We just ask for 30 days notice if you decide to cancel.'],
    ['Are results guaranteed?', 'No. The system improves the follow-up process, but results depend on lead quality, staff adoption, availability, and location execution.'],
  ];
  return (
    <section className="section faq-section" id="schedule-demo">
      <div className="center-copy narrow">
        <p className="eyebrow">Questions owners ask</p>
        <h2>Clear answers before you start onboarding.</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section final-cta" id="start-onboarding">
      <Sparkles size={30} aria-hidden="true" />
      <h2>Ready to stop losing leads after the offer claim?</h2>
      <p>
        Start onboarding for the Prime IV AI follow-up workflow. Add your final payment link when ready and this page is ready to connect to your funnel.
      </p>
      <div className="cta-row center">
        <a className="button button-primary" href={paymentUrl}>Start Onboarding Now <ArrowRight size={18} aria-hidden="true" /></a>
        <a className="button button-secondary light" href={demoUrl}>Schedule A Demo First</a>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
