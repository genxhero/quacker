class Changecolumndefaulttodate < ActiveRecord::Migration[6.0]
  def change
    change_column_default :users, :dob, from: [], to: nil
  end
end
