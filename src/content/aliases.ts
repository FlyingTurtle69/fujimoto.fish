import type { Word } from "@/locale";

export const ALIASES = {
  fujimoto: {
    en: "Tatsuki Fujimoto",
    jp: "藤本タツキ",
  },
  nagato: {
    en: "NagatoIsMe",
    jp: "長門は俺",
  },
} as const satisfies Record<string, Word>;

export type Alias = keyof typeof ALIASES;
