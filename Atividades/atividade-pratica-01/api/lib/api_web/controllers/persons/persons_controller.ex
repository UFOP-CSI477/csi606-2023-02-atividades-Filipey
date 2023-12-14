defmodule ApiWeb.Persons.PersonsController do
  use ApiWeb, :controller
  alias Api.Persons
  alias Persons.Schema

  action_fallback ApiWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Schema{} = person} <- Persons.create(params) do
      conn
      |> put_status(:created)
      |> render(:create, person: person)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, %Schema{} = person} <- Persons.delete(id) do
      conn
      |> put_status(:ok)
      |> render(:delete, person: person)
    end
  end

  def index(conn, _) do
    with {:ok, persons} <- Persons.all() do
      conn
      |> put_status(:ok)
      |> render(:all, persons: persons)
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, %Schema{} = person} <- Persons.get(id) do
      conn
      |> put_status(:ok)
      |> render(:show, person: person)
    end
  end

  def get_by_name(conn, %{"name" => name}) do
    with {:ok, persons} <- Persons.get_by_name(name) do
      conn
      |> put_status(:ok)
      |> render(:all, persons: persons)
    end
  end

  def update(conn, params) do
    with {:ok, %Schema{} = person} <- Persons.update(params) do
      conn
      |> put_status(:ok)
      |> render(:update, person: person)
    end
  end
end
