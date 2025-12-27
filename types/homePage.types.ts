export interface VideoSource {
  src: string;
  type: string;
}

export interface HeroBanner {
  id: string;
  contentTitle: string;
  contentText: string;
  design: {
    videoSources: VideoSource[];
    fallbackImage: string;
    overlayClass: string;
    titleClasses: string;
    subTitleClasses: string;
    fontFamily: string;
    heightClass: string;
    title: string;
    subTitle: string;
  };
}

export interface TrendingDestinationItem {
  id: string;
  name: string;
  tagLine: string;
  locale: string;
  image: string;
  meta?: string;
}

export interface DestinationCard {
  id: string;
  name: string;
  tagLine?: string;
  locale?: string;
  meta?: string;
  image: string;    // preferred
  title?: string;
  destination?: string;
  img?: string;     // legacy
  price?: string;
  size?: number;
}

export interface CollageItem {
  title: string;
  price: string; // e.g., "₹2000/-"
  img: string;
  size: number;
  destination?: string;
}

export interface CollageGridProps {
  items: CollageItem[];
}



export interface TopCelebrities {
  left: { videoUrl: string; title: string };
  right: { videoUrl: string };
}

export interface VideoCardData {
  id: string;
  poster: string;
  videoSources: VideoSource[];
  size: {
    height: string;
    minHeight: string;
  };
}

export interface BookYourTicketsSection {
  title: string;
  description: string;
  image: string;
  tabs: string[];
  ctaButtonText: string;
}

export interface ClientImageCardProps {
  id: string;
  src: string;
  alt?: string;
}

export interface CompanyStats {
  left: {
    label: string;
    value: number;
  };
  right: {
    label: string;
    value: number;
  };
  bgImg?: string; 
};

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
  align: "left" | "right";
}

export interface CommunityBanner {
  title: string;
  subTitle: string;
  ctaButtonText: string;
  bgImage: string;
  whatsappLink: string;
}

export interface HomePage {
  heroBanner: HeroBanner;
  trendingDestinations: DestinationCard[];
  topCelebrities: TopCelebrities;
  internationalDestinations: DestinationCard[];
  domesticDestinations: DestinationCard[];
  videoCardData: VideoCardData;
  bookYourTicketsSection: BookYourTicketsSection;
  ourClients: ClientImageCardProps[];
  companyStats: CompanyStats;
  testimonials: Testimonial[];
  communityBanner: CommunityBanner;
}

export interface VideoSource {
  src: string;
  type: string;
}
export interface VideoCardConfig {
  id: string;
  videoSrc?: string;        // legacy single source
  videoSources?: VideoSource[]; // preferred multiple sources
  poster?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  colors?: {
    heading?: string;
    subheading?: string;
    description?: string;
    ctaBg?: string;
    ctaText?: string;
    overlayFrom?: string;
    overlayTo?: string;
  };
  size?: {
    height?: string;
    minHeight?: string;
  };
  align?: "left" | "center" | "right";
}


// const { setHomePage } = useAppData();

// useEffect(() => {
//   async function loadData() {
//     const res = await fetch("/api/homepage");
//     const data: HomePage = await res.json();
//     setHomePage(data);
//   }
//   loadData();
// }, []);

// const { state } = useAppData();

// console.log(state.homePage?.heroBanner.title);
