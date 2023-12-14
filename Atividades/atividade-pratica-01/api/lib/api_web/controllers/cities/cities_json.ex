defmodule ApiWeb.Cities.CitiesJSON do
  def all(%{cities: cities}) do
    %{data: cities}
  end

  def create(%{city: city}) do
    %{
      message: "Cidade salva com sucesso!",
      data: %{
        id: city.id,
        name: city.name,
        state_id: city.state_id,
        inserted_at: city.inserted_at,
        updated_at: city.updated_at
      }
    }
  end

  def delete(%{city: city}) do
    %{
      message: "Cidade com o ID #{city.id} excluída com sucesso!",
      data: %{
        id: city.id,
        name: city.name,
        state_id: city.state_id,
        inserted_at: city.inserted_at,
        updated_at: city.updated_at
      }
    }
  end

  def show(%{city: city}) do
    %{
      id: city.id,
      name: city.name,
      state_id: city.state_id,
      inserted_at: city.inserted_at,
      updated_at: city.updated_at
    }
  end

  def update(%{city: city}) do
    %{
      message: "Cidade atualizada com sucesso!",
      data: %{
        id: city.id,
        name: city.name,
        state_id: city.state_id,
        inserted_at: city.inserted_at,
        updated_at: city.updated_at
      }
    }
  end
end
