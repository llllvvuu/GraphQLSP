import { gql } from '@urql/core';

const PostsQuery = gql`
  query AllPosts {
    posts {
      title
    }
  }
`;