import type { Locale } from "@/locale";

export interface ReleaseDate {
  year: number;
  month?: number; // using 1 as January
  day?: number;
  certainty: "=" | "?";
}

const ENG_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function displayDate({ year, month, day, certainty }: ReleaseDate, locale: Locale) {
  let result = "";
  if (locale === "jp") {
    result += `${year}年`;
    if (month) {
      result += `${month}月`;
    }
    if (day) {
      result += `${day}日`;
    }
  } else {
    if (day) {
      result += `${day} `;
    }
    if (month) {
      result += `${ENG_MONTHS[month - 1]} `;
    }
    result += year;
  }
  if (certainty === "?") {
    result += "?";
  }
  return result;
}
