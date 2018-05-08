class Test < ApplicationRecord
  has_many :users_tests
  has_many :questions
  belongs_to :category
  has_many :users, through: :users_tests
  belongs_to :author, class_name: 'User', foreign_key: :author_id

  def self.category_tests(category)
    category = Category.find_by(title: category)
    where(category_id: category.id).order(title: :desc).pluck(:title)
  end
end
