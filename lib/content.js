export const nav = {
  links: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ],
  cta: { label: 'Start a project', href: '/contact' },
}

export const hero = {
  eyebrow: 'Software development',
  headline: ['Software built by', 'people who give', 'a damn.'],
  sub: 'We ship production-grade web, mobile, and AI products for companies that need it done right.',
  primaryCTA: { label: 'See our work', href: '/work' },
  secondaryCTA: { label: 'Start a project', href: '/contact' },
}

export const capabilities = {
  heading: 'What we build',
  sub: 'Specific things. Done well.',
  items: [
    {
      title: 'Web Applications',
      description:
        'The interface your customers actually use. We build in Next.js, React, and whatever the problem demands — not whatever we already know best.',
      tech: 'Next.js · React · PostgreSQL · Stripe · Edge functions',
      snippet: `// Optimistic updates. Zero jank.\nawait mutate(data, { revalidate: false })`,
    },
    {
      title: 'Mobile',
      description:
        "React Native when cross-platform makes sense. Swift or Kotlin when it doesn't. We won't upsell you the wrong stack to pad scope.",
      tech: 'React Native · Expo · iOS · Android',
      snippet: `// One codebase. Two stores.\nexport default Platform.select({\n  ios: IOSComponent,\n  android: AndroidComponent,\n})`,
    },
    {
      title: 'AI Integration',
      description:
        'Not "AI-powered" — actually wired up correctly. We integrate Anthropic and OpenAI APIs into real workflows with proper context management, fallbacks, and cost controls built in.',
      tech: 'Anthropic · OpenAI · pgvector · RAG pipelines · LangChain',
      snippet: `const res = await anthropic.messages.create({\n  model: 'claude-opus-4-8',\n  max_tokens: 1024,\n  messages: thread,\n})`,
    },
    {
      title: 'Backend & APIs',
      description:
        'FastAPI, Node.js, authentication, payment processing, third-party integrations. The boring infrastructure done correctly so you stop thinking about it.',
      tech: 'FastAPI · Node.js · Stripe · Auth · REST · GraphQL',
      snippet: `@router.post("/checkout")\nasync def create_session(\n  body: CheckoutBody,\n  user: User = Depends(get_user),\n):\n    return stripe.checkout.Session.create(...)`,
    },
    {
      title: 'Data & Analytics',
      description:
        'ETL pipelines, dashboards, real-time analytics. You can only improve what you can measure — so we make sure the measurement is accurate and fast.',
      tech: 'PostgreSQL · ClickHouse · dbt · Metabase · Redis',
      snippet: `SELECT\n  user_id,\n  date_trunc('week', created_at) AS week,\n  COUNT(*) AS events\nFROM events\nGROUP BY 1, 2\nORDER BY 2 DESC`,
    },
    {
      title: 'Systems Design',
      description:
        "Architecture reviews, technical due diligence, scaling plans. We've seen what happens when these decisions get deferred — and we've cleaned up the aftermath more than once.",
      tech: 'AWS · GCP · Docker · Kubernetes · architecture reviews',
      snippet: `# C4 — Container View\nSystem  --> API     : HTTPS/443\nAPI     --> DB      : TCP/5432\nAPI     --> Cache   : TCP/6379\nAPI     --> Queue   : AMQP`,
    },
  ],
}

export const work = {
  heading: 'Selected work',
  sub: "A sample of what we've shipped.",
  items: [
    {
      name: 'Vela',
      outcome: 'Cut compliance reporting time by 78% for a Series B fintech.',
      description:
        'Real-time portfolio analytics dashboard. We replaced a spreadsheet workflow that was costing the ops team 20 hours a week and built an auditable, automated system in its place.',
      tags: ['Fintech', 'Next.js'],
      accent: '#1e1b4b',
    },
    {
      name: 'Mednote',
      outcome: 'Reduced no-show rates by 41% across 12 outpatient clinics.',
      description:
        'AI-assisted scheduling platform built on React Native. The algorithm learns patient behavior patterns and surfaces the right intervention at the right time — without spooking the compliance team.',
      tags: ['Healthcare', 'React Native'],
      accent: '#0f2027',
    },
    {
      name: 'Closeloop',
      outcome: '0→1 AI sales tool. Live with 40 enterprise accounts in 11 weeks.',
      description:
        'Sales coaching tool that listens to calls, surfaces objection patterns, and suggests real responses — not generic advice. Built on Anthropic APIs with a FastAPI backend.',
      tags: ['AI / ML', 'FastAPI'],
      accent: '#0c1a0c',
    },
    {
      name: 'Portwave',
      outcome: 'Replaced 4 legacy logistics tools with one auditable platform.',
      description:
        'Operations platform for a mid-market freight company. Four tools became one. The data model took three weeks to get right. The rest was fast.',
      tags: ['Logistics', 'PostgreSQL'],
      accent: '#1a0f0f',
    },
  ],
}

export const process = {
  heading: 'How we work',
  steps: [
    {
      num: '01',
      title: 'Excavate',
      body: "We dig until we understand the actual problem — not the described one. Most briefs are symptoms. The real work is finding what's underneath before we prescribe anything.",
    },
    {
      num: '02',
      title: 'Architect',
      body: "We design the system on paper before touching a keyboard. Decisions made in the planning phase are cheap. Decisions made in production cost three sprints and a post-mortem.",
    },
    {
      num: '03',
      title: 'Build',
      body: "Fast iterations. Real deploys. No 'it works on my machine.' We ship to staging early so surprises surface while they're still small problems.",
    },
    {
      num: '04',
      title: 'Harden',
      body: "Code review, load testing, monitoring, documentation. The work most agencies skip is the work we spend the most time on. That's not accidental — it's why our projects stay running.",
    },
  ],
}

export const manifesto = {
  statement: 'Software is not a deliverable.\nIt is a decision you will live\nwith for ten years.',
  attribution: '— how we think about every engagement',
}

export const ctaStrip = {
  question: 'Have something to build?',
  sub: 'Tell us about it. We respond within one business day.',
  cta: 'Start a project',
  email: 'hello@codeneuron.dev',
}

export const footerContent = {
  tagline: 'Production-grade software for companies that want it done right the first time.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Journal', href: '/journal' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'GitHub', href: 'https://github.com/codeneuron' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/codeneuron' },
        { label: 'X / Twitter', href: 'https://x.com/codeneuron' },
      ],
    },
  ],
  copyright: '© 2026 Codeneuron.',
  legal: 'No templates were harmed.',
}

export const services = {
  heading: 'What we do',
  sub: 'A full-stack development firm. Not a jack-of-all-trades agency.',
  items: capabilities.items,
}

export const about = {
  heading: "We're engineers\nwho ship things.",
  sub: 'Not consultants who PowerPoint about things.',
  story: [
    "Codeneuron was built out of frustration. Too many projects were being delivered late, delivered wrong, or delivered once and never touched again. We knew we could do better — so we did.",
    "We're a small, senior team. We don't hire generalists and call them specialists. Every person who touches your project has shipped real software, at real scale, with real consequences.",
    "We work with a small number of clients at a time so that each one gets our full attention. That's not a pitch — it's a constraint we enforce.",
  ],
  principles: [
    { title: 'Specificity over abstraction', body: 'We name the actual thing. Not "modern cloud infrastructure" — Postgres on RDS behind an ALB with automated failover.' },
    { title: 'Fewer, better clients', body: 'We cap our active engagements so every project gets senior attention. Not junior execution reviewed by a senior at the end.' },
    { title: 'Brutal honesty', body: "If you don't need a mobile app yet, we'll tell you. If your architecture has a problem, we'll name it before we start." },
    { title: 'Code that lasts', body: "We write code the next engineer wants to inherit. Not code that works today and breaks when someone tries to read it in six months." },
  ],
}

export const contact = {
  heading: "Let's talk.",
  sub: "Tell us what you're building. We'll respond within one business day.",
  email: 'hello@codeneuron.dev',
  projectTypes: [
    'New product / 0→1',
    'Existing product / feature work',
    'Architecture review',
    'AI integration',
    'Mobile app',
    'Other',
  ],
}
