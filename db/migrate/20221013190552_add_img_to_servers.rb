class AddImgToServers < ActiveRecord::Migration[7.0]
  def change
    add_column :servers, :img, :string
  end
end
