class User < ApplicationRecord
  def user_tests(level)
    test.where(level: level)
  end
end
