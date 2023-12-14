defmodule Api.CollectPlaces.Delete do
  alias Api.CollectPlaces.Schema
  alias Api.Repo

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      place -> Repo.delete(place)
    end
  end
end
