export interface Language {
  id: string | number;
  code: string;
  lang: string;
  flag: string;
}

export const languages: Language[] = [
  {
    id: 1,
    code: "eng",
    lang: "English",
    flag: "twemoji:flag-united-kingdom",
  },
  {
    id: 2,
    code: "ban",
    lang: "বাংলা",
    flag: "twemoji:flag-bangladesh",
  },
  {
    id: 3,
    code: "zh",
    lang: "中文",
    flag: "twemoji:flag-china",
  },
  {
    id: 4,
    code: "tr",
    lang: "Türkçe",
    flag: "twemoji:flag-turkey",
  },
  {
    id: 5,
    code: "dan",
    lang: "Danish",
    flag: "twemoji:flag-denmark",
  },
];
