defmodule Api.CollectPlaces.All do
  import Ecto.Query
  alias Api.Repo
  alias Api.CollectPlaces.Schema

  def call() do
    Repo.all(from(Schema))
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
