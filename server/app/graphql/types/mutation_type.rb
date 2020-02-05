module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :add_quack, mutation: Mutations::AddQuack
  end
end
