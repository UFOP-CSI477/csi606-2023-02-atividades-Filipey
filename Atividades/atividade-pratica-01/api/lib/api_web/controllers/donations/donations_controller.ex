defmodule ApiWeb.Donations.DonationsController do
  use ApiWeb, :controller
  alias Api.Donations
  alias Donations.Schema

  action_fallback ApiWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Schema{} = donation} <- Donations.create(params) do
      conn
      |> put_status(:created)
      |> render(:create, donation: donation)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, %Schema{} = donation} <- Donations.delete(id) do
      conn
      |> put_status(:ok)
      |> render(:delete, donation: donation)
    end
  end

  def index(conn, _) do
    with {:ok, donations} <- Donations.all() do
      conn
      |> put_status(:ok)
      |> render(:all, donations: donations)
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, %Schema{} = donation} <- Donations.get(id) do
      conn
      |> put_status(:ok)
      |> render(:show, donation: donation)
    end
  end

  def update(conn, params) do
    with {:ok, %Schema{} = donation} <- Donations.update(params) do
      conn
      |> put_status(:ok)
      |> render(:update, donation: donation)
    end
  end
end
