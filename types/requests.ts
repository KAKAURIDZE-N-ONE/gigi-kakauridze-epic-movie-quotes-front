type Locales = {
  en: string;
  ka: string;
};

export type CreateOrUpdateMovieValues = {
  description: Locales;
  director: Locales;
  name: Locales;
  categories: number[];
  image: File;
  year: number;
  movieId?: number;
};

export type CreateOrUpdateQuoteValues = {
  quote: Locales;
  movie_id: string;
  image: File;
};
