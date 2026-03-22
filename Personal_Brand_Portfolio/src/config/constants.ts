
import { PortfolioData } from './types';
import { IMAGES} from './images';

//Optional Lazy Loading Feature. Toggle when your image count is high for better performance
//Optional Glass Navbar Feature. Toggle to enable/disable glass effect on navbar
export const UI_FEATURES = {
  lazyLoadImages: false,
   enableGlassNavbar: false,
};

//Portfolio Content Data--Headers, About, Services, Projects, FAQs, Contact. 
export const PORTFOLIO_CONTENT: PortfolioData = {
  //Header Section
  name: "Alex Rivera",
  tagline: "I build digital experiences that drive growth.",
  bio: "Brand Designer & Content Strategist helping creative entrepreneurs scale their digital presence through minimal design and high-converting systems.",
  primaryCTA: "Work With Me",
  secondaryCTA: "Download Resume",
  aboutHighlights: [
    "5+ Years of industry experience",
    "Specialized in minimalist aesthetics",
    "Data-driven design approach",
    "Remote-first workflow expert"
  ],
//Includes Section Headers: Navbar, About, Work, Services
  headers: {
    navbar: {
      cta: "Lets Talk",
      navLinks: [
        { name: 'About', id: 'about' },
        { name: 'Work', id: 'work' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact' }
      ]
    },
    about: {
      title: "The Approach",
      description: "Success in the digital landscape isn't just about looking good—it's about intentional systems that convert curiosity into commitment."
    },
    work: {
      title: "Case Studies",
      viewProject: "Inquire Details"
    },
    services: {
      title: "Collaborate",
      cta: "Inquire"
    }
  },
  
  //Skills, Services & Projects
  skills: [
    { name: "Brand Identity", category: "Design" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Content Strategy", category: "Strategy" },
    { name: "Webflow Development", category: "Tech" },
    { name: "SEO Optimization", category: "Marketing" },
    { name: "Social Media Growth", category: "Marketing" }
  ],

  services: [
    {
      title: "Full Brand Identity",
      description: "A complete visual system including logo, color palette, typography, and brand guidelines.",
      price: "From $2,500"
    },
    {
      title: "Conversion-Led Websites",
      description: "High-performing landing pages and portfolios designed to turn visitors into paying clients.",
      price: "From $3,000"
    },
    {
      title: "Content Strategy Audit",
      description: "A deep dive into your current content with a roadmap for 3x engagement growth.",
      price: "From $950"
    }
  ],

  projects: [
    {
      title: "Eco-Luxe Skincare",
      description: "A complete visual identity and e-commerce design for a sustainable beauty brand.",
      image: IMAGES.ecolux,
      tags: ["Branding", "Web Design"]
    },
    {
      title: "Nexus SaaS App",
      description: "UI/UX design for a productivity dashboard focusing on minimalist navigation.",
      image: IMAGES.saas,
      tags: ["UI/UX", "Product"]
    },
    {
      title: "The Creative Ledger",
      description: "Strategy and design for a popular weekly newsletter for independent artists.",
      image: IMAGES.newsletter,
      tags: ["Strategy", "Newsletter"]
    }
  ],

  //Trust Signals & FAQs
  metrics: [
    { label: "Successful Projects", value: "150+" },
    { label: "Client Retention Rate", value: "95%" },
    { label: "Countries Reached", value: "12+" },
    { label: "Community Follows", value: "50k+" }
  ],

  //FAQ Section
  faqTitle: "Clarifying Everything",
  faqs: [
    {
      question: "What is your typical project timeline?",
      answer: "Most branding projects take 4-6 weeks, while landing pages can be completed in 2-3 weeks depending on complexity."
    },
    {
      question: "Do you offer monthly retainers?",
      answer: "Yes, I offer strategic retainers for ongoing design and content support for established businesses."
    },
    {
      question: "What is your payment process?",
      answer: "I typically require a 50% deposit to secure your spot in my calendar, with the balance due upon project completion."
    }
  ],

  // --- CONTACT SECTION ---
  contact: {
    title: "Ready to evolve?",
    description: "I work with a limited number of high-impact clients. If you're ready to scale, let's start the conversation.",
    email: {
      display: "hello@alexrivera.design",       // The text shown on screen
      href: "mailto:hello@alexrivera.design"    // The actual link (you can add ?subject=Hi if you want!)
    },
    cta: {
      calendar: "Book Discovery Call"
    },
    form: {
      name: { label: "Name", placeholder: "John Doe" },
      email: { label: "Email", placeholder: "john@example.com" },
      message: { label: "Message", placeholder: "Tell me about your project goals..." },
      submitBtn: "Send Message"
    },
    success: {
      title: "Message Sent!",
      message: "Thank you for reaching out. I will review your inquiry and get back to you within 24 hours.",
      resetBtn: "Send another message"
    }
  },

  // Social Media Links(Replace with your own)
  socials: {
    x: "https://x.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },

  // Footer Labels & Text
  footer: {
    tagline: "Strategically designed for growth-minded entrepreneurs. Built for conversion and long-term scaling.",
    socialLabel: "Social Presence",
    legalLabel: "Legal",
    copyrightSuffix: "Design Studio"
  }

};
