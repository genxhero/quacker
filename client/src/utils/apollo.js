import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
    uri: 'https://localhost:3000/graphql'
  });

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
  });

  export default client;