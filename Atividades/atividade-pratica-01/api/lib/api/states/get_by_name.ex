defmodule Api.States.GetByName do
  import Ecto.Query
  alias Api.Repo
  alias Api.States.Schema

  def call(name) do
    query =
      from(s in Schema,
        select: s,
        where: like(s.name, ^"%#{name}%")
      )

    Repo.all(query)
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
