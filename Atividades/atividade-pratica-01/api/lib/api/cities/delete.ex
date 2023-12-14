defmodule Api.Cities.Delete do
  alias Api.Cities.Schema
  alias Api.Repo

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      person -> Repo.delete(person)
    end
  end
end
