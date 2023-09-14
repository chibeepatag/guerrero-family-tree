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

  def color member
    return "red" if member.branch.nil?
    {
    "Luis" => "yellow",
    "Rosa"=> "red",
    "Fernando"=> "green",
    "Alfredo"=> "blue",
    "Jose" => "orange",
    "Manuel"=> "lavender"}[member.branch]
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
end
