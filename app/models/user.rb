require 'bcrypt'

class User < ApplicationRecord
  include BCrypt
  has_many :test_passages
  has_many :tests, through: :test_passages
  has_many :own_tests, class_name: 'Test', foreign_key: :author_id

  validates :first_name, presence: true
  VALID_EMAIL_REGEX = /.+@.+\..+/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password

  def user_tests(level)
    Test.joins(:users_tests).where(users_tests: {user_id: self.id}, level: level)
  end

  def test_passage(test)
    test_passages.order(id: :desc).find_by(test_id: test.id)
  end
end
