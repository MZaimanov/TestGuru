class CreateGists < ActiveRecord::Migration[5.1]
  def change
    create_table :gists do |t|
      t.references :question, foreign_key: true, null: false
      t.string :link
      t.references :user, foreign_key: true, null: false
      t.timestamps
    end
  end
end

