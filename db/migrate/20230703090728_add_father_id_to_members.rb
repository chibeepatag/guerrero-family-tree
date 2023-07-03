class AddFatherIdToMembers < ActiveRecord::Migration[7.0]
  def change
    add_reference :members, :father, foreign_key: {to_table: :members}
  end
end
