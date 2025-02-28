import { createLike } from "@/services/apiLike";
import { useMutation } from "@tanstack/react-query";

export default function useCreateLike() {
  return useMutation({
    mutationFn: createLike,
  });
}
