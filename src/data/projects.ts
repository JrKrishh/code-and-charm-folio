/**
 * Single source of truth for portfolio work.
 *
 * Every entry has code on disk that was read and assessed before it was
 * written up here. `status` is deliberately honest — a Prototype is labelled
 * as one, and `gaps` says what isn't finished. That candour is the point: it
 * makes the Production claims believable.
 */

export type ProjectStatus = "Production" | "MVP" | "Prototype";

export type ProjectCategory =
  | "Client Work"
  | "Product"
  | "AI Infrastructure"
  | "Apps & Games";

export const CATEGORIES: ProjectCategory[] = [
  "Client Work",
  "Product",
  "AI Infrastructure",
  "Apps & Games",
];

export interface ProjectMetrics {
  loc?: number;
  files?: number;
  tests?: number;
  commits?: number;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusReason?: string;
  year: string;
  problem: string;
  features: string[];
  stack: string[];
  architecture?: string;
  highlight?: string;
  metrics?: ProjectMetrics;
  evidence?: string[];
  gaps?: string[];
  liveUrl?: string | null;
  repoUrl?: string | null;
  featured?: boolean;
}

export const STATUS_META: Record<
  ProjectStatus,
  { label: string; description: string; colorVar: string }
> = {
  Production: {
    label: "Production",
    description: "Deployed and in real use",
    colorVar: "--status-production",
  },
  MVP: {
    label: "MVP",
    description: "Core flows complete end to end",
    colorVar: "--status-mvp",
  },
  Prototype: {
    label: "Prototype",
    description: "Working proof of the core idea",
    colorVar: "--status-prototype",
  },
};

export const projects: Project[] = [
  /* ---------------------------------------------------------------- Client */
  {
    slug: "steel-flow",
    name: "Steel Flow",
    tagline: "Billing and inventory system for a steel trading business.",
    category: "Client Work",
    status: "Production",
    statusReason: "Deployed and used daily by the client for real invoicing.",
    year: "2026",
    problem:
      "A steel trading business ran invoicing and stock on paper and spreadsheets, so stock counts drifted from reality and monthly reporting meant re-keying everything by hand.",
    features: [
      "GST-compliant invoice generation",
      "Live stock tracking per material and grade",
      "Customer ledger and payment history",
      "Sales and inventory reporting",
      "Role-based staff access",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Lovable Cloud", "PostgreSQL"],
    highlight:
      "Replaced a paper ledger with a system the shop floor actually adopted — the hard part was matching existing habits, not the code.",
    liveUrl: "https://billdashpos.lovable.app",
    featured: true,
  },
  {
    slug: "womens-zone",
    name: "Women's Zone",
    tagline: "Retail billing and inventory platform for a clothing store.",
    category: "Client Work",
    status: "Production",
    statusReason: "Live and handling day-to-day billing for the store.",
    year: "2026",
    problem:
      "A clothing retailer needed fast counter billing with size and colour variants. Most off-the-shelf POS tools either ignored variants or buried them several taps deep, which is unusable at a busy counter.",
    features: [
      "Variant-aware catalogue (size, colour, style)",
      "Fast counter checkout flow",
      "Stock adjustment and low-stock alerts",
      "Daily sales summaries",
      "Responsive layout for tablet use at the counter",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Lovable Cloud"],
    highlight:
      "Checkout is optimised for keyboard and one-handed tablet use, because every extra tap costs the cashier time during a rush.",
    liveUrl: "https://womenszone.lovable.app",
    featured: true,
  },
  {
    slug: "the-signature",
    name: "The Signature",
    tagline: "Bakery POS with kitchen order tickets and live stock control.",
    category: "Client Work",
    status: "Production",
    statusReason:
      "Live for a cakes and pastries shop, with 222 commits of iteration against real use.",
    year: "2026",
    problem:
      "A bakery needed counter billing that also told the kitchen what to make. Orders were being shouted across the shop, so items got missed and custom cake details were lost.",
    features: [
      "Counter billing with itemised receipts",
      "Kitchen order ticket (KOT) printing",
      "Custom cake order capture with pickup dates",
      "Live stock deduction per sale",
      "Daily and range-based sales reporting",
    ],
    stack: ["TanStack Start", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    architecture:
      "TanStack Start app with server functions over Supabase Postgres; thermal printing runs through a browser print pipeline against KOT-formatted templates.",
    highlight:
      "KOT printing turned a verbal handoff into a paper trail — the fix was operational as much as technical.",
    metrics: { commits: 222 },
    liveUrl: "https://thesignaturepos.lovable.app",
    featured: true,
  },
  {
    slug: "prepli",
    name: "Prepli",
    tagline: "Exam prep app for Indian government job aspirants.",
    category: "Client Work",
    status: "Production",
    statusReason: "Publicly deployed and open to learners.",
    year: "2026",
    problem:
      "TNPSC, UPSC, banking and railway aspirants juggle scattered PDFs and unstructured question banks, with no reliable read on whether they are actually improving.",
    features: [
      "Topic-wise question banks across exam tracks",
      "Timed mock tests",
      "Progress tracking per subject",
      "Answer explanations",
      "Mobile-first study flow",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Lovable Cloud"],
    highlight:
      "Built around spaced revision rather than raw question volume — the aim is retention, not a bigger bank.",
    liveUrl: "https://prepli.lovable.app",
    featured: true,
  },
  {
    slug: "nexq",
    name: "Nexq",
    tagline: "Digital queue and booking platform for walk-in service businesses.",
    category: "Client Work",
    status: "MVP",
    statusReason:
      "Signup through billing to staff queue works end to end against live Stripe, Supabase and Resend on production domains.",
    year: "2026",
    problem:
      "Walk-in businesses like barbershops and salons lose customers to unmanaged physical queues, and owners have no systematic way to track staff, billing, or multiple locations. Nexq lets customers join remotely by QR code while staff work a live dashboard.",
    features: [
      "QR-based remote queue join, with customer-side leave and delay-turn actions",
      "Live staff queue dashboard behind staff-PIN login",
      "Stripe subscription checkout and webhook-driven billing",
      "Four-step resumable signup wizard with email OTP",
      "Platform-owner console spanning all business locations",
      "Australian ABN lookup and address autocomplete on onboarding",
      "Row-level-security multi-tenant isolation across 76 migrations",
    ],
    stack: [
      "React", "TypeScript", "Vite", "Supabase", "PostgreSQL",
      "Stripe", "Deno Edge Functions", "Resend", "Playwright",
    ],
    architecture:
      "A multi-app product: a public marketing and onboarding site plus seven sibling apps (business admin, storefront, owner console, e2e harness) sharing one Supabase backend with 76 migrations and 41 edge functions.",
    highlight:
      "The resumable signup wizard sends its own OTP-gated reminder emails from scheduled Postgres HTTP calls — pg_cron and pg_net driving edge functions with no external scheduler.",
    metrics: { loc: 200000, files: 870, tests: 31, commits: 206 },
    evidence: [
      "76 Supabase migrations with iterative RLS hardening",
      "41 edge functions covering signup, billing, staff auth and lookups",
      "31 Playwright end-to-end spec files",
      "GitHub Actions auto-deploys changed edge functions on merge to main",
    ],
    gaps: [
      "A product-owner allowlist still gates admin access and is flagged for removal before full production",
      "Three parallel admin app variants coexist with no canonical one designated",
      "The platform-owner portal lacks pagination, bulk actions and export",
    ],
    liveUrl: "https://nexq.com.au",
    repoUrl: "https://github.com/Rewoz-au/Nexq-Landingpage",
    featured: true,
  },
  {
    slug: "prism",
    name: "Prism",
    tagline: "Intake and approval portal for Power BI report requests.",
    category: "Client Work",
    status: "MVP",
    statusReason:
      "A real RLS-backed workflow with a live Power BI API integration and CI-driven end-to-end coverage, deployed on Vercel.",
    year: "2026",
    problem:
      "Teams request Power BI dashboards over email and spreadsheets, which loses the thread between the original business ask, the BI team's interview notes, and the developer's implementation. Prism makes that one tracked record with sequential sign-off.",
    features: [
      "Ten-stage role-gated workflow driven by a Postgres enum and transition map",
      "Row-level security enforced per role across roughly 20 policies",
      "Change-request sub-workflow against already-published reports",
      "File attachments via signed URLs from a private storage bucket",
      "Power BI Service integration over Azure AD client-credentials OAuth",
      "Notifications to both email and Microsoft Teams adaptive cards",
    ],
    stack: [
      "Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4",
      "Supabase", "PostgreSQL", "Resend", "Power BI REST API", "Playwright",
    ],
    architecture:
      "Next.js App Router with two route groups — an authenticated shell and a multi-step wizard — over cookie-based Supabase SSR sessions. Notifications fire synchronously from a single notify route; there is no background job system.",
    highlight:
      "One migration live-migrates a six-value Postgres enum to ten values mid-project, remapping existing rows and the dependent RLS policy in the same change — schema evolution most projects dodge by adding a table.",
    metrics: { loc: 8372, files: 81, tests: 1, commits: 12 },
    evidence: [
      "Three sequential migrations building schema, RLS and enums incrementally",
      "GitHub Actions runs Playwright on PR, manual dispatch and nightly cron against production",
      "Recorded demo video committed alongside the code",
    ],
    gaps: [
      "One broad Playwright spec doubles as the demo recorder; no unit or integration tests",
      "CI skips build, typecheck and lint and goes straight to the end-to-end test",
      "Email and Teams notifications silently no-op when credentials are absent",
    ],
    liveUrl: "https://tcmplanner.vercel.app",
    repoUrl: "https://github.com/Rewoz-au/Report-Requirement-tool",
    featured: true,
  },
  {
    slug: "cakestry",
    name: "Cakestry",
    tagline: "Multi-tenant storefront where customers design custom cakes with AI.",
    category: "Client Work",
    status: "MVP",
    statusReason:
      "AI generation, RAG-grounded design and multi-tenant RLS all work, backed by a CI pipeline and 222 commits — but payments are recorded manually.",
    year: "2026",
    problem:
      "Bakeries handle custom-cake orders over WhatsApp with slow back-and-forth on design and price. Cakestry gives each bakery a branded storefront where customers design a cake visually with AI and see itemised pricing update live.",
    features: [
      "Streaming AI cake image generation",
      "AI decoration detection that drives automatic pricing",
      "RAG-grounded design generation over a pgvector predesign index",
      "Per-shop storefronts and admin, multi-tenant by design",
      "Token-based order tracking with no login required",
      "An OAuth-protected MCP server exposing shop data to AI clients",
    ],
    stack: [
      "React 19", "TanStack Start", "TypeScript", "Tailwind CSS 4",
      "Supabase", "PostgreSQL", "pgvector", "Gemini 2.5 Flash Image",
    ],
    architecture:
      "Server-rendered TanStack Start with business logic in server route handlers calling Supabase directly. Orders and invoices update live over Postgres change subscriptions.",
    highlight:
      "The app exposes its own OAuth-protected MCP server, so a bakery owner can query live orders and designs from an AI assistant — the SaaS itself becomes an agent-callable tool.",
    metrics: { loc: 18567, files: 123, tests: 1, commits: 222 },
    evidence: [
      "15 migrations across ~14 tables with RLS on every table",
      "CI running lint, typecheck and both production and dev builds",
      "Seeded reference data: 13 themes, 10 decoration types, full price rules",
    ],
    gaps: [
      "Payment is a manual admin entry — no gateway integration",
      "No JavaScript or TypeScript test coverage, only one SQL RLS test",
      "No production URL documented anywhere in the repo",
    ],
    repoUrl: "https://github.com/JrKrishh/signaturecakes",
  },

  /* --------------------------------------------------------------- Product */
  {
    slug: "rakshak-ai",
    name: "Rakshak AI",
    tagline: "Turns a police officer's phone into an AI bodycam with evidence search.",
    category: "Product",
    status: "MVP",
    statusReason:
      "Deployed and functioning end to end on Cloud Run with real encrypted evidence storage and chain of custody.",
    year: "2026",
    problem:
      "Indian police departments lack an affordable bodycam ecosystem and a reliable chain of custody for evidence. Rakshak streams encrypted, GPS-tagged video from an officer's Android phone to the cloud, where AI flags threats and commanders can search footage in plain language.",
    features: [
      "Live officer map streamed over server-sent events",
      "Evidence library with chain-of-custody events and encrypted blobs",
      "Weapon detection running from one ONNX model both server-side and in-browser",
      "AI-drafted FIRs mapped to BNS, IPC and Arms Act sections",
      "Role-based access across national, command and officer tiers",
      "Background worker polling unprocessed evidence for AI analysis",
    ],
    stack: [
      "Next.js 16", "React 19", "FastAPI", "SQLAlchemy", "PostgreSQL",
      "ONNX Runtime", "Vertex AI Gemini", "MQTT", "Expo", "Docker", "Cloud Run",
    ],
    architecture:
      "Three apps: a Next.js command centre, a FastAPI backend with 12 routers plus a background AI worker, and a separate Expo mobile bodycam client. Docker Compose wires Postgres, API, worker, web, Mosquitto and Caddy together.",
    highlight:
      "The same YOLO-exported ONNX model runs server-side in Python and client-side in the browser via WASM — one artifact giving instant in-browser detection plus server-verified confirmation.",
    metrics: { loc: 20200, files: 110, tests: 2 },
    evidence: [
      "Deployed and reachable on Google Cloud Run",
      "Real encrypted evidence blobs and chunked uploads on disk",
      "Curated demo dataset: 10 officers, 7 incidents, 15 evidence items",
    ],
    gaps: [
      "The analytics dashboard is hardcoded numbers, not derived from the backend",
      "Cloud Vision, Speech-to-Text and LLM features are flagged off by default, degrading AI search to keyword heuristics",
      "No automated test suite or CI — only manual smoke scripts",
    ],
    liveUrl: "https://rakshak-web-ws2upizbva-uc.a.run.app",
    featured: true,
  },
  {
    slug: "doorzo",
    name: "Doorzo",
    tagline: "Bilingual village food-delivery marketplace shipped as web, PWA and Android.",
    category: "Product",
    status: "MVP",
    statusReason:
      "Checkout, payments, wallet and realtime tracking run against a live Supabase schema with real HMAC webhook verification.",
    year: "2026",
    problem:
      "Residents of small Tamil Nadu villages have no way to order from local hotels and bakeries online, and those shops have no order-management or delivery coordination tool. Doorzo connects customers, shop owners and riders in one bilingual app built for low-end Android phones.",
    features: [
      "Customer flow from search through cart to checkout",
      "Shop owner portal with catalogue, order inbox, analytics and payouts",
      "Delivery agent portal with online toggle and job actions",
      "Razorpay payments verified by HMAC webhook and Postgres RPC",
      "Wallet and rewards balances",
      "Fully mirrored English and Tamil translations",
    ],
    stack: [
      "Next.js 15", "React 19", "Supabase", "PostgreSQL",
      "Razorpay", "next-intl", "web-push", "Expo", "Tailwind CSS",
    ],
    architecture:
      "A single Next.js App Router monolith using route groups per role, with payment state changed only server-side by webhook and Postgres RPC — never trusting a client callback. A parallel Expo app and an Android TWA wrapper ship the same product on two more channels.",
    highlight:
      "One codebase ships three ways — web, installable PWA, and a signed Android app via Trusted Web Activity — rather than betting on a single distribution channel.",
    metrics: { loc: 22900, files: 157 },
    evidence: [
      "14 migrations defining 23 tables",
      "Real HMAC-SHA256 webhook verification using timing-safe comparison",
      "Full Android TWA build runbook with asset-link verification",
    ],
    gaps: [
      "No automated tests anywhere",
      "Production deployment not confirmed live",
      "Play Store submission incomplete",
      "Sensitive files left in the repo root — see the security note in the README",
    ],
  },
  {
    slug: "dukaan-os",
    name: "DukaanOS",
    tagline: "WhatsApp-native commerce OS for small Indian businesses.",
    category: "Product",
    status: "MVP",
    statusReason:
      "Booking, queue and storefront flows work end to end against a real Postgres schema, with the customer and owner apps deployed live.",
    year: "2026",
    problem:
      "Small local businesses — salons, clinics, gyms — have no affordable booking and queue system, and their customers already prefer WhatsApp over installing an app. DukaanOS puts the whole booking flow inside chat, with a companion dashboard for owners.",
    features: [
      "Scripted WhatsApp booking and queue conversation flow",
      "AI receptionist with tool-calling and multi-language detection",
      "Real Meta Cloud API client with automatic stub fallback",
      "Owner console for queue, bookings, offers and loyalty",
      "Public storefront API and customer mini-app",
      "Loyalty and coupon engine",
    ],
    stack: [
      "NestJS", "Fastify", "BullMQ", "PostgreSQL 16", "Prisma",
      "Redis", "Next.js 15", "Groq", "Whisper", "WhatsApp Cloud API",
    ],
    architecture:
      "A Turborepo monorepo with four deployable apps and eight shared packages, multi-tenant by business ID. Background jobs run through BullMQ; near-realtime UX uses polling rather than websockets.",
    highlight:
      "One environment variable switches the conversational engine between a deterministic zero-LLM scripted flow and a full tool-calling agent with 11-language detection — without touching the rest of the stack.",
    metrics: { loc: 11700, files: 101 },
    evidence: [
      "Customer mini-app and owner console deployed on Vercel",
      "620-line Prisma schema with 25 models",
      "HMAC-verified WhatsApp webhook receiver",
    ],
    gaps: [
      "Zero test files in the repo",
      "Payments are unimplemented — only environment placeholders exist",
      "Postgres RLS policies designed but not yet applied",
      "The API backend is not deployed; only the two front-ends are live",
    ],
    liveUrl: "https://whatsapp-brown-one.vercel.app",
  },
  {
    slug: "rentsphere",
    name: "RentSphere",
    tagline: "Rental management SaaS for NRIs running India property portfolios remotely.",
    category: "Product",
    status: "MVP",
    statusReason:
      "Property, tenant, lease and invoice flows write to a live Supabase database end to end.",
    year: "2026",
    problem:
      "NRI landlords manage India-based rentals through spreadsheets, WhatsApp and unreliable local managers, with no single view of tenants, rent or maintenance. RentSphere centralises all of it with a real accounting ledger underneath.",
    features: [
      "Property and unit management down to room and bed level",
      "Lease lifecycle with automatic occupancy side-effects",
      "Invoice generation and payment marking against live data",
      "Maintenance ticketing with status workflow",
      "Dashboard and reports computed from real data",
      "Auto-provisioning onboarding that links auth to org records",
    ],
    stack: [
      "Next.js 16", "React 19", "Supabase", "PostgreSQL",
      "Prisma", "NestJS", "Turborepo", "BullMQ", "Radix UI",
    ],
    architecture:
      "A Turborepo monorepo with two backends: a Next.js app whose server actions drive Supabase directly (what the UI actually runs on), and a separate, still-skeletal NestJS API intended as the future system of record.",
    highlight:
      "Rent is modelled as a real double-entry ledger with typed accounts, debit/credit entries and multi-currency FX — not the naive paid-boolean invoice most rental apps ship.",
    metrics: { loc: 16900, files: 187, tests: 0 },
    evidence: [
      "1069-line Prisma schema with ~30 models including the ledger",
      "Docker Compose for Postgres, Redis, MinIO and Mailpit",
      "CI workflow running lint, typecheck and tests with live service containers",
    ],
    gaps: [
      "The AI copilot is a hardcoded demo reply, not wired to a model",
      "Payment checkout returns a stub URL with no gateway call",
      "WhatsApp send only persists a row; the real send is a TODO",
      "Zero automated tests despite the harness being configured",
    ],
  },
  {
    slug: "yourcmo",
    name: "YourCMO",
    tagline: "AI marketing agent that generates on-brand captions, images and a posting calendar.",
    category: "Product",
    status: "Prototype",
    statusReason:
      "Real LLM and image generation work end to end for a single local user, but publishing to social platforms is explicitly stubbed.",
    year: "2026",
    problem:
      "Small brands and solo founders need a steady stream of social content without a marketing team. YourCMO takes a one-time brand setup and generates captions, images and a calendar from it.",
    features: [
      "Brand setup capturing name, logo, colours, audience and voice",
      "Hourly autopilot loop generating content suggestions",
      "Multi-provider LLM caption generation with a fallback chain",
      "Real image generation via Gemini 2.5 Flash Image",
      "Brand watermarking applied to generated assets",
      "Content calendar with full scheduling CRUD",
    ],
    stack: [
      "Node.js", "TypeScript", "Sharp", "ffmpeg", "Vitest",
      "Playwright", "Gemma", "OpenRouter", "Gemini 2.5 Flash Image",
    ],
    architecture:
      "Two parallel codebases: a layered dependency-injection engine architecture, and a self-contained Node HTTP server that is what actually runs. State persists to flat JSON files rather than a database.",
    highlight:
      "A zero-framework multi-provider LLM fallback chain built on raw Node HTTP, still producing real generated images through an automated brand-watermarking pipeline.",
    metrics: { loc: 31042, files: 174, tests: 52, commits: 1 },
    evidence: [
      "52 test files spanning nearly every module",
      "Multi-stage Dockerfile and Compose setup with a health check",
      "An output directory full of real generated images and reels — the pipeline has genuinely run",
    ],
    gaps: [
      "Publishing only flips a local flag; auto-posting to social platforms is not implemented",
      "All platform clients (Instagram, Twitter, Facebook, TikTok) are stubs",
      "Trend analysis is the LLM guessing, not scraped platform data",
      "The Dockerfile omits the directory containing the real entry point",
    ],
    repoUrl: "https://github.com/JrKrishh/YourCMO",
  },
  {
    slug: "fuel-grease-portal",
    name: "Fuel & Grease Portal",
    tagline: "Replaces mine-site fuel and lubricant spreadsheets with a validated web form.",
    category: "Product",
    status: "Prototype",
    statusReason:
      "Explicitly a Phase 1 demo — it runs on generated in-memory data by default rather than the real SQL Server backend.",
    year: "2026",
    problem:
      "Mine maintenance teams track fuel, oil, grease and coolant per service visit in spreadsheets, which is error-prone and hard to report from. This portal replaces that with a validated form and grid, backed by a schema designed to match an existing Power BI report column for column.",
    features: [
      "Role-gated create, read, update and delete across four roles",
      "Dashboard with hand-rolled inline SVG charts and no charting library",
      "Matching server-side and client-side field validation",
      "Three interchangeable storage backends behind one interface",
      "Equipment and location lookup dropdowns",
      "Automated demo-video recording pipeline",
    ],
    stack: ["React 18", "Vite", "Node.js", "Express", "SQL Server", "Vercel KV", "Playwright"],
    architecture:
      "A Vite SPA and an Express server share one app factory, consumed both by a traditional server entry point and a Vercel serverless catch-all function. Raw parameterised SQL, no ORM.",
    highlight:
      "A three-tier interchangeable persistence layer lets identical routes run in memory, on Vercel KV, or against SQL Server depending purely on which environment variables are present.",
    metrics: { loc: 3550, files: 29, tests: 1 },
    evidence: [
      "Schema defining four tables plus an idempotent seed script",
      "Linked Vercel project",
      "One permission matrix enforced identically on server and client",
    ],
    gaps: [
      "Entra ID login endpoints return a not-implemented stub",
      "Default configuration runs on randomly generated data, not SQL Server",
      "No real authentication in the default path",
      "The only test is a demo recorder, not a regression suite",
    ],
  },

  /* ------------------------------------------------------ AI Infrastructure */
  {
    slug: "agentserve",
    name: "AgentServe",
    tagline: "Keeps LLM prompt caches hot across a GPU fleet so agents stop recomputing prefixes.",
    category: "AI Infrastructure",
    status: "MVP",
    statusReason:
      "The cache-affinity gateway runs end to end and was validated against a live vLLM service on real GPUs.",
    year: "2026",
    problem:
      "Agent workloads resend a large shared prefix — system prompt, tool definitions, growing history — on almost every turn. Naive load balancing scatters a session across replicas and destroys cache locality, so a large share of the prefix gets recomputed every turn.",
    features: [
      "Rendezvous-hash cache-affinity routing",
      "OpenAI-compatible async reverse proxy with failover",
      "Session-aware CPU-offload retention policy",
      "A real vLLM KV-connector subclass patched into the scheduler at runtime",
      "Load-test harness issuing real streaming completions and scraping Prometheus metrics",
      "Deterministic synthetic trace replay for reproducible benchmarks",
    ],
    stack: ["Python", "FastAPI", "vLLM", "SGLang", "httpx", "Docker", "Modal", "Qwen2.5"],
    architecture:
      "A thin proxy gateway routes OpenAI-style requests to stock vLLM replicas by cache affinity; a deeper layer patches vLLM's own scheduler process with a custom KV-transfer connector for session-aware retention.",
    highlight:
      "It live-patches vLLM's scheduler class inside real worker processes to add session and tool-wait aware CPU-block retention — validated on actual GPUs, not mocked.",
    metrics: { loc: 3727, files: 24, tests: 2 },
    evidence: [
      "Working gateway with stats, metrics and health endpoints",
      "All offload session-policy unit tests passing",
      "Saved benchmark results matching the written analysis",
      "Connector GPU-validated on Modal rather than only unit tested",
    ],
    gaps: [
      "Benchmark traffic is synthetic; the real-trace capture pipeline is built but never run",
      "The deeper tier's measured speedup is a modest 1.07x and confounded by benchmark configuration",
      "The bundled demo page is a client-side mock with no backend calls",
    ],
    featured: true,
  },
  {
    slug: "edgemind",
    name: "EdgeMind",
    tagline: "Runs GGUF language models on phone hardware with hand-written quantized kernels.",
    category: "AI Infrastructure",
    status: "MVP",
    statusReason:
      "The Gemma-3 forward pass, quantized kernels and GGUF parsing are real, runnable and test-passing against actual model weights.",
    year: "2026",
    problem:
      "Existing mobile LLM runtimes make static compile-time decisions about which compute units to use, and do not jointly optimise for memory pressure, thermal limits and privacy. EdgeMind moves those decisions to runtime.",
    features: [
      "Hand-written Gemma-3 transformer forward pass with RMSNorm, RoPE, GQA, SwiGLU and KV cache",
      "ARM NEON quantized dequantise-and-matvec kernels matching ggml's bit layout",
      "Custom GGUF v3 binary parser with memory-mapped model loading",
      "LRU expert-weight cache with score-based eviction and background prefetch",
      "Semantic response cache using cosine similarity over embeddings",
      "Device profiling and a CPU/GPU/NPU dispatch planner",
    ],
    stack: ["C++17", "CMake", "ARM NEON intrinsics", "llama.cpp", "Android NDK"],
    architecture:
      "A static core library of five subsystems — device sensing, dispatch, memory, hybrid execution, and inference — consumed by six example binaries and four test suites, built for both desktop and cross-compiled Android targets.",
    highlight:
      "A correct from-scratch NEON implementation of ggml's Q4_K and Q6_K super-block bit layout, fused into matvec and running against real quantized weights.",
    metrics: { loc: 5579, files: 45, tests: 4 },
    evidence: [
      "Compiled native and Android NDK build artifacts present",
      "Test log showing all four suites executed and passed",
      "Real quantized Gemma-3 model files on disk",
    ],
    gaps: [
      "The flagship heterogeneous split-inference path is an explicit placeholder pass-through",
      "There is no real NPU execution path; NPU work silently falls back to CPU",
      "Privacy classification is regex-based rather than a real on-device model",
      "No measured benchmark harness — throughput figures use hardcoded estimates",
      "A live Telegram bot token is hardcoded in the bundled bot script",
    ],
    featured: true,
  },
  {
    slug: "sangah",
    name: "Sangah",
    tagline: "An Indic fine-tuning pipeline that became a Tamil exam-prep app when the tuning failed.",
    category: "AI Infrastructure",
    status: "MVP",
    statusReason:
      "The QLoRA pipeline trains end to end with honest evaluation, and the pivoted RAG product has live deployed workers.",
    year: "2026",
    problem:
      "The original goal was adapting a small open multilingual model to Indian languages with 4-bit QLoRA instruction tuning. After five runs measurably degraded reasoning, the same infrastructure was redirected toward retrieval-augmented generation for accurate Tamil exam content.",
    features: [
      "Genuine 4-bit QLoRA supervised fine-tuning with NF4 quantisation and LoRA adapters",
      "Multi-dataset loader with schema auto-mapping for Indic conversation formats",
      "Before-and-after adapter comparison on GSM8K and Belebele-Tamil",
      "Ground-truth hallucination checker that caught 86% fabricated Thirukkural quotes",
      "Live Cloudflare Worker RAG pipeline over a ~36k-vector index",
      "Offline-first exam app with timed mocks and spaced flashcards",
    ],
    stack: [
      "Python", "PyTorch", "Transformers", "PEFT", "bitsandbytes", "TRL",
      "Qwen2.5", "Cloudflare Workers", "Vectorize", "Firebase",
    ],
    architecture:
      "Three loosely coupled layers: QLoRA training and evaluation scripts producing adapters; Cloudflare Worker RAG services over a Vectorize index built from Tamil corpora; and an offline-first app that is the actual shipped product.",
    highlight:
      "The project quantitatively proved its own fine-tuning approach was making the model worse, killed it rather than shipping it, then caught an 86% hallucination rate in generated proverbs before it reached users.",
    metrics: { loc: 7276, files: 105, tests: 18 },
    evidence: [
      "Real training logs and saved evaluation outputs on disk",
      "A 5.8GB merged model and 2.2GB embedding model present",
      "Live deployed Cloudflare Workers with documented fallback verification",
      "A candid internal record of five fine-tuning runs and their measured failures",
    ],
    gaps: [
      "The fine-tuning approach was abandoned after it was proven to degrade reasoning",
      "Benchmark names referenced in the top-level README were never actually run",
      "The test scripts are informal smoke checks, not an automated suite",
    ],
    liveUrl: "https://sangah-ask.manir1179.workers.dev",
    featured: true,
  },
  {
    slug: "uinavigator",
    name: "UInavigator",
    tagline: "A browser agent that clicks by reading screenshots instead of DOM selectors.",
    category: "AI Infrastructure",
    status: "MVP",
    statusReason:
      "The visual-grounding algorithm and agent loop are fully implemented and demonstrably run end to end per saved execution traces.",
    year: "2026",
    problem:
      "Selector-based automation breaks on sites with shadow DOM, canvas UIs, or frequently changing markup. UInavigator instead detects interactive elements visually, overlays numbered markers, and has a vision model choose a marker to act on.",
    features: [
      "Set-of-Marks annotation pipeline from screenshot to element detection to overlay",
      "Marker-to-pixel action execution through real browser mouse and keyboard calls",
      "Pixel-diff self-verification after each action",
      "Hand-rolled agentic tool-use loop with streaming and function calling",
      "Live WCAG 2.1 AA accessibility auditor computed from real DOM introspection",
      "Anti-bot-detection stealth layer",
    ],
    stack: ["Python", "FastAPI", "WebSockets", "Playwright", "Gemini", "Pillow", "React", "Zustand"],
    architecture:
      "A FastAPI backend bridges WebSockets to an agent that owns a single Playwright browser manager; vision, control, guide and audit tools are injected as model function-calling tools, with a React front-end for chat, live screenshots and action panels.",
    highlight:
      "A working Set-of-Marks visual grounding loop with pixel-diff self-verification, proven by real saved execution traces rather than a scripted demo.",
    metrics: { loc: 9800, files: 43, tests: 0 },
    evidence: [
      "34 saved trace files and 12 workflow-memory files with timestamped real agent runs",
      "Working WebSocket-driven app performing real browser automation",
      "Cloud Run deployment config present",
    ],
    gaps: [
      "The README claims an agent framework the code does not actually use",
      "The README names a different model than the one the loop actually drives",
      "Zero automated tests, and no accuracy benchmark despite reliability being the core claim",
      "A live API key was committed in plaintext — rotate before publishing",
    ],
  },
  {
    slug: "sove",
    name: "S.O.V.E. Toolkit",
    tagline: "A CLI that statically analyses JS/TS repos to speed onboarding and generate docs.",
    category: "AI Infrastructure",
    status: "MVP",
    statusReason:
      "The analysis phase runs end to end producing real reports with correct algorithms, though later phases are unproven.",
    year: "2026",
    problem:
      "New engineers waste time tracing unfamiliar codebases, teams accrue documentation and test debt, and large refactors are risky by hand. SOVE parses a repo's AST to produce onboarding digests, generated docs and tests, and partially automated refactors.",
    features: [
      "Tarjan's strongly-connected-components algorithm for circular dependency detection",
      "Real complexity math: cyclomatic, cognitive, Halstead and maintainability index",
      "AST-driven template test generation for Jest, Mocha and Vitest",
      "Working CLI producing Markdown, JSON and Mermaid reports",
      "Callback-to-async codemod built on jscodeshift",
      "Project context detection for framework, language and package manager",
    ],
    stack: ["TypeScript 5", "Node.js", "Commander.js", "Babel", "recast", "jscodeshift", "ts-morph", "Jest"],
    architecture:
      "Three independent phases — analysis, generation, and pattern transformation — orchestrated by an engine that dynamically imports each phase, fed by a shared code parser and file system manager.",
    highlight:
      "A correctly implemented Tarjan's SCC algorithm plus genuine Halstead and cognitive complexity math, running end to end on real code rather than templated scaffolding.",
    metrics: { loc: 13500, files: 33, tests: 9 },
    evidence: [
      "Built distribution output in both module formats",
      "Saved CLI output with real complexity and dependency numbers",
      "A test suite that genuinely runs and exposes real bugs",
    ],
    gaps: [
      "The transform phase's apply step is a stub that always returns null — the real codemods are never invoked",
      "16 of 30 analyzer tests fail on path-normalisation bugs",
      "README performance claims have no benchmark harness behind them",
    ],
  },

  /* ---------------------------------------------------------- Apps & Games */
  {
    slug: "guy-rick",
    name: "Guy Rick",
    tagline: "A voice-and-chat agent that reasons, runs sandboxed code, and remembers.",
    category: "Apps & Games",
    status: "MVP",
    statusReason:
      "Functionally complete with real code behind every claimed capability and 86 test functions, though never deployed publicly.",
    year: "2026",
    problem:
      "Off-the-shelf chatbots cannot execute code, browse live sources, or build durable memory across sessions. Guy Rick combines a graph-based reasoning loop, a sandboxed interpreter, web tools and hybrid vector-plus-graph memory behind a swappable persona.",
    features: [
      "A reasoning state machine: recall, retrieve, reason, act, voice, persist",
      "Multi-provider LLM router across eight real client implementations",
      "Sandboxed code interpreter plus web search and fetch tools",
      "Hybrid RAG and graph memory with swappable storage backends",
      "Autonomous mode with a persistent goal stack and human approval gates",
      "A planner, engineer and critic council reviewing steps before committing memory",
      "Streaming text-to-speech voice output",
    ],
    stack: [
      "Python", "FastAPI", "LangGraph", "Qdrant", "Neo4j", "MongoDB Atlas",
      "Anthropic", "OpenAI", "Gemini", "ElevenLabs", "Next.js", "Three.js",
    ],
    architecture:
      "A Next.js front-end talks to a FastAPI backend over server-sent events; the backend runs an agent graph calling a swappable LLM router, a tool layer, and a swappable memory layer.",
    highlight:
      "An autonomous cognitive loop with a persistent goal stack, human-in-the-loop approval gates, and a multi-voice council reviewing its own steps before committing memory — genuine agentic machinery, not stubs.",
    metrics: { loc: 11131, files: 113, tests: 17, commits: 3 },
    evidence: [
      "No TODO, FIXME or not-implemented markers anywhere in the backend",
      "Every endpoint claimed in the README actually exists",
      "86 test functions across 17 backend test files",
    ],
    gaps: [
      "No live or public deployment",
      "Sandbox isolation tests skip unless Docker is running",
      "Git history is three commits on a single day, suggesting a squashed repo",
    ],
    repoUrl: "https://github.com/JrKrishh/guy-rick",
  },
  {
    slug: "strategy-battle-royale",
    name: "Strategy Battle Royale",
    tagline: "A tick-based simulator where you configure an AI fighter instead of playing one.",
    category: "Apps & Games",
    status: "MVP",
    statusReason:
      "A verified run simulated a full 50-player match to completion in 6.2 seconds with real placements and kill counts.",
    year: "2026",
    problem:
      "Rather than controlling a character directly, the player configures an agent's risk tolerance, engagement style, loot priorities and zone behaviour, then watches it play out as a deterministic seeded simulation.",
    features: [
      "Hybrid AI combining hard-rule overrides with weighted utility scoring",
      "Optional live LLM strategy layer making real API calls without blocking the tick loop",
      "Full combat resolution across melee, ranged and vehicle engagements",
      "Shrinking zone system with phased distance-based damage",
      "Vehicles, flight-drop and building interior combat",
      "Loot and weapon systems with room-based loot tables",
      "Deterministic seeded RNG and fog of war",
    ],
    stack: ["TypeScript 5", "Node.js", "Express", "WebSocket", "Vitest", "fast-check"],
    architecture:
      "An Express and WebSocket server broadcasts live match state, orchestrated by a match simulator that ticks the AI engine, combat resolver, vehicle manager, loot manager and flight manager together. A separate CLI entry point bypasses the server for instant local runs.",
    highlight:
      "A fast deterministic per-tick utility AI drives moment-to-moment combat while an async, genuinely live LLM call injects strategic direction every few seconds without blocking simulation throughput.",
    metrics: { loc: 17632, files: 57, tests: 5 },
    evidence: [
      "A verified 50-player match simulated to completion with 400 loot spawns",
      "Compiled output confirming a clean build",
      "40 of 41 tests passing",
    ],
    gaps: [
      "A property-based zone damage test fails outright",
      "Only 5 of 52 source modules have any test coverage",
      "No persistence — match state lives in memory and is lost on restart",
    ],
  },
  {
    slug: "geneflow",
    name: "GeneFlow",
    tagline: "A genetics simulation with a tested Mendelian inheritance engine.",
    category: "Apps & Games",
    status: "Prototype",
    statusReason:
      "The genetics and breeding services are real, tested code, but the running API never calls them and serves hardcoded mock data instead.",
    year: "2025",
    problem:
      "GeneFlow models a 'design and evolve creatures' experience: build a lab, crossbreed creatures with allele-based trait inheritance, and deploy them into procedurally generated biomes.",
    features: [
      "Trait calculation with dominant and recessive allele logic, with dedicated tests",
      "Breeding, crossbreeding and mutation services",
      "Procedural biome generation",
      "Laboratory and equipment management",
      "Neural-network-driven creature decision making",
      "A standalone CLI demo running a genuine self-contained simulation",
    ],
    stack: ["TypeScript", "Node.js", "Express", "Jest", "Docker"],
    architecture:
      "A service-oriented TypeScript backend of 30 service classes intended to sit behind an Express API, with three separate experimental web front-ends.",
    highlight:
      "A fully modelled Mendelian genetics engine with unit tests exists — and is entirely bypassed by the live API, which serves hand-written mock JSON instead. The engine and the product were never wired together.",
    metrics: { loc: 39907, files: 67, tests: 22 },
    evidence: [
      "Compiled output confirming the TypeScript builds cleanly",
      "30 service modules with matching unit test files",
      "A CLI demo running a real DNA and trait simulation",
    ],
    gaps: [
      "The live API server is 100% mock data, disconnected from the real service layer",
      "The test suite currently fails to compile due to configuration errors",
      "Wallet and NFT services are fully mocked stand-ins",
      "Three redundant parallel web front-ends suggest repeated rewrites",
    ],
  },
  {
    slug: "tinysteps",
    name: "TinySteps",
    tagline: "Nutrition, growth and meal tracking for children aged 0-5.",
    category: "Apps & Games",
    status: "Prototype",
    statusReason:
      "The offline profile, nutrition and reminder loop works end to end, but the AI features are switched off behind a demo flag.",
    year: "2025",
    problem:
      "Parents of infants and toddlers need age-appropriate guidance on safe foods, growth tracking against WHO standards, and meal planning. TinySteps puts a nutrition guide, safety checker, growth charts and reminders in one offline-first app.",
    features: [
      "Twelve screens across home, nutrition guide, health tracker, meal planner and community",
      "Local persistence of child profile, reminders and settings",
      "Light and dark theming",
      "Age-banded nutrition and recipe database with real content",
      "Reminder management for vaccinations and checkups",
    ],
    stack: ["React Native", "Expo", "React Navigation", "AsyncStorage", "react-native-chart-kit"],
    architecture:
      "A flat screens, context, data and services structure with two React context providers composed under bottom-tab navigation. AsyncStorage is the only persistence layer; there is no backend.",
    highlight:
      "A fully prompt-engineered Gemini integration with structured safety-check prompts and response parsers was built end to end, then deliberately left switched off behind a demo flag.",
    metrics: { loc: 7147, files: 18, tests: 0 },
    evidence: [
      "All twelve screens fully implemented with real styling and state",
      "Storage read and write wired end to end for profile and reminders",
      "Static nutrition and recipe content contains real, non-placeholder data",
    ],
    gaps: [
      "The AI service is hardcoded to demo mode, making the real API path unreachable",
      "Voice input is a non-functional stub",
      "No installable build was ever produced",
      "A live API key is hardcoded in source — rotate before publishing",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function projectsByCategory(category: ProjectCategory | "All"): Project[] {
  return category === "All"
    ? projects
    : projects.filter((p) => p.category === category);
}
