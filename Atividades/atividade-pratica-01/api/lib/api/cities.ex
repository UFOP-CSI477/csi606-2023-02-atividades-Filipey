defmodule Api.Cities do
  alias Api.Cities.Create
  alias Api.Cities.Get
  alias Api.Cities.Update
  alias Api.Cities.Delete
  alias Api.Cities.All
  alias Api.Cities.GetByName

  defdelegate create(params), to: Create, as: :call
  defdelegate get(id), to: Get, as: :call
  defdelegate update(params), to: Update, as: :call
  defdelegate delete(id), to: Delete, as: :call
  defdelegate all(), to: All, as: :call
  defdelegate get_by_name(name), to: GetByName, as: :call
end
