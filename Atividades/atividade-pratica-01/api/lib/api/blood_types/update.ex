defmodule Api.BloodTypes.Update do
  alias Api.Repo
  alias Api.States.Schema

  def call(%{"id" => id} = params) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      blood_type -> update(blood_type, params)
    end
  end

  defp update(blood_type, params) do
    blood_type
    |> Schema.changeset(params)
    |> Repo.update()
  end
end
