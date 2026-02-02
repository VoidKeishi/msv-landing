import { Hero } from "@/components/sections/Hero";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ServicesSnapshot />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
