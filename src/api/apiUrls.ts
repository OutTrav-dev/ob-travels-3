// Centralized API endpoints. Replace with real URLs as needed.
export const API_URLS = {
  homePage: "/homepage",
  destinations: "/destinations",
  packages: "/packages",
  search: "/search",
  bookingEnquiry: "/booking-enquiry",
  packageDetail: (id: string) => `/packages/${id}`,
  relatedPackages: (id: string) => `/packages/${id}/related`,
};
