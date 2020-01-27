module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :all_quacks, [QuackType], null: false
    def images
     Quack.all.order(created_at: :desc)
    end
  end
end
