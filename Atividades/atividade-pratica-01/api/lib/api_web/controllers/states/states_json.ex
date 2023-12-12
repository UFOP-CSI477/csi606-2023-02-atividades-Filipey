defmodule ApiWeb.StatesJSON do
  def create(%{state: state}) do
    %{
      message: "Estado criado com sucesso!",
      data: %{
        id: state.id,
        name: state.name,
        acronym: state.acronym,
        inserted_at: state.inserted_at,
        updated_at: state.updated_at
      }
    }
  end

  def index(%{data: states}) do
    %{
      data: states
    }
  end

  def show(%{state: state}) do
    %{
      id: state.id,
      name: state.name,
      acronym: state.acronym,
      inserted_at: state.inserted_at,
      updated_at: state.updated_at
    }
  end
end
