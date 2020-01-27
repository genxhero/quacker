class Quack < ApplicationRecord\

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "User"

    belongs_to :quack, optional: true
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

    has_many :quacks,
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"
    
    def quack_type 
       if quack_id? && body?
            "quackback" #Retweet with comment
        elsif quack_id?
            "requack" #retweet
        else #Including cases where there is a body
            "quack" #just a post
      end
    end

end