export type ModalState = {
  burgerMenuIsOpen: boolean;
  openedModal:
    | "signUp"
    | "logIn"
    | "forgotPassword"
    | "resetPassword"
    | "verifyEmail"
    | "verifySuccess"
    | "resetPasswordSuccess"
    | "resetPasswordLink"
    | "makeChangesUsername"
    | "makeChangesPassword"
    | null;

  currentUserNotficationEmail: string;
};
