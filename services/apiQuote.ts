import { authInstace, fileInstance } from "./axios";
import { CreateOrUpdateQuoteValues } from "@/types/requests";

export async function getQuotes(page: number) {
  const response = await authInstace.get(`/api/quotes?page=${page}`);

  return response.data.data;
}

export async function getQuote(quoteId: number) {
  const response = await authInstace.get(`/api/quotes/${quoteId}`);

  return response.data.data;
}

export async function createQuote(data: CreateOrUpdateQuoteValues) {
  const formData = new FormData();

  formData.append("movie_id", data.movie_id.toString());
  formData.append("quote[en]", data.quote.en);
  formData.append("quote[ka]", data.quote.ka);

  formData.append("image", data.image);

  const response = await fileInstance.post("/api/quotes", data);

  return response.data;
}

export async function updateQuote(data: CreateOrUpdateQuoteValues) {
  const formData = new FormData();

  formData.append("movie_id", data.movie_id.toString());
  formData.append("quote[en]", data.quote.en);
  formData.append("quote[ka]", data.quote.ka);

  if (data.image) formData.append("image", data.image);

  formData.append("_method", "patch");

  const response = await fileInstance.post(
    `/api/quotes/${data.quote_id}`,
    formData
  );

  return response.data;
}

export async function deleteQuote({ quoteId }: { quoteId: number }) {
  const response = await authInstace.delete(`/api/quotes/${quoteId}`);

  return response.data;
}
