defmodule Api.Persons.Create do
  alias Api.Persons.Schema
  alias Api.Repo

  def call(params) do
    Schema.changeset(%Schema{}, params)
    |> Repo.insert()
  end
end
