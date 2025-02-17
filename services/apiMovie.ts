import { authInstace } from "./axios";

export async function getMovies() {
  const response = await authInstace.get("/api/movies");

  return response.data.data;
}

export async function getMovie(id: number) {
  const response = await authInstace.get(`/api/movies/${id}`);

  return response.data.data;
}

export async function getCategories() {
  const response = await authInstace.get(`/api/categories`);

  return response.data.data;
}
