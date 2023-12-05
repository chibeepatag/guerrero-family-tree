class AddGenerationNoToMembers < ActiveRecord::Migration[7.0]
  def change
    add_column :members, :generation_no, :integer
  end
end
