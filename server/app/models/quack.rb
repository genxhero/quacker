class Quack < ApplicationRecord\

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "User"

    belongs_to :quack, optional: true
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

    has
    
    def quack_type 
       if quack_id? && body?
            "quackback"
        elsif quack_id?
            "requack"
        else #Including cases where there is a body
            "quack"
      end
    end

end