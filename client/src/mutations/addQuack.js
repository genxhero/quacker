import gql from 'graphql-tag';

const addQuack = gql`mutation  addQuack ($body: String!) {
    addQuack(input:{body: $body} ){
        id
        body
        mentions
        user {
            username
            firstName
            lastName
        }
      }
    }`

    export default addQuack