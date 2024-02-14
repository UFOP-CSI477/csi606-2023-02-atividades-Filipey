defmodule ApiWeb.Donations.DonationsJSON do
  def all(%{donations: donations}) do
    %{data: donations}
  end

  def create(%{donation: donation}) do
    %{
      message: "Doação salva com sucesso!",
      data: %{
        id: donation.id,
        date: donation.date,
        collect_place_id: donation.collect_place_id,
        inserted_at: donation.inserted_at,
        updated_at: donation.updated_at
      }
    }
  end

  def delete(%{donation: donation}) do
    %{
      message: "Doação com o ID #{donation.id} excluído com sucesso!",
      data: %{
        id: donation.id,
        date: donation.date,
        collect_place_id: donation.collect_place_id,
        inserted_at: donation.inserted_at,
        updated_at: donation.updated_at
      }
    }
  end

  def show(%{donation: donation}) do
    %{
      id: donation.id,
      date: donation.date,
      city_id: donation.city_id,
      collect_place_id: donation.collect_place_id,
      inserted_at: donation.inserted_at,
      updated_at: donation.updated_at
    }
  end

  def update(%{donation: donation}) do
    %{
      message: "Doação atualizada com sucesso!",
      data: %{
        id: donation.id,
        date: donation.date,
        collect_place_id: donation.collect_place_id,
        inserted_at: donation.inserted_at,
        updated_at: donation.updated_at
      }
    }
  end
end
