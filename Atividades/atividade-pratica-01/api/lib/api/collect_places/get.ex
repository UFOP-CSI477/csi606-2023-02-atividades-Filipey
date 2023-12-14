defmodule Api.CollectPlaces.Get do
  alias Api.Repo
  alias Api.CollectPlaces.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      place -> {:ok, place}
    end
  end
end
