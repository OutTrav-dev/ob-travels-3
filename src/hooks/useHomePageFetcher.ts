"use client";

import { useState, useEffect } from "react";
import { fetchWithRetry } from "@/src/lib/fetchWithRetry";
import { useAppData } from "@/src/context/AppDataContext";
import type { HomePage } from "@/types/homePage.types";
import { AxiosError } from "axios";

const CACHE_KEY = "homePageCache";
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

export function useHomePageFetcher(url: string) {
  const { state, setHomePage } = useAppData();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadFromApi = async () => {
    try {
      setError(null);

      const data = await fetchWithRetry<HomePage>(url, 3);

      // Save to context
      setHomePage(data);

      // Cache in localStorage
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ data, timestamp: Date.now() })
      );
    } catch (err) {
      const errorObj = err as AxiosError;
      setError(errorObj.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let shouldFetch = true;

    // ------------------------
    // 1️⃣ Try to load from cache
    // ------------------------
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached) as {
        data: HomePage;
        timestamp: number;
      };

      // Use cached (instant load)
      setHomePage(data);
      setLoading(false);

      // Check if cache is expired → fetch in background
      if (Date.now() - timestamp < CACHE_TTL) {
        shouldFetch = false; // fresh enough → skip fetch
      }
    }

    // ------------------------
    // 2️⃣ Skip API fetch if context already has data
    // ------------------------
    if (state.homePage && !cached) {
      setLoading(false);
      shouldFetch = false;
    }

    // ------------------------
    // 3️⃣ Fetch fresh data if needed
    // ------------------------
    if (shouldFetch) {
      loadFromApi();
    }
  }, [url]);

  return { loading, error, reload: loadFromApi };
}
