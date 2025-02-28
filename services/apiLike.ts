import { CreateLikeValues, UpdateLikeValues } from "@/types/requests";
import { authInstace } from "./axios";

export async function createLike(data: CreateLikeValues) {
  const response = await authInstace.post("/api/likes", data);

  return response.data;
}

export async function updateLike({ active, id }: UpdateLikeValues) {
  const response = await authInstace.patch(`/api/likes/${id}`, { active });

  return response.data;
}
