import {
  FormFieldForgotPassword,
  FormFieldResetPasswordApi,
  FormFieldsLogIn,
  FormFieldsSignUp,
  VerifyUser,
} from "@/types/auth";
import { authInstace } from "./axios";

async function getCsrfCookie() {
  await authInstace.get(`/sanctum/csrf-cookie`);
}

export async function signUp(data: FormFieldsSignUp) {
  await getCsrfCookie();

  const response = await authInstace.post("/api/sign-up", data);

  return response.data;
}

export async function logIn(data: FormFieldsLogIn) {
  await getCsrfCookie();

  const response = await authInstace.post("/api/log-in", data);

  return response.data;
}

export async function logOut() {
  const response = await authInstace.post("/api/log-out");

  return response.data;
}

export async function forgotPassword(data: FormFieldForgotPassword) {
  await getCsrfCookie();

  const response = await authInstace.post("/api/forgot-password", data);

  return response.data;
}

export async function resetPassword(data: FormFieldResetPasswordApi) {
  await getCsrfCookie();

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
