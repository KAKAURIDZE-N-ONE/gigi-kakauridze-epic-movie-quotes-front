import { fileInstance } from "./axios";
import { CreateOrUpdateQuoteValues } from "@/types/requests";

export async function createQuote(data: CreateOrUpdateQuoteValues) {
  const formData = new FormData();

  formData.append("movie_id", data.movie_id);
  formData.append("quote[en]", data.quote.en);
  formData.append("quote[ka]", data.quote.ka);
  formData.append("image", data.image);

  const response = await fileInstance.post("/api/quotes", data);

  return response.data;
}
