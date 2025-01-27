import {
  type Film,
  type People,
  type Planet,
  type Species,
  type Starship,
  type Vehicle,
} from '@/types';

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
  init?: RequestInit,
): Promise<ResponseType> => {
  const baseUrl = 'https://swapi.dev/api';
  const path = input;
  const response = await fetch(baseUrl + path, init);
  const data = await response.json();

  return data;
};

export const films = () => {
  return apiFetch<PaginatedResponse<Film>>('/films/');
};
export const people = () => {
  return apiFetch<PaginatedResponse<People>>('/people/');
};
export const planets = () => {
  return apiFetch<PaginatedResponse<Planet>>('/planets/');
};
export const species = () => {
  return apiFetch<PaginatedResponse<Species>>('/species/');
};
export const starships = () => {
  return apiFetch<PaginatedResponse<Starship>>('/starships/');
};
export const vehicles = () => {
  return apiFetch<PaginatedResponse<Vehicle>>('/vehicles/');
};
