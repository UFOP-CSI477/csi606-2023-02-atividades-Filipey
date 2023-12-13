defmodule ApiWeb.BloodTypes.BloodTypesController do
  use ApiWeb, :controller
  alias Api.BloodTypes
  alias BloodTypes.Schema

  action_fallback ApiWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Schema{} = blood_type} = BloodTypes.create(params) do
      conn
      |> put_status(:created)
      |> render(:create, blood_type: blood_type)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, %Schema{} = blood_type} <- BloodTypes.delete(id) do
      conn
      |> put_status(:ok)
      |> render(:delete, blood_type: blood_type)
    end
  end

  def index(conn, _) do
    with {:ok, blood_types} <- BloodTypes.all() do
      conn
      |> put_status(:ok)
      |> render(:all, data: blood_types)
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, %Schema{} = blood_type} <- BloodTypes.get(id) do
      conn
      |> put_status(:ok)
      |> render(:show, blood_type: blood_type)
    end
  end

  def update(conn, params) do
    with {:ok, %Schema{} = blood_type} <- BloodTypes.update(params) do
      conn
      |> put_status(:ok)
      |> render(:update, blood_type: blood_type)
    end
  end
end
