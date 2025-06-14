export function limitWords(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length <= maxWords) {
    return text;
  }
  return words.slice(0, maxWords).join(" ") + "...";
}

// from https://stackoverflow.com/questions/6347891/how-to-convert-a-string-to-kebab-case-in-javascript to stackoverflow.com
export function previewUrl(url: string): string {
  const { hostname } = new URL(url);
  return hostname.replace("www.", "");
}
