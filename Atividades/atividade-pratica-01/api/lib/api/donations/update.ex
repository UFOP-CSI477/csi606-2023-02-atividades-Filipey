defmodule Api.Donations.Update do
  alias Api.Repo
  alias Api.Donations.Schema

  def call(%{"id" => id} = params) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      donation -> update(donation, params)
    end
  end

  defp update(donation, params) do
    donation
    |> Schema.changeset(params)
    |> Repo.update()
  end
end
