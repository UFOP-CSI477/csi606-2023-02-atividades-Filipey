defmodule Api.Persons.All do
  import Ecto.Query
  alias Api.Repo
  alias Api.Persons.Schema

  def call() do
    Repo.all(from(Schema))
    |> Enum.map(fn person -> convert_schema_to_map(person) end)
    |> format_result()
  end

  defp format_result(states) do
    {:ok}
    |> Tuple.append(states)
  end

  defp convert_schema_to_map(%Schema{} = struct) do
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
