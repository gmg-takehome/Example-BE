module.exports = {
    development: {
      client: "mysql",
      useNullAsDefault: true,
      connection: {
        filename: "./data/users.db3"
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done);
        }
      },
      migrations: {
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
    },
  
    staging: {
      client: "mysql",
      connection: {
        database: "my_db",
        user: "username",
        password: "password"
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations"
      }
    },
  
    production: {
      client: "mysql",
      connection: {
        database: "my_db",
        user: "username",
        password: "password"
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations"
      }
    }
  };