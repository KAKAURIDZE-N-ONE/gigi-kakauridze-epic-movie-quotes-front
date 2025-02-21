import { CreateCommentValues } from "@/types/requests";
import { authInstace } from "./axios";

export async function createComment(data: CreateCommentValues) {
  const response = await authInstace.post("/api/comments", data);

  return response.data;
}
