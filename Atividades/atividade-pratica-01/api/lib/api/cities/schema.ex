defmodule Api.Cities.Schema do
  alias Api.Persons
  alias Api.CollectPlaces
  alias Api.States
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:name]

  schema "cities" do
    field :name, :string

    belongs_to :state, States.Schema
    has_many :persons, Persons.Schema, foreign_key: :city_id
    has_many :collect_places, CollectPlaces.Schema, foreign_key: :city_id

    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @required_params)
    |> do_validations(@required_params)
  end

  def changeset(city, params) do
    city
    |> cast(params, @required_params)
    |> do_validations(@required_params)
  end

  defp do_validations(changeset, fields) do
    changeset
    |> validate_required(fields)
    |> unique_constraint(:name)
  end
end
