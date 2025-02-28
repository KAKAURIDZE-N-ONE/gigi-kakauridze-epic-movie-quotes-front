import { updateLike } from "@/services/apiLike";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateLike() {
  return useMutation({
    mutationFn: updateLike,
  });
}
