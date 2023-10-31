defmodule Api.Repo.Migrations.AddBloodTypesTable do
  use Ecto.Migration

  def change do
    create table("blood_types") do
      add :type, :string, null: false
      add :factor, :string, null: false

      timestamps()
    end
  end
end
