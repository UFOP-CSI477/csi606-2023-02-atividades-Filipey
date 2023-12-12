defmodule Api.States.Schema do
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:name, :acronym]

  schema "states" do
    field :name, :string
    field :acronym, :string

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
    |> validate_length(:acronym, is: 2)
    |> unique_constraint(:name)
    |> unique_constraint(:acronym)
  end
end
