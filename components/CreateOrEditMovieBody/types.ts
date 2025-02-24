export type Props = {
  turnOfFn: () => void;
  type: "edit" | "create";
};

export type HookProps = {
  type: "edit" | "create";
};
