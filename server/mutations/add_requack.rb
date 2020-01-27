module Mutations
    class AddRequack < BaseMutation
        argument :user_id, Integer, required: true
        argument :quack_id, Integer, required: true
        argument :comment, String, required: false

        def resolve(user_id, quack_id, comment: nil)
            quack = Quack.new
            quack.user_id = user_id
            quack.quack_id = quack_id 
            quack.comment = comment
        end

    end
end