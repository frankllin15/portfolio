import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "First Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "https://source.unsplash.com/random",
    created_at: new Date().toISOString(),
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: "2",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://source.unsplash.com/random",
    created_at: new Date().toISOString(),
    tags: ["tag1", "tag2", "tag3"],
  },
];
