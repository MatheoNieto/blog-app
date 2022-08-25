import {useQuery, UseQueryResult} from 'react-query';
import {queryKey, getDetailPost} from './getDetailPost.service';
import {PostsDetailType} from '../../../models';

export const useGetPosts = (idPost: string | string[] | undefined) : UseQueryResult<PostsDetailType, any> =>
  useQuery({
    queryKey: queryKey.get_detail_post,
    queryFn: () => getDetailPost(idPost),
  });