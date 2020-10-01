import gql from 'graphql-tag';

const currentUser = gql`
{
    currentUser {
      username
      firstName
      lastName
      email
    }
  } 
`
export default currentUser;