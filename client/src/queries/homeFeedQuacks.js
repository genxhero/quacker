import gql from 'graphql-tag';

const homeFeedQuacks = gql`
query homeFeedQuacks($id: Int!){
    homeFeedQuacks(id: $id) {
        body
        mentions
        user {
          username
          firstName
          lastName
        }
    }
}
`;

export default homeFeedQuacks;