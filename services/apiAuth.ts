import { FormFieldsLogIn, FormFieldsSignUp } from "@/types/auth";
import { authInstace } from "./axios";

export async function signUp(data: FormFieldsSignUp) {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post("/api/sign-up", data);

  console.log(response.data);
  return response.data;
}

export async function logIn(data: FormFieldsLogIn) {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post("/api/log-in", data);

  return response.data;
}
