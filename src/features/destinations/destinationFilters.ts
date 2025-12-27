export const destinationFilters = [
  {
    key: "category",
    label: "Category",
    options: [
      { label: "International", value: "international" },
      { label: "Domestic", value: "domestic" },
    ],
  },
  {
    key: "sort",
    label: "Sort by",
    options: [
      { label: "Popular", value: "popular" },
      { label: "Trending", value: "trending" },
      { label: "Relevant", value: "relevant" },
      { label: "New", value: "new" },
    ],
  },
  // {
  //   key: "price",
  //   label: "Price",
  //   options: [
  //     { label: "Below ₹50,000", value: [0, "50000"] },
  //     { label: "₹50,000 - ₹1,00,000", value: [50000, 100000] },
  //     { label: "Above ₹1,00,000", value: [100000, Infinity] },
  //   ],
  // },
];
