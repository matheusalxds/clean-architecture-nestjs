CREATE USER user_nestjs_db WITH PASSWORD 'abc123';
CREATE USER user_geo_migration WITH PASSWORD '321abc';
GRANT ALL PRIVILEGES ON DATABASE "nestjs-db" to user_nestjs_db;
GRANT ALL PRIVILEGES ON DATABASE "nestjs-db" to user_geo_migration;
