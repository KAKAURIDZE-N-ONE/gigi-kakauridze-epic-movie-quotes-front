import { StaticImageData } from "next/image";

export type Props = {
  url: StaticImageData;
  alt: string;
  quote: string;
  description: string;
  translate: string;
};
