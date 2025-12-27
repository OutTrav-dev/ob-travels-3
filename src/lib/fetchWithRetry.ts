import api from "./axiosInstance";

export async function fetchWithRetry<T>(
  url: string,
  retries = 3
): Promise<T> {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (err) {
    if (retries <= 1) throw err;
    return fetchWithRetry<T>(url, retries - 1);
  }
}
