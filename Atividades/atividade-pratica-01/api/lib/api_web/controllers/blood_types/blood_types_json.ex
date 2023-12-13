defmodule ApiWeb.BloodTypes.BloodTypesJSON do
  def all(%{data: blood_types}) do
    %{
      data: blood_types
    }
  end

  def create(%{blood_type: blood_type}) do
    %{
      message: "Tipo sanguíneo criado com sucesso!",
      data: %{
        id: blood_type.id,
        type: blood_type.type,
        factor: blood_type.factor,
        inserted_at: blood_type.inserted_at,
        updated_at: blood_type.updated_at
      }
    }
  end

  def delete(%{blood_type: blood_type}) do
    %{
      message: "Tipo sanguíneo com o ID #{blood_type.id} excluído com sucesso!",
      data: %{
        id: blood_type.id,
        type: blood_type.type,
        factor: blood_type.factor,
        inserted_at: blood_type.inserted_at,
        updated_at: blood_type.updated_at
      }
    }
  end

  def show(%{blood_type: blood_type}) do
    %{
      id: blood_type.id,
      type: blood_type.type,
      factor: blood_type.factor,
      inserted_at: blood_type.inserted_at,
      updated_at: blood_type.updated_at
    }
  end

  def update(%{blood_type: blood_type}) do
    %{
      message: "Tipo sanguíneo atualizado com sucesso!",
      data: %{
        id: blood_type.id,
        type: blood_type.type,
        factor: blood_type.factor,
        inserted_at: blood_type.inserted_at,
        updated_at: blood_type.updated_at
      }
    }
  end
end
