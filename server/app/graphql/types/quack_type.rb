module Types
    class QuackType < Types::BaseObject
      graphql_name "Article"
      field :id, Int, null: false
      field :user, UserType, null: false, method: :user
      field :body, String, null: true, method: :body
      field :reply_count, Integer, null: false do 
        :replies.size
      end
      field :requack_count, Integer, null: false do 
        :requackers.size
      end
      field :requackers, [Integer], null: true do
        :requackers.map {|requacker| requacker.id}
      end
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