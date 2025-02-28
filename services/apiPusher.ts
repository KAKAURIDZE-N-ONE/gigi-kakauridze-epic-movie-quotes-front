import { authInstace } from "./axios";

export async function authorizePusherUser(
  socketId: any,
  callback: any,
  channelName: string
) {
  try {
    const response = await authInstace.post("/api/broadcasting/auth", {
      socket_id: socketId,
      channel_name: channelName,
    });

    callback(false, response.data);
  } catch (error) {
    callback(true, error);
  }
}
