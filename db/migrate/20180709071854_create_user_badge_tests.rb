class CreateUserBadgeTests < ActiveRecord::Migration[5.1]
  def change
    create_table :user_badge_tests do |t|

      t.timestamps
    end
  end
end
