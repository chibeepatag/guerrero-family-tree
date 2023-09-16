class AddIsHeadToMember < ActiveRecord::Migration[7.0]
  def change
    add_column :members, :is_head, :boolean
  end
end
