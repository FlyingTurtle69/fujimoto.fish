import type { Word } from "@/locale";
import type { AliasId } from "./aliases";
import type { MangaId } from "./manga";
import { defineRecord } from "@/utils/object";

interface Collection {
  name: Word;
  alias: AliasId;
  jpLink?: string;
  enLink?: string;
  manga: MangaId[];
}

export const COLLECTIONS = defineRecord<Collection>()({
  fujimototan: {
    name: {
      en: "Tatsuki Fujimoto Before Chainsaw Man",
      jp: "藤本タツキ短編集",
      "en-romaji": "Fujimoto Tatsuki Tanhenshū",
    },
    alias: "fujimoto",
    jpLink: "https://shonenjumpplus.com/episode/17107094911848345887",
    enLink: "https://www.viz.com/shonenjump/chapters/tatsuki-fujimoto-before-chainsaw-man",
    manga: [
      "niwaniwa",
      "sasaki",
      "koiwamoumoku",
      "shikaku",
      "ningyo",
      "onnanoyamai",
      "nayuta",
      "imoutonoane",
    ],
  },
  nagatotan: {
    name: {
      en: "NagatoIsMe Short Story Collection",
      jp: "長門は俺短編集",
      "en-romaji": "NagatoWaOre Tanhenshū",
    },
    alias: "nagato",
    jpLink: "http://namakuriimu.web.fc2.com/tindex.html",
    manga: ["sayonaraheaven", "pasokon"],
  },
});

export type CollectionId = keyof typeof COLLECTIONS;
