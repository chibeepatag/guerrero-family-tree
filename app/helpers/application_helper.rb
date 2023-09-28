module ApplicationHelper
  def nav_classes item
    if action_name == item
      ['nav-link active']
    else
      ['nav-link']
    end
  end
end
