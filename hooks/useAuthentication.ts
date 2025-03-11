import { USER } from "@/config/queryKeys";
import { getUser } from "@/services/apiAuth";
import { UserResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";

export const useAuthentication = () => {
  const {
    data: user,
    isPending,
    error,
  } = useQuery<UserResponse>({
    queryKey: [USER],
    queryFn: getUser,
    retry: 1,
  });

  const isAuthenticated = !!user?.email_verified_at;

  return { user, isAuthenticated, isPending, error };
};
