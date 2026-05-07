/** @format */

import HeroSection from "@/components/HeroComponents/HeroSection";
import DownloadSections from "@/components/DownloadComponents/DownloadSections";
import FeaturesSections from "@/components/FeaturesComponents/FeaturesSections";
import ManagementSections from "@/components/ManagementComponents/ManagementSections";
import PowerFeatureSections from "@/components/PowerFeatureComponents/PowerFeatureSections";
import FormFindingSections from "@/components/FormFindingComponents/FormFindingSections";
import CompetetivePaintballSections from "@/components/CompetetivePaintballComponents/CompetetivePaintballSections";
import BannerSections from "@/components/BannerComponents/BannerSections";
import HowItWorksSections from "@/components/HowItWorksComponents/HowItWorksSections";


export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <FeaturesSections />
      <HowItWorksSections />
      <ManagementSections />
      <PowerFeatureSections />
      <FormFindingSections />
      <BannerSections />  
      <CompetetivePaintballSections />
      <DownloadSections />
    </main>
  );
}
