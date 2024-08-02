//these models probably don't have all the features outlined in the wiki
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
    //generalize for all sorts of post queries
  return db("posts").where(filter);
}

async function add(post) {
  const [id] = await db("posts").insert(post);

  return findById(id);
}

async function edit(post) {
    //edit logic- update where id = post.id;
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}