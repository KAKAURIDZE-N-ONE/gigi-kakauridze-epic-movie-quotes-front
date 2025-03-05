export type FormFieldsSignUp = {
  lang: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type FormFieldsLogIn = {
  emailOrName: string;
  password: string;
  remember: boolean;
};

export type FormFieldForgotPassword = {
  email: string;
};

export type FormFieldResetPassword = {
  password: string;
  password_confirmation: string;
};

export type FormFieldResetPasswordApi = {
  password: string;
  password_confirmation: string;
  email: string;
  token: string;
};

export type VerifyUser = {
  id: string;
  hash: string;
  expires: string;
  signature: string;
};
