# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :api,
  ecto_repos: [Api.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :api, ApiWeb.Endpoint,
  url: [host: System.get_env("DATABASE_HOST", "localhost")],
  adapter: Phoenix.Endpoint.Cowboy2Adapter,
  render_errors: [
    formats: [json: ApiWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Api.PubSub,
  live_view: [signing_salt: "A5YbKqza"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Configured table timestamps
config :api, Api.Repo,
  migration_timestamps: [
    type: :utc_datetime
  ]

config :api, Api.Repo, migration_primary_key: [name: :id, type: :bigserial]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
