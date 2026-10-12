export const PROGRESS_KEY = "mamweb:v1:done";

let cache: string[] | null = null;

export function getDoneSlugs(): string[] {
  if (typeof window === "undefined") return [];
  if (cache === null) {
    try {
      const raw = window.localStorage.getItem(PROGRESS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      cache = Array.isArray(parsed)
        ? parsed.filter((s) => typeof s === "string")
        : [];
    } catch {
      cache = [];
    }
  }
  return cache;
}

export function isDone(slug: string): boolean {
  return getDoneSlugs().includes(slug);
}

export function setDone(slug: string, done: boolean): void {
  const current = getDoneSlugs();
  const next = done
    ? Array.from(new Set([...current, slug]))
    : current.filter((s) => s !== slug);
  cache = next;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("mamweb:progress"));
}

export function subscribeToProgress(onChange: () => void): () => void {
  const handler = () => {
    cache = null;
    onChange();
  };
  window.addEventListener("mamweb:progress", handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener("mamweb:progress", handler);
    window.removeEventListener("storage", handler);
  };
}