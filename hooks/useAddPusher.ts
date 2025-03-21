import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect } from "react";
import { getCsrfCookie } from "@/services/apiAuth";

import { authorizePusherUser } from "@/services/apiPusher";

export default function useAddPusher() {
  useEffect(() => {
    async function setupEcho() {
      if (typeof window !== "undefined") {
        try {
          window.Pusher = Pusher;
          await getCsrfCookie();

          window.Echo = new Echo({
            broadcaster: "pusher",
            key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
            cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
            encrypted: true,
            authorizer: (channel: any) => ({
              authorize: (socketId: any, callback: any) =>
                authorizePusherUser(socketId, callback, channel.name),
            }),
          });
        } catch (error) {
          console.error("Failed to initialize Echo:", error);
        }
      }
    }

    setupEcho();
  }, []);
}
