import { CreateOrUpdateMovieValues } from "@/types/requests";
import { authInstace, fileInstance } from "./axios";

export async function getMovies() {
  const response = await authInstace.get("/api/movies");

  return response.data.data;
}

export async function getMovie(id: number) {
  const response = await authInstace.get(`/api/movies/${id}`);

  return response.data.data;
}

export async function getMovieShort(id: number) {
  const response = await authInstace.get(`/api/movies/${id}/short`);

  return response.data.data;
}

export async function getCategories() {
  const response = await authInstace.get(`/api/categories`);

  return response.data.data;
}

export async function createMovie(data: CreateOrUpdateMovieValues) {
  const formData = new FormData();

  formData.append("description[en]", data.description.en);
  formData.append("description[ka]", data.description.ka);
  formData.append("director[en]", data.director.en);
  formData.append("director[ka]", data.director.ka);
  formData.append("name[en]", data.name.en);
  formData.append("name[ka]", data.name.ka);

  data.categories.forEach((category) =>
    formData.append("categories[]", category.toString())
  );

  formData.append("year", data.year.toString());
  formData.append("image", data.image);

  const response = await fileInstance.post("/api/movies", formData);

  return response.data;
}

export async function updateMovie(data: CreateOrUpdateMovieValues) {
  const formData = new FormData();

  formData.append("description[en]", data.description.en);
  formData.append("description[ka]", data.description.ka);
  formData.append("director[en]", data.director.en);
  formData.append("director[ka]", data.director.ka);
  formData.append("name[en]", data.name.en);
  formData.append("name[ka]", data.name.ka);

  data.categories.forEach((category) =>
    formData.append("categories[]", category.toString())
  );

  formData.append("year", data.year.toString());

  if (data.image) formData.append("image", data.image);

  formData.append("_method", "patch");

  const response = await fileInstance.post(
    `/api/movies/${data?.movieId}`,
    formData
  );

  return response.data;
}

export async function deleteMovie(id: number) {
  const response = await authInstace.delete(`/api/movies/${id}`);

  return response.data;
}
