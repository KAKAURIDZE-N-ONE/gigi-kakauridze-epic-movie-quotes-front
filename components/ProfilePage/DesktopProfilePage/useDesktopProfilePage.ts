import { useAuthentication } from "@/hooks/useAuthentication";
import { useState } from "react";

export default function useDesktopProfilePage() {
  const [activeEditField, setActiveEditField] = useState<
    "username" | "password" | null
  >(null);

  const { user } = useAuthentication();

  return { user, activeEditField, setActiveEditField };
}
