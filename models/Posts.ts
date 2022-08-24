import {UserType} from './User';
import {CommentType} from './Comments';

export type RequestPostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostsType =  RequestPostsType &{
    comments: CommentType[];
}

export type Posts = UserType & {
  posts: PostsType[];
};

