import gql from 'graphql-tag';

const homeFeedQuacks = gql`
query homeFeedQuacks($id: Int!){
    homeFeedQuacks(id: $id) {
        body
        mentions
        original {
            id
            body
            user {
                username
                firstName
                lastName
            }
        }
        user {
          username
          firstName
          lastName
        }
    }
}
`;

export default homeFeedQuacks;