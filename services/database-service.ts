import pg, { QueryConfig } from 'pg'

export const db = new pg.Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'postgres',
})

export const tryQuery = async (query: QueryConfig, opName: String) => {
    try {
        const result = await db.query(query)
        return result
    } catch (err) {
        console.error(err)
        return err
    }
}

export default {
    db,
    tryQuery,
}
