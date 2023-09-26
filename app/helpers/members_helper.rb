module MembersHelper
  def connection member
    member.parent || member.spouse
  end

  def to member
    connection(member).nil? ? 'null' : connection(member).id
  end

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
    member.nicknames ? "(#{member.nicknames})" : ""
  end

  def spouse2 member
    member.spouse2 ? ", #{member.spouse2.name}": ""
  end

  def truncated_name name
    return if name.nil?
    name.truncate(35, separator: "...")
  end
end
