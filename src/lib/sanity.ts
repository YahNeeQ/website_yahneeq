import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "7n2t0tql",
  dataset: "production",
  apiVersion: "2026-06-21",
  useCdn: true,
});
