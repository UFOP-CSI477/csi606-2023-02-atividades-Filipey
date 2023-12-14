defmodule Api.States.GetByName do
  alias Api.Repo
  alias Api.States.Schema

  def call(name) do
    case Repo.get_by(Schema, name: name) do
      nil -> {:error, :not_found}
      state -> {:ok, state}
    end
  end
end
