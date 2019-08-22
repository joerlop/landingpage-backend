const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findByEmail
};

function find() {
  return db('emails');
}

function add(email) {
  return db('emails').insert(email);
}

function findByEmail(email) {
  return db('emails').where(email).first();
}
