defmodule Api.Cities.Get do
  alias Api.Repo
  alias Api.Cities.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      city -> {:ok, city}
    end
  end
end
