const db = require("../data/dbConfig.js");

module.exports = {
  add,
  edit,
  find,
  findBy,
  findById
};

function find() {
  return db("posts").select("id");
}

function findBy(filter) {
  // make sure to include the role information
  return db("posts").where(filter);
}

async function add(post) {
  const [id] = await db("posts").insert(post);

  return findById(id);
}

async function edit(post) {
    const [id] = await db("posts").insert(post);
  
    return findById(id);
  }

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}