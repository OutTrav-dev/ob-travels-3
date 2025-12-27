// src/features/cookie-consent/cookie.ts
export type ConsentCategories = {
  functional?: boolean;
  analytics?: boolean;
  marketing?: boolean;
};

export type Consent = {
  allowed: boolean;
  categories?: ConsentCategories;
};

export const COOKIE_NAME = "cookie_consent";
const COOKIE_VERSION = "v1";
const MAX_AGE_DAYS = 365;

export function serializeConsent(consent: Consent): string {
  const payload = btoa(JSON.stringify(consent));
  return `${COOKIE_VERSION}.${payload}`;
}

export function parseConsentCookie(value: string | undefined): Consent | undefined {
  if (!value) return undefined;
  try {
    const [version, payload] = value.split(".");
    if (version !== COOKIE_VERSION) return undefined;
    const json = JSON.parse(atob(payload));
    return typeof json?.allowed === "boolean" ? (json as Consent) : undefined;
  } catch {
    return undefined;
  }
}

export function getClientConsent(): Consent | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.split("; ").find((row) => row.startsWith(`${COOKIE_NAME}=`));
  const raw = match?.split("=")[1];
  return parseConsentCookie(raw);
}

export function setClientConsent(consent: Consent) {
  const value = serializeConsent(consent);
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

export function clearClientConsent() {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
}

export const LOCAL_MIRROR_KEY = "cookie_consent_local";

export function getLocalMirror(): Consent | undefined {
  try {
    const raw = localStorage.getItem(LOCAL_MIRROR_KEY);
    return raw ? (JSON.parse(raw) as Consent) : undefined;
  } catch {
    return undefined;
  }
}

export function setLocalMirror(consent: Consent) {
  try {
    localStorage.setItem(LOCAL_MIRROR_KEY, JSON.stringify(consent));
  } catch {}
}