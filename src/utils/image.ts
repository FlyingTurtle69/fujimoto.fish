import type { CollectionId } from "@/content/collections";
import type { MangaId } from "@/content/manga";
import type { Locale } from "@/locale";

const IMAGE_FOLDER = "/src/assets/";

// This has to use a string literal
const covers = import.meta.glob<{ default?: ImageMetadata }>("/src/assets/**/*.webp", {
  eager: true,
});

function getImage(folder: string, name: string, locale: Locale) {
  const withoutLocale = `${IMAGE_FOLDER}${folder}/${name}`;
  return (
    covers[`${withoutLocale}.${locale}.webp`]?.default ??
    covers[`${withoutLocale}.jp.webp`]?.default ??
    covers[`${withoutLocale}.en.webp`]?.default
  );
}

export function getCover(manga: MangaId | CollectionId, locale: Locale) {
  return getImage("covers", manga, locale);
}
