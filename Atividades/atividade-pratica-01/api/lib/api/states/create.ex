defmodule Api.States.Create do
  alias Api.States.Schema
  alias Api.Repo

  def call(params) do
    Schema.changeset(%Schema{}, params)
    |> Repo.insert()
  end
end
