defmodule Api.CollectPlaces.GetByName do
  import Ecto.Query
  alias Api.Repo
  alias Api.CollectPlaces.Schema

  def call(name) do
    query = from(s in Schema, select: s, where: like(s.name, ^"%#{name}%"))

    Repo.all(query)
    |> Enum.map(fn place -> convert_schema_to_map(place) end)
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
      city_id: struct.city_id,
      inserted_at: struct.inserted_at,
      updated_at: struct.updated_at
    }
  end
end
