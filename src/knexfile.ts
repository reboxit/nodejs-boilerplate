export = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './example.db',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../db/migrations',
    },
    pool: {
      afterCreate(conn: any, cb: any) {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
