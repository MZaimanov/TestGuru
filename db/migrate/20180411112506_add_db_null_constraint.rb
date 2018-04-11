class AddDbNullConstraint < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:tests, :title, false)
    change_column_null(:questions, :body_questions, false)
    change_column_null(:answers, :body_answer, false)
    change_column_null(:users, :first_name, false)
  end
end
