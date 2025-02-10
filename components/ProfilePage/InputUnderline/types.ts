export type Props = {
  type: "text" | "password";
  children: string;
  editable: boolean;
  value?: string;
  editClickFn?: () => void;
};
