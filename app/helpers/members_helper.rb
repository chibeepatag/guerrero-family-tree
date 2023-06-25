module MembersHelper
  def connection member
    member.parent || member.spouse
  end

  def to member
    connection(member).nil? ? 'null' : connection(member).id
  end

end
