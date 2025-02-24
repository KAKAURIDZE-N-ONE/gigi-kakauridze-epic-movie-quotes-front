export type Props = {
  type: "create" | "view" | "edit" | "createPost";
  turnOfFn?: () => void;
};

export type HookProps = {
  type: "create" | "view" | "edit" | "createPost";
};
