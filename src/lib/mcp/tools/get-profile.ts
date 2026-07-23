import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get Boopathi Raja's profile",
  description:
    "Return Boopathi Raja's public profile: name, role, bio, focus areas, and links to portfolio site and live projects.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Boopathi Raja",
      role: "Vibe Coder",
      tagline:
        "Full-stack builder shipping production apps for real clients — POS, marketplaces, AI tools.",
      focus: [
        "Client work (POS, retail, bakery, exam prep)",
        "AI-native products",
        "Multi-tenant SaaS with Supabase + RLS",
        "TanStack Start / Next.js / React",
      ],
      links: {
        portfolio: "https://boopathiraja.dev",
        published: "https://code-and-charm-folio.lovable.app",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
