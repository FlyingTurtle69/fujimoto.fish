import type { Locale, Word } from "@/locale";
import type { Alias } from "./aliases";

interface ReleaseDate {
  year: number;
  month?: number; // using 1 as January
  day?: number;
  certainty: "=" | "<" | "?";
}

const ENG_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function displayDate({ year, month, day, certainty }: ReleaseDate, locale: Locale) {
  let result = certainty === "<" ? "<" : "";
  if (locale === "jp") {
    result += `${year}年`;
    if (month) {
      result += `${month}月`;
    }
    if (day) {
      result += `${day}日`;
    }
  } else {
    if (day) {
      result += `${day} `;
    }
    if (month) {
      result += `${ENG_MONTHS[month - 1]} `;
    }
    result += year;
  }
  if (certainty === "?") {
    result += "?";
  }
  return result;
}

interface MangaBase {
  name: Word;
  alias: Alias;
  date: ReleaseDate; // Date first chapter published or other main date
  dateProof: Word;
  enLink?: string;
  jpLink?: string;
  summary?: Word;
  summarySource?: Word;
}

interface UnpublishedManga extends MangaBase {
  published: "unpublished";
  existenceProof: Word;
}

interface PublishedManga extends MangaBase {
  published: "published" | "self-published";
}

type Manga = UnpublishedManga | PublishedManga;

export const MANGA = {
  chainsawman: {
    name: { en: "Chainsaw Man", jp: "チェンソーマン", "en-romaji": "Chensō Man" },
    alias: "fujimoto",
    date: { year: 2018, month: 12, day: 3, certainty: "=" },
    dateProof: {
      en: "This article says it: https://natalie.mu/comic/news/310548",
    },
    enLink: "https://www.viz.com/shonenjump/chapters/chainsaw-man",
    jpLink: "https://shonenjumpplus.com/episode/10834108156650024834",
    summary: {
      en: "Denji’s a poor young man who’ll do anything for money, even hunting down devils with his pet devil Pochita. He’s a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he’s betrayed by someone he trusts. Now with the power of a devil inside him, Denji’s become a whole new man—Chainsaw Man!",
      jp: "悪魔のポチタと共にデビルハンターとして借金取りにこき使われる超貧乏な少年・デンジ。ド底辺の日々は、残忍な裏切りで一変する!! 悪魔をその身に宿し、悪魔を狩る、新時代ダークヒーローアクション、開幕！",
    },
    summarySource: {
      en: "https://www.viz.com/manga-books/manga/chainsaw-man-volume-1-0/product/6419/digital",
      jp: "https://zebrack-comic.shueisha.co.jp/title/3659/volume/16828",
    },
    published: "published",
  },
} as const satisfies Record<string, Manga>;

type MangaId = keyof typeof MANGA;

const IMAGE_FOLDER = "/src/assets/covers/";

// This has to use a string literal
const covers = import.meta.glob<{ default?: ImageMetadata }>("/src/assets/covers/*.webp", {
  eager: true,
});

export function getCover(manga: MangaId, locale: Locale) {
  return (
    covers[`${IMAGE_FOLDER}${manga}.${locale}.webp`]?.default ??
    covers[`${IMAGE_FOLDER}${manga}.jp.webp`]?.default ??
    covers[`${IMAGE_FOLDER}${manga}.en.webp`]?.default
  );
}
