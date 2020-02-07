module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :all_quacks, [QuackType], null: false
    def all_quacks
     Quack.all.order(created_at: :desc)
    end

    field :show_quack, QuackType, null: true do 
      argument :id, Integer, required: true
    end
    def show_quack(id: nil) 
      quack = Quack.find(id)
      return {errors: ["Quack not found!"]} if !quack
      quack
    end

    field :user_search, [UserType], null: true do 
      argument :query, String, required: true
    end
    def user_search(query: "")
      parsed_query = query.gsub("@", "")
      User.where("lower(username) like ?", "%#{parsed_query.downcase}%")
        .or(User.where("lower(first_name) like ?", "%#{parsed_query.downcase}%"))
        .or(User.where("lower(last_name) like ?", "%#{parsed_query.downcase}%")) 
    end

  end
end
