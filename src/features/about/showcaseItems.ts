export interface ShowcaseItem {
  id: string;
  name: string;
  tagLine?: string;
  locale?: string;
  meta?: string;
  image: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "bali",
    name: "Bali",
    tagLine: "Island of the Gods",
    locale: "Indonesia",
    meta: "Indonesia, Bali image",
    image:
      "https://marketplace.canva.com/EAFbHYxdwws/1/0/1280w/canva-purple-photo-bali-island-instagram-post-0SLsu7XSPDg.jpg",
  },
  {
    id: "paris",
    name: "Paris",
    tagLine: "City of Lights",
    locale: "France",
    image:
      "https://cdn.wallpapersafari.com/42/21/86fiXm.jpg",
  },
  {
    id: "maldives",
    name: "Maldives",
    tagLine: "Tropical Luxury",
    locale: "Indian Ocean",
    image:
      "https://cdn1.tripoto.com/media/filter/nxxl/img/747480/Image/1585550743_10.jpg.webp",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    tagLine: "Neon Metropolis",
    locale: "Japan",
    image:
      "https://images.squarespace-cdn.com/content/v1/535a8b5ee4b00a1a8a7975e6/1536292299197-QIO8W4LZATEQRXUOOLUB/Managing+to+find+a+few+rooftops+that+where+easy-ish+to+access%2C+I+ended+up+sleeping+on+one+with+Tokyo+Tower+providing+an+dreamy+view+to+drift+off+to+and..",
  },
  {
    id: "dubai",
    name: "Dubai",
    tagLine: "Futuristic Oasis",
    locale: "UAE",
    image:
      "https://images.playground.com/7a4997c5-6ce1-4fee-8573-21f51cdb8cce.jpeg",
  },
  {
    id: "new-york",
    name: "New York",
    tagLine: "New York City",
    locale: "USA",
    image:
      "https://m.media-amazon.com/images/I/61Mc89sEO1L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: "manali",
    name: "Manali",
    tagLine: "Himalayan Getaway",
    locale: "India",
    image:
      "https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1573741940_manali.jpg.webp",
  },
  {
    id: "kochin",
    name: "Kochin",
    tagLine: "Kerala",
    locale: "India",
    image:
      "https://i.ytimg.com/vi/7906oqpuP60/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDnCjaGVWNz36Dsf4G-2vcvd3rOnw",
  },
  {
    id: "munnar",
    name: "Munnar",
    tagLine: "Kerala",
    locale: "India",
    image:
      "https://abhinavs.epizy.com/wp-content/uploads/2022/08/original-1024x727.jpg",
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    tagLine: "Agra",
    locale: "India",
    image:
      "https://theurgetowander.com/wp-content/uploads/2013/11/taj-mahal-india-travel-copy.jpg",
  },
];
export const TEAM_MEMBERS: ShowcaseItem[] = [
  {
    id: "faheem",
    name: "Faheem Mubarak",
    tagLine: "Founder & MD",
    locale: "India",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtODML0kO8hqEmlf0QO_zyjjpNnFHq0Nf5w&s",
  },
  {
    id: "hakeem",
    name: "Hakeem ",
    tagLine: "Founder & CEO",
    locale: "France",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSvShOkS6AKK2NqV1cueW3mtjQDymQM8LbepWXsgMFzUrBWFOZK68Y9VpyPFySZG2LxQ&usqp=CAU",
  },
  {
    id: "salam",
    name: "Abdul Salam",
    tagLine: "Tropical Luxury",
    locale: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fm=jpg&q=80&w=1600",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    tagLine: "Neon Metropolis",
    locale: "Japan",
    image:
      "https://img.freepik.com/free-photo/beautiful-landscape-mountain-fuji-with-chureito-pagoda-around-maple-leaf-tree-autumn-season_74190-9895.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "santorini",
    name: "Santorini",
    tagLine: "Azure & White",
    locale: "Greece",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fm=jpg&q=80&w=1600",
  },
  {
    id: "banff",
    name: "Banff",
    tagLine: "Alpine Serenity",
    locale: "Canada",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fm=jpg&q=80&w=1600",
  },
  {
    id: "dubai",
    name: "Dubai",
    tagLine: "Futuristic Oasis",
    locale: "UAE",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?crop=entropy&cs=tinysrgb&fm=jpg&q=80&w=1600",
  },
  {
    id: "cape-town",
    name: "Cape Town",
    tagLine: "Coastal Majesty",
    locale: "South Africa",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=tinysrgb&fm=jpg&q=80&w=1600",
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    tagLine: "Incan Wonder",
    locale: "Peru",
    image:
      "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "new-york",
    name: "New York",
    tagLine: "Urban Energy",
    locale: "USA",
    image:
      "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?crop=entropy&cs=tinysrgb&fm=jpg&q=80&w=1600",
  },
];
