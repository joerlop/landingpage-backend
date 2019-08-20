const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find
};

function find() {
  return db('emails');
}

function add(email) {
  return db('emails').insert(email);
}