class Quack < ApplicationRecord\

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "User"

    belongs_to :quack, optional: true,
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

    has_many :requacks,
    primary_key: :id,
    foreign_key: :quack_id,
    class_name: "Quack"

    has_many :requackers,
    through: :requacks,
    source: :user

    has_many :replies,
    primary_key: :id,
    foreign_key: :reply_to,
    class_name: "Quack"

    def requack_count
        self.requacks.count
    end

    def reply_count
        self.replies.count
    end

    def get_mentions
        actual_mentions = []
        possible_mentions = self.body.split(" ").select(|string| string[0] == '@')
        possible_mentions.each do |string|
            actual_mentions << string if User.find_by(username: string)
        end
        actual_mentions
    end

end