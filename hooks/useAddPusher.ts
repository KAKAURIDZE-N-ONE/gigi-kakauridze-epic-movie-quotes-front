import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect } from "react";

export default function useAddPusher() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Pusher = Pusher;
      window.Echo = new Echo({
        broadcaster: "pusher",
        key: "211064ed9cace512531f",
        cluster: "eu",
        forceTLS: true,
      });
    }
  }, []);
}
