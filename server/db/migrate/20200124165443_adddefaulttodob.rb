class Adddefaulttodob < ActiveRecord::Migration[6.0]
  def change
    change_column_default :users, :dob, to: []
  end
end
