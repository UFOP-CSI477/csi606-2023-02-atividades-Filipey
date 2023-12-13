defmodule Api.BloodTypes.All do
  import Ecto.Query
  alias Api.BloodTypes.Schema
  alias Api.Repo

  def call() do
    Repo.all(from(Schema))
    |> Enum.map(fn blood_type -> convert_schema_to_map(blood_type) end)
    |> format_result()
  end

  def format_result(blood_types) do
    {:ok}
    |> Tuple.append(blood_types)
  end

  def convert_schema_to_map(%Schema{} = struct) do
    %{
      id: struct.id,
      type: struct.type,
      factor: struct.factor,
      inserted_at: struct.inserted_at,
      updated_at: struct.updated_at
    }
  end
end
