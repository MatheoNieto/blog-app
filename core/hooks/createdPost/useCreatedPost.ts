import {useMutation} from 'react-query';
import {createdPost} from './createdPost.service';

export const useCreatedPost = (
  onSettled?: (data) => void,
  onError?: () => void,
) => {
  return useMutation(createdPost, {
    onSettled,
    onError,
  });
};
