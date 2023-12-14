defmodule ApiWeb.CollectPlaces.CollectPlacesController do
  use ApiWeb, :controller
  alias Api.CollectPlaces
  alias CollectPlaces.Schema

  action_fallback ApiWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Schema{} = place} <- CollectPlaces.create(params) do
      conn
      |> put_status(:created)
      |> render(:create, place: place)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, %Schema{} = place} <- CollectPlaces.delete(id) do
      conn
      |> put_status(:ok)
      |> render(:delete, place: place)
    end
  end

  def index(conn, _) do
    with {:ok, places} <- CollectPlaces.all() do
      conn
      |> put_status(:ok)
      |> render(:all, places: places)
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, %Schema{} = place} <- CollectPlaces.get(id) do
      conn
      |> put_status(:ok)
      |> render(:show, place: place)
    end
  end

  def get_by_name(conn, %{"name" => name}) do
    with {:ok, places} <- CollectPlaces.get_by_name(name) do
      conn
      |> put_status(:ok)
      |> render(:all, places: places)
    end
  end

  def update(conn, params) do
    with {:ok, %Schema{} = place} <- CollectPlaces.update(params) do
      conn
      |> put_status(:ok)
      |> render(:update, place: place)
    end
  end
end
