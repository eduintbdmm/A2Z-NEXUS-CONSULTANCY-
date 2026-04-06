import {
  Code, Brain, Scale, TrendingUp, Landmark, GraduationCap, Shield, Settings,
  Monitor, Smartphone, Database, Cloud, Bot, MessageSquare, FileText, BarChart3,
  Building2, Stethoscope, Store, Factory, Truck, Briefcase, Gavel, Users,
  Globe, CreditCard, PieChart, BookOpen, Plane, Lock, Eye, Cpu,
  Zap, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin,
  Rocket, Target, Layers, GitBranch, HeartPulse, Wheat, Home, Banknote
} from 'lucide-react';

// ============================================
// SERVICE VERTICALS
// ============================================

export const serviceVerticals = [
  {
    id: 'software',
    title: 'Digital & Software Solutions',
    shortTitle: 'Software',
    description: 'Enterprise-grade web, mobile, and SaaS platforms built for scale.',
    icon: Code,
    color: '#6366f1',
    href: '/services#software',
    services: [
      'Corporate Website Development', 'eCommerce Platforms', 'Custom Web Applications',
      'Mobile App Development', 'SaaS Products', 'ERP Systems', 'CRM Systems',
      'HRM Software', 'POS Software', 'Inventory Management', 'School/College ERP',
      'Hospital Management Systems', 'NGO Management Systems', 'Real Estate Software',
      'Logistics & Delivery Systems', 'Restaurant Management', 'API Integrations',
      'Cloud Deployment', 'DevOps Solutions'
    ]
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    shortTitle: 'AI Solutions',
    description: 'Intelligent AI agents, chatbots, and workflow automation that transform operations.',
    icon: Brain,
    color: '#8b5cf6',
    href: '/ai-solutions',
    services: [
      'AI Chatbot Development', 'Multilingual Bangla-English Agents', 'Customer Support Bots',
      'Sales AI Agents', 'WhatsApp Automation', 'Call Center AI', 'Document Intelligence',
      'OCR Automation', 'Workflow Automation', 'AI Reporting Systems', 'AI Legal Drafting',
      'Recruitment AI', 'Finance AI Dashboards', 'Predictive Analytics',
      'AI Voice Assistants', 'Internal Business Copilots'
    ]
  },
  {
    id: 'legal',
    title: 'Legal & Compliance',
    shortTitle: 'Legal',
    description: 'Corporate legal services, IP protection, and regulatory compliance advisory.',
    icon: Scale,
    color: '#f59e0b',
    href: '/advisory#legal',
    services: [
      'Corporate Legal Services', 'Contracts & Agreements', 'IP / Trademark Advisory',
      'Foreign Investment Legal Compliance', 'Company Registration', 'Tax Consultation',
      'VAT Advisory', 'Labor Law Support', 'Arbitration Assistance', 'Regulatory Filings'
    ]
  },
  {
    id: 'investment',
    title: 'Investment & Financial Advisory',
    shortTitle: 'Investment',
    description: 'Foreign investor onboarding, BIDA advisory, and strategic financial guidance.',
    icon: TrendingUp,
    color: '#10b981',
    href: '/advisory#investment',
    services: [
      'Foreign Investor Onboarding', 'BIDA Advisory', 'Feasibility Reports',
      'Market Entry Strategy', 'Financial Projections', 'Due Diligence',
      'Investment Assessment', 'Portfolio Analysis', 'M&A Advisory',
      'Capital Raise Support', 'Banking Documentation', 'International Remittance Consulting'
    ]
  },
  {
    id: 'banking',
    title: 'Banking & Fintech',
    shortTitle: 'Fintech',
    description: 'Digital banking systems, wallet solutions, and stock market analytics platforms.',
    icon: Landmark,
    color: '#06b6d4',
    href: '/services#banking',
    services: [
      'Digital Banking Systems', 'Fintech Apps', 'Wallet Solutions',
      'Payment Gateway Integration', 'Brokerage Dashboards', 'Stock Analytics Platforms',
      'Portfolio Management Tools', 'Financial Reporting Systems',
      'Loan Management Systems', 'Treasury Software'
    ]
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad & Global Advisory',
    shortTitle: 'Study Abroad',
    description: 'University admissions, scholarship advisory, and immigration support worldwide.',
    icon: GraduationCap,
    color: '#f43f5e',
    href: '/study-abroad',
    services: [
      'University Admissions', 'SOP Writing', 'Scholarship Advisory',
      'Visa Guidance', 'Immigration Consultancy', 'Student Financial Planning', 'Career Mapping'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    shortTitle: 'Cybersecurity',
    description: 'Penetration testing, vulnerability assessments, and enterprise security audits.',
    icon: Shield,
    color: '#ef4444',
    href: '/services#cybersecurity',
    services: [
      'Penetration Testing', 'Vulnerability Assessment', 'Cloud Security',
      'Compliance Security Audit', 'SOC Dashboards', 'Employee Awareness Training'
    ]
  },
  {
    id: 'management',
    title: 'Business Consulting & Management',
    shortTitle: 'Management',
    description: 'Operational consulting, digital transformation, and enterprise process optimization.',
    icon: Settings,
    color: '#a855f7',
    href: '/services#management',
    services: [
      'Startup Consulting', 'Business Registration Guidance', 'Operational Consulting',
      'Process Optimization', 'Administration Systems', 'SOP Documentation',
      'Business Workflow Design', 'Internal Policy Frameworks', 'Governance Consulting',
      'Digital Transformation', 'Risk Management', 'HR Policy Development', 'Management Dashboards'
    ]
  }
];

// ============================================
// INDUSTRIES
// ============================================

export const industries = [
  { name: 'Banking & Finance', icon: Landmark, color: '#6366f1' },
  { name: 'Government & Public', icon: Building2, color: '#8b5cf6' },
  { name: 'Education', icon: GraduationCap, color: '#06b6d4' },
  { name: 'Healthcare', icon: Stethoscope, color: '#10b981' },
  { name: 'Real Estate', icon: Home, color: '#f59e0b' },
  { name: 'Manufacturing', icon: Factory, color: '#f43f5e' },
  { name: 'Retail & eCommerce', icon: Store, color: '#a855f7' },
  { name: 'Startups', icon: Rocket, color: '#22d3ee' },
  { name: 'Law Firms', icon: Gavel, color: '#fbbf24' },
  { name: 'Logistics & Export', icon: Truck, color: '#34d399' },
];

// ============================================
// PROCESS STEPS
// ============================================

export const processSteps = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We start by deeply understanding your business goals, challenges, and vision through comprehensive research and stakeholder interviews.',
    icon: Target,
  },
  {
    step: 2,
    title: 'Strategy',
    description: 'Our team crafts a tailored strategic roadmap, identifying the optimal solutions, technologies, and approaches for your unique needs.',
    icon: Layers,
  },
  {
    step: 3,
    title: 'Architecture',
    description: 'We design robust system architectures and detailed technical blueprints that ensure scalability, security, and performance.',
    icon: GitBranch,
  },
  {
    step: 4,
    title: 'Development',
    description: 'Agile development sprints bring your solution to life with continuous testing, iteration, and quality assurance at every stage.',
    icon: Code,
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'Battle-tested deployment pipelines ensure smooth, zero-downtime launches with comprehensive monitoring and backup systems.',
    icon: Rocket,
  },
  {
    step: 6,
    title: 'Ongoing Support',
    description: 'Dedicated support teams provide 24/7 monitoring, maintenance, and continuous optimization to keep your systems running flawlessly.',
    icon: HeartPulse,
  },
];

// ============================================
// CASE STUDIES
// ============================================

export const caseStudies = [
  {
    id: 'ai-cost-reduction',
    title: 'AI-Powered Workflow Automation for Leading Bank',
    industry: 'Banking & Finance',
    challenge: 'Manual document processing consuming 200+ employee-hours weekly with 15% error rate.',
    solution: 'Deployed custom OCR + AI document intelligence pipeline with automated workflow routing.',
    metrics: [
      { label: 'Cost Reduction', value: '42%' },
      { label: 'Processing Speed', value: '10x Faster' },
      { label: 'Error Rate', value: '<0.5%' },
    ],
    color: '#6366f1',
  },
  {
    id: 'erp-healthcare',
    title: 'Full-Scale Hospital Management ERP System',
    industry: 'Healthcare',
    challenge: 'Fragmented patient records across 12 departments with no unified digital infrastructure.',
    solution: 'Built comprehensive ERP integrating patient management, billing, pharmacy, labs, and HR into one platform.',
    metrics: [
      { label: 'Departments Unified', value: '12' },
      { label: 'Patient Wait Time', value: '-65%' },
      { label: 'Revenue Growth', value: '+28%' },
    ],
    color: '#10b981',
  },
  {
    id: 'fintech-platform',
    title: 'Stock Analytics & Portfolio Management Platform',
    industry: 'Fintech',
    challenge: 'Brokerage firm needed real-time analytics dashboard serving 50,000+ active traders.',
    solution: 'Architected high-performance platform with real-time data feeds, predictive analytics, and mobile companion app.',
    metrics: [
      { label: 'Active Users', value: '50K+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Trade Execution', value: '<100ms' },
    ],
    color: '#06b6d4',
  },
  {
    id: 'immigration-portal',
    title: 'Digital Immigration Advisory Portal',
    industry: 'Education & Immigration',
    challenge: 'Manual student application tracking across 50+ universities in 8 countries with poor visibility.',
    solution: 'Built AI-powered portal with automated university matching, document tracking, and visa guidance chatbot.',
    metrics: [
      { label: 'Applications Managed', value: '5,000+' },
      { label: 'Acceptance Rate', value: '89%' },
      { label: 'Processing Time', value: '-70%' },
    ],
    color: '#f43f5e',
  },
];

// ============================================
// TESTIMONIALS
// ============================================

export const testimonials = [
  {
    name: 'Dr. Tahsin Ahmed',
    role: 'CEO, MedLife Hospital Group',
    quote: 'A2Z Nexus transformed our entire hospital operations. The ERP system they built has saved us millions in operational costs and dramatically improved patient care.',
    rating: 5,
  },
  {
    name: 'Sarah Rahman',
    role: 'MD, Bengal Capital Partners',
    quote: 'Their AI-powered analytics platform gave us a competitive edge in the market. The real-time insights and predictive models are world-class.',
    rating: 5,
  },
  {
    name: 'Kamal Hossain',
    role: 'Founder, TechBridge Startups',
    quote: 'From concept to deployment in just 6 weeks. A2Z Nexus delivered a production-grade SaaS platform that exceeded every expectation. Truly enterprise-level work.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Director, Gulf Investment Holdings',
    quote: 'Their BIDA advisory and investment compliance guidance made our Bangladesh market entry seamless. A strategic partner we trust completely.',
    rating: 5,
  },
];

// ============================================
// STATS
// ============================================

export const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 120, suffix: '+', label: 'Enterprise Clients' },
  { value: 8, suffix: '', label: 'Service Verticals' },
  { value: 99.9, suffix: '%', label: 'Client Satisfaction' },
];

// ============================================
// TRUST BAR LOGOS (Text-based)
// ============================================

export const trustLogos = [
  'Bengal Finance', 'TechBridge', 'MedLife Group', 'Capital BD',
  'EduGlobal', 'GreenEnergy BD', 'Delta Logistics', 'CityTech Solutions',
  'Harbor Industries', 'Nexus Ventures', 'Premier Bank BD', 'Atlas Trading',
];

// ============================================
// NAV LINKS
// ============================================

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'AI Solutions', href: '/ai-solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Advisory', href: '/advisory' },
  { label: 'Study Abroad', href: '/study-abroad' },
  { label: 'Contact', href: '/contact' },
];

// ============================================
// CHATBOT DEMO MESSAGES
// ============================================

export const chatMessages = [
  { role: 'bot' as const, text: 'Hello! 👋 Welcome to A2Z Nexus Consultancy. How can I help you today?' },
  { role: 'user' as const, text: 'I need a custom ERP system for my manufacturing company.' },
  { role: 'bot' as const, text: 'Excellent! We specialize in enterprise ERP solutions. A few questions:\n\n• How many departments need to be integrated?\n• Do you need supply chain management features?\n• What\'s your estimated timeline?' },
  { role: 'user' as const, text: 'About 8 departments. Yes, full supply chain. Within 3 months.' },
  { role: 'bot' as const, text: 'Based on your requirements, I recommend our Enterprise ERP package:\n\n✅ Multi-department integration\n✅ Supply chain management\n✅ Real-time analytics dashboard\n✅ Mobile companion app\n\nEstimated delivery: 10-12 weeks\n\nShall I schedule a free strategy call with our solutions architect? 🚀' },
];

// ============================================
// STUDY ABROAD COUNTRIES
// ============================================

export const studyCountries = [
  { name: 'United States', flag: '🇺🇸', universities: '200+', scholarships: '50+' },
  { name: 'United Kingdom', flag: '🇬🇧', universities: '150+', scholarships: '40+' },
  { name: 'Canada', flag: '🇨🇦', universities: '100+', scholarships: '35+' },
  { name: 'Australia', flag: '🇦🇺', universities: '80+', scholarships: '30+' },
  { name: 'Germany', flag: '🇩🇪', universities: '60+', scholarships: '25+' },
  { name: 'Japan', flag: '🇯🇵', universities: '40+', scholarships: '20+' },
  { name: 'Malaysia', flag: '🇲🇾', universities: '30+', scholarships: '15+' },
  { name: 'South Korea', flag: '🇰🇷', universities: '35+', scholarships: '18+' },
];

// ============================================
// ABOUT PAGE DATA
// ============================================

export const companyValues = [
  {
    title: 'Innovation First',
    description: 'We leverage cutting-edge AI, cloud, and enterprise technologies to deliver solutions that give our clients an unfair competitive advantage.',
    icon: Zap,
  },
  {
    title: 'Client-Centric',
    description: 'Every solution is tailored to the unique needs of our clients. We don\'t do cookie-cutter — we do custom, strategic, and scalable.',
    icon: Users,
  },
  {
    title: 'Enterprise Quality',
    description: 'Bank-grade security, 99.99% uptime, and meticulous attention to detail. We build for production, not prototypes.',
    icon: Shield,
  },
  {
    title: 'Global Perspective',
    description: 'Headquartered in Bangladesh with a global outlook. We serve clients from Dhaka to Dubai, London to LA.',
    icon: Globe,
  },
];

export const milestones = [
  { year: '2020', title: 'Founded', description: 'A2Z Nexus Consultancy established in Dhaka, Bangladesh' },
  { year: '2021', title: 'First Enterprise Client', description: 'Delivered full-scale ERP for leading healthcare provider' },
  { year: '2022', title: 'AI Division Launched', description: 'Expanded into AI chatbots, automation, and intelligent systems' },
  { year: '2023', title: '100+ Clients Milestone', description: 'Crossed 100 enterprise clients across banking, healthcare, and education' },
  { year: '2024', title: 'International Expansion', description: 'Opened advisory services for Gulf Region and Southeast Asia' },
  { year: '2025', title: 'Full-Stack Advisory', description: 'Launched legal, investment, and immigration advisory verticals' },
];
