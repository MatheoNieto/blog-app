import generalRequest from '../../services/general-request.service';
import {endPoints} from '../../../shared/endPoints';
import {PostCreatedType, RequestPostsType} from '../../../models';

export const createdPost = async (dataPost: PostCreatedType):Promise<RequestPostsType> => {
  const createdPostPetition = await generalRequest.post(endPoints.posts, dataPost);
  return Promise.resolve(createdPostPetition);
};
