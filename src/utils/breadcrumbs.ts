import { BreadcrumbItem } from "@/types/breadcrumbs.type";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ot:breadcrumbs";
const isBrowser = typeof window !== "undefined";

function read(): BreadcrumbItem[] {
  if (!isBrowser) return [{ label: "Home", href: "/" }];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as BreadcrumbItem[]) : null;
    return parsed?.length ? parsed : [{ label: "Home", href: "/" }];
  } catch {
    return [{ label: "Home", href: "/" }];
  }
}

function write(items: BreadcrumbItem[]) {
  if (!isBrowser) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("ot:breadcrumbs-updated", { detail: items }));
}

export function getBreadcrumbs(): BreadcrumbItem[] {
  return read();
}

export function setBreadcrumbs(items: BreadcrumbItem[]) {
  const hasHome = items[0]?.href === "/";
  const normalized = hasHome ? items : [{ label: "Home", href: "/" }, ...items];
  write(normalized);
}

export function pushBreadcrumb(item: BreadcrumbItem) {
  const current = read();
  if (item.href === "/") {
    write([{ label: "Home", href: "/" }]);
    return;
  }
  const base = current.length ? current : [{ label: "Home", href: "/" }];
  const existingIdx = base.findIndex((b) => b.href === item.href);
  let next: BreadcrumbItem[];
  if (existingIdx >= 0) {
    next = base.slice(0, existingIdx + 1);
    next[existingIdx] = item;
  } else {
    next = [...base, item];
  }
  write(next);
}

export function navigateWithBreadcrumb(
  router: { push: (href: string) => void; replace?: (href: string) => void },
  item: BreadcrumbItem,
  opts?: { replace?: boolean }
) {
  pushBreadcrumb(item);
  if (opts?.replace && router.replace) router.replace(item.href!);
  else router.push(item.href!);
}

export function useBreadcrumbs(): BreadcrumbItem[] {
  const [items, setItems] = useState<BreadcrumbItem[]>(read());
  useEffect(() => {
    const update = (e?: Event) => {
      if ((e as CustomEvent)?.detail) setItems((e as CustomEvent).detail as BreadcrumbItem[]);
      else setItems(read());
    };
    window.addEventListener("ot:breadcrumbs-updated", update as EventListener);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("ot:breadcrumbs-updated", update as EventListener);
      window.removeEventListener("storage", update);
    };
  }, []);
  return items;
}