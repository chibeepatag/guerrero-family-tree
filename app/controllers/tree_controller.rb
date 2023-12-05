class TreeController < ApplicationController
  
  def show
    if params[:parent_id].present?
      parent1 = Member.find params[:parent_id]
      parent2 = parent1.spouse
      @members = [parent1, parent2].concat(parent1.descendants).flatten
    else
      @members = Member.all.order(:birth_order)
    end
  end

  def branch
    branch_name = params[:branch_name]
    @members = Member.where(branch: branch_name)#.order(:birth_order)
    if "Leon".eql? branch_name
      @members = @members.or(Member.where(is_head: true))#.order(:birth_order)
    end
  end
  
  def query
  end
end
