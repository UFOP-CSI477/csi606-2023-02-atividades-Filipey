defmodule Api.States.Schema do
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:name, :acronym]

  schema "states" do
    field :name, :string
    field :acronym, :string

    timestamps()
  end

  def changeset(state \\ %__MODULE__{}, params) do
    state
    |> cast(params, @required_params)
    |> validate_required(@required_params)
    |> validate_length(:acronym, is: 2)
    |> unique_constraint(:name)
    |> unique_constraint(:acronym)
  end
end
