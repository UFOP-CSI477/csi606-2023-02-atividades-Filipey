defmodule Api.States do
  alias Api.States.Create
  alias Api.States.Get

  defdelegate create(params), to: Create, as: :call
  defdelegate get(id), to: Get, as: :call
end
