defmodule Api.Donations.All do
  import Ecto.Query
  alias Api.Repo
  alias Api.Donations.Schema

  def call() do
    Repo.all(from(Schema))
    |> Enum.map(fn donation -> convert_schema_to_map(donation) end)
    |> format_result()
  end

  defp format_result(states) do
    {:ok}
    |> Tuple.append(states)
  end

  defp convert_schema_to_map(%Schema{} = struct) do
    %{
      id: struct.id,
      date: struct.date,
      person_id: struct.person_id,
      collect_place_id: struct.collect_place_id,
      inserted_at: struct.inserted_at,
      updated_at: struct.updated_at
    }
  end
end
