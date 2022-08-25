import generalRequest from '../../services/general-request.service';
import {endPoints} from '../../../shared/endPoints';
import {
  UserType,
  RequestPostsType,
  PostsDetailType,
  CommentType,
} from '../../../models';

export const getDetailPost = async (
  postId: string | string[] | undefined,
): Promise<PostsDetailType | undefined> => {

  if(!postId || typeof postId === 'object'){
    return Promise.resolve(undefined);
  }
  
  
  const urlDetailPost = endPoints.getDetailPost.replace(':id', postId);
  const postDetail: RequestPostsType = await generalRequest.get(urlDetailPost);

  const urlDetailUser = endPoints.getDetailUser.replace(
    ':id',
    `${postDetail.userId}`,
  );
  const userDetail: UserType = await generalRequest.get(urlDetailUser);

  const urlComments = endPoints.getComments.replace(':id', `${postDetail.id}`);
  const postComments: CommentType[] = await generalRequest.get(urlComments);

  return Promise.resolve({
    ...userDetail,
    post: {
      ...postDetail,
      comments: postComments,
    },
  });
};

export const queryKey = {
  get_detail_post: 'get_detail_post',
};
