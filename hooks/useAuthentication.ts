import { USER } from "@/config/queryKeys";
import { getUser } from "@/services/apiAuth";
import { UserTable } from "@/types/tables";
import { useQuery } from "@tanstack/react-query";

export const useAuthentication = () => {
  const {
    data: user,
    isPending,
    error,
  } = useQuery<UserTable>({
    queryKey: [USER],
    queryFn: getUser,
  });

  const isAuthenticated = !!user?.email_verified_at;

  return { user, isAuthenticated, isPending, error };
};
