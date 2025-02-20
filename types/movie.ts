import { Category } from "./respones";

type Locales = { en: string; ka: string };

export type FormFieldsAddMovie = {
  categories: Category[];
  year: number;
  name: Locales;
  director: Locales;
  description: Locales;
  image: FileList;
};

export type FormFieldsAddQuote = {
  movieId: number;
  quote: Locales;
  image: FileList;
};
