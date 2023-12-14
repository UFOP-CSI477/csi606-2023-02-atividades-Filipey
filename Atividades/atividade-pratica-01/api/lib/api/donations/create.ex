defmodule Api.Donations.Create do
  alias Api.Donations.Schema
  alias Api.Repo

  def call(params) do
    Schema.changeset(%Schema{}, params)
    |> Repo.insert()
  end
end
