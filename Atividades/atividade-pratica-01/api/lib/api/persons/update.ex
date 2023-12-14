defmodule Api.Persons.Update do
  alias Api.Repo
  alias Api.Persons.Schema

  def call(%{"id" => id} = params) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      person -> update(person, params)
    end
  end

  defp update(person, params) do
    person
    |> Schema.changeset(params)
    |> Repo.update()
  end
end
