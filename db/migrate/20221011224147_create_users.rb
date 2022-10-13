class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :nickname
      t.string :bio
      t.string :pp

      t.timestamps
    end
  end
end
