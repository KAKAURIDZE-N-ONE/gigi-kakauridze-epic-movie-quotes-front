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
  movie_id: number;
  image: File;
  quote_id?: number;
};

export type CreateCommentValues = {
  comment: string;
  quote_id: number;
  user_id: number;
};

export type CreateLikeValues = {
  quote_id: number;
  user_id: number;
};

export type UpdateLikeValues = {
  active: 1 | 0;
  id: number;
};

export type GetQuotesValues = {
  page: number;
  filter: NewsFeedFilter;
};

export type NewsFeedFilter = {
  filterBy: "quoteText" | "movieName";
  value: string;
} | null;
