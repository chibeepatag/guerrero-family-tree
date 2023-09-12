class AddSpouse2ToMembers < ActiveRecord::Migration[7.0]
  def change
    add_reference :members, :spouse2, foreign_key: {to_table: :members}
  end
end
