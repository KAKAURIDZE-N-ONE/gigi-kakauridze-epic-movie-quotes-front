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

export type Category = {
  id: number;
  name: Record<string, string>;
};

export type Quote = {
  id: number;
  image: string;
  quote: Record<string, string>;
  likes_count: number;
  comments_count: number;
};

export type MovieResponse = {
  id: number;
  name: Record<string, string>;
  description: Record<string, string>;
  director: Record<string, string>;
  year: number;
  image: string;
  categories: Category[];
  quotes: Quote[];
};

type CommentUser = {
  avatar: string;
  name: string;
};

export type Comment = {
  id: number;
  comment: string;
  user: CommentUser;
  quote?: {
    id: number;
  };
};

export type RealTimeComment = {
  comment: Comment;
};

export type PostsListingResponseDataItem = {
  id: number;
  image: string;
  quote: Record<string, string>;
  likes_count: number;
  comments: Comment[];
  movie: {
    name: Record<string, string>;
    year: number;
    user: {
      avatar: string;
      name: string;
    };
  };
  current_user_like: LikeResponse | null;
};

export type PostsListingResponse = {
  has_more_pages: boolean;
  data: PostsListingResponseDataItem[];
};
export type LikeResponse = {
  id: number;
  active: 1 | 0;
};

export type LikeBroadcastResponse = {
  like: {
    post_id: number;
    id: number;
    user_id: number;
    active: 1 | 0;
  };
};

export type MovieShortResponse = {
  id: number;
  name: Record<string, string>;
  director: Record<string, string>;
  year: number;
  image: string;
  categories: Category[];
};

export type Notification = {
  id: string;
  created_at: string;
  data: CommentNotificationData | LikeNotificationData;
  read_at: string | null;
};

export type CommentNotificationData = {
  quote_id: number;
  movie_id: number;
  comment_id?: number;
  commenter_name?: string;
  commenter_avatar?: string;
  id?: string;
};

export type LikeNotificationData = {
  liker_avatar?: string;
  liker_name?: string;
  movie_id: number;
  quote_id: number;
  id?: string;
};

export type PusherNotification = CommentNotificationData | LikeNotificationData;
