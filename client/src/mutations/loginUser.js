import gql from 'graphql-tag';

const userLogin = gql`
mutation userLogin($email: String!, $password: String!)  {
  loginUser(creds: {
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


export default userLogin;





