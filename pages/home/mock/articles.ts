type Author = {
  id: string;
  name: string;
  lastName: string;
  imageProfile: string;
  email: string;
};

type Article = {
  id: string;
  title: string;
  description: string;
  date_created: string;
  times_read: number;
  author: Author;
};

export const data: Article[] = [
  {
    id: '1',
    author: {
      email: 'author@example.com',
      id: '1234ksja',
      imageProfile:
        'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg',
      lastName: 'test test',
      name: 'bla bla',
    },
    date_created: '20-03-2020',
    times_read: 1,
    title: 'the first article',
    description: 'This is a description',
  },
  {
    id: '1asdasdf',
    author: {
      email: 'author@example.com',
      id: '1234ksja',
      imageProfile:
        'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg',
      lastName: 'test test',
      name: 'bla bla',
    },
    date_created: '20-03-2020',
    times_read: 1,
    title: 'the second article',
    description: 'This is a description',
  },
];
