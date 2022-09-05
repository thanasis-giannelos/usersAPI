const db = require('./db');

const getUsers = async (req, res) => {
  try {
    let users = await db.query('SELECT * FROM user');
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};

const getUser = async (req, res) => {
  let { id } = req.params;
  try {
    let users = await db.query(`SELECT * FROM user WHERE id = ${id}`);
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};

const createUser = async (req, res) => {
  try {
    await db.query(`INSERT INTO user(id, name, date, email, address) VALUES (${req.body.id}, "${req.body.name}", "${req.body.date}", "${req.body.email}", "${req.body.address}");`);
    res.json("user added");
  } catch (err) {
    res.json(err);
  }
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let keyValuePairs = Object.entries(req.body);
  let str = "";
  for (let i=0; i<keyValuePairs.length-1; i++) {
    str += `${keyValuePairs[i][0]} = '${keyValuePairs[i][1]}', `;
  }
  str += `${keyValuePairs[keyValuePairs.length-1][0]} = '${keyValuePairs[keyValuePairs.length-1][1]}'`;

  try {
    await db.query(`UPDATE user SET ${str} WHERE id = ${id};`);
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  try {
    await db.query(`DELETE FROM user WHERE id = ${id};`);
    res.json(`user deleted`);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}