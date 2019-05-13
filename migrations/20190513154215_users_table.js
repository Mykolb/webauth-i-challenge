
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      //create auto incrementing id
      tbl.increments();

      //create fields 
      tbl
      .string('username', 128)
      .notNullable() //makes inout required
      .unique(); //name can't be repeated 

      tbl
      .string('password', 128)
      .notNullable() //makes input required 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
