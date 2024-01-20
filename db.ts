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
        return {
            code: 200,
            success: true,
            message: `${opName} operation succeeded`,
        }
    } catch (err) {
        console.error(err)
        return {
            code: 500,
            success: false,
            message: `${opName} operation failed`,
        }
    }
}

export default {
    db,
    tryQuery,
}
