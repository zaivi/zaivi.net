export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string | string[];
  tags?: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Lead Creative Strategist",
    company: "Lumina Digital Studio",
    period: "2021 — Present",
    current: true,
    description: [
      "Spearheaded the visual redesign of 14+ Fortune 500 digital ecosystems, increasing user engagement by 40% on average.",
      "Developed a custom design system token architecture that reduced development handoff time by 60%.",
      "Mentored a cross-functional team of 12 designers and developers, fostering a culture of atmospheric clarity and no-line philosophy."
    ]
  },
  {
    role: "Senior UX Architect",
    company: "Aetheria Interactive",
    period: "2018 — 2021",
    description: "Focused on high-fidelity prototyping and user-centric flows for complex SaaS platforms in the fintech sector.",
    tags: ["Fintech", "SaaS"]
  },
  {
    role: "Visual Designer",
    company: "Prism Media",
    period: "2016 — 2018",
    description: "Crafting editorial layouts and brand identities for emerging lifestyle startups."
  }
];

export const SKILLS = {
  Design: ["Figma", "Adobe CC", "Principle", "Cinema 4D"],
  Frontend: ["Tailwind CSS", "React.js", "Next.js", "Webflow"],
  Workflow: ["Jira / Agile", "Storybook", "Git / GitHub", "Linear"]
};