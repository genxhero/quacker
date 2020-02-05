class Addatscolumntoquacks < ActiveRecord::Migration[6.0]
  def change
    add_column :quacks, :mentions, :string, array: true, default: []
  end
end
