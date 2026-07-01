interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

function preferredLocale(header: string): "en" | "jp" {
  const languages = header
    .split(",")
    .map((entry, index) => {
      const [language, ...parameters] = entry.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((value) =>
        value.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return { language, quality, index };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { language } of languages) {
    if (language === "ja" || language.startsWith("ja-")) return "jp";
    if (language === "en" || language.startsWith("en-")) return "en";
  }

  return "en";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      const languages = request.headers.get("Accept-Language") ?? "";
      const locale = preferredLocale(languages);

      return Response.redirect(`${url.origin}/${locale}`, 302);
    }

    return env.ASSETS.fetch(request);
  },
};
