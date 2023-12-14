defmodule ApiWeb.CollectPlaces.CollectPlacesJSON do
  def all(%{places: places}) do
    %{data: places}
  end

  def create(%{place: place}) do
    %{
      message: "Local de coleta salvo com sucesso!",
      data: %{
        id: place.id,
        name: place.name,
        street: place.street,
        number: place.number,
        complement: place.complement,
        city_id: place.city_id,
        inserted_at: place.inserted_at,
        updated_at: place.updated_at
      }
    }
  end

  def delete(%{place: place}) do
    %{
      message: "Local com o ID #{place.id} excluído com sucesso!",
      data: %{
        id: place.id,
        name: place.name,
        street: place.street,
        number: place.number,
        complement: place.complement,
        city_id: place.city_id,
        inserted_at: place.inserted_at,
        updated_at: place.updated_at
      }
    }
  end

  def show(%{place: place}) do
    %{
      id: place.id,
      name: place.name,
      street: place.street,
      number: place.number,
      complement: place.complement,
      city_id: place.city_id,
      inserted_at: place.inserted_at,
      updated_at: place.updated_at
    }
  end

  def update(%{place: place}) do
    %{
      message: "Local de coleta atualizado com sucesso!",
      data: %{
        id: place.id,
        name: place.name,
        street: place.street,
        number: place.number,
        complement: place.complement,
        city_id: place.city_id,
        inserted_at: place.inserted_at,
        updated_at: place.updated_at
      }
    }
  end
end
