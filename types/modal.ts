export type ModalState = {
  openedModal:
    | "signUp"
    | "logIn"
    | "forgotPassword"
    | "resetPassword"
    | "verifyEmail"
    | "verifySuccess"
    | "resetPasswordSuccess"
    | "resetPasswordLink"
    | null;

  currentUserNotficationEmail: string;
};
