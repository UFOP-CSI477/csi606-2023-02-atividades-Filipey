defmodule Api.Repo.Migrations.AddStatesTable do
  use Ecto.Migration

  def change do
    create table("states") do
      add :name, :string, null: false
      add :acronym, :string, null: false

      timestamps()
    end
  end
end
