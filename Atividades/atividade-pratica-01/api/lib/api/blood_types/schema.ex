defmodule Api.BloodTypes.Schema do
  alias Api.Persons
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:type, :factor]

  schema "blood_types" do
    field :type, :string
    field :factor, :string

    has_many :persons, Persons.Schema, foreign_key: :id

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
    |> validate_length(:type, max: 1)
    |> validate_length(:factor, max: 1)
  end
end
