defmodule Api.Repo.Migrations.AddCitiesTable do
  use Ecto.Migration

  def change do
    create table("cities") do
      add :name, :string, null: false

      add :state_id, references(:states, on_delete: :nilify_all)

      timestamps()
    end
  end
end
