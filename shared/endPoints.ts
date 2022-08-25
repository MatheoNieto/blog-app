const baseUrl = 'https://jsonplaceholder.typicode.com';

export const endPoints = {
  getPostsUser: `${baseUrl}/posts?userId=:id`,
  getComments: `${baseUrl}/posts/:id/comments`,
  getUsers: `${baseUrl}/users`,
  getDetailUser: `${baseUrl}/users/:id`,
  getDetailPost: `${baseUrl}/posts/:id`,
  posts:  `${baseUrl}/posts`,
};
