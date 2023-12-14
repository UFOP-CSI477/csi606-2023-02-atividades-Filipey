defmodule Api.CollectPlaces do
  alias Api.CollectPlaces.Create
  alias Api.CollectPlaces.Get
  alias Api.CollectPlaces.Update
  alias Api.CollectPlaces.Delete
  alias Api.CollectPlaces.All
  alias Api.CollectPlaces.GetByName

  defdelegate create(params), to: Create, as: :call
  defdelegate get(id), to: Get, as: :call
  defdelegate update(params), to: Update, as: :call
  defdelegate delete(id), to: Delete, as: :call
  defdelegate all(), to: All, as: :call
  defdelegate get_by_name(name), to: GetByName, as: :call
end
