defmodule Api.Donations.Delete do
  alias Api.Donations.Schema
  alias Api.Repo

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      donation -> Repo.delete(donation)
    end
  end
end
