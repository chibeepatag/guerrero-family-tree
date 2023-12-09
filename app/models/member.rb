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
    results.flatten.compact.uniq
  end

  def descendants_up_to generation_count
    tree = limited_tree(generation_count)
    results = []
    tree.breadth_each do |node|
      results << node.content
      results << node.content.spouses
    end
    results.flatten.compact.uniq
  end

  def children_of member
    member.children
  end

  def children
    Member.where(mother_id: id).or(Member.where(father_id: id)).order(:birth_order)
  end

  def siblings
    Member.where.not(id: id).and(Member.where(mother_id: mother.id).or(Member.where(father_id: father.id)))
  end

  def spouses
    Member.where(spouse_id: id)
  end

  def generation(head)
    return 1 if (self == head || self == head.spouse)
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

  def tree
    root_node = Tree::TreeNode.new(name, self)
    build = -> current_node do
      current_node.content.children.each do |child|
        child_node = Tree::TreeNode.new(child.name, child)
        current_node << child_node
        build.call(child_node)
      end
    end
    build.call(root_node)
    root_node
  end

  # generation count begins with the root
  def limited_tree generation_count
    generation_count -= 1
    root_node = Tree::TreeNode.new(name, self)
    build = ->(current_node, current_generation) do
      current_node.content.children.each do |child|
        child_node = Tree::TreeNode.new(child.name, child)
        current_node << child_node
        build.call(child_node, (current_generation-1)) if current_generation >= 2
      end
    end
    build.call(root_node, generation_count)
    root_node
  end

end
