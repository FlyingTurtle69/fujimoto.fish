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
      // Archive of the tweet: https://ghostarchive.org/archive/gvxzC
      en: `1. We know that Fujimoto made [Woke-Up-as-a-Girl Syndrome](/en/manga/onnanoyamai). In his comment on it for _Tatsuki Fujimoto Before Chainsaw Man: 22-26._, he said that it is a manga he uploaded to the internet. He said that the website had a problem with storage capacity so he couldn't upload the last page. [This page](https://web.archive.org/web/20160723114659/http://neetsha.jp/inside/comic.php?id=15970) is titled _Manga that you can't read to the end because there was a problem with storage capacity_ and the author is listed as NagatoIsMe. When you click to [view](https://web.archive.org/web/20160712052231/http://neetsha.jp/inside/comic.php?id=15970&story=1) the manga, it is Woke-Up-as-a-Girl Syndrome but with the last page missing, and the first page has NagatoIsMe on it next to the title. The upload date and archive are both from before it was first published under Fujimoto's name. I think there is no reasonable way to explain this besides Fujimoto being NagatoIsMe.
2. [This tweet](https://x.com/KMK_CK/status/241060805888602112) replied to NagatoIsMe in 2012. The account is fairly small (less than 1000 followers) but Fujimoto's [current Twitter account](/en/alias/nagayama) follows them (as one of the only 45 accounts Fujimoto follows). Here are some screenshots in case the tweet or account gets deleted or Fujimoto unfollows them: ![The tweet tagging NagatoIsMe](/images/twitter_proof_1.webp) ![Fujimoto following that account](/images/twitter_proof_2.webp). Fujimoto also drew art for this user's wedding, which you can see in [here](https://x.com/KMK_CK/status/1196016232656334848) and [here](https://x.com/KMK_CK/status/1309028591905243137). It seems like they have been friends for a long time, going back to when Fujimoto went by NagatoIsMe.
3. [This video](https://youtu.be/mm09js87DpI?t=1083) shows another tweet by the above user replying to NagatoIsMe and another tweet that replied to NagatoIsMe by a different account that Fujimoto's current Twitter account also follows. I was not able to find these tweets though.
4. Sui Ishida (creator of Tokyo Ghoul) made [this tweet](https://x.com/sotonami/status/109173863182643200) in 2011 tagging NagatoIsMe. Apparently Fujimoto and him have been friends for a while so Fujimoto being NagatoIsMe would make sense here. 
5. [This page](http://nagatoisme.web.fc2.com/music.html) of his website has a link that says "Fujimoto".
6. The first poster in [this thread](https://bbs.neetsha.jp/board/kako/1344/13446/1344690628.html) says that Nagato made _A Couple Clucking Chickens Were Still Kickin' in the Schoolyard_.
7. The works by Nagato just seem like they could be made by Fujimoto. You can look at the weirdness of the stories or the themes he explores in them. The artstyle and some character designs, especially in the later Nagato works, look like Fujimoto's early official one-shots.
8. [Kon](https://x.com/Chainsawman_inf/status/1272017292939759616)`,
    },
    links: [
      { name: "Niconico", link: "https://www.nicovideo.jp/user/237284/video?ref=pc_userpage_menu" },
      {
        name: "Neetsha",
        link: "https://neetsha.jp/inside/main.php?author=%E9%95%B7%E9%96%80%E3%81%AF%E4%BF%BA",
      },
      {
        name: "Neetsha Oekaki",
        link: "https://neetsha.jp/oekaki/log/?w=%E9%95%B7%E9%96%80%E3%81%AF%E4%BF%BA",
        explanation: "Posts by Fujimoto and posts talking about him",
      },
      {
        name: "Neetsha Wiki",
        link: "https://web.archive.org/web/20160422192139/http://wiki.neetsha.jp/index.php/%E9%95%B7%E9%96%80%E3%81%AF%E4%BF%BA",
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/@m0satt0n",
      },
      {
        name: "@NagatoIsMe on Twitter",
        explanation:
          "The current owner of the username is a different account. Fujimoto's account was deleted.",
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
      { name: "長山小春", link: "https://www.pixiv.net/en/users/3013044", explanation: "pixiv" },
    ],
  },
});

export type AliasId = keyof typeof ALIASES;

export function displayAlias(alias: AliasId, locale: Locale) {
  return displayWord(ALIASES[alias].name, locale);
}
