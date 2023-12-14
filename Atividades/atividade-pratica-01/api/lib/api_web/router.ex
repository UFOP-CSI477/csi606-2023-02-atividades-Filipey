defmodule ApiWeb.Router do
  alias BloodTypes.BloodTypesController
  alias States.StatesController
  alias Persons.PersonsController
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api
    resources "/states", StatesController, only: [:create, :update, :delete, :show, :index]
    get "/states/by_name/:name", StatesController, :get_by_name

    resources "/blood_types", BloodTypesController,
      only: [:create, :update, :delete, :show, :index]

    get "/blood_types/persons/:id", BloodTypesController, :persons_with_blood_id

    resources "/persons", PersonsController, only: [:create, :update, :delete, :show, :index]
    get "/persons/by_name/:name", PersonsController, :get_by_name
  end

  if Application.compile_env(:api, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
    end
  end
end
