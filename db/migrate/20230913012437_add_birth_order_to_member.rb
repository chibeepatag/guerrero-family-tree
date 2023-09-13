class AddBirthOrderToMember < ActiveRecord::Migration[7.0]
  def change
    add_column :members, :birth_order, :integer
  end
end
