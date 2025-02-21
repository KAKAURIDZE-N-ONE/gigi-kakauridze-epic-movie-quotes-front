import { createComment } from "@/services/apiComment";
import { useMutation } from "@tanstack/react-query";

export default function useCreateComment() {
  return useMutation({
    mutationFn: createComment,
  });
}
