class Member < ApplicationRecord
  belongs_to :spouse, class_name: "Member", optional: true
  belongs_to :spouse2, class_name: "Member", optional: true
  belongs_to :parent, class_name: "Member", optional: true
  belongs_to :mother, class_name: "Member", optional: true
  belongs_to :father, class_name: "Member", optional: true

  def descendants
    results = []
    children = Member.where(mother_id: id).or(Member.where(father_id: id)).order(:birth_order)
    children.each do |child|
      results << child
      results << child.spouse
      results << child.descendants
    end
    results.flatten.compact
  end

  def generation(head)
    return 1 if self == head
    i = 2
    current = in_law ? self.spouse : self
    parent_is_head = -> do
      current.mother == head || current.father == head
    end

    while !parent_is_head.call && (current != head)
      i+=1
      current = current.mother.in_law ? current.father : current.mother
    end
    i
  end

  def to_s
    name
  end
end
