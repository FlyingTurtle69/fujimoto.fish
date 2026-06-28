import type { Locale, Word } from "@/locale";
import type { AliasId } from "./aliases";
import { defineRecord } from "@/utils/object";

interface ReleaseDate {
  year: number;
  month?: number; // using 1 as January
  day?: number;
  certainty: "=" | "?";
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
  let result = "";
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
  alias: AliasId;
  type?: "one-shot" | "series";
  date: ReleaseDate; // Date first chapter published or other main date
  dateProof: Word;
  enLink?: string;
  jpLink?: string;
  summary?: Word;
  summarySource?: Word;
  note?: Word;
}

interface UnpublishedManga extends MangaBase {
  published: "unpublished";
  existenceProof: Word;
}

interface PublishedManga extends MangaBase {
  published: "published" | "self-published";
}

export type Manga = UnpublishedManga | PublishedManga;

export const MANGA = defineRecord<Manga>()({
  murige: {
    name: {
      en: "Impossible Game",
      jp: "ムリゲー",
      "en-romaji": "Murigē",
    },
    alias: "nagato",
    type: "series",
    date: { year: 2010, month: 2, day: 8, certainty: "=" },
    dateProof: {
      en: "The image files of the first chapter, such as [this one](http://namakuriimu.web.fc2.com/1.jpg), have a modified date of February 8, 2010 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`). There is also [fanart](https://www.neetsha.jp/oekaki/log/?bbs=3&res=15790) dated 18 February 2010, so it must have been public before then.",
    },
    jpLink: "http://namakuriimu.web.fc2.com/",
    published: "self-published",
    summary: {
      jp: "突然、手や足や目などがなくなった男！「ほしいものみっついえ」「リストは、手、足、鼻、飯・・・」「ムリゲーへようこそ!!」",
    },
    summarySource: {
      jp: "https://www.shonenjump.com/jisedai_manga/publication.html",
    },
    note: {
      en: "This won the first [JUMP Next Generation Grand Prix](https://www.shonenjump.com/jisedai_manga/publication.html).",
    },
  },
  pantz: {
    name: { jp: "PANTZ" },
    alias: "nagato",
    date: { year: 2010, certainty: "?" },
    dateProof: {
      en: "[This](https://www.google.com/search?q=%22%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E7%A7%81%E3%81%AF%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%92%E5%A7%8B%E3%82%81%E3%82%8B%E3%81%AE%E3%81%A0%E3%82%8D%E3%81%86%22&sxsrf=APpeQntRoLJO1Ri7V3DVhSRlOEL6240f_Q%3A1781972411206) Google search has the following snippet from the NeetshaWiki page for NagatoIsMe: 「長門は俺は新都社のヤング作家・少年作家・コニー作家。 作品. ムリゲー(完結) PANTZ(完結) 艦蹴り(完結) それでも私はレビューを始めるのだろう」. This is listing _Impossible Game_, _PANTZ_, _Warship Kick_ and _Even so, I Suppose I'll Start the Review_ as works that NagatoIsMe made. Besides PANTZ, these are all in chronological order. If we assume that PANTZ is also ordered chronologically, then it must have been made in 2010, sometime between February and August.\n\nThis [comment](https://neetsha.jp/inside/comment.php?id=10915&limit=1000#comment_410448) asking why PANTZ was deleted was posted on 26 May 2011, so at the very least we know it must have been older than that.",
    },
    published: "unpublished",
    existenceProof: {
      en: "It appears in [this](https://www.google.com/search?q=%22%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E7%A7%81%E3%81%AF%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%92%E5%A7%8B%E3%82%81%E3%82%8B%E3%81%AE%E3%81%A0%E3%82%8D%E3%81%86%22&sxsrf=APpeQntRoLJO1Ri7V3DVhSRlOEL6240f_Q%3A1781972411206) Google search snippet for the NeetshaWiki page for NagatoIsMe, listing works by him. Unfortunately, the original page no longer exists. There is also a comment [here](https://neetsha.jp/inside/comment.php?id=10915&limit=1000#comment_410448) asking why PANTZ was deleted.",
    },
  },
  kankeri: {
    name: {
      en: "Warship Kick",
      jp: "艦蹴り",
      "en-romaji": "Kan Keri",
    },
    alias: "nagato",
    type: "series",
    date: { year: 2010, month: 8, day: 3, certainty: "=" },
    dateProof: {
      en: "The image files of the first chapter, such as [this one](http://namakuriimu.web.fc2.com/0000.jpg), have a modified date of August 3, 2010 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`). There is also [fanart](https://www.neetsha.jp/oekaki/log/?bbs=3&res=20150) dated 7 August 2010, so it must have been public before then.",
    },
    jpLink: "http://namakuriimu.web.fc2.com/0000index.html",
    published: "self-published",
  },
  pasokon: {
    name: {
      en: "PC and Her",
      jp: "パソコンと彼女",
      "en-romaji": "Pasokon to Kanojo",
    },
    alias: "nagato",
    type: "series",
    date: { year: 2010, month: 9, day: 14, certainty: "=" },
    dateProof: {
      en: "The image files of pages 1 to 6 of the first chapter have a modified date of 13 August 2010, whereas pages 7 to [11](http://namakuriimu.web.fc2.com/t011.jpg) have a modified date of 14 September. I decided to use the latter date because I thought that maybe Fujimoto didn't release the first chapter until all the pages were complete.",
    },
    jpLink: "http://namakuriimu.web.fc2.com/t1.html",
    published: "self-published",
  },
  review: {
    name: {
      en: "Even so, I Suppose I'll Start the Review",
      jp: "それでも私はレビューを始めるのだろう",
      "en-romaji": "Soredemo Watashi wa Rebyū o Hajimeru no darō",
    },
    alias: "nagato",
    type: "series",
    date: { year: 2010, month: 10, day: 16, certainty: "=" },
    dateProof: {
      en: "The image files of the first chapter, such as [this one](http://namakuriimu.web.fc2.com/re001.jpg), have a modified date of October 16, 2010 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`).",
    },
    jpLink: "http://namakuriimu.web.fc2.com/reindex.html",
    published: "self-published",
  },
  sayonaraheaven: {
    name: {
      en: "Goodbye Heaven",
      jp: "サヨナラヘヴン",
      "en-romaji": "Sayonara Hevun",
    },
    alias: "nagato",
    type: "one-shot",
    date: { year: 2010, month: 11, day: 7, certainty: "=" },
    dateProof: {
      en: "The image files of the manga, such as [this one](http://namakuriimu.web.fc2.com/koi1.jpg), have a modified date of November 7, 2010 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`).",
    },
    jpLink: "http://namakuriimu.web.fc2.com/koi1.html",
    published: "self-published",
  },
  ashitasen: {
    name: {
      en: "Tomorrow War",
      jp: "明日戦",
      "en-romaji": "Ashitasen",
    },
    alias: "nagato",
    date: { year: 2011, certainty: "?" },
    dateProof: {
      en: "The manga that we know the dates of on [this page](http://nagatoisme.web.fc2.com/sonota.html) appear to be in chronological order. If the ones we don't know the dates of are as well, then that would mean this manga came out in late 2010 or early 2011.",
    },
    published: "unpublished",
    existenceProof: {
      en: "It's listed on [one of Fujimoto's websites](http://nagatoisme.web.fc2.com/sonota.html). Unfortunately, the link to it is now dead.",
    },
    note: {
      en: "The title is likely not the full title. The [page](http://nagatoisme.web.fc2.com/sonota.html) that I got the title from uses shortenings for most of the manga titles, so this title is likely a shortening too.",
      "en-romaji":
        "The title is likely not the full title. The [page](http://nagatoisme.web.fc2.com/sonota.html) that I got the title from uses shortenings for most of the manga titles, so this title is likely a shortening too.\n\nI'm very unsure if the rōmaji of the title is correct.",
    },
  },
  ac: {
    name: {
      en: "AC",
      jp: "ＡＣ",
    },
    alias: "nagato",
    date: { year: 2011, certainty: "?" },
    dateProof: {
      en: "The manga that we know the dates of on [this page](http://nagatoisme.web.fc2.com/sonota.html) appear to be in chronological order. If the ones we don't know the dates of are as well, then that would mean this manga came out in late 2010 or early 2011.",
    },
    published: "unpublished",
    existenceProof: {
      en: "It's listed on [one of Fujimoto's websites](http://nagatoisme.web.fc2.com/sonota.html). Unfortunately, the link to it is now dead.",
    },
    note: {
      en: "The title is likely not the full title. The [page](http://nagatoisme.web.fc2.com/sonota.html) that I got the title from uses shortenings for most of the manga titles, so this title is likely a shortening too.",
    },
  },
  densetsu: {
    name: {
      en: "Legend of the Hero of the Legend of the Hero of the Legend",
      jp: "伝説の勇者の伝説の勇者の伝説",
      "en-romaji": "Densetsu no Yūsha no Densetsu no Yūsha no Densetsu",
    },
    alias: "nagato",
    type: "one-shot",
    date: { year: 2011, month: 5, day: 24, certainty: "=" },
    dateProof: {
      en: "It says the date on the [site](https://neetsha.jp/inside/comic.php?id=10915) it was posted on.",
    },
    jpLink: "https://neetsha.jp/inside/comic.php?id=10915",
    enLink:
      "https://www.reddit.com/r/Chainsawfolk/comments/1ia9xjj/english_translation_of_fujimotos_early_oneshot/",
    published: "self-published",
  },
  uchuuonna: {
    name: {
      en: "Appearance of a Giant Girl in Space",
      jp: "宇宙に巨大女の子出現",
      "en-romaji": "Uchū ni Kyodai Onnanoko Shutsugen",
    },
    alias: "nagato",
    type: "one-shot",
    date: { year: 2011, month: 6, day: 5, certainty: "=" },
    dateProof: {
      en: "The image files of the manga, such as [this one](http://nagatohaore.web.fc2.com/001.jpg), have a modified date of June 5, 2011 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`).",
    },
    jpLink: "http://nagatohaore.web.fc2.com/01.htm",
    published: "self-published",
  },
  tettereposannu: {
    name: {
      en: "Tetteleposan",
      jp: "テッテレポサンヌ",
      "en-romaji": "Tettereposannu",
    },
    alias: "nagato",
    type: "series",
    date: { year: 2011, month: 7, day: 16, certainty: "=" },
    dateProof: {
      en: "The image files of the first chapter, such as [this one](http://nagatoisme.web.fc2.com/r001.jpg), have a modified date of July 16, 2011 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`). There is also [fanart](https://neetsha.jp/oekaki/log/?bbs=5&res=2632) dated 16 July 2011, so it has to be at least as old as that. Additionally, [AniList](https://anilist.co/manga/133945/Tetteleposan) claims that it started in July 2011.",
    },
    jpLink: "http://nagatoisme.web.fc2.com/tetteretop.html",
    enLink: "https://mangadex.org/title/bc782a9e-f0bf-4bcc-ac26-d0f8c215bbe7/tetteleposan",
    summary: {
      en: 'A little girl in a frozen world approaches a strange, yet benevolent creature for help. But when all she can say is the nonsense word "Tetteleposan", how can he help her?',
    },
    summarySource: {
      en: "https://anilist.co/manga/133945/Tetteleposan",
    },
    published: "self-published",
  },
  mahoujo: {
    name: {
      en: "Girl-Wizard-Maid in a School Swimsuit with Cat Ears and Double Mecha Pigtails Kanade",
      jp: "ネコミミメイドスクミズメカツインテールまほうしょうじょカナデ",
      "en-romaji": "Nekomimimeidosukumizumekatsuintērumahōshōjo Kanade",
    },
    alias: "nagato",
    type: "one-shot",
    date: { year: 2011, month: 9, day: 11, certainty: "=" },
    dateProof: {
      en: "The image files of the manga, such as [this one](http://nagatoisme.web.fc2.com/ma01.jpg), have a modified date of September 11, 2011 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`).",
    },
    jpLink: "http://nagatoisme.web.fc2.com/mahoutop.html",
    enLink: "https://www.reddit.com/r/Chainsawfolk/comments/1i9tofs/an_early_oneshot_of_fujimoto/",
    published: "self-published",
  },
  dejimon: {
    name: {
      en: "Dejimon",
      jp: "デジモン",
      "en-romaji": "Dejimon",
    },
    alias: "nagato",
    type: "one-shot",
    date: { year: 2011, month: 11, day: 3, certainty: "=" },
    dateProof: {
      en: "The image files of the manga, such as [this one](http://nagatoisme.web.fc2.com/de01.jpg), have a modified date of November 3, 2011 (Note that I think this modified date won't be there if you download normally. I think you need to use a tool like `wget`).",
    },
    jpLink: "http://nagatoisme.web.fc2.com/dezimontop.html",
    enLink:
      "https://www.reddit.com/r/Chainsawfolk/comments/1iage3m/english_translation_of_fujimotos_early/",
    summary: {
      en: "A self-published oneshot by Tatsuki Fujimoto from 2011 about a meteorite and an angel.",
    },
    summarySource: {
      en: "https://mangadex.org/title/77fe6719-b360-45fb-ad4d-7d1e7200649f/dezimon",
    },
    published: "self-published",
  },
  niwaniwa: {
    name: {
      en: "A Couple Clucking Chickens Were Still Kickin' in the Schoolyard",
      jp: "庭には二羽ニワトリがいた。",
      "en-romaji": "Niwa ni wa Niwa Niwatori ga Ita.",
    },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2011, month: 12, certainty: "=" },
    dateProof: {
      en: "[Mangapedia](https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8617%E2%88%9221-rsxqktseu), [Pyorumons](https://pyorumons.com/manga/tatuki-yomikiri), and the [Shihei Lin](https://rookie.shonenjump.com/info/entry/202007_blog) claim it. Notably, the last one is one of the editors of Shonen Jump+, though he doesn't state it as absolute fact. A user on the [Neetsha bulletin board](https://bbs.neetsha.jp/board/kako/1344/13446/1344690628.html) says that it was 22回ジャンプスクエアSupreme Comic大賞最終候補 but according to [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2#Supreme_Comic_%E5%A4%A7%E8%B3%9E), that was October not December. From this information, we can't be certain that it was from December.",
    },
    jpLink: "https://shonenjumpplus.com/episode/13932016480028938623",
    summary: {
      jp: "2019年、宇宙人と人類の戦争が始まり、人類はあっさり敗北。ほとんどの人類は宇宙人に食べられてしまった。小学生のユウトとアミは、学校にあった鶏の着ぐるみをかぶり難を逃れた。宇宙人は二人を鶏だと勘違いしたのだ。彼らには鶏を食べる文化がないため、ユウトとアミは学校の庭で飼われることになった。そんなある日、二人に危機が訪れる。鶏を食べる習慣がある惑星から、宇宙人の転校生がやってきたのだ。",
    },
    summarySource: {
      jp: "https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8617%E2%88%9221-rsxqktseu#SCT1",
    },
    published: "published",
  },
  fukushuu: {
    name: {
      en: "Sword of Revenge",
      jp: "復讐の剣",
      "en-romaji": "Fukushū no Ken",
    },
    alias: "nim",
    type: "one-shot",
    date: { year: 2012, month: 4, certainty: "=" },
    dateProof: {
      en: "It was a finalist in [Supreme Comic 大賞 season II 第4回](https://web.archive.org/web/20130323045057/http://jumpsq.shueisha.co.jp/mangasyou/sc2/index04.html), which came out in April 2012 according to [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2#Supreme_Comic_%E5%A4%A7%E8%B3%9E_season_II).",
    },
    summary: {
      jp: "人類の半数を殺した２匹の魔物「レイス」と「ゼフ」。レイスと友達になったレイドだが…。",
    },
    summarySource: {
      jp: "https://web.archive.org/web/20130323045057/http://jumpsq.shueisha.co.jp/mangasyou/sc2/index04.html",
    },
    published: "unpublished",
    existenceProof: {
      en: "It was a finalist in [Supreme Comic 大賞 season II 第4回](https://web.archive.org/web/20130323045057/http://jumpsq.shueisha.co.jp/mangasyou/sc2/index04.html).",
    },
  },
  seigi: {
    name: {
      en: "Sense of Justice",
      jp: "正義の見方",
      "en-romaji": "Seigi no Mikata",
    },
    alias: "fujimotohira",
    type: "one-shot",
    date: { year: 2012, month: 10, certainty: "=" },
    dateProof: {
      en: "It was a finalist in [Supreme Comic 大賞 season II 第10回](https://web.archive.org/web/20130503012730/http://jumpsq.shueisha.co.jp/mangasyou/sc2/index10.html), which came out in October 2012 according to [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2#Supreme_Comic_%E5%A4%A7%E8%B3%9E_season_II).",
    },
    summary: {
      jp: "全ての怪物を倒し、ヒーローの仕事が無くなった世界。ペアを解散し、これからの暮らしを考える後藤と秋原だったが、かつて共に戦った元ヒーローに襲われてしまう…。",
    },
    summarySource: {
      jp: "https://web.archive.org/web/20130503012730/http://jumpsq.shueisha.co.jp/mangasyou/sc2/index10.html",
    },
    published: "unpublished",
    existenceProof: {
      en: "It was a finalist in [Supreme Comic 大賞 season II 第10回](https://web.archive.org/web/20130503012730/http://jumpsq.shueisha.co.jp/mangasyou/sc2/index10.html).",
    },
    note: {
      en: "I wasn't able to find proof that the image I used here is actually from this manga. It's been used on [AniList](https://anilist.co/manga/128751/Seigi-no-Mikata) and [Twitter](https://x.com/MetiNTBG/status/1588775319737360384) for example, but the image is broken on the competition page.",
    },
  },
  kamihikouki: {
    name: {
      en: "Paper Planes",
      jp: "かみひこうき",
      "en-romaji": "Kami Hikōki",
    },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2013, month: 5, certainty: "=" },
    dateProof: {
      en: "It won an award in [クラウン新人漫画賞 第3回](https://jumpsq.shueisha.co.jp/mangasyou/crown/index03.html) and that came out in May 2013 according to [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2#%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B3%E6%96%B0%E4%BA%BA%E6%BC%AB%E7%94%BB%E8%B3%9E).",
    },
    summary: {
      jp: "隣同士の家に暮らすミズとシュンは、お互いの家へ紙飛行機を飛ばしあって連絡を取り合い、仲良く日常を過ごしていた。しかし、ミズの引越しと転校が決まった時、ささいな行き違いから二人は喧嘩してしまい、そのまま仲直りできず別れ別れに。やがて六年の歳月が過ぎ、二人の再会の時が…。",
    },
    summarySource: {
      jp: "https://jumpsq.shueisha.co.jp/mangasyou/crown/index03.html",
    },
    published: "unpublished",
    existenceProof: {
      en: "It won an award in [クラウン新人漫画賞 第3回](https://jumpsq.shueisha.co.jp/mangasyou/crown/index03.html).",
    },
  },
  sasaki: {
    name: {
      en: "Sasaki Stopped a Bullet",
      jp: "佐々木くんが銃弾止めた",
      "en-romaji": "Sasaki-kun ga Jūdan Tometa",
    },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2013, month: 7, certainty: "=" },
    dateProof: {
      en: "It won an award in [クラウン新人漫画賞 第5回](https://jumpsq.shueisha.co.jp/mangasyou/crown/index05.html) and that came out in July 2013 according to [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2#%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B3%E6%96%B0%E4%BA%BA%E6%BC%AB%E7%94%BB%E8%B3%9E).",
    },
    jpLink: "https://shonenjumpplus.com/episode/10833519556325023328",
    summary: {
      jp: "男子高校生・佐々木は、担任の川口先生への憧れが行き過ぎ、川口先生を神と崇めるようになった。かつて川口先生に振られた男が拳銃を持って教室に押し入ったとき、佐々木の行動は…!?",
    },
    summarySource: {
      jp: "https://jumpsq.shueisha.co.jp/mangasyou/crown/index05.html",
    },
    published: "published",
  },
  koiwamoumoku: {
    name: { en: "Love is Blind", jp: "恋は盲目", "en-romaji": "Koi wa Mōmoku" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2013, month: 11, certainty: "=" },
    dateProof: {
      en: "It won an award in [クラウン新人漫画賞 第9回](https://jumpsq.shueisha.co.jp/mangasyou/crown/index09.html) and that came out in November 2013 according to [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2#%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B3%E6%96%B0%E4%BA%BA%E6%BC%AB%E7%94%BB%E8%B3%9E).",
    },
    jpLink: "https://shonenjumpplus.com/episode/17107094912231080051",
    summary: {
      jp: "高校卒業の前日。生徒会長・伊吹は決意していた。後輩であるユリに今日、告白することを。土砂降りの雨の中、想いを伝えようとする伊吹は、強盗や異星人の乱入といった一大事に対しても、「それどころではない」と自らの意思を貫こうとするが…!?",
    },
    summarySource: {
      jp: "https://jumpsq.shueisha.co.jp/mangasyou/crown/index09.html",
    },
    published: "published",
  },
  shikaku: {
    name: { en: "Shikaku", jp: "シカク", "en-romaji": "Shikaku" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2014, month: 6, day: 19, certainty: "=" },
    dateProof: {
      en: "[Kinokuniya](https://www.kinokuniya.co.jp/f/dsg-04-4910051520746) says that it was in SQ.19 Vol.14, which came out on this date according to the same page.",
    },
    jpLink: "https://shonenjumpplus.com/episode/10833519556325029237",
    summary: {
      jp: "ある日、凄腕（すごうで）の殺し屋少女、シカクは、ユゲルという男性に呼び出される。ユゲルの依頼は彼自身を殺すことだった。躊躇（ちゅうちょ）なくユゲルの頭部を刃物で突き刺すシカク。しかしユゲルは死なない。ショットガンで頭をふっとばしても無駄だった。ユゲルは3500年を生きる、不死身の吸血鬼だったのだ。退屈して死を望んだユゲルだったが無駄だった。彼は依頼を遂行できなかったことを許し、シカクを帰す。生まれて初めて人に許容されたシカクは、ユゲルに恋をしてしまう。",
    },
    summarySource: {
      jp: "https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8617%E2%88%9221-rsxqktseu#SCT1",
    },
    published: "published",
  },
  ningyo: {
    name: { en: "Mermaid Rhapsody", jp: "人魚ラプソディ", "en-romaji": "Ningyo Rapusodi" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2014, month: 12, day: 19, certainty: "=" },
    dateProof: {
      en: "[This article](https://perry-r.hatenablog.com/entry/20141222/p7) mentions that it is from SQ.19 Vol.17, which came out on this date according to the [Shonen Jump SQ.19 Vol.17 page](https://web.archive.org/web/20141214015853/http://jumpsq.shueisha.co.jp/sq19/17.html).",
    },
    jpLink: "https://shonenjumpplus.com/episode/17107094912579003163",
    summary: {
      jp: "海辺の街に住む中学生男子のトシヒデは、海中にある人魚が作ったピアノを弾くのが好きだった。母が人魚だったことから、トシヒデは長く海中で演奏ができる。トシヒデには母の記憶はないが、ピアノを弾いているときだけ母を思い出せるような気がするのだ。ある日、いつものようにピアノを弾いていたトシヒデは、つい時間を過ごして溺れそうになる。そこに人魚が現れ、トシヒデを救う。彼女の名はシジュ。美しい少女だった。助けてくれたお礼に、トシヒデはピアノを教えることになった。それから毎日、トシヒデとシジュは会うようになり、お互い好意を寄せるようになる。",
    },
    summarySource: {
      jp: "https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8622%E2%88%9226-9laykf5in",
    },
    published: "published",
  },
  nayuta: {
    name: { en: "Nayuta of the Prophecy", jp: "予言のナユタ", "en-romaji": "Yogen no Nayuta" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2015, month: 7, day: 4, certainty: "=" },
    dateProof: {
      en: "Listed as being in [SQ 2015年8月号](https://shonenjumpplus.com/magazine/3270296674393061999), which has this date.",
    },
    jpLink: "https://shonenjumpplus.com/episode/13932016480028803599",
    summary: {
      jp: "両親を亡くしたケンジは、学校へもいかず、働きながら妹のナユタと二人暮らしをしていた。10年前、ツノを持つナユタが母体を貫いて生まれたとき、世界中の魔法使いが、世界を滅ぼす悪魔の子だと予言した。予言を信じる者たちは、ナユタを殺すように迫ったが、ケンジは彼女を守り抜くことを誓う。しかし、ナユタは動物を食い殺し、意味不明の漢字を羅列した言葉しか話さない。どう接すればよいのかケンジが悩んでいるうちに、ナユタの行動はますますエスカレート。近所の家畜を大量虐殺し、やがて世界滅亡を予感させるほどの魔法を繰り出した。",
    },
    summarySource: {
      jp: "https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8622%E2%88%9226-9laykf5in",
    },
    published: "published",
  },
  firepunch: {
    name: { en: "Fire Punch", jp: "ファイアパンチ", "en-romaji": "Faia Panchi" },
    alias: "fujimoto",
    type: "series",
    date: { year: 2016, month: 4, day: 18, certainty: "=" },
    dateProof: {
      en: "Published date on [Shonen Jump+](https://shonenjumpplus.com/episode/10833497643049550135).",
    },
    enLink: "https://www.viz.com/shonenjump/chapters/fire-punch",
    jpLink: "https://shonenjumpplus.com/episode/10833497643049550135",
    summary: {
      en: "In a frozen dystopia where inhabitants eat flesh to survive, can the destructive powers of fire bring salvation?",
      jp: "『氷の魔女』によって世界は雪と飢餓と狂気に覆われた。凍えた民は炎を求めた…！",
    },
    summarySource: {
      en: "https://www.viz.com/shonenjump/chapters/fire-punch",
      jp: "https://shonenjumpplus.com/episode/10833497643049550135",
    },
    published: "published",
  },
  oniichan: {
    name: {
      en: "A Manga My Brother Drew in His Free Time",
      jp: "お兄ちゃんが暇の時に書いた漫画",
      "en-romaji": "Onīchan ga Hima no Toki ni Kaita Manga",
    },
    alias: "nagayama",
    type: "one-shot",
    date: { year: 2017, month: 2, day: 8, certainty: "=" },
    dateProof: {
      en: "It's the date of the [tweet](https://x.com/nagayama_koharu/status/829177667073118210) that this was posted in.",
    },
    jpLink: "https://x.com/nagayama_koharu/status/829177667073118210",
    enLink:
      "https://www.reddit.com/r/Chainsawfolk/comments/1iqpbjq/english_translation_of_fujimotos_unpublished_manga",
    published: "self-published",
    note: {
      en: 'I don\'t think there is an official name for this. The name I chose here is based off of the caption of the tweet this was posted in. The caption was "This is a manga my brother drew in his free time."',
    },
  },
  onnanoyamai: {
    name: {
      en: "Woke-Up-as-a-Girl Syndrome",
      jp: "目が覚めたら女の子になっていた病",
      "en-romaji": "Me ga Sametara Onnanoko ni Natteita Yamai",
    },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2017, month: 4, day: 24, certainty: "=" },
    dateProof: {
      en: "Published date on [Shonen Jump+](https://shonenjumpplus.com/episode/13932016480028864148).",
    },
    jpLink: "https://shonenjumpplus.com/episode/13932016480028864148",
    summary: {
      jp: "ある日の朝、目を覚ましたトシヒデは、自分が女の子になっていることに気づく。慌てて病院に駆け込むが、「目が覚めたら女の子になっていた病」だと診断され、治ることはないという。登校したトシヒデは、クラスメートの好奇の目にさらされ、中には「セックスさせろ」とまで言うやつもいた。クラス中から陰湿ないじめにあっていたところ、上級生のアキラが現れる。アキラはいじめを行う男子をぶん殴り、トシヒデを救う。アキラのことを異性としてカッコイイと感じたトシヒデは困ってしまう。アキラは、トシヒデの彼女、リエの兄なのだ。",
    },
    summarySource: {
      jp: "https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8622%E2%88%9226-9laykf5in",
    },
    published: "published",
  },
  imoutonoane: {
    name: { en: "Sisters", jp: "妹の姉", "en-romaji": "Imōto no Ane" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2018, month: 5, day: 2, certainty: "=" },
    dateProof: {
      en: "[Fujimoto said](https://x.com/nagayama_koharu/status/990034624561627136) that you would be able to read it on that date.",
    },
    jpLink: "https://shonenjumpplus.com/episode/17107094911848345887",
    summary: {
      jp: "美術学校3年生の江原光子は憂鬱だった。それは自分の裸が描かれた絵が、学校主催のコンクールで金賞を受賞。学校の玄関に1年間も飾られることになったからだ。作者は妹の江原杏子で、想像で姉の裸を描いたのだ。学校中の生徒に自分の裸をさらされた光子は、リベンジを画策。妹の裸を描いて金賞を狙おうとする。自宅で杏子をモデルに、絵を描き始めた光子は、久しぶりに彼女と話をする。杏子が光子の後を追い、特待生として美術学校に入学したことをきっかけに、姉妹の会話はなくなっていたのだ。",
    },
    summarySource: {
      jp: "https://mangapedia.com/%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%8622%E2%88%9226-9laykf5in",
    },
    published: "published",
  },
  chainsawman: {
    name: { en: "Chainsaw Man", jp: "チェンソーマン", "en-romaji": "Chensō Man" },
    alias: "fujimoto",
    type: "series",
    date: { year: 2018, month: 12, day: 3, certainty: "=" },
    dateProof: {
      en: "[This article](https://natalie.mu/comic/news/310548) gives this date.",
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
  lookback: {
    name: { en: "Look Back", jp: "ルックバック", "en-romaji": "Rukku Bakku" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2021, month: 7, day: 19, certainty: "=" },
    dateProof: {
      en: "Published date on [Shonen Jump+](https://shonenjumpplus.com/episode/3269754496401369355).",
    },
    enLink: "https://www.viz.com/shonenjump/chapters/look-back",
    jpLink: "https://shonenjumpplus.com/episode/3269754496401369355",
    summary: {
      en: "When two students aspire to become manga artists, the paths they choose change their lives forever. From Chainsaw Man creator Tatsuki Fujimoto!",
      jp: "学生新聞で４コマ漫画を連載している小学４年生の藤野。クラスメートからは絶賛を受けていたが、ある日、不登校の同級生・京本の４コマを載せたいと先生から告げられるが…!?",
    },
    summarySource: {
      en: "https://www.viz.com/shonenjump/chapters/look-back",
      jp: "https://shonenjumpplus.com/episode/3269754496401369355",
    },
    published: "published",
  },
  sayonaraeri: {
    name: { en: "Goodbye, Eri", jp: "さよなら絵梨", "en-romaji": "Sayonara Eri" },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2022, month: 4, day: 11, certainty: "=" },
    dateProof: {
      en: "Published date on [Shonen Jump+](https://web.archive.org/web/20220410150014/https://shonenjumpplus.com/episode/3269754496858728104).",
    },
    enLink: "https://www.viz.com/shonenjump/chapters/goodbye-eri",
    jpLink: "https://shonenjumpplus.com/volume/4856001361007486895",
    summary: {
      en: "Yuta’s moviemaking career started with a request from his mother to record her final moments. After her death, Yuta meets a mysterious girl named Eri, who takes his life in new directions. The two begin creating a movie together, but Eri is harboring an explosive secret.",
      jp: "私が死ぬまでを撮ってほしい――病の母の願いで始まった優太の映画制作。母の死後、自殺しようとした優太は謎の美少女・絵梨と出会う。2人は共同で映画を作り始めるが、絵梨はある秘密を抱えていた…。現実と創作が交錯しエクスプローションする、映画に懸けた青春物語!!",
    },
    summarySource: {
      en: "https://www.amazon.com.au/Goodbye-Eri-Tatsuki-Fujimoto-ebook/dp/B0BJ5RF7B7",
      jp: "https://shonenjumpplus.com/volume/4856001361007486895",
    },
    published: "published",
  },
  futsuuni: {
    name: {
      en: "Just Listen to the Song",
      jp: "フツーに聞いてくれ",
      "en-romaji": "Futsū ni Kītekure",
    },
    alias: "fujimoto",
    type: "one-shot",
    date: { year: 2022, month: 7, day: 4, certainty: "=" },
    dateProof: {
      en: "Published date on [Shonen Jump+](https://shonenjumpplus.com/episode/3270375685315853257).",
    },
    enLink: "https://www.viz.com/shonenjump/chapters/just-listen-to-the-song",
    jpLink: "https://shonenjumpplus.com/episode/3270296674427724034",
    summary: {
      en: "A sincere love confession video goes wrong in the most unexpected way! Written by Chainsaw Man creator Tatsuki Fujimoto and drawn by To Strip the Flesh creator Oto Toda.",
      jp: "男子高生が好きな女子高生のために告白の曲をYouTubeにアップロードし、彼女によってその動画が拡散されてしまうというストーリーです。",
    },
    summarySource: {
      en: "https://www.viz.com/shonenjump/chapters/just-listen-to-the-song",
      jp: "https://pyorumons.com/manga/tatuki-yomikiri",
    },
    published: "published",
  },
});

export type MangaId = keyof typeof MANGA;
