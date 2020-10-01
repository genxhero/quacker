module Types
    class AuthCredentials < BaseInputObject
      graphql_name 'AUTH_CREDENTIALS'
      argument :email, String, required: true
      argument :password, String, required: true
    end
  end