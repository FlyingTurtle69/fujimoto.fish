import { displayWord, type Locale, type Word } from "@/locale";

export const ALIASES = {
  fujimoto: {
    en: "Tatsuki Fujimoto",
    jp: "藤本タツキ",
    "en-romaji": "Fujimoto Tatsuki",
  },
  nagato: {
    en: "NagatoIsMe",
    jp: "長門は俺",
    "en-romaji": "NagatoWaOre",
  },
} as const satisfies Record<string, Word>;

export type Alias = keyof typeof ALIASES;

export function displayAlias(alias: Alias, locale: Locale) {
  return displayWord(ALIASES[alias], locale);
}
