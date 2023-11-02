defmodule ApiWeb.StatesController do
  use ApiWeb, :controller
  alias Api.States.Create

  def create(conn, params) do
    params
    |> Create.call()
    |> handle_response(conn)
  end

  defp handle_response({:ok, state}, conn) do
    conn
    |> put_status(:created)
    |> render(:create, state: state)
  end

  # TODO: Handle error with fallback
  # defp handle_response({:error, _changeset} = error, conn) do
  #   conn
  #   |> put_status(:bad_request)
  #   |> render("error.json", error: error)
  # end
end
