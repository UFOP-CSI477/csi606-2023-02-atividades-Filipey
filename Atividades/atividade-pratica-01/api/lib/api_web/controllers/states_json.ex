defmodule ApiWeb.StatesJSON do
  def create(%{state: state}) do
    %{
      message: "Estado criado com sucesso!",
      id: state.id,
      name: state.name,
      acronym: state.acronym,
      inserted_at: state.inserted_at,
      updated_at: state.updated_at
    }
  end
end
