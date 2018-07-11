class TestPassage < ApplicationRecord
  belongs_to :user
  belongs_to :test
  belongs_to :current_question, class_name: :Question, optional: true

  before_validation :before_validation_set_question, on: %i[create update]

  scope :passed, -> { where ('result >= 85') }

  def completed?
    current_question.nil?
  end

  def accept!(answer_ids)
    self.correct_questions += 1 if correct_answer?(answer_ids)
    save!
  end

  def current_question_number
    test.questions.order(:id).where('id <= ?', current_question_id).count
  end

  def score
    self.correct_questions.to_f / self.test.questions.count * 100
  end

  def success?
    score >= 85
  end

  def test_done?
    completed? && success?
  end

  def time_left
    (expires_at - Time.current).to_i
  end

  def stop!
    self.current_question = nil
  end

  def time_over?
    expires_at < Time.current
  end


  private

  def check_timer
    test.timer_exists? && time_over?
  end

  def before_validation_set_question
    if self.current_question.nil?
      self.current_question = test.questions.first
    else
      self.current_question = next_question
    end
  end

  def correct_answer?(answer_ids)
    correct_answers.ids.sort == answer_ids.map(&:to_i).sort
  end

  def correct_answers
    self.current_question.answers.correct
  end

  def next_question
    test.questions.order(:id).where('id > ?', current_question_id).first
  end

  def expires_at
    created_at + test.timer.minutes if test.timer_exists?
  end
end
