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
  },
});

export type AliasId = keyof typeof ALIASES;

export function displayAlias(alias: AliasId, locale: Locale) {
  return displayWord(ALIASES[alias].name, locale);
}
