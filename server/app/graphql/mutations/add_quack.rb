module Mutations
    class AddRequack < BaseMutation
        argument :user_id, Integer, required: true
        argument :body, String, required: true

        def resolve(user_id, body)
            quack = Quack.new
            quack.user_id = user_id
            quack.body = body

            if quack.save
                render json 
            else
                render json
            end
        end

    end
end