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
        possible_mentions = self.get_possible_mentions
        usernames = {}
        users = User.where(username: possible_mentions.map{|mention| mention[1..-1].downcase } )
        users.inject {|user| usernames["@#{user.username}"] = true}
        actual_mentions = possible_mentions.select  {|string| usernames[string] }
        debugger;
        self.mentions = actual_mentions.uniq
    end

    private 

    def get_possible_mentions
        raw_mentions = self.body.split(" ").select {|string| string[0] == '@'}
        clean_mentions = raw_mentions.map {|mention| mention.gsub(/[^a-zA-Z0-9\-@]/,"").downcase}
        clean_mentions
    end

end