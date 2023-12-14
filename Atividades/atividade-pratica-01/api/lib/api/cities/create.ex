defmodule Api.Cities.Create do
  alias Api.Cities.Schema
  alias Api.Repo

  def call(params) do
    Schema.changeset(%Schema{}, params)
    |> Repo.insert()
  end
end
