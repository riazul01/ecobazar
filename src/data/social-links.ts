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
    link: "https://facebook.com",
    color: "#1877F2",
  },
  {
    id: 2,
    name: "Twitter / X",
    icon: "ri:twitter-x-line",
    link: "https://twitter.com",
    color: "#000000",
  },
  {
    id: 3,
    name: "Pinterest",
    icon: "ri:pinterest-fill",
    link: "https://pinterest.com",
    color: "#E60023",
  },
  {
    id: 4,
    name: "Instagram",
    icon: "ri:instagram-line",
    link: "https://instagram.com",
    color: "#E4405F",
  },
];
