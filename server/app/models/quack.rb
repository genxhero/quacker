class Quack < ApplicationRecord\

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "User"

    belongs_to :quack, optional: true
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

end