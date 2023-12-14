defmodule Api.Donations.Get do
  alias Api.Repo
  alias Api.Donations.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      donation -> {:ok, donation}
    end
  end
end
