module QuestionsHelper
  def question_header(question)
    action_title = question.new_record? ? "Создать" : "Редактировать"
    "#{action_title} #{question.test.try(:title)} Вопрос"
  end
end
