exports.up = function(knex) {
    return knex.schema.createTable("posts", posts => {
      posts.increments();
  //just imagine this matches the spec
      posts
        .text("text");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("posts");
  };