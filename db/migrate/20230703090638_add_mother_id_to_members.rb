class AddMotherIdToMembers < ActiveRecord::Migration[7.0]
  def change
    add_reference :members, :mother, foreign_key: {to_table: :members}
  end
end
