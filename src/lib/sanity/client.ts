import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qfe82lsu",
  dataset: "production",
  apiVersion: "2025-04-19",
  useCdn: false,
});
