defmodule Api.BloodTypes.Persons do
  import Ecto.Query
  alias Api.Persons.Schema
  alias Api.Repo

  def call(id) do
    query = from(p in Schema, where: p.blood_type_id == ^id, select: p)

    Repo.all(query)
    |> Enum.map(fn person -> convert_schema_to_map(person) end)
    |> format_result()
  end

  def format_result(persons) do
    {:ok}
    |> Tuple.append(persons)
  end

  def convert_schema_to_map(%Schema{} = struct) do
    %{
      id: struct.id,
      name: struct.name,
      street: struct.street,
      number: struct.number,
      complement: struct.complement,
      rg: struct.rg,
      inserted_at: struct.inserted_at,
      updated_at: struct.updated_at
    }
  end
end
