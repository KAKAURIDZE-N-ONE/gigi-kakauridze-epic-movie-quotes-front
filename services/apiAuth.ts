import {
  FormFieldForgotPassword,
  FormFieldResetPasswordApi,
  FormFieldsLogIn,
  FormFieldsSignUp,
  VerifyUser,
} from "@/types/auth";
import { authInstace } from "./axios";

export async function getCsrfCookie() {
  await authInstace.get(`/sanctum/csrf-cookie`);
}

export async function signUp(data: FormFieldsSignUp) {
  const response = await authInstace.post("/api/sign-up", data, {
    headers: {
      lang: data.lang,
    },
  });

  return response.data;
}

export async function logIn(data: FormFieldsLogIn) {
  const response = await authInstace.post("/api/log-in", data);

  return response.data;
}

export async function logOut() {
  const response = await authInstace.post("/api/log-out");

  return response.data;
}

export async function forgotPassword(data: FormFieldForgotPassword) {
  const response = await authInstace.post("/api/forgot-password", data);

  return response.data;
}

export async function resetPassword(data: FormFieldResetPasswordApi) {
  const response = await authInstace.post("/api/reset-password", data);

  return response.data;
}

export async function verifyUser(data: VerifyUser) {
  const { id, hash, expires, signature } = data;

  const response = await authInstace.get(`/api/email/verify/${id}/${hash}`, {
    params: { expires, signature },
  });

  return response.data;
}

export async function getUser() {
  const response = await authInstace.get("/api/user");

  return response.data;
}

export async function getGoogleVerifyUrl() {
  const response = await authInstace.get("/api/auth/google");

  return response.data;
}

export async function googleVerify(data: Record<string, string>) {
  try {
    const response = await authInstace.get("/api/auth/google/callback", {
      params: data,
    });

    return response.data;
  } catch (error: any) {
    if (error.response?.status === 403) {
      return {
        error: "User already registered. Please log in with your password.",
      };
    }
    throw error;
  }
}
