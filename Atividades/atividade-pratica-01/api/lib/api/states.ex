defmodule Api.States do
  alias Api.States.Create
  alias Api.States.Get
  alias Api.States.Update

  defdelegate create(params), to: Create, as: :call
  defdelegate get(id), to: Get, as: :call
  defdelegate update(params), to: Update, as: :call
end
