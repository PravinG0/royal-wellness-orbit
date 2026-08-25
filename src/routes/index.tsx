import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";

const title = "Royal Medical Center | Personalized Hormone & Wellness Care";
const description =
  "Personalized hormone therapy, TRT, weight management and peptide programs designed around your health and goals. Starting at $67/mo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
    </main>
  );
}
