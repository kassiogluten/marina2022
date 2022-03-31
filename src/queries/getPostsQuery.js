import { gql } from "graphql-request";

export const getPostsQuery = gql`
  query getPosts($first: Int!, $skip: Int!, $category: [String!]) {
    posts(orderBy: date_DESC, first: $first, skip: $skip, where: { tags_contains_all: $category }) {
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
