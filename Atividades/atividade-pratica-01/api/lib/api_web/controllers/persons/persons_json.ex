defmodule ApiWeb.Persons.PersonsJSON do
  def all(%{persons: persons}) do
    %{data: persons}
  end

  def create(%{person: person}) do
    %{
      message: "Pessoa criada com sucesso!",
      data: %{
        id: person.id,
        name: person.name,
        street: person.street,
        number: person.number,
        complement: person.complement,
        rg: person.rg,
        inserted_at: person.inserted_at,
        updated_at: person.updated_at
      }
    }
  end

  def delete(%{person: person}) do
    %{
      message: "Pessoa com o ID #{person.id} excluída com sucesso!",
      data: %{
        id: person.id,
        name: person.name,
        street: person.street,
        number: person.number,
        complement: person.complement,
        rg: person.rg,
        inserted_at: person.inserted_at,
        updated_at: person.updated_at
      }
    }
  end

  def show(%{person: person}) do
    %{
      id: person.id,
      name: person.name,
      street: person.street,
      number: person.number,
      complement: person.complement,
      rg: person.rg,
      inserted_at: person.inserted_at,
      updated_at: person.updated_at
    }
  end

  def update(%{person: person}) do
    %{
      message: "Pessoa atualizada com sucesso!",
      data: %{
        id: person.id,
        name: person.name,
        street: person.street,
        number: person.number,
        complement: person.complement,
        rg: person.rg,
        inserted_at: person.inserted_at,
        updated_at: person.updated_at
      }
    }
  end
end
