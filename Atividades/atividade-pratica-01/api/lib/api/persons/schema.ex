defmodule Api.Persons.Schema do
  alias Api.BloodTypes
  alias Api.Donations
  alias Api.Cities
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:name, :street, :number, :complement, :rg, :city_id, :blood_type_id]
  @update_params [:name, :street, :complement, :number]

  schema "persons" do
    field :name, :string
    field :street, :string
    field :number, :integer
    field :complement, :string
    field :rg, :string

    has_many :donations, Donations.Schema, foreign_key: :id
    belongs_to :city, Cities.Schema, foreign_key: :city_id
    belongs_to :blood_type, BloodTypes.Schema, foreign_key: :blood_type_id

    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @required_params)
    |> do_validations(@update_params)
  end

  def changeset(state, params) do
    state
    |> cast(params, @required_params)
    |> do_validations(@required_params)
  end

  defp do_validations(changeset, fields) do
    changeset
    |> validate_required(fields)
    |> unique_constraint(:rg)
  end
end
