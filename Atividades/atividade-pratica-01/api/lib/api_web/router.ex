defmodule ApiWeb.Router do
  alias BloodTypes.BloodTypesController
  alias States.StatesController
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api
    resources "/states", StatesController, only: [:create, :update, :delete, :show, :index]

    resources "/blood_types", BloodTypesController,
      only: [:create, :update, :delete, :show, :index]

    get "/blood_types/persons/:id", BloodTypesController, :persons_with_blood_id
  end

  if Application.compile_env(:api, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
    end
  end
end
