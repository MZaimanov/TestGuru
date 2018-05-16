class User < ApplicationRecord
  has_many :users_tests
  has_many :tests, through: :users_tests
  has_many :own_tests, class_name: 'Test', foreign_key: :author_id

  validates :first_name, presence: true

  def user_tests(level)
    Test.joins(:users_tests).where(users_tests: {user_id: self.id}, level: level)
  end
end
