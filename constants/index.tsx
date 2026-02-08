import { CircleDashed, CodeXml, Layers, Square } from "lucide-react";

export const suggestions = [
  {
    icon: "✈️",
    name: "Travel Planner App",
    description:
      "Trip planning dashboard with maps, itineraries, hotel bookings, and activity scheduling.",
  },
  {
    icon: "🎓",
    name: "AI Learning Platform",
    description:
      "Gamified learning experience with progress tracking, quizzes, certificates, and AI tutors.",
  },
  {
    icon: "💳",
    name: "Finance Tracker",
    description:
      "Expense tracking dashboard with charts, budgets, transaction history, and financial insights.",
  },
  {
    icon: "🛒",
    name: "E-Commerce Store",
    description:
      "Modern online store with product listings, cart flow, checkout, and order management.",
  },
  {
    icon: "📅",
    name: "Project Management Tool",
    description:
      "Kanban boards, task assignments, timelines, team collaboration, and progress analytics.",
  },
  {
    icon: "🏥",
    name: "Healthcare Dashboard",
    description:
      "Patient management system with appointments, medical records, and analytics overview.",
  },
  {
    icon: "📊",
    name: "Analytics Dashboard",
    description:
      "Data visualization platform with KPIs, charts, filters, and real-time reporting.",
  },
  {
    icon: "📱",
    name: "Social Media App",
    description:
      "Content feed, user profiles, messaging, notifications, and engagement analytics.",
  },
  {
    icon: "🏠",
    name: "Real Estate Platform",
    description:
      "Property listings with filters, agent profiles, booking tours, and location maps.",
  },
  {
    icon: "⚙️",
    name: "SaaS Admin Panel",
    description:
      "Admin dashboard with user management, roles, billing, system settings, and logs.",
  },
];


export const themeOptions = [
  {
    value: "modern",
    label: "Modern / Clean",
    description: "Sleek, professional, high usability",
    icon: "✨",
    previewBg: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
  },
  {
    value: "minimal",
    label: "Minimal",
    description: "Ultra-clean, lots of white space",
    icon: "□",
    previewBg: "bg-gray-100 dark:bg-gray-800",
  },
  {
    value: "neumorphic",
    label: "Neumorphic",
    description: "Soft extruded shadows, tactile feel",
    icon: <Square className="h-8 w-8 text-gray-400" />,
    previewBg: "bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800",
  },
  {
    value: "glassmorphism",
    label: "Glassmorphism",
    description: "Frosted glass, blur, translucent layers",
    icon: <CircleDashed className="h-8 w-8 text-cyan-400" />,
    previewBg: "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm",
  },
  {
    value: "material",
    label: "Material Design",
    description: "Google-inspired, elevation & motion",
    icon: "◇",
    previewBg: "bg-gradient-to-br from-teal-500/20 to-green-500/20",
  },
  {
    value: "brutalist",
    label: "Brutalist",
    description: "Raw, bold, unpolished, high contrast",
    icon: <CodeXml className="h-8 w-8 text-red-500" />,
    previewBg: "bg-black text-white",
  },
  {
    value: "cyberpunk",
    label: "Cyberpunk / Retro-futurism",
    description: "Neon glows, glitch, dark futuristic",
    icon: "⚡️",
    previewBg: "bg-gradient-to-br from-purple-900 via-pink-900 to-black",
  },
  {
    value: "bento",
    label: "Bento / Modular",
    description: "Card-based, grid layouts, colorful blocks",
    icon: <Layers className="h-8 w-8 text-amber-500" />,
    previewBg: "bg-gradient-to-br from-orange-400/30 via-rose-400/30 to-purple-400/30",
  },
];

export const themeNames = [
  { value: "modern", title: "Modern / Clean" },
  { value: "minimal", title: "Minimal" },
  { value: "neumorphic", title: "Neumorphic" },
  { value: "glassmorphism", title: "Glassmorphism" },
  { value: "brutalist", title: "Brutalist" },
  { value: "material", title: "Material" },
  { value: "cyberpunk", title: "Cyberpunk" },
  { value: "bento", title: "Bento" },
]
