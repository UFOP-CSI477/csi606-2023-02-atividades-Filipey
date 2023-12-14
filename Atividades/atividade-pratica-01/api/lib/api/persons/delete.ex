defmodule Api.Persons.Delete do
  alias Api.Persons.Schema
  alias Api.Repo

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      person -> Repo.delete(person)
    end
  end
end
