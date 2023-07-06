import postgres from 'postgres'

const connectionString = 'postgresql://postgres:batataassada2@db.zbqtyvduhnfivtcjrnrp.supabase.co:5432/postgres'
const sql = postgres(connectionString)

export default sql