export type Props = {
  children: string;
  additionalClasses?: string;
  color?: string;
  size: "small" | "medium" | "smaller" | "normal";
  clickFn: () => void;
};
