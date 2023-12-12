defmodule Api.States.Get do
  alias Api.Repo
  alias Api.States.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      state -> {:ok, state}
    end
  end
end
