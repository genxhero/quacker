module Types
    class UserType < BaseObject
      field :id, Int, null: false
      field :username, String, null: false
      field :email, String, null: false
      field :first_name, String, null: false
      field :last_name, String, null: false
      field :followers, [Integer], null: true, method: :followers
      field :followings, [Integer], null: true, method: :followings
      field :quacks, [QuackType], null: true, method: :quacks
    end
  end