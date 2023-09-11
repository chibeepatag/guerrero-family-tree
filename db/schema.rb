# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_03_090728) do
  create_table "members", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.integer "birth"
    t.integer "death"
    t.boolean "in_law"
    t.string "nicknames"
    t.bigint "spouse_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "branch", limit: 100
    t.bigint "mother_id"
    t.bigint "father_id"
    t.index ["father_id"], name: "index_members_on_father_id"
    t.index ["mother_id"], name: "index_members_on_mother_id"
    t.index ["spouse_id"], name: "index_members_on_spouse_id"
  end

  add_foreign_key "members", "members", column: "father_id"
  add_foreign_key "members", "members", column: "mother_id"
  add_foreign_key "members", "members", column: "spouse_id"
end
