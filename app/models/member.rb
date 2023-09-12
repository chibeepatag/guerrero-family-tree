class Member < ApplicationRecord
  belongs_to :spouse, class_name: "Member", optional: true
  belongs_to :parent, class_name: "Member", optional: true
  belongs_to :mother, class_name: "Member", optional: true
  belongs_to :father, class_name: "Member", optional: true

  def descendants
    results = []
    children = Member.where(mother_id: id).or(Member.where(father_id: id))
    children.each do |child|
      results << child
      results << child.spouse
      results << child.descendants
    end
    results.flatten.compact
  end
end
