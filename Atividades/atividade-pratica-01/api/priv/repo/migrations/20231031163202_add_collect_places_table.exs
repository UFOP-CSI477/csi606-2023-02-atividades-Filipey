defmodule Api.Repo.Migrations.AddCollectPlacesTable do
  use Ecto.Migration

  def change do
    create table("collect_places") do
      add :name, :string, null: false
      add :street, :string, null: false
      add :number, :integer, null: false
      add :complement, :string

      add :city_id, references(:cities)

      timestamps()
    end
  end
end
