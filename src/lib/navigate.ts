export type AppPath = "/" | "/privacy" | "/legal";

export function getAppPath(pathname: string = window.location.pathname): AppPath {
  if (pathname.startsWith("/privacy")) return "/privacy";
  if (pathname.startsWith("/legal") || pathname.startsWith("/aviso-legal")) {
    return "/legal";
  }
  return "/";
}

export function navigate(to: AppPath): void {
  if (window.location.pathname === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "auto" });
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
