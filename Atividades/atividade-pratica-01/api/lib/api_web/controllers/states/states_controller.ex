defmodule ApiWeb.States.StatesController do
  use ApiWeb, :controller
  alias Api.States
  alias States.Schema

  action_fallback ApiWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Schema{} = state} <- States.create(params) do
      conn
      |> put_status(:created)
      |> render(:create, state: state)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, %Schema{} = state} <- States.delete(id) do
      conn
      |> put_status(:ok)
      |> render(:delete, state: state)
    end
  end

  def index(conn, _) do
    with {:ok, states} <- States.all() do
      conn
      |> put_status(:ok)
      |> render(:all, states: states)
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, %Schema{} = state} <- States.get(id) do
      conn
      |> put_status(:ok)
      |> render(:show, state: state)
    end
  end

  def get_by_name(conn, %{"name" => name}) do
    with {:ok, %Schema{} = state} <- States.get_by_name(name) do
      conn
      |> put_status(:ok)
      |> render(:show, state: state)
    end
  end

  def update(conn, params) do
    with {:ok, %Schema{} = state} <- States.update(params) do
      conn
      |> put_status(:ok)
      |> render(:update, state: state)
    end
  end
end
