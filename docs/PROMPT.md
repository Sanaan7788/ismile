# PROMPT (Design Direction)

Visual direction: Clean enterprise-tech aesthetic. Deep navy + teal duotone. Generous whitespace, large type, soft card shadows, rounded-2xl corners. Subtle gradient meshes in hero/CTA backgrounds. Montserrat for headings, Roboto for body. Modern grid sections replacing the current Elementor layout. Hover micro-interactions, scroll-reveal on cards, sticky translucent header with blur.

Pages to build: / (homepage with all sections above), plus stubs for /about, /services/[slug], /products/[slug], /industries/[slug], /insights, /contact.

Rules:
- Do NOT invent new copy - use strings from CONTENT.json verbatim.
- Do NOT recreate the logo - embed the SVG URL from DESIGN_SYSTEM.json.
- Follow the color tokens exactly.
- Use next/image for imagery, next/font for Google fonts.
- Place reusable components under /components/ui/* and section blocks under /components/sections/*.
