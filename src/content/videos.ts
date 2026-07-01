import type { Word } from "@/locale";
import type { ReleaseDate } from "@/utils/date";

interface Video {
  title: Word;
  date: ReleaseDate;
  embed: string;
  caption?: Word;
}

export const VIDEOS: Video[] = [
  {
    title: {
      jp: "称えよ藤本家【たのしいグレープフルーツ】",
      "en-romaji": "Tataeyo Fujimotoke [Tanoshī Gurēpufurūtsu]",
      en: "Praise The Fujimoto Family [Fun Grapefruit]",
    },
    date: { year: 2010, certainty: "?" },
    embed: "https://www.youtube-nocookie.com/embed/VeKpxKqyCyk",
    caption: {
      en: "The original upload of this video was removed from YouTube, but you can see it existed on Fujimoto's channel [here](https://web.archive.org/web/20210727102023/https://www.youtube.com/user/m0satt0n).",
    },
  },
  {
    title: {
      jp: "好きな食べ物【たのしいグレープフルーツ】",
      "en-romaji": "Sukina Tabemono [Tanoshī Gurēpufurūtsu]",
      en: "Favorite Food [Fun Grapefruit]",
    },
    date: { year: 2010, month: 2, day: 2, certainty: "=" },
    embed: "https://www.youtube-nocookie.com/embed/Sso_g8kY2Ys",
  },
  {
    title: { jp: "浮遊する俺", "en-romaji": "Fuyū suru Ore", en: "Me Floating" },
    date: { year: 2011, month: 7, day: 30, certainty: "=" },
    embed: "https://embed.nicovideo.jp/watch/sm15164148",
  },
  {
    title: { jp: "浮遊する俺２", "en-romaji": "Fuyū suru Ore 2", en: "Me Floating 2" },
    date: { year: 2011, month: 7, day: 30, certainty: "=" },
    embed: "https://embed.nicovideo.jp/watch/sm15165717",
  },
  {
    title: { jp: "短編アニメ映画", "en-romaji": "Tampen Anime Eiga", en: "Short Anime Movie" },
    date: { year: 2012, month: 5, day: 23, certainty: "=" },
    embed: "https://embed.nicovideo.jp/watch/sm17902814",
  },
];
