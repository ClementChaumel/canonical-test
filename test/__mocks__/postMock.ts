import { Post } from './../../@types/BlogPostType'

export const mockPost: Post = {
  id: 123,
  link: 'https://canonical.com/',
  'featured_media': 'https://assets.ubuntu.com/v1/2eec3fd9-logo.svg',
  date: '2020-08-24T15:44:44',
  title: {
    rendered: 'Post title',
  },
  _embedded: {
    author: [
      {
        name: 'Billy Bob',
        link: 'https://canonical.com/billy-bob',
      },
    ],
    'wp:term': [
      [
        {
          id: 1,
          link: 'https://canonical.com/Articles',
          name: 'Articles',
          taxonomy: 'category',
        },
      ],
      [
        {
          id: 2,
          link: 'https://canonical.com/careers',
          name: 'careers',
          taxonomy: 'post-tags',
        },
      ],
      [
        {
          id: 3,
          link: 'https://canonical.com/People-and-culture',
          name: 'People and culture',
          taxonomy: 'topic',
        },
      ],
      [
        {
          id: 4,
          link: 'https://canonical.com/group-name',
          name: 'group name',
          taxonomy: 'group',
        },
      ],
    ],
  },
}

export const mockPostNoTopic: Post = {
  id: 123,
  link: 'https://canonical.com/',
  'featured_media': 'https://assets.ubuntu.com/v1/2eec3fd9-logo.svg',
  date: '2020-08-24T15:44:44',
  title: {
    rendered: 'Post title',
  },
  _embedded: {
    author: [
      {
        name: 'Billy Bob',
        link: 'https://canonical.com/billy-bob',
      },
    ],
    'wp:term': [
      [
        {
          id: 1,
          link: 'https://canonical.com/Articles',
          name: 'Articles',
          taxonomy: 'category',
        },
      ],
      [
        {
          id: 2,
          link: 'https://canonical.com/careers',
          name: 'careers',
          taxonomy: 'post-tags',
        },
      ],
    ],
  },
}

export const mockPostNoTopicNoTag: Post = {
  id: 123,
  link: 'https://canonical.com/',
  'featured_media': 'https://assets.ubuntu.com/v1/2eec3fd9-logo.svg',
  date: '2020-08-24T15:44:44',
  title: {
    rendered: 'Post title',
  },
  _embedded: {
    author: [
      {
        name: 'Billy Bob',
        link: 'https://canonical.com/billy-bob',
      },
    ],
    'wp:term': [
      [
        {
          id: 1,
          link: 'https://canonical.com/Articles',
          name: 'Articles',
          taxonomy: 'category',
        },
      ],
    ],
  },
}
