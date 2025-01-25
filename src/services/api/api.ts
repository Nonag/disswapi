/**
 * A wrapper around the fetch method that adds the base URL to the request.
 */
const apiFetch = (input: string | URL, init?: RequestInit) => {
  const baseUrl = "https://swapi.dev/api";
  const path = input;

  return fetch(baseUrl + path, init);
};

export const films = () => apiFetch("/films/");
export const people = () => apiFetch("/people/");
export const planets = () => apiFetch("/planets/");
export const species = () => apiFetch("/species/");
export const starships = () => apiFetch("/starships/");
export const vehicles = () => apiFetch("/vehicles/");
