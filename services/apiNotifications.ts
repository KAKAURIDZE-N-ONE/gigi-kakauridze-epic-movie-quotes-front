import { authInstace } from "./axios";

export async function getNotifications() {
  const response = await authInstace.get("/api/notifications");

  return response.data;
}

export async function markAllNotificationsAsRead() {
  const response = await authInstace.post(
    "/api/notifications/mark-all-as-read"
  );

  return response.data;
}

export async function markNotificationAsRead(id: string) {
  const response = await authInstace.post(
    `/api/notifications/mark-as-read/${id}`
  );

  return response.data;
}
