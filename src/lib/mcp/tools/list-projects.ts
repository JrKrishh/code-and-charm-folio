import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects, CATEGORIES } from "@/data/projects";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "Return a list of Boopathi Raja's portfolio projects with slug, name, tagline, category, status, year, and live URL. Optionally filter by category, status, or featured flag.",
  inputSchema: {
    category: z
      .enum(CATEGORIES as [string, ...string[]])
      .optional()
      .describe("Filter by category"),
    status: z
      .enum(["Production", "MVP", "Prototype"])
      .optional()
      .describe("Filter by project status"),
    featuredOnly: z.boolean().optional().describe("Only return featured projects"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, status, featuredOnly }) => {
    const filtered = projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (status && p.status !== status) return false;
      if (featuredOnly && !p.featured) return false;
      return true;
    });
    const summary = filtered.map((p) => ({
      slug: p.slug,
      name: p.name,
      tagline: p.tagline,
      category: p.category,
      status: p.status,
      year: p.year,
      liveUrl: p.liveUrl ?? null,
      featured: p.featured ?? false,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { count: summary.length, projects: summary },
    };
  },
});
