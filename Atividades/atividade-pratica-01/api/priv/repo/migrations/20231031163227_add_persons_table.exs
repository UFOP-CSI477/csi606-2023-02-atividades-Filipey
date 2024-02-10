defmodule Api.Repo.Migrations.AddPersonsTable do
  use Ecto.Migration

  def change do
    create table("persons") do
      add :name, :string, null: false
      add :street, :string, null: false
      add :number, :integer, null: false
      add :complement, :string
      add :rg, :string, null: false

      add :city_id, references(:cities, on_delete: :nilify_all)
      add :blood_type_id, references(:blood_types, on_delete: :nilify_all)

      timestamps()
    end
  end
end
