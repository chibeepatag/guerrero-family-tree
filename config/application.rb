require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module GuerreroFamilyTree
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.theme = {
      font: "league spartan",
      background: "#F1F1F1",
      font_color: "#222831",
      lines: "#595959",
      box_border: "#F1F1F1",
      red: "#FF5757",
      yellow: "#FFB604",
      green: "#0DC86F",
      blue: "#2772FF",
      orange: "#FF7729",
      lavender: "#AE9CD6"
    }
  end
end
