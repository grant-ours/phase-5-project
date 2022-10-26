class Addindextousersinservers < ActiveRecord::Migration[7.0]
  def change
    add_index :usersinservers, [:user_id, :server_id], unique: true
  end
end
