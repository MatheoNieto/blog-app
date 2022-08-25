import {UserType} from './User';
import {CommentType} from './Comments';

export type RequestPostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostCreatedType = {
  userId: number;
  title: string;
  body: string;
}

export type PostsType = RequestPostsType & {
  comments: CommentType[];
};

export type Posts = UserType & {
  posts: PostsType[];
};
