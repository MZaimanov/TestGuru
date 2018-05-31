class Test < ApplicationRecord
  has_many :questions, :dependent => :destroy
  belongs_to :category
  has_many :users, through: :test_passages
  belongs_to :author, class_name: :User, foreign_key: :author_id
  has_many :test_passages, dependent: :destroy

  validates :level, numericality: { only_integer: true,
                                    greater_than_or_equal_to: 0 }
  validates :title, presence: true,
                    uniqueness: { scope: :level }

  scope :easy,   -> { where(level: 0..1) }
  scope :medium, -> { where(level: 2..4) }
  scope :hard,   -> { where(level: 5..Float::INFINITY ) }
  scope :by_category, -> (category) { joins(:category)
    .where(categories: { title: title })
    .order(title: :desc) }

  def self.category_tests(category)
    category = Category.find_by(title: category)
    where(category_id: category.id).order(title: :desc).pluck(:title)
  end
end
