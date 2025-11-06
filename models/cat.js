const promisePool = require("../utils/database");

const findAllCats = async () => {
  const [rows] = await promisePool.query("SELECT * FROM wsk_cats");

  return rows;
};

const findCatById = async (id) => {
  // TODO: sql injection possibility
  // https://xkcd.com/327/ bobby tables
  // https://owasp.org/www-community/attacks/SQL_Injection
  const [rows] = await promisePool.query(
    "SELECT * FROM wsk_cats WHERE cat_id = " + id
  );

  return rows;
};

module.exports = { findAllCats, findCatById };
