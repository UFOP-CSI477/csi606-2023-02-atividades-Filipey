defmodule Api.Repo.Migrations.AddDonationsTable do
  use Ecto.Migration

  def change do
    create table("donations") do
      add :date, :date, null: false

      add :person_id, references(:persons, on_delete: :nilify_all)
      add :collect_place_id, references(:collect_places, on_delete: :nilify_all)

      timestamps()
    end
  end
end
