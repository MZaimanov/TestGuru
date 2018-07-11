class CreateBadgeTests < ActiveRecord::Migration[5.1]
  def change
    create_table :badge_tests do |t|

      t.timestamps
    end
  end
end
