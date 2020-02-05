module Types
    class QuackType < Types::BaseObject
      graphql_name "Quack"
      field :id, Int, null: false
      field :user, UserType, null: false, method: :user
      field :body, String, null: true, method: :body
      field :reply_count, Integer, null: false, method: :reply_count 
      field :requack_count, Integer, null: false, method: :requack_count
      field :requackers, [UserType], null: true, method: :requackers
      #original gets the text of the original quack (basically, what you're retweeting)
      field :original, QuackType, null: true, method: :quack
          #LIKES NOT IMPLEMENTED YET
    #   field :like_count, Integer, null: false do
    #     :likes.size
    #   end
    #   field :likers, [Integer], null: true do
    #     :likers.map {|liker| liker.id}
    #   end
    #   field :requackers, [Integer], method: :likers, null: true 
      field :created, String, method: :created_at, null: false
    end
  end