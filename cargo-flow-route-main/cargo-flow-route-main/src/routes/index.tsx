import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cargoflow/navbar";
import { Hero } from "@/components/cargoflow/hero";
import { Metrics } from "@/components/cargoflow/metrics";
import { Problem } from "@/components/cargoflow/problem";
import { HowItWorks } from "@/components/cargoflow/how-it-works";
import { DashboardPreview } from "@/components/cargoflow/dashboard-preview";
import { Capacity } from "@/components/cargoflow/capacity";
import { ForLogistics, ForOperators } from "@/components/cargoflow/audience";
import { NetworkSection } from "@/components/cargoflow/network-section";
import { Revenue } from "@/components/cargoflow/revenue";
import { Tracking } from "@/components/cargoflow/tracking";
import { WhyCargoFlow } from "@/components/cargoflow/why";
import { FinalCta } from "@/components/cargoflow/final-cta";
import { Footer } from "@/components/cargoflow/footer";

const TITLE = "CargoFlow — Turn every journey into delivery capacity";
const DESCRIPTION =
  "CargoFlow lets logistics companies reserve unused cargo capacity on scheduled public buses across Maharashtra—cheaper regional delivery, new revenue for transport operators.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Problem />
        <HowItWorks />
        <DashboardPreview />
        <Capacity />
        <ForLogistics />
        <ForOperators />
        <NetworkSection />
        <Revenue />
        <Tracking />
        <WhyCargoFlow />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
