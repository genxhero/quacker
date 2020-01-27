module Mutations
    class AddRequack < BaseMutation
        argument :user_id, Integer, required: true
        argument :quack_id, Integer, required: true
        argument :comment, String, required: false

        def resolve(user_id, quack_id, comment: nil)
            requack = Quack.new
            requack.user_id = user_id
            requack.quack_id = quack_id 
            requack.body = comment
            if requack.save
                Quack.add_requack(quack_id, requack.id)
                requack
            else
                requack.errors
            end
        end

    end
end