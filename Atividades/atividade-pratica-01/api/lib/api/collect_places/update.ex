defmodule Api.CollectPlaces.Update do
  alias Api.Repo
  alias Api.CollectPlaces.Schema

  def call(%{"id" => id} = params) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      place -> update(place, params)
    end
  end

  def update(place, params) do
    place
    |> Schema.changeset(params)
    |> Repo.update()
  end
end
