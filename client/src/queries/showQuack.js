import gql from 'graphql-tag'

const showQuack = gql`

query showQuack($id: Int!){
    showQuack(id: $id) {
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

export default showQuack;