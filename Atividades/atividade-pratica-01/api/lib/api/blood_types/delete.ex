defmodule Api.BloodTypes.Delete do
  alias Api.Repo
  alias Api.States.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      blood_type -> Repo.delete(blood_type)
    end
  end
end
