export const LOCALES = {
  en: "English",
  "en-romaji": "Rōmaji",
  jp: "日本語",
} as const;

export type Locale = keyof typeof LOCALES;

export type Word = Partial<Record<Locale, string>>;

export function displayWord(word: Word, locale: Locale): string {
  const optimal = word[locale];
  if (optimal !== undefined) {
    return optimal;
  }
  const result = word["en-romaji"] ?? word.en ?? word.jp;
  if (result === undefined) {
    throw new Error("Word does not have any translation");
  }
  return result;
}
