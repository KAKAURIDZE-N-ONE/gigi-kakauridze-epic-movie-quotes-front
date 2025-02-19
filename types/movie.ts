import { Category } from "./respones";

export type FormFieldsAddMovie = {
  nameEn: string;
  nameKa: string;
  categories: Category[];
  year: number;
  directorEn: string;
  directorKa: string;
  descriptionEn: string;
  descriptionKa: string;
  image: FileList;
};
