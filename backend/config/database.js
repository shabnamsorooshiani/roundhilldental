// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      schema: env("DATABASE_SCHEMA"), // Not required
      ssl:
        process.env.DATABASE_SSL_SELF === "true"
          ? { rejectUnauthorized: true }
          : false,
    },
    debug: false,
    useNullAsDefault: true,
  },
});
