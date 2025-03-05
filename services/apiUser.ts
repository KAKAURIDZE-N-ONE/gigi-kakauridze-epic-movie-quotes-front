import { FormValueEditUserName } from "@/types/user";
import { authInstace, fileInstance } from "./axios";
import { FormFieldResetPassword } from "@/types/auth";

export async function changeUsername(data: FormValueEditUserName) {
  const response = await authInstace.patch(`/api/user/username`, data, {
    headers: {
      lang: data.language,
    },
  });

  return response.data;
}

export async function changePassword(data: FormFieldResetPassword) {
  const response = await authInstace.patch(`/api/user/password`, data);

  return response.data;
}

export async function updateUserProfileImage(file: File) {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await fileInstance.post(
    "/api/user/profile-image",
    formData,
    {
      method: "patch",
    }
  );

  return response.data;
}
