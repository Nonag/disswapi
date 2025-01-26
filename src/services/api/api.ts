import { type Film } from "@/types";

export type PaginatedResponse<T = unknown> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

/**
 * A wrapper around the fetch method that adds the base URL to the request.
 */
const apiFetch = async <ResponseType>(
  input: string | URL,
  init?: RequestInit
): Promise<ResponseType> => {
  const baseUrl = "https://swapi.dev/api";
  const path = input;
  const response = await fetch(baseUrl + path, init);
  const data = await response.json();

  return data;
};

export const films = () => apiFetch<PaginatedResponse<Film>>("/films/");
export const people = () => apiFetch<PaginatedResponse>("/people/");
export const planets = () => apiFetch<PaginatedResponse>("/planets/");
export const species = () => apiFetch<PaginatedResponse>("/species/");
export const starships = () => apiFetch<PaginatedResponse>("/starships/");
export const vehicles = () => apiFetch<PaginatedResponse>("/vehicles/");
