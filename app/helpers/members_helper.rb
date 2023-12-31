module MembersHelper

  def yob member
    member.birth.nil? ? 'null' : member.birth
  end
  
  def yod member
    member.death.nil? ? 'null' : member.death
  end

  def shape member
    member.in_law ? 'diamond' : 'circle'
  end

  def mother_id member
    member.mother_id.nil? ? 'null' : member.mother_id
  end

  def father_id member
    member.father_id.nil? ? 'null' : member.father_id
  end

  def gender member
    member.in_law ? "male" : "female"
  end

  def nicknames member
    member.nicknames.blank? ? "": "(#{member.nicknames})"
  end

  def spouse2 member
    member.spouse2 ? ", #{member.spouse2.name}": ""
  end

  def truncated_name name
    return if name.nil?
    name.truncate(35, separator: "...")
  end

  def edit_link member
    link_to edit_member_path(member)  do
      content_tag("i", "", class: "bx bx-edit-alt me-1").concat('Edit')
    end
  end

  def partners member
    if member.spouse.nil?
      "[]"
    else
      "[#{member.spouse_id}, #{member.spouse2_id.nil? ? '' : member.spouse2_id}]"
    end
  end

  def branch_badge branch
    class_ = case branch
    when "Luis"
      "badge bg-label-luis"
    when "Alfredo"
      "badge bg-label-alfredo"
    when "Jose"
      "badge bg-label-jose"
    when "Fernando"
      "badge bg-label-fernando"
    when "Rosa"
      "badge bg-label-rosa"
    when "Manuel"
      "badge bg-label-manuel"
    when "Leon"
      "badge bg-label-leon"
    end
    class_.concat(" d-print-block")
    content_tag(:span, branch, class: class_)
  end

  def id_name member
    return if member.nil?
    "#{member.id}: #{member.name}"
  end
end
