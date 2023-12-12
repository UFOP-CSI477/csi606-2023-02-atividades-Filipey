defmodule Api.States.All do
  import Ecto.Query
  alias Api.States.Schema
  alias Api.Repo

  def call() do
    Repo.all(from(Schema))
    |> Enum.map(fn state -> convert_schema_to_map(state) end)
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
      acronym: struct.acronym,
      inserted_at: struct.inserted_at,
      updated_at: struct.updated_at
    }
  end
end
