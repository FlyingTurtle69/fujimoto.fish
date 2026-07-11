import type { CollectionId } from "@/content/collections";
import type { MangaId } from "@/content/manga";
import type { Locale } from "@/locale";

const IMAGE_FOLDER = "/src/assets/";

// This has to use a string literal
const images = import.meta.glob<{ default?: ImageMetadata }>("/src/assets/**/*.webp", {
  eager: true,
});

function getLocalisedImage(folder: string, name: string, locale: Locale) {
  const withoutLocale = `${IMAGE_FOLDER}${folder}/${name}`;
  return (
    images[`${withoutLocale}.${locale}.webp`]?.default ??
    images[`${withoutLocale}.jp.webp`]?.default ??
    images[`${withoutLocale}.en.webp`]?.default
  );
}

export function getCover(manga: MangaId | CollectionId, locale: Locale) {
  return getLocalisedImage("covers", manga, locale);
}

export function getPage(manga: MangaId, volume: number, page: number, locale: Locale) {
  const v = volume.toString().padStart(2, "0");
  const p = page.toString().padStart(2, "0");
  return getLocalisedImage(`pages/${manga}`, `${manga}-${v}-${p}`, locale);
}
