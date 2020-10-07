import gql from 'graphql-tag';

const currentUser = gql`
{
    currentUser {
      id
      username
      firstName
      lastName
      email
    }
  } 
`
export default currentUser;