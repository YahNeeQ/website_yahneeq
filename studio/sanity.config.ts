import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "YahNeeQ Content Studio",
  projectId: "7n2t0tql",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
