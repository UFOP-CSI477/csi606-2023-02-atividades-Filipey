defmodule Api.Repo.Migrations.AddDonationsTable do
  use Ecto.Migration

  def change do
    create table("donations") do
      add :date, :date, null: false

      add :person_id, references(:persons)
      add :collect_place_id, references(:collect_places)

      timestamps()
    end
  end
end
