class Quack < ApplicationRecord\

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "User"

    belongs_to :quack, optional: true
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

    has_many :requacks,
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

    has_many :replies,
    primary_key: :id,
    foreign_key: :reply_to,
    class_name: "Quack"

    def self.add_requacker(quack_id, user_id)
        quack = Quack.find(quack_id)
        quack.requackers << user_id 
        quack.save
    end

    def self.remove_requacker(quack_id, user_id)
        quack = Quack.find(quack_id)
        quack.requackers.delete(user_id)
        quack.save
    end

    def likers
        #select from likes, get likes.userid
    end


end