import useBanScrolling from "@/hooks/useBanScrolling";
import useIsMounted from "@/hooks/useIsMounted";
import { useEffect, useState } from "react";

export default function useModal() {
  useBanScrolling();
  const isMounted = useIsMounted();

  return { isMounted };
}
