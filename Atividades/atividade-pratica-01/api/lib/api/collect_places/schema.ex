defmodule Api.CollectPlaces.Schema do
  alias Api.Donations
  alias Api.Cities
  use Ecto.Schema

  schema "collect_places" do
    field :name, :string
    field :street, :string
    field :number, :integer
    field :complement, :string

    belongs_to :city, Cities.Schema, foreign_key: :city_id
    has_many :donations, Donations.Schema, foreign_key: :id

    timestamps()
  end
end
