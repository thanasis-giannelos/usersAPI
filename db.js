const mysql = require('mysql2/promise');

async function query(query) {
  try {
    const connection = await mysql.createConnection({
      host:'localhost',
      user: 'sakis',
      password: 'sak1sDatabase',
      database: 'users'
    });
    console.log('connected to db')
    const [rows] = await connection.query(query);
    return rows;  
  } catch (error) {
    throw error;
  }
}

module.exports = { query };