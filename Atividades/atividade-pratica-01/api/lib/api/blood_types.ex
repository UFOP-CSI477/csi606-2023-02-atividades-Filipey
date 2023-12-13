defmodule Api.BloodTypes do
  alias Api.BloodTypes.Create
  alias Api.BloodTypes.Get
  alias Api.BloodTypes.Update
  alias Api.BloodTypes.Delete
  alias Api.BloodTypes.All
  alias Api.BloodTypes.Persons

  defdelegate create(params), to: Create, as: :call
  defdelegate get(id), to: Get, as: :call
  defdelegate update(params), to: Update, as: :call
  defdelegate delete(id), to: Delete, as: :call
  defdelegate all(), to: All, as: :call
  defdelegate find_persons_with_blood_type(id), to: Persons, as: :call
end
