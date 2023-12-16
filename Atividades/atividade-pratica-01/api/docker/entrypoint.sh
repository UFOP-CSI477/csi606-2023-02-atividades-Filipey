#!/bin/bash
# Docker entrypoint script.

# Wait until Postgres is ready
echo "Testing if Postgres is accepting connections. {$DATABASE_HOST} {$DATABASE_PORT} {$DATABASE_PASSWORD}"
while ! pg_isready -q -h $DATABASE_HOST -p $DATABASE_PORT -U $DATABASE_USER
do
  echo "$(date) - waiting for database to start"
  sleep 2
done

# Create, migrate, and seed database if it doesn't exist.
if [[ -z `psql -Atqc "\\list $DATABASE_NAME"` ]]; then
  echo "Database $DATABASE_NAME does not exist. Creating..."
  mix ecto.reset
  echo "Database $DATABASE_NAME created."
fi

exec mix phx.server