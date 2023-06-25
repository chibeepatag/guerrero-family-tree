class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.string :name
      t.integer :birth
      t.integer :death
      t.boolean :in_law
      t.string :nicknames
      t.references :parent, foreign_key: { to_table: 'members' }
      t.references :spouse, foreign_key: { to_table: 'members' }
      t.timestamps
    end
  end
end
