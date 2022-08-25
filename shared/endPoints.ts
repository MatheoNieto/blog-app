const baseUrl = 'https://jsonplaceholder.typicode.com';

export const endPoints = {
  getPostsUser: `${baseUrl}/posts?userId=:id`,
  getComments: `${baseUrl}/posts/:id/comments`,
  getUsers: `${baseUrl}/users`,
  posts:  `${baseUrl}/posts`,
};
