import GlobalLoaderWrapper from "@/src/components/common/layout/GlobalLoaderWrapper";
import AdditionalVideoBannerOne from "@/src/features/Home/AdditionalVideoBannerOne";
import BookYourTickets from "@/src/features/Home/BookYourTickets";
import CompanyStats from "@/src/features/Home/CompanyStats";
import DomesticDestinations from "@/src/features/Home/DomesticDestinations";
import FloatingAction from "@/src/features/Home/components/FloatingAction";
import HeroBanner from "@/src/features/Home/HeroBanner";
import InternationalDestinations from "@/src/features/Home/InternationalDestinations";
import JoinCommunityBanner from "@/src/features/Home/JoinCommunityBanner";
import OurClients from "@/src/features/Home/OurClients";
import Testimonials from "@/src/features/Home/Testimonials";
import TopCelebs from "@/src/features/Home/TopCelebs";
import TrendingDestination from "@/src/features/Home/TrendingDestination";

export default function Home() {
  return (
    <main className="bg-white">
      <GlobalLoaderWrapper>
        <HeroBanner />
        <TrendingDestination />
        <TopCelebs />
        <InternationalDestinations />
        <DomesticDestinations />
        <AdditionalVideoBannerOne />
        <BookYourTickets />
        <OurClients />
        <CompanyStats />
        <Testimonials />
        <JoinCommunityBanner />
        <FloatingAction />
      </GlobalLoaderWrapper>
    </main>
  );
}
