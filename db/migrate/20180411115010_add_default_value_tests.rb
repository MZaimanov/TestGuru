class AddDefaultValueTests < ActiveRecord::Migration[5.1]
  def change
    change_column(:tests, :level, :int, default: 0, null: false)
  end
end
