class Changecolumn < ActiveRecord::Migration[6.0]
  def change
    change_column :quacks, :body, :string
  end
end
