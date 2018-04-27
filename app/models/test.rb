class Test < ApplicationRecord
  has_many :users_tests
  belongs_to :category
  def self.category_tests(category)
      category = Category.find_by(title: category)
      where(category_id: category.id).order(title: :desc).pluck(:title)
  end
end
