import { displayWord, type Locale, type Word } from "@/locale";
import { defineRecord } from "@/utils/object";

interface Link {
  name: string;
  link?: string;
  explanation?: string;
}

interface Alias {
  name: Word;
  description?: Word;
  fujimotoProof?: Word;
  links?: Link[];
}

export const ALIASES = defineRecord<Alias>()({
  fujimoto: {
    name: { en: "Tatsuki Fujimoto", jp: "藤本タツキ", "en-romaji": "Fujimoto Tatsuki" },
  },
  fujimotohira: {
    name: { en: "Tatsuki Fujimoto", jp: "藤本たつき", "en-romaji": "Fujimoto Tatsuki" },
    description: {
      en: "The name Fujimoto went by for Sense of Justice. Note that although in English this name is the same as the normal name he uses, in Japanese Tatsuki is spelt using Hiragana instead of what he usually uses, Katakana.",
    },
  },
  nagato: {
    name: { en: "NagatoIsMe", jp: "長門は俺", "en-romaji": "NagatoWaOre" },
    description: {
      en: "The name Fujimoto went by online when he was younger. He used this name for a number of different websites. Based off of [this post by him](https://www.neetsha.jp/oekaki/log/?bbs=4&res=284), I think that Fujimoto chose this name because Yuki Nagato was his favourite anime/manga character.",
    },
    fujimotoProof: {
      en: `1. [This page](http://nagatoisme.web.fc2.com/music.html) of his website has a link that says "Fujimoto".
2. The first poster in [this thread](https://bbs.neetsha.jp/board/kako/1344/13446/1344690628.html) says that Nagato made _A Couple Clucking Chickens Were Still Kickin' in the Schoolyard_.
3. The artstyle and some character designs, especially in works like Tetteleposan, look like Fujimoto would draw it.`,
    },
    links: [
      { name: "Niconico", link: "https://www.nicovideo.jp/user/237284/video?ref=pc_userpage_menu" },
      {
        name: "Neetsha",
        link: "https://neetsha.jp/inside/main.php?author=%E9%95%B7%E9%96%80%E3%81%AF%E4%BF%BA",
      },
      {
        name: "Neetsha Oekaki",
        link: "https://www.neetsha.jp/oekaki/log/",
        explanation: 'Search "長門は俺" to find posts by Fujimoto and posts talking about him',
      },
      {
        name: "@NagatoIsMe on Twitter",
        explanation:
          "The current owner of the username is a different account. Fujimoto's account was deleted",
      },
      {
        name: "nagatoisme.web.fc2.com",
        link: "http://nagatoisme.web.fc2.com/",
      },
      {
        name: "namakuriimu.web.fc2.com",
        link: "http://namakuriimu.web.fc2.com/",
      },
      {
        name: "nagatohaore.web.fc2.com",
        link: "http://nagatohaore.web.fc2.com/",
      },
    ],
  },
  nim: {
    name: { en: "NIM", jp: "ＮＩＭ" },
    description: {
      en: "The name Fujimoto went by for Sword of Revenge.",
    },
    fujimotoProof: {
      en: "NIM could be short for [Nagato Is Me](/en/alias/nagato). Additionally, a user on [this thread](https://bbs.neetsha.jp/board/kako/1344/13446/1344690628.html) said in 2012 that Nagato got another award under the name NIM. Finally, the art style looks like Fujimoto.",
    },
  },
  nagayama: {
    name: { en: "Koharu Nagayama", jp: "ながやま　こはる", "en-romaji": "Nagayama Koharu" },
    description: {
      en: "Fujimoto's Twitter account where he pretends to be his own little sister.",
    },
    fujimotoProof: {
      en: "Fujimoto himself confirmed it in [this interview](https://rookie.shonenjump.com/info/entry/202007_blog).",
    },
    links: [
      { name: "@nagayama_koharu", link: "https://x.com/nagayama_koharu", explanation: "Twitter" },
    ],
  },
});

export type AliasId = keyof typeof ALIASES;

export function displayAlias(alias: AliasId, locale: Locale) {
  return displayWord(ALIASES[alias].name, locale);
}
