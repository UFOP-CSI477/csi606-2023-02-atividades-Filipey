defmodule Api.BloodTypes.Create do
  alias Api.BloodTypes.Schema
  alias Api.Repo

  def call(params) do
    Schema.changeset(%Schema{}, params)
    |> Repo.insert()
  end
end
