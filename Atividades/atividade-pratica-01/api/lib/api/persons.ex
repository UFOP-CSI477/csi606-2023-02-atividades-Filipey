defmodule Api.Persons do
  alias Api.Persons.All
  alias Api.Persons.Create
  alias Api.Persons.Delete
  alias Api.Persons.Get
  alias Api.Persons.GetByName
  alias Api.Persons.Update

  defdelegate all(), to: All, as: :call
  defdelegate create(params), to: Create, as: :call
  defdelegate delete(id), to: Delete, as: :call
  defdelegate get(id), to: Get, as: :call
  defdelegate get_by_name(name), to: GetByName, as: :call
  defdelegate update(params), to: Update, as: :call
end
