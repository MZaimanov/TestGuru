class Answer < ApplicationRecord
  belongs_to :question

  scope :correct, -> { where(correct: true) }

  validates :body, presence: true

  validate :validate_answers_count, on: :update

  private

  def validate_answers_count
    errors.add(:answers, 'Должно быть от 1 до 4 ответов!') unless (1..4).include?(answers.size)
  end
end
