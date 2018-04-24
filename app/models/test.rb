class Test < ApplicationRecord
  def self.with_category(title)
    by_category(title).pluck(:title)
  end
end
