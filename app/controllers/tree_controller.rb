class TreeController < ApplicationController

  def show
    if params[:parent_id].present?
      parent1 = Member.find params[:parent_id]
      parent2 = parent1.spouse
      @members = [parent1, parent2].concat(parent1.descendants).flatten
    else
      @members = Member.all
    end

    @nodes = @members
  end
  
end
