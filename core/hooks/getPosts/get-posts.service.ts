import generalRequest from '../../services/general-request.service';
import {endPoints} from '../../../shared/endPoints';
import {UserType, RequestPostsType, Posts, CommentType} from '../../../models';

export const getPosts = async (): Promise<Posts[]> => {
  const users: UserType[] = await generalRequest.get(endPoints.getUsers);

  return await Promise.all(
    users.map(async (user: UserType) => {
      const endpointPost = endPoints.getPostsUser.replace(':id', `${user.id}`);
      const postsUser: RequestPostsType[] = await generalRequest.get(
        endpointPost,
      );

      return {
        ...user,
        posts: await Promise.all(
          postsUser.map(async post => {
            const endPointComments = endPoints.getComments.replace(
              ':id',
              `${post.id}`,
            );
            const commentsPosts: CommentType[] = await generalRequest.get(
              endPointComments,
            );

            return {
              ...post,
              comments: commentsPosts,
            };
          }),
        ),
      };
    }),
  );
};

export const queryKey = {
  get_posts_users: 'get_posts_users',
};
