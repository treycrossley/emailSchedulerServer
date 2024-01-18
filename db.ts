import { Pool, QueryArrayConfig } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'postgres'
});
  
export default pool;