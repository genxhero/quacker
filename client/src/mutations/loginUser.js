import gql from 'graphql-tag';

const userLogin = gql`
mutation userLogin($email: String!, $password: String!)  {
  loginUser(input: {creds:{
   email: $email,
   password: $password
  } } ) {
    user{
      id
      username
      email
      firstName
      lastName
    },
    token
  }
}`


export default userLogin;





