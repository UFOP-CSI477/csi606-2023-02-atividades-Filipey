defmodule Api.Repo.Migrations.AddPersonsTable do
  use Ecto.Migration

  def change do
    create table("persons") do
      add :name, :string, null: false
      add :street, :string, null: false
      add :number, :integer, null: false
      add :complement, :string
      add :rg, :string, null: false

      add :city_id, references(:cities)
      add :type_id, references(:blood_types)

      timestamps()
    end
  end
end
