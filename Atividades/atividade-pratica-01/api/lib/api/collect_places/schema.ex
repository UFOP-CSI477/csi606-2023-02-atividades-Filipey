defmodule Api.CollectPlaces.Schema do
  alias Api.Donations
  alias Api.Cities
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:name, :street, :number, :complement, :city_id]

  schema "collect_places" do
    field :name, :string
    field :street, :string
    field :number, :integer
    field :complement, :string

    belongs_to :city, Cities.Schema, foreign_key: :city_id
    has_many :donations, Donations.Schema, foreign_key: :id

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
