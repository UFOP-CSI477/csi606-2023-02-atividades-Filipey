defmodule Api.CollectPlaces.Create do
  alias Api.CollectPlaces.Schema
  alias Api.Repo

  def call(params) do
    Schema.changeset(%Schema{}, params)
    |> Repo.insert()
  end
end
