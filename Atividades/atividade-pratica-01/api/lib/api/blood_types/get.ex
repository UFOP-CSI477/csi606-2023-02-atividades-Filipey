defmodule Api.BloodTypes.Get do
  alias Api.Repo
  alias Api.BloodTypes.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      blood_type -> {:ok, blood_type}
    end
  end
end
