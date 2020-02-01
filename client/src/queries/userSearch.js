import gql from 'graphql-tag'

const userSearch = gql`
query userSearch($query: String!){
    userSearch(query:$query){
      username
      firstName
      lastName
      id
    }
  }
  
`;

export default userSearch;