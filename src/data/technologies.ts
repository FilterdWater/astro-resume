import AstroIcon from "@/assets/icons/vscode-icons--file-type-astro.svg";
import VueIcon from "@/assets/icons/devicon--vuejs.svg";
import LaravelIcon from "@/assets/icons/logos--laravel.svg";
import TailwindCSSIcon from "@/assets/icons/devicon--tailwindcss.svg";
import DockerIcon from "@/assets/icons/logos--docker-icon.svg";
import GitIcon from "@/assets/icons/devicon--git.svg";
import ReactIcon from "@/assets/icons/devicon--react.svg";
import NextjsIcon from "@/assets/icons/devicon--nextjs.svg";
import ViteIcon from "@/assets/icons/devicon--vitejs.svg";
import VitestIcon from "@/assets/icons/devicon--vitest.svg";
import PlaywrightIcon from "@/assets/icons/devicon--playwright.svg";
import WordpressIcon from "@/assets/icons/ic--baseline-wordpress.svg";

import type { SvgComponent } from "astro/types";

export interface Technology {
  name: string;
  href: string;
  title: string;
  description: string;
  icon: SvgComponent & ImageMetadata;
  accent: string;
}

export const technologies: Technology[] = [
  {
    name: "Astro",
    href: "https://astro.build/",
    title: "Link to Astro's introduction",
    description: "Web Framework",
    icon: AstroIcon,
    accent: "bg-[#e53a9d]/10",
  },
  {
    name: "Vue",
    href: "https://vuejs.org/",
    title: "Link to Vue's introduction",
    description: "JavaScript Framework",
    icon: VueIcon,
    accent: "bg-[#41b883]/10",
  },
  {
    name: "Laravel",
    href: "https://laravel.com/",
    title: "Link to Laravel's introduction",
    description: "Web App Framework",
    icon: LaravelIcon,
    accent: "bg-[#ff2d20]/10",
  },
  {
    name: "TailwindCSS",
    href: "https://tailwindcss.com/",
    title: "Link to Tailwind's introduction",
    description: "Utility-first CSS",
    icon: TailwindCSSIcon,
    accent: "bg-[#38bdf8]/10",
  },
  {
    name: "Docker",
    href: "https://docs.docker.com/get-started/docker-overview/",
    title: "Link to Docker's introduction",
    description: "Containerization Tooling",
    icon: DockerIcon,
    accent: "bg-[#2396ed]/10",
  },
  {
    name: "Git",
    href: "https://git-scm.com/",
    title: "Link to Git's introduction",
    description: "Version Control",
    icon: GitIcon,
    accent: "bg-[#f34f29]/10",
  },
  {
    name: "React",
    href: "https://react.dev/",
    title: "Link to React's introduction",
    description: "JavaScript UI Library",
    icon: ReactIcon,
    accent: "bg-[#61dafb]/10",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    title: "Link to Next.js's introduction",
    description: "React Framework",
    icon: NextjsIcon,
    accent: "bg-white/10",
  },
  {
    name: "Vite",
    href: "https://vite.dev/",
    title: "Link to Vite's introduction",
    description: "Build & Dev Tool",
    icon: ViteIcon,
    accent: "bg-[#a058fe]/10",
  },
  {
    name: "Vitest",
    href: "https://vitest.dev/",
    title: "Link to Vitest's introduction",
    description: "Testing Framework",
    icon: VitestIcon,
    accent: "bg-[#729b1b]/10",
  },
  {
    name: "Playwright",
    href: "https://playwright.dev/",
    title: "Link to Playwright's introduction",
    description: "E2E Testing",
    icon: PlaywrightIcon,
    accent: "bg-[#d65348]/10",
  },
  {
    name: "Wordpress",
    href: "https://wordpress.org/",
    title: "Link to Wordpress's introduction",
    description: "CMS",
    icon: WordpressIcon,
    accent: "bg-[#3858e9]/10",
  },
];
