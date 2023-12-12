defmodule Api.States.Update do
  alias Api.Repo
  alias Api.States.Schema

  def call(%{"id" => id} = params) do
    IO.inspect(params)

    case Repo.get(Schema, id) do
      nil -> {:error, :not_found}
      state -> update(state, params)
    end
  end

  defp update(state, params) do
    state
    |> Schema.changeset(params)
    |> Repo.update()
  end
end
