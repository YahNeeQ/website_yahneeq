export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: "active" | "archived";
  desc: string;
  body: string[];
  stack: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "yahneeq-website",
    title: "YahNeeQ website",
    tag: "WEB",
    status: "active",
    desc: "My personal website for sharing projects, blog posts, and what I am currently building.",
    stack: ["TypeScript", "React", "TanStack Start", "Tailwind CSS"],
    body: [
      "This website is my personal corner of the internet. I am building it to document my projects, publish blog posts, and share what I learn along the way.",
      "The site is built with React, TypeScript, TanStack Start, and Tailwind CSS. It has dedicated project and blog sections, server-side rendering, and a responsive design.",
      "I am currently improving the content, design, and maintainability of the website as I learn more about web development.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
