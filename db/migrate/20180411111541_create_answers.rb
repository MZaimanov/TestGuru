class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :body_answer
      t.integer :test_id

      t.timestamps
    end
  end
end
