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
  const res = await fetch('https://blauvelt.stepzen.net/api/jolly-puma/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    }
  });

  // Sort function by images vs not images present

  // Return data
};

export default fetchNews;
