defmodule Api.Donations do
  alias Api.Donations.Create
  alias Api.Donations.Get
  alias Api.Donations.Update
  alias Api.Donations.Delete
  alias Api.Donations.All

  defdelegate create(params), to: Create, as: :call
  defdelegate get(id), to: Get, as: :call
  defdelegate update(params), to: Update, as: :call
  defdelegate delete(id), to: Delete, as: :call
  defdelegate all(), to: All, as: :call
end
