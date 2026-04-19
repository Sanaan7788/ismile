# ROLE
You are a senior full-stack engineer + UI designer. Build a modern, responsive, accessible marketing website redesign for iSmile Technologies based on the spec below. Maintain the EXACT textual content and logo, but improve visual hierarchy, layout, motion, and responsiveness.

# DELIVERABLES
Create a production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui project.
- Use the logo SVG from the URL in DESIGN_SYSTEM.json (do not recreate it).
- Use the exact colors, typography, and copy provided — no rewording.
- Fully responsive (mobile 360px → desktop 1440px+).
- WCAG 2.1 AA accessible; semantic HTML; keyboard nav; prefers-reduced-motion respected.
- Use Framer Motion for subtle scroll-in and hover animations.
- SEO: proper meta, Open Graph, sitemap.xml, robots.txt.
- Lighthouse targets: Performance >= 90, Accessibility >= 95.
- Working contact form (client-side validation; POST to /api/contact placeholder).

Create these files at project root BEFORE building:
1. docs/CONTENT.json
2. docs/DESIGN_SYSTEM.json
3. docs/SITEMAP.md

Then scaffold the Next.js app under /app using those files as the single source of truth.

## FILE 1 - docs/DESIGN_SYSTEM.json
```json
{
  "brand": {
    "name": "iSmile Technologies",
    "logo_svg_url": "https://ismiletechnologies.com/wp-content/uploads/2025/02/ismile_main-1.svg",
    "logo_dimensions": { "width": 127, "height": 44 },
    "tagline_hero": "Turning Ideas Into Software Solutions",
    "tagline_sub": "Optimize & Scale with Seamless Operations & Advanced Infrastructure Management"
  },
  "colors": {
    "primary": "#1B6999","secondary": "#14A49C","secondary_soft": "#62C2BD",
    "dark": "#0B2C40","accent": "#CC3366","bg": "#FFFFFF","bg_soft": "#FAF9F5",
    "text": "#333333","heading": "#101010","heading_alt": "#1B6999","black": "#000000"
  },
  "typography": {
    "headings_primary": "Montserrat","headings_secondary": "Roboto",
    "body": "Roboto, system-ui, sans-serif",
    "scale": { "h1": 56, "h2": 40, "h3": 19, "body": 16, "small": 14 }
  },
  "buttons": {
    "primary":  { "bg": "#1B6999", "text": "#FFFFFF", "hover_bg": "#0B2C40" },
    "dark_cta": { "bg": "#0B2C40", "text": "#14A49C", "border": "#14A49C", "hover_bg": "#14A49C", "hover_text": "#0B2C40" },
    "ghost":    { "bg": "transparent", "text": "#CC3366", "border": "#CC3366", "hover_bg": "#CC3366", "hover_text": "#FFFFFF" }
  },
  "radius":  { "sm": 6, "md": 12, "lg": 20, "pill": 9999 },
  "shadow":  { "card": "0 4px 16px rgba(0,0,0,.06)", "cta": "0 8px 24px rgba(27,105,153,.25)" },
  "spacing_scale": [4, 8, 12, 16, 24, 32, 48, 64, 96]
}
```

## FILE 2 - docs/CONTENT.json
```json
{
  "header": {
    "cta": "Contact Us",
    "languages": ["English (en_US)", "Indian English (en-IN)"],
    "nav": [
      { "label": "Our Customers", "children": ["Success Stories","Testimonials"] },
      { "label": "Our Services", "children": ["Cloud Infrastructure Services","Data & Artificial Intelligence","Application Innovation","Modern Work","Business Transformation & Strategy","Hyperautomation","Security Services","Business Applications","Blockchain","Integration and APIs","iSmile Solution Centers","Web3 Services","Cloud Hosting Services"] },
      { "label": "Our Products", "groups": {
        "AI Acceleration": ["AI Agents in 30 Days Launch Pack","Add Digital AI Workers to Your Org Chart","90-Day Digital Transformation Fast-Track","AI ROI in 6 Weeks or It'\''s Free","Cloudful.ai"],
        "Cloud & Data Transformation": ["Cloud Enablement Migration Kit","Cloud Landing Zone Pack","Data Platform Starter Kit","DevOps Stack Builder"],
        "Blockchain & Digital Assets": ["NFT & Digital Asset Engine","Real Estate Tokenization Suite","Blockchain + AI Hub","Enterprise Blockchain Stack"]
      }},
      { "label": "Industries", "children": ["Energy + Utilities","Pharma Marketing Hosting Services","Manufacturing","Financial Services + Insurance","Oil & Gas","Veeva Vault Support Services"] },
      { "label": "Insights", "children": ["Blogs","Webinars","Ebook"] },
      { "label": "Who We Are", "children": ["About Us","Our Team","Careers"] }
    ]
  },
  "hero": {
    "h1": "Turning Ideas Into Software Solutions",
    "sub": "Optimize & Scale with Seamless Operations & Advanced Infrastructure Management",
    "cta": "Connect with Us"
  },
  "value_prop": {
    "h2": "Driving Value Through AI-Powered Innovation",
    "body": "iSmile Technologies leverages AI, Cloud and automation to help organizations unlock new opportunities and accelerate digital transformation. Our solutions enhance efficiency, elevate customer experiences, and reduce costs - empowering businesses to scale smarter and innovate faster.",
    "cta": "Services"
  },
  "services": [
    { "title": "AI Transformation",    "desc": "We help enterprises unlock AI'\''s full potential through Agentic AI, Microsoft Copilot, ML, and AI governance." },
    { "title": "Data & AI",            "desc": "Our data and AI services enable leaders to make informed decisions using modern platforms, advanced analytics, and AI insights." },
    { "title": "Cybersecurity",        "desc": "Our advisory and managed services weave Microsoft'\''s intelligent security stack into a Zero-Trust fabric with compliance-ready environments." },
    { "title": "Cloud + Infrastructure","desc": "From legacy workloads to greenfield innovation, our experts use proven frameworks and AI automation to drive continuous modernization." },
    { "title": "Product Experience",   "desc": "Our Product Experience team blends strategy, design & tech to turn complex ideas into intuitive, scalable solutions." },
    { "title": "Modern Business Apps", "desc": "Empower your teams with secure, AI-powered applications that simplify workflows, enhance collaboration, and deliver measurable outcomes." }
  ],
  "products": [
    { "title": "Cloud Landing Zone" },
    { "title": "Cloud Migration Solution" },
    { "title": "iSmile.AI" },
    { "title": "Cloudful.AI" },
    { "title": "Product Experience" },
    { "title": "VDI Enablement Solution" }
  ],
  "insights_heading": "Leading the way: iSmile Technologies latest Insights",
  "insights": [
    { "title": "The Future of Work: How Automation is Reshaping Industries with AI" },
    { "title": "How AI Chatbots are Transforming Customer Experiences 24/7/365" },
    { "title": "Accelerating AI Innovation: From Ideas to Intelligent AI Agents in Days!" }
  ],
  "what_we_think": {
    "heading": "What We Think",
    "tiles": [
      { "title": "Blogs",    "desc": "Explore in-depth insights, AI trends, and practical tips to transform your business with intelligent automation." },
      { "title": "Webinars", "desc": "Join our live and on-demand webinars to learn from industry experts and see iSmile Technologies in action across healthcare, retail, and IT." },
      { "title": "Videos",   "desc": "Watch quick demos, success stories, and expert explainers showcasing how iSmile Technologies simplifies work and elevates experiences." }
    ]
  },
  "customer_stories": [
    { "title": "Turning Vision into Reality: How We Revolutionized Fundraising with AI" },
    { "title": "Revolutionizing PropTech: iSmile.AI & PropTech Social Launch PTEK.AI" },
    { "title": "iSmile Technologies x SKEMA Business School" }
  ],
  "values": [
    { "title": "Customer Orientation" },
    { "title": "We Deliver Value" },
    { "title": "All your IT Services & Solutions needs" },
    { "title": "We Solve Customers'\'' Problems" }
  ],
  "partners": ["Google Cloud","Microsoft Azure","AWS","Oracle","IBM Cloud"],
  "partner_cta": {
    "heading": "Ready to Partner with iSmile Technologies!",
    "badges": ["Chicago Managed Service Providers 2022","Customer First","Clutch - Illinois"]
  },
  "contact_form": {
    "heading": "Contact Us for Free Evaluation",
    "fields": ["First Name*","Last Name*","Business Email*","Phone","Company","Select our Service*","Your message*"],
    "services_options": ["AI Transformation","Data + AI","Cloud + Infrastructure","CyberSecurity","Product Experience","Modern Business Apps","AI Acceleration","Cloud & Data Transformation","Blockchain & Digital Assets","Other Inquiries"],
    "submit": "Submit"
  },
  "footer": {
    "address_usa": "501 S Weber Rd, Unit 108, Bolingbrook, IL 60490",
    "email": "service@ISmileTechnologies.com",
    "phone": "+1 (732) 347-6245",
    "social": ["LinkedIn","WhatsApp","Instagram","YouTube"],
    "legal": "(c) 2026 iSmile Technologies · Privacy Policy · Hosted Green"
  }
}
```

## FILE 3 - docs/SITEMAP.md
See SITEMAP.md (downloaded separately) - contains ASCII tree + Mermaid flowchart.

## FILE 4 - docs/PROMPT.md (design direction)
Visual direction: Clean enterprise-tech aesthetic. Deep navy + teal duotone. Generous whitespace, large type, soft card shadows, rounded-2xl corners. Subtle gradient meshes in hero/CTA backgrounds. Montserrat for headings, Roboto for body. Modern grid sections replacing the current Elementor layout. Hover micro-interactions, scroll-reveal on cards, sticky translucent header with blur.

Pages to build: / (homepage with all sections above), plus stubs for /about, /services/[slug], /products/[slug], /industries/[slug], /insights, /contact.

Rules:
- Do NOT invent new copy - use strings from CONTENT.json verbatim.
- Do NOT recreate the logo - embed the SVG URL from DESIGN_SYSTEM.json.
- Follow the color tokens exactly.
- Use next/image for imagery, next/font for Google fonts.
- Place reusable components under /components/ui/* and section blocks under /components/sections/*.

Begin now: First confirm you've created the four docs files, then scaffold the app and implement the homepage section by section in the order listed in SITEMAP.md.
