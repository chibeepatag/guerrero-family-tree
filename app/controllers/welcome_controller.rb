class WelcomeController < ApplicationController

  def index
    @title = "#{Rails.configuration.family_name} Family Tree"
  end
end
