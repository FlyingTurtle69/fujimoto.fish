import type { CollectionId } from "@/content/collections";
import type { MangaId } from "@/content/manga";
import type { Locale } from "@/locale";

const IMAGE_FOLDER = "/src/assets/covers/";

// This has to use a string literal
const covers = import.meta.glob<{ default?: ImageMetadata }>("/src/assets/covers/*.webp", {
  eager: true,
});

export function getCover(manga: MangaId | CollectionId, locale: Locale) {
  return (
    covers[`${IMAGE_FOLDER}${manga}.${locale}.webp`]?.default ??
    covers[`${IMAGE_FOLDER}${manga}.jp.webp`]?.default ??
    covers[`${IMAGE_FOLDER}${manga}.en.webp`]?.default
  );
}
