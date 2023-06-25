class AddBranchToMember < ActiveRecord::Migration[7.0]
  def change
    add_column :members, :branch, :string, limit: 100
  end
end
