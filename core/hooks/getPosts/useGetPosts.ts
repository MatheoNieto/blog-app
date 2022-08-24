import {useQuery, UseQueryResult} from 'react-query';
import {queryKey, getPosts} from './get-posts.service';
import {Posts} from '../../../models';

export const useGetPosts = (): UseQueryResult<Posts[], any> =>
  useQuery({
    queryKey: queryKey.get_posts_users,
    queryFn: () => getPosts(),
  });