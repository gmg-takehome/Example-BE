exports.up = function(knex) {
    return knex.schema.createTable("users", users => {
      users.increments();
    //just imagine this matches the schema in the wiki
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };