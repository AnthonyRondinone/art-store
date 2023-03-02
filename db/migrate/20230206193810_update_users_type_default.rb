class UpdateUsersTypeDefault < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :type, :string, :default => 'collector'
    change_column :users, :email, :string, null: false
  end
end
