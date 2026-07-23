import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../../data/projects";

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description:
    "Return full details for a single portfolio project by slug, including problem, features, stack, architecture, highlight, metrics, evidence, gaps, and live URL.",
  inputSchema: {
    slug: z.string().min(1).describe("Project slug (e.g. 'steel-flow', 'nexq')"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return {
        content: [
          {
            type: "text",
            text: `No project found with slug "${slug}". Use list_projects to see available slugs.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
