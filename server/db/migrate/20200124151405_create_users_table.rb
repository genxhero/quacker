class CreateUsersTable < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :description, null: false, default: ""
      t.string :first_name, null: false, default: "Anonymous"
      t.string :last_name, null: false, default: ""
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :followings, array: true
      t.integer :followers, array: true
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
