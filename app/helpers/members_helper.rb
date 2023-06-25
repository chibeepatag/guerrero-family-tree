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
    member.death.nil? ? ' ' : member.death
  end

  def shape member
    member.in_law ? 'diamond' : 'circle'
  end

  def color member
    return "#e3d5ab" if member.in_law
    return "#795548" if member.branch.nil?
    {
    "Luis" => "#fbfdaa",
    "Rosa"=> "#ffc9de",
    "Fernando"=> "#c1f0b2",
    "Alfredo"=> "#b2e4f0",
    "Jose" => "#fdd97c",
    "Manuel"=> "#beabe3"}[member.branch]
  end
end
