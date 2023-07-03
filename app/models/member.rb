class Member < ApplicationRecord
  belongs_to :spouse, class_name: "Member", optional: true
  belongs_to :parent, class_name: "Member", optional: true
  belongs_to :mother, class_name: "Member", optional: true
  belongs_to :father, class_name: "Member", optional: true
end
