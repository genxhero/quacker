module Mutations
    class AddQuack < BaseMutation
        argument :body, String, required: true
        
        type Types::QuackType

        def resolve(body: nil)
            quack = Quack.new
            quack.body = body
            quack.user_id = 1
            quack.get_mentions
#            quack.user = context[:current_user]
            #todo: context[:current_user]
            if quack.save
                quack
            else
                { errors: quack.errors.full_messages }
            end
        end

    end
end