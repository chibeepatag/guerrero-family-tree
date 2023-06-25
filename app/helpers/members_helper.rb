module MembersHelper
  def connection member
    member.parent || member.spouse
  end

  def to member
    connection(member).nil? ? 'null' : connection(member).id
  end

  def yod member
    member.death.nil? ? ' ' : member.death
  end

  def shape member
    member.in_law ? 'diamond' : 'circle'
  end

  def color member
    member.in_law ? "#ffa000" : "#005EFF"
  end
end
