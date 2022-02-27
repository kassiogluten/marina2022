import { gql } from "graphql-request";

export const getPostsQuery = gql`
  query getPosts($first: Int!, $skip: Int!, $category: [String!]) {
    posts(first: $first, skip: $skip, where: { tags_contains_all: $category }) {
      id
      title
      tags
      slug
      date
      coverImage {
        url
      }
      content {
        text
      }
    }
  }
`;
