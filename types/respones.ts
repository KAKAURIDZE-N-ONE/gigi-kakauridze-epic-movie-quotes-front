export type UserResponse = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  password: string;
  remember_token: string | null;
  created_at: string | null;
  updated_at: string | null;
  google_id: string;
  avatar: string | null;
};

export type MoviesResponse = {
  id: number;
  name: Record<string, string>;
  year: number;
  quotes_count: number;
  image: string;
};

type Category = {
  id: number;
  name: string;
};

export type MovieResponse = {
  id: number;
  name: Record<string, string>;
  year: number;
  image: string;
  categories: Category[];
};
