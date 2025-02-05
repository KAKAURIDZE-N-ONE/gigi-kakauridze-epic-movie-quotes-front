export type ModalState = {
  openedModal:
    | "signUp"
    | "logIn"
    | "forgotPassword"
    | "resetPassword"
    | "verifyEmail"
    | null;

  currentUserNotficationEmail: string;
};
