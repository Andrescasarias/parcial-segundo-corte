const { Pool } = require('pg');

const pool = new Pool({
  host: 'aws-0-us-east-1.pooler.supabase.com',
  port: 5432,
  user: 'postgres.ayegqbmllkrbmkbxhkwa',
  password: '1002527276', // cámbiala si la modificaste en Supabase
  database: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false, // Para evitar problemas con el certificado
  },
});

pool.connect()
  .then(() => console.log(' Conectado correctamente a Supabase'))
  .catch(err => console.error('Error al conectar a Supabase:', err));

module.exports = pool;
