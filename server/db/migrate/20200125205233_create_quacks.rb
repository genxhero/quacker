class CreateQuacks < ActiveRecord::Migration[6.0]
  def change
    create_table :quacks do |t|
      t.integer :user_id, null: false
      t.integer :thread_id, null: false
      t.integer :quack_id
      t.integer :body
      t.integer :requackers, array: true, default: []
      t,integer :likers, array: true, default: []
      t.timestamps
    end
  end
end
