class Changebodyfromstringtotext < ActiveRecord::Migration[6.0]
  def change
    change_column :quacks, :body, :text
  end
end
