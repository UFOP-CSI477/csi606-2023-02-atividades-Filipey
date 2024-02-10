defmodule ApiWeb.Router do
  alias Donations.DonationsController
  alias CollectPlaces.CollectPlacesController
  alias Cities.CitiesController
  alias BloodTypes.BloodTypesController
  alias States.StatesController
  alias Persons.PersonsController
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug, origin: ["*"]
  end

  scope "/api", ApiWeb do
    pipe_through :api
    resources "/states", StatesController, only: [:create, :update, :delete, :show, :index]
    get "/states/by_name/:name", StatesController, :get_by_name
    options "/states", StatesController, :options

    resources "/blood_types", BloodTypesController,
      only: [:create, :update, :delete, :show, :index]

    options "/blood_types", BloodTypesController, :options
    options "/blood_types/:id", BloodTypesController, :options

    get "/blood_types/persons/:id", BloodTypesController, :persons_with_blood_id
    options "/blood_types/persons/:id", BloodTypesController, :options

    resources "/persons", PersonsController, only: [:create, :update, :delete, :show, :index]
    get "/persons/by_name/:name", PersonsController, :get_by_name
    options "/persons", PersonsController, :options
    options "/persons/:id", PersonsController, :options

    resources "/cities", CitiesController, only: [:create, :update, :delete, :show, :index]
    get "/cities/by_name/:name", CitiesController, :get_by_name
    options "/cities", CitiesController, :options
    options "/cities/:id", CitiesController, :options

    resources "/collect_places", CollectPlacesController,
      only: [:create, :update, :delete, :show, :index]

    options "/collect_places", CollectPlacesController, :options
    options "/collect_places/:id", CollectPlacesController, :options

    get "/collect_places/by_name/:name", CollectPlacesController, :get_by_name
    options "/collect_places/by_name/:name", CollectPlacesController, :options

    resources "/donations", DonationsController, only: [:create, :update, :delete, :show, :index]
    options "/donations", DonationsController, :options
    options "/donations/:id", CollectPlacesController, :options
  end

  if Application.compile_env(:api, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
    end
  end
end
