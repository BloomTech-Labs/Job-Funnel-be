// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/jobs.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory:'./data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
			}
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory:'./data/seeds'
    },
  },
};
