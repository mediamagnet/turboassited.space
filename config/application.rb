require_relative "boot"
require_relative "../.apikey.rb"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
# TODO: Dark mode.
module TurboassistedSpaceRails
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.hosts << 'talesfrom.live'
    config.hosts << 'turboassisted.space'
    config.time_zone = 'Central Time (US & Canada)'
    config.server_timing = false
    config.action_view.preload_links_header = false
    config.assets.precompile += ['jquery.js']

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
