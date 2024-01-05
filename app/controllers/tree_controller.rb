class TreeController < ApplicationController
  
  def show
    if params[:parent_id].present? && params[:gen].present?
      parent1 = Member.find params[:parent_id]
      parent2 = parent1.spouse
      @members = [parent1, parent2]
      @members = @members.concat(parent1.descendants_up_to(params[:gen].to_i)).flatten
    elsif params[:parent_id].present?
      parent1 = Member.find params[:parent_id]
      parent2 = parent1.spouse
      @members = [parent1, parent2]
      @members = @members.concat(parent1.descendants).flatten
    else
      @members = Member.all
    end
  end

  def branch
    redirect_to(action: :show) if params[:branch_name].eql?('Full')
    branch_name = params[:branch_name]
    @members = Member.where(branch: branch_name)#.order(:birth_order)
    if "Leon".eql? branch_name
      @members = @members.or(Member.where(is_head: true))#.order(:birth_order)
    end
  end
  
  def custom
  end
end
