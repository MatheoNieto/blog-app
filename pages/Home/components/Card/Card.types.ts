type Author = {
  id: string;
  name: string;
  lastName: string;
  imageProfile: string;
  email: string;
}

type Article = {
  id: string;
  title: string;
  description: string;
  date_created: string;
  times_read: number;
  author: Author;
}

export type CardProps = {
  article: Article;
}