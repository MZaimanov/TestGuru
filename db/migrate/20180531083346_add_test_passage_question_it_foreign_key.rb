class AddTestPassageQuestionItForeignKey < ActiveRecord::Migration[5.1]
  def change
    add_column :test_passages, :current_question, :integer
    add_column :test_passages, :current_question_number, :integer, default: 0
    add_reference(:test_passages, :current_question, foreign_key: {to_table: :questions})
  end
end
