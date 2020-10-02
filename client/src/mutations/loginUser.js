import gql from 'graphql-tag';

const loginUser = gql`
mutation loginUser($email: String!, $password: String!)  {
  loginUser(input: {
   email: $email,
   password: $password
  } ) {
    user{
      id
      username
      email
    }
    token
  }
}`


export default loginUser;





