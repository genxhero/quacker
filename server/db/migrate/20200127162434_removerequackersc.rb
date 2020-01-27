class Removerequackersc < ActiveRecord::Migration[6.0]
  def change
    remove_column :quacks, :requackers
  end
end
