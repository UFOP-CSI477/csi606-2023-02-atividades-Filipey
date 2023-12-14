defmodule Api.Persons.Get do
  alias Api.Repo
  alias Api.Persons.Schema

  def call(id) do
    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      person -> {:ok, person}
    end
  end
end
