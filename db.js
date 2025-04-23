const { Client } = require('pg');

const client = new Client({
  host: 'aws-0-us-east-1.pooler.supabase.com',
  port: 5432,
  user: 'postgres.ayegqbmllkrbmkbxhkwa',
  password: '1002527276', // <-- reemplaza esto con tu contraseña real
  database: 'postgres',
  ssl: { rejectUnauthorized: false }, 
});

client.connect()
  .then(() => console.log('✅ Conectado a PostgreSQL con pg'))
  .catch(err => console.error('❌ Error al conectar', err));

module.exports = client;
