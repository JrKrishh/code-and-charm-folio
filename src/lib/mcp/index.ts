import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import getProfileTool from "./tools/get-profile";

export default defineMcp({
  name: "boopathiraja-portfolio-mcp",
  title: "Boopathi Raja — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Boopathi Raja's portfolio. Use `get_profile` for bio and links, `list_projects` to browse projects (optionally filtered by category, status, or featured), and `get_project` for full case-study details on a specific project by slug.",
  tools: [listProjectsTool, getProjectTool, getProfileTool],
});
