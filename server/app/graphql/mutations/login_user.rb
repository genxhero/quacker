module Mutations
    class LoginUser < BaseMutation
        null true
  
        argument :creds, Types::AuthCredentials, required: false
    
        field :token, String, null: true
        field :user, Types::UserType, null: true
  
        def resolve(creds: nil)
          
          return unless creds
          user = User.find_by email: creds[:email].downcase
          if user && user.authenticate(creds[:password])
            puts "Authentication SUCCESS FOR #{user.username}"
            puts "Before Reset: #{context[:session][:session_token] } User's: #{user.session_token}"
            context[:session][:session_token] = user.reset_token        
            context[:current_user] = user 
            context[:cookies].signed[:user_id] = user.id
            puts "After Reset: #{context[:session][:session_token]} User's: #{user.session_token}"
            token = SecureRandom::urlsafe_base64
            
            { user: user, token: token }
          else
           { errors: ["Invalid credentials; username or password is incorrect"]}
          end
        end

    end
end