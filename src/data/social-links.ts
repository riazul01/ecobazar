export interface SocialLink {
  id: string | number;
  name?: string;
  icon: string;
  link: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Facebook",
    icon: "ri:facebook-fill",
    link: "#!",
    color: "#1877F2",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "ri:linkedin-fill",
    link: "#!",
    color: "#0A66C2",
  },
  {
    id: 3,
    name: "Twitter / X",
    icon: "ri:twitter-x-line",
    link: "#!",
    color: "#14171A",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: "ri:pinterest-fill",
    link: "#!",
    color: "#E60023",
  },
];
