defmodule Api.Donations.Schema do
  alias Api.CollectPlaces
  alias Api.Persons
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:date, :person_id, :collect_place_id]

  schema "donations" do
    field :date, :date
    belongs_to :person, Persons.Schema
    belongs_to :collect_place, CollectPlaces.Schema
    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @required_params)
    |> do_validations(@required_params)
  end

  def changeset(state, params) do
    state
    |> cast(params, @required_params)
    |> do_validations(@required_params)
  end

  defp do_validations(changeset, fields) do
    changeset
    |> validate_required(fields)
  end
end
