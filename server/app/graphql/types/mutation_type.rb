module Types
  class MutationType < Types::BaseObject
    field :add_quack, mutation: Mutations::AddQuack
    field :login_user, mutation: Mutations::LoginUser
  end
end
