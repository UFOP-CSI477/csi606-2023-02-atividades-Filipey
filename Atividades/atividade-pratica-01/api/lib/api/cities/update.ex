defmodule Api.Cities.Update do
  alias Api.Repo
  alias Api.Cities.Schema

  def call(%{"id" => id} = params) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      city -> update(city, params)
    end
  end

  def update(city, params) do
    city
    |> Schema.changeset(params)
    |> Repo.update()
  end
end
