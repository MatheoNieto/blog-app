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
  date_created: Date;
  times_read: number;
  author: Author;
}

export type CardProps = {
  article: Article;
}