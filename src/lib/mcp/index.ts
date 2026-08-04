import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import getProfileTool from "./tools/get-profile";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "boopathiraja-portfolio-mcp",
  title: "Boopathi Raja — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for Boopathi Raja's portfolio. Use `get_profile` for bio and links, `list_projects` to browse projects (optionally filtered by category, status, or featured), and `get_project` for full case-study details on a specific project by slug.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listProjectsTool, getProjectTool, getProfileTool],
});
