import type { Word } from "@/locale";
import type { Alias } from "./aliases";

interface Manga {
  name: Word;
  alias: Alias;
}

export const MANGA = {
  chainsawman: {
    name: { en: "Chainsaw Man", jp: "チェンソーマン" },
    alias: "fujimoto",
  },
} as const satisfies Record<string, Manga>;
