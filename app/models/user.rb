class User < ApplicationRecord
  has_many :users_tests
  def user_tests(level)
    Test.joins(:users_tests).where(users_tests: {user_id: self.id}, level: level)
  end
end
