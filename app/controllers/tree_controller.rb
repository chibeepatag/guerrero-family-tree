class TreeController < ApplicationController
  layout "tree"
  
  def show
    if params[:parent_id].present?
      parent1 = Member.find params[:parent_id]
      parent2 = parent1.spouse
      @members = [parent1, parent2].concat(parent1.descendants).flatten
    else
      @members = Member.all
    end
  end

  def branch
    branch_name = params[:branch_name]
    @members = Member.where(branch: branch_name)
    puts "Leon".eql? branch_name
    if "Leon".eql? branch_name
      @members = @members.or(Member.where(is_head: true))
    end
    #@members = Member.where("id in (4, 5, 6, 7, 8, 9) or mother_id in (8, 9)")
  end
  
end
