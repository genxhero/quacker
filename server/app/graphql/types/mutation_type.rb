module Types
  class MutationType < Types::BaseObject
    field :add_quack, mutation: Mutations::AddQuack
  end
end
