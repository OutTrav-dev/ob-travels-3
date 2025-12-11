export const buildDestinationQuery = (filters: Record<string, unknown>) => {
  const params = new URLSearchParams();

  if (filters.type && typeof filters.type === "string") {
    params.set("type", filters.type.toLowerCase());  // ⭐ URL lowercase
  }

  if (filters.price && typeof filters.price === "string") {
    params.set("price", filters.price);
  }

  return params.toString();
};
