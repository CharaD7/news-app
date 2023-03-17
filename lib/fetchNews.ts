import { gql } from 'graphql-request';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery (
      $access_key: String!
      $categories: String!
      $keywords: String
      ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: 'gb'
        sort: 'published_desc'
        keywords: $keywords
        ) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          url
          title
          source
          published_at
          language
          image
          description
          country
          category
          author
        }
      }
    }
  `;
  // Fetch function with Next.js 13 caching...

  // Sort function by images vs not images present

  // Return data
};

export default fetchNews;
