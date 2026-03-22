
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONTENT } from '@/config/constants';
import { UI_FEATURES } from '@/config/constants';
import { FAQ } from '@/config/types';
import { 
  ArrowRight, 
  Download, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Mail,
  Instagram,
  Linkedin,
  Calendar,
  Menu,
  X as CloseIcon
} from 'lucide-react';

// --- Global Navigation Helper ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// --- Sub-components ---

const Section = ({ id, title, children, className = "" }: { id?: string, title?: string, children?: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-6 max-w-7xl mx-auto ${className}`}>
    {title && (
      <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 tracking-tight text-neutral-900 leading-[1.2] text-balance">
        {title}
      </h2>
    )}
    {children}
  </section>
);

// --- Navbar Section ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { headers } = PORTFOLIO_CONTENT;
  useEffect(() => {
  const handleScroll = () => {
    const shouldBeScrolled = window.scrollY > 20;
    setScrolled(prev => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // Destructure navLinks for easier access
  const navLinks = headers.navbar.navLinks;

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? UI_FEATURES.enableGlassNavbar ? 'bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm py-4' : 'bg-white border-b border-neutral-200 shadow-sm py-4' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
        <button 
          onClick={() => scrollToSection('top')}
          className="font-bold text-xl tracking-tighter uppercase hover:opacity-70 transition-opacity cursor-pointer border-none bg-transparent p-0"
          aria-label="Back to top"
        >
          {PORTFOLIO_CONTENT.name}
        </button>

        <div className="hidden md:flex gap-10 text-sm font-semibold text-neutral-700"> {/* Desktop Nav Menu */}
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)} 
              className="hover:text-black transition-colors cursor-pointer border-none bg-transparent p-0"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('contact')} 
            className="hidden sm:block bg-black text-white px-7 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all active:scale-95 cursor-pointer"
          >
            {headers.navbar.cta}
          </button>
          
          <button 
            className="md:hidden p-2 text-black cursor-pointer hover:bg-neutral-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-0 pt-32 bg-white z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="flex flex-col p-8 gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)} 
                className="text-4xl font-black text-left tracking-tighter hover:text-neutral-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-8 border-t border-neutral-100">
              <button 
                onClick={() => handleNavClick('contact')} 
                className="w-full bg-black text-white py-6 text-sm font-bold uppercase tracking-widest shadow-lg"
              >
                {headers.navbar.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
// --- Hero Section ---
const Hero = () => {
  return (
    <Section className="pt-32 pb-16 md:pt-64 md:pb-40">
      <div className="max-w-5xl">
        <h1 className="text-[2.75rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black mb-10 leading-[1.05] tracking-tight md:tracking-tighter text-balance">
          {PORTFOLIO_CONTENT.tagline}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-14 leading-relaxed max-w-2xl font-medium text-pretty">
          {PORTFOLIO_CONTENT.bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-black text-white px-10 py-5 md:py-6 font-bold flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all active:scale-95 cursor-pointer text-lg"
          >
            {PORTFOLIO_CONTENT.primaryCTA} <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => window.print()}
            className="border-2 border-neutral-200 px-10 py-5 md:py-6 font-bold flex items-center justify-center gap-3 hover:border-black transition-all active:scale-95 cursor-pointer bg-white text-lg"
          >
            {PORTFOLIO_CONTENT.secondaryCTA} <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
};

const About = () => {

    const { headers, aboutHighlights, skills } = PORTFOLIO_CONTENT;
  return (
  <Section id="about" title={headers.about.title}>
    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
      <div className="space-y-10">
        <p className="text-2xl md:text-3xl text-neutral-800 leading-snug font-light text-pretty">
          {headers.about.description}
        </p>
        <div className="space-y-6">
          {aboutHighlights.map((item, i) => (
            <div key={i} className="flex items-center gap-5 text-lg font-semibold text-neutral-800">
              <div className="w-7 h-7 bg-neutral-100 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-black" aria-hidden="true" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="p-8 bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold mb-3 block">
              {skill.category}
            </span>
            <span className="text-lg font-bold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
};

const Metrics = () => (
  <div className="bg-neutral-900 text-white py-24 md:py-40">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
      {PORTFOLIO_CONTENT.metrics.map((metric, i) => (
        <div key={i} className="space-y-4">
          <div className="text-6xl md:text-8xl font-black tracking-tighter">{metric.value}</div>
          <div className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold">{metric.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const Work = () => {
const { headers, projects } = PORTFOLIO_CONTENT;
  
  return (
  <Section id="work" title={headers.work.title}>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map((project, i) => (
        <div key={i} className="group block">
          <div 
            className="overflow-hidden mb-8 bg-neutral-200 relative cursor-pointer aspect-[4/3] w-full" 
            onClick={() => scrollToSection('contact')}
          >
            <img 
              src={project.image} 
              alt={`Thumbnail for ${project.title} project`}
              loading={UI_FEATURES.lazyLoadImages ? 'lazy' : 'eager'}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-300">
              <span className="text-white font-bold text-sm tracking-widest uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                {headers.work.viewProject}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-neutral-100 text-neutral-600">
                {tag}
              </span>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-left no-underline text-black hover:text-neutral-600 transition-colors cursor-pointer border-none bg-transparent p-0"
          >
            <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:underline decoration-2 underline-offset-8">{project.title}</h3>
          </button>
          <p className="text-neutral-600 leading-relaxed text-base font-medium text-pretty">{project.description}</p>
        </div>
      ))}
    </div>
  </Section>
);
};
const Services = () => {
  const { headers, services } = PORTFOLIO_CONTENT;
  
  return (
  <Section id="services" title={headers.services.title}>
    <div className="grid md:grid-cols-3 gap-12">
      {services.map((service, i) => (
        <div key={i} className="group p-10 border-2 border-neutral-400 bg-white flex flex-col h-full hover:border-black hover:shadow-2xl transition-all duration-500">
          <h3 className="text-3xl font-black mb-6 tracking-tighter leading-tight">{service.title}</h3>
          <p className="text-neutral-600 mb-12 flex-grow leading-relaxed font-medium text-pretty">{service.description}</p>
          <div className="pt-8 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-2xl font-black">{service.price}</span>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform hover:text-neutral-600 cursor-pointer border-none bg-transparent p-0"
            >
              {headers.services.cta} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
};

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 py-10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group cursor-pointer border-none bg-transparent p-0"
        aria-expanded={isOpen}
      >
        <span className="text-2xl font-bold tracking-tight group-hover:text-neutral-600 transition-colors leading-tight">
          {faq.question}
        </span>
        <div className={`w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black text-white border-black rotate-180' : 'bg-transparent text-black'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed max-w-3xl text-pretty pb-2">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {contact} = PORTFOLIO_CONTENT;  // Destructure contact section data

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // --- Basic JS Validation ---
    const { name, email, message } = formState;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

     if (!nameRegex.test(name)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If message is too long
    if (message.length > 500) {
      alert('Message is too long. Maximum 500 characters allowed.');
      return;
    }
    // ... (rest of your validation checks) ...

    // 2. INTEGRATION POINT: Connect your backend here
    // Example: emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
    // or fetch('https://formspree.io/f/your_id', { method: 'POST', body: ... })

    // --- Form is valid ---
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[1.05]">{contact.title}</h2>
          <p className="text-xl md:text-2xl text-neutral-700 mb-14 font-medium leading-relaxed text-pretty">
            {contact.description}
          </p>
          <div className="space-y-8">
            <a 
              href={contact.email.href} 
              className="flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-bold hover:text-neutral-500 transition-colors group cursor-pointer no-underline text-black break-all"
            >
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-neutral-800 transition-all rounded-full" aria-hidden="true">
                <Mail className="w-7 h-7" />
              </div>
              {contact.email.display}
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-bold hover:text-neutral-500 transition-colors group cursor-pointer border-none bg-transparent p-0 text-left"
            >
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-neutral-800 transition-all rounded-full" aria-hidden="true">
                <Calendar className="w-7 h-7" />
              </div>
              {contact.cta.calendar}
            </button>
          </div>
        </div>

        <div className="relative">
          {isSubmitted ? (
            <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700 w-full">
              <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tighter">{contact.success.title}</h3>
              <p className="text-neutral-500 font-medium mb-10 text-lg leading-relaxed">
                {contact.success.message}
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-black uppercase tracking-widest border-b-2 border-black hover:opacity-60 transition-opacity pb-1"
              >
                {contact.success.resetBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border-2 border-black p-6 md:p-14 space-y-6 md:space-y-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 w-full">
              <div className="space-y-2">
                <label htmlFor="form-name" className="block text-xs font-black uppercase tracking-[0.2em] mb-4">{contact.form.name.label}</label>
                <input 
                  id="form-name"
                  required
                  type="text" 
                  autoComplete="name"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  placeholder={contact.form.name.placeholder}
                  className="w-full bg-neutral-50 border border-neutral-100 py-5 px-6 text-black font-semibold focus:bg-white focus:border-black focus:outline-none transition-all placeholder:text-neutral-350 text-base md:text-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="form-email" className="block text-xs font-black uppercase tracking-[0.2em] mb-4">{contact.form.email.label}</label>
                <input 
                  id="form-email"
                  required
                  type="email" 
                  autoComplete="email"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  placeholder={contact.form.email.placeholder}
                  className="w-full bg-neutral-50 border border-neutral-100 py-5 px-6 text-black font-semibold focus:bg-white focus:border-black focus:outline-none transition-all placeholder:text-neutral-350 text-base md:text-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="form-message" className="block text-xs font-black uppercase tracking-[0.2em] mb-4">{contact.form.message.label}</label>
                <textarea 
                  id="form-message"
                  required
                  maxLength={500}
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  placeholder={contact.form.message.placeholder}
                  className="w-full bg-neutral-50 border border-neutral-100 py-5 px-6 text-black font-semibold focus:bg-white focus:border-black focus:outline-none transition-all resize-none placeholder:text-neutral-350 text-base md:text-lg"
                />
                <div className="text-right text-sm text-neutral-500">
                {formState.message.length} / 500
                </div>
              </div>
              <button type="submit" className="w-full bg-black text-white py-6 md:py-7 font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all active:translate-y-1 cursor-pointer flex items-center justify-center gap-4 text-sm md:text-base">
                {contact.form.submitBtn} <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {

  // Destructure content for cleaner usage
  const { footer, socials, name } = PORTFOLIO_CONTENT;

  return (
  
  <footer className="py-24 md:py-32 px-6 border-t border-neutral-100 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-24">
      <div>
        <button 
          onClick={() => scrollToSection('top')}
          className="font-black uppercase tracking-tighter text-4xl mb-6 block hover:opacity-70 transition-opacity cursor-pointer border-none bg-transparent p-0"
        >
          {PORTFOLIO_CONTENT.name}
        </button>
        <p className="text-neutral-750 text-base max-w-sm font-medium leading-relaxed">
          {footer.tagline}
        </p>
      </div>
      <div className="flex flex-wrap gap-12 md:gap-20">
        <div className="space-y-6">
          <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-700">{footer.socialLabel}</span>
          <div className="flex gap-8 items-center">
            <a href={socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors" aria-label="Visit X profile">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors" aria-label="Visit Instagram profile"><Instagram className="w-7 h-7" /></a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors" aria-label="Visit LinkedIn profile"><Linkedin className="w-7 h-7" /></a>
          </div>
        </div>
        <div className="space-y-6">
          <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-700">{footer.legalLabel}</span>
          <p className="text-base font-bold text-neutral-900 tracking-tight">© {new Date().getFullYear()} {PORTFOLIO_CONTENT.name} {footer.copyrightSuffix}</p>
        </div>
      </div>
    </div>
  </footer>
);
};
export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white antialiased">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Work />
      <Services />
      
      <Section title={PORTFOLIO_CONTENT.faqTitle}>
        <div className="max-w-4xl">
          {PORTFOLIO_CONTENT.faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </Section>

      <Contact />
      <Footer />
    </div>
  );
}
