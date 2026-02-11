interface MockupSpecParams {
  prompt: string;
  projectName?: string;
  stylePreset?: string;
  deviceType: "mobile" | "tablet" | "desktop";
  quality: number;
  darkMode: boolean;
  maxScreens?: number,
}

export function buildMockupSpecPrompt({
  prompt,
  projectName,
  stylePreset,
  deviceType,
  quality,
  darkMode,
  maxScreens = 4,
}: MockupSpecParams): string {
  const qualityLevel = 
    quality >= 90 ? "ultra-detailed professional design system" :
    quality >= 70 ? "highly polished, production-ready" :
    "clean, clear, usable starter";

  const deviceContext =
    deviceType === "mobile" ? "mobile-first, portrait smartphone layout (iPhone-like safe areas)" :
    deviceType === "tablet" ? "tablet layout — responsive, can use split-view or larger cards" :
    "desktop/web — wide layout, sidebar possible, multi-column if appropriate";

  const mode = darkMode ? "dark mode" : "light mode";

  return `
You are a senior product designer and frontend engineer who ships clean, modern React applications using shadcn/ui, Tailwind CSS, and TypeScript.

Task:
Based on the user's app idea: "${prompt}"

Project name: "${projectName}"

Generate a structured JSON specification for ${maxScreens} logical screens / views that together form a coherent first version of this product.

Follow these strict rules:
- Output ONLY valid JSON — no explanations, no markdown, no code fences
- Create realistic, purposeful screens (welcome, dashboard, profile, settings, detail view, etc.)
- Each screen must have:
  - Unique kebab-case screenId (e.g. "onboarding-welcome", "dashboard-main")
  - Short, clear screenName (title case, human readable)
  - purpose — one sentence explaining why this screen exists
  - layoutDescription — concise visual/layout summary (2–4 sentences)
  - code — a complete, self-contained React functional component using:
    • shadcn/ui components (Card, Button, Input, Badge, Avatar, etc.)
    • Tailwind CSS classes
    • TypeScript
    • Use modern patterns (flex/grid, responsive classes)
    • Dark mode support via class (e.g. dark:bg-zinc-950)
    • Placeholder data / icons where needed
    • Keep each component under ~120 lines — focus on structure, not full logic
- Overall theme must be: ${stylePreset}, ${mode}, ${qualityLevel}
- Respect device context: ${deviceContext}
- Make designs consistent across screens (colors, spacing, typography)

Desired JSON structure (exact keys):

{
  "projectName": string,
  "projectVisualDescription": string,   // 1–2 sentence overall visual style summary
  "theme": string,                      // e.g. "modern-dark-minimal", "clean-neumorphic-light"
  "screens": array of objects [
    {
      "id": string,                     // kebab-case unique id
      "name": string,
      "purpose": string,
      "layoutDescription": string,
      "code": string                    // the full React component code as string
    }
  ]
}

Begin generating now.
`.trim();
}