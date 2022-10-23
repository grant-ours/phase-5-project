class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.string :text
      t.belongs_to :user
      t.belongs_to :chatroom

      t.timestamps
    end
  end
end
