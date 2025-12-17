/* =========================
   AI Vision – Global Config
   ========================= */

// Categories (add unlimited)
const categories = [
  { id: "all", name: "All" },
  { id: "ai", name: "AI Images & Videos" },
  { id: "abstract", name: "Abstract" },
  { id: "animals", name: "Animals" },
  { id: "anime", name: "Anime" }
];

// Content placeholder (scales to 100,000+ items)
const contentData = [];

// Advertising config
const adsConfig = {
  enabled: true,
  frequency: 10,
  fallback: {
    title: "Advertise with AI Vision",
    link: "#"
  }
};

// Load limits
const ITEMS_PER_LOAD = 20;
