const knex = require("../db/connection");

function list() {
  return knex("tables")
  .select("*")
  .orderBy("tables.table_name");
}
//standard list and create functions as well as read for knex manipulating the information from the back-end databases
function create(table) {
  return knex("tables")
    .insert(table)
    .returning("*")
    .then((newTables) => newTables[0]);
}

function read(table_id) {
  return knex("tables")
  .select("*")
  .where({ table_id })
  .first();
}

module.exports = { list, create, read };