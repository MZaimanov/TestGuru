class DropTableTestsUsers < ActiveRecord::Migration[5.1]
  def up
    drop_table :test_users, if_exists: true
  end
end
