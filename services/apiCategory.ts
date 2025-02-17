import { authInstace } from "./axios";

export async function getCategories() {
  const response = await authInstace.get(`/api/categories`);

  return response.data.data;
}
