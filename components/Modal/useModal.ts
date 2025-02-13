import useBanScrolling from "@/hooks/useBanScrolling";
import useIsMounted from "@/hooks/useIsMounted";

export default function useModal() {
  useBanScrolling();
  const isMounted = useIsMounted();

  return { isMounted };
}
