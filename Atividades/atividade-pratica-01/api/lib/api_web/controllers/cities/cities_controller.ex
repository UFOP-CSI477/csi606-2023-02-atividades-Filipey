defmodule ApiWeb.Cities.CitiesController do
  use ApiWeb, :controller
  alias Api.Cities
  alias Cities.Schema

  action_fallback ApiWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Schema{} = city} <- Cities.create(params) do
      conn
      |> put_status(:created)
      |> render(:create, city: city)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, %Schema{} = city} <- Cities.delete(id) do
      conn
      |> put_status(:ok)
      |> render(:delete, city: city)
    end
  end

  def index(conn, _) do
    with {:ok, cities} <- Cities.all() do
      conn
      |> put_status(:ok)
      |> render(:all, cities: cities)
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, %Schema{} = city} <- Cities.get(id) do
      conn
      |> put_status(:ok)
      |> render(:show, city: city)
    end
  end

  def get_by_name(conn, %{"name" => name}) do
    with {:ok, cities} <- Cities.get_by_name(name) do
      conn
      |> put_status(:ok)
      |> render(:all, cities: cities)
    end
  end

  def update(conn, params) do
    with {:ok, %Schema{} = city} <- Cities.update(params) do
      conn
      |> put_status(:ok)
      |> render(:update, city: city)
    end
  end
end
